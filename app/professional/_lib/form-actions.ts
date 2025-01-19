"use server"

import { categories } from "@/ui/components/custom/category"
import { z } from "zod"
import prisma from "@/lib/prisma"
import { getSession } from "@/(auth)/_lib/sessions"
import { redirect } from "next/navigation"
import { SuccessFormState } from "@/lib/definitions/definitions"
import { ErrorFormState } from "@/lib/definitions/definitions"
import { Service } from "./definitions"
import { BusinessLocationErrors } from "../_components/business-location-form"
import { BusinessLocationFormData } from "../_components/business-location-form"

const businessNameSchema = z.object({
    nameEn: z.string().trim().min(3, { message: "Business name (En) is required" }),
    nameAr: z.string().trim().min(3, { message: "Business name (Ar) is required" }),
    descriptionEn: z.string().trim().min(3, { message: "Description (En) is required" }),
    descriptionAr: z.string().trim().min(3, { message: "Description (Ar) is required" }),
    websiteUrl: z.string().trim().min(3, { message: "Website URL is required" }),
})

const businessCategorySchema = z.object({
    categoryId: z.string().trim().min(1, { message: "Please select a category" }),
})

// 
export type BusinessNameFormData = z.infer<typeof businessNameSchema>
export type BusinessCategoryFormData = z.infer<typeof businessCategorySchema>

export type BusinessNameFieldErrors = {
    nameEn?: string | string[]
    nameAr?: string | string[]
    descriptionEn?: string | string[]
    descriptionAr?: string | string[]
    websiteUrl?: string | string[]
}

export type BusinessNameFormState = SuccessFormState<BusinessNameFormData, BusinessNameFormData> | ErrorFormState<BusinessNameFieldErrors |
    null, BusinessNameFormData>

export const handleSubmitBusinessName = async (formState: BusinessNameFormState, formData: FormData): Promise<ErrorFormState<BusinessNameFieldErrors |
    null, BusinessNameFormData>> => {

    const payload = {
        nameEn: formData.get("nameEn") as string || "",
        nameAr: formData.get("nameAr") as string || "",
        descriptionEn: formData.get("descriptionEn") as string || "",
        descriptionAr: formData.get("descriptionAr") as string || "",
        websiteUrl: formData.get("websiteUrl") as string || "",
    }

    const session = await getSession()
    const userId = session ? session.id : null
    if (!userId) {
        redirect("/login?sessionExpired=true")
    }

    try {

        const validatedFields = businessNameSchema.safeParse(payload)

        if (!validatedFields.success) {
            return {
                success: false,
                clientFieldsErrors: validatedFields.error.flatten().fieldErrors,
                apiDataResponse: null,
                apiMsgs: "",
                formData: payload
            }
        }


        await prisma.business.upsert({
            where: {
                userId: Number(userId)
            },
            update: {
                name_en: validatedFields.data.nameEn,
                name_ar: validatedFields.data.nameAr,
                description_en: validatedFields.data.descriptionEn,
                description_ar: validatedFields.data.descriptionAr,
                website_url: validatedFields.data.websiteUrl,
            },
            create: {
                userId: Number(userId),
                name_en: validatedFields.data.nameEn,
                name_ar: validatedFields.data.nameAr,
                description_en: validatedFields.data.descriptionEn,
                description_ar: validatedFields.data.descriptionAr,
                website_url: validatedFields.data.websiteUrl,
            }
        })


    } catch (error) {
        console.error('Error submitting business name:', error);
        throw new Error("Error submitting business name")
        // TODO: Make the client side accept the error and toast it
        // return {
        //     success: false,
        //     clientFieldsErrors: null,
        //     apiDataResponse: null,
        //     apiMsgs: "Error fetching form data",
        //     formData: payload
        // }
    }


    redirect("/professional/onboarding/business-category")
}


export const handleSubmitBusinessCategory = async (formState: ErrorFormState<{ categoryId?: string | string[] } | null, BusinessCategoryFormData>, formData: FormData): Promise<ErrorFormState<{ categoryId?: string[] | string } | null, BusinessCategoryFormData>> => {

    const session = await getSession()
    const userId = session ? session.id : null
    if (!userId) {
        redirect("/login?sessionEnded=true")
    }

    try {

        const validatedFields = businessCategorySchema.safeParse({ categoryId: formData.get("categoryId") })

        if (!validatedFields.success) {
            return {
                success: false,
                clientFieldsErrors: validatedFields.error.flatten().fieldErrors,
                apiDataResponse: null,
                apiMsgs: "",
                formData: {
                    categoryId: formData.get("categoryId") as string || ""
                }
            }
        }

        await prisma.business.upsert({
            where: {
                userId,
            },
            update: {
                category_id: Number(validatedFields.data.categoryId)
            },
            create: {
                userId,
                category_id: Number(validatedFields.data.categoryId)
            }
        })


    } catch (error) {
        console.error('Error submitting business category:', error);
        throw new Error("Error submitting business category")
        // return {
        //     success: false,
        //     clientFieldsErrors: null,
        //     apiDataResponse: null,
        //     apiMsgs: "Error fetching form data",
        //     formData: formData
        // }
    }

    redirect("/professional/onboarding/business-services")
}

export const handleSubmitBusinessServices = async (formData: Service[]): Promise<ErrorFormState<{ service?: string } | null, Service[]>> => {

    // Validating form data 
    // Here it dones't require a schema, because the data has already been validated in the edit service dialog/modal  
    // and here i just want to check if there is at least one service !
    if (formData.length === 0) {
        return {
            success: false,
            clientFieldsErrors: {
                service: "You must add at least one service"
            },
            apiDataResponse: null,
            apiMsgs: "",
            formData: formData
        }
    }

    const session = await getSession()
    const userId = session ? session.id : null
    if (!userId) {
        redirect("/login?sessionEnded=true")
    }

    try {


        const business = await prisma.business.findUnique({
            where: {
                userId: Number(userId)
            },
            select: {
                id: true
            }
        })

        if (!business) throw new Error("Business not found")

        await prisma.$transaction(async (tx: any) => {

            // Use Promise.all with map instead of forEach
            await Promise.all(formData.map(async (service: Service) => {

                // First, delete all services that are not in the new formData
                await tx.businessService.deleteMany({
                    where: {
                        businessId: business.id,
                        service_id: {
                            notIn: formData.map((item: Service) => item.serviceId)
                        }
                    }
                });

                return tx.business.upsert({
                    where: {
                        id: business.id
                    },
                    update: {
                        services: {
                            upsert: {
                                where: {
                                    businessId_service_id: {  // Use composite unique constraint
                                        businessId: business.id,
                                        service_id: service.serviceId
                                    }
                                },
                                update: {
                                    duration: service.serviceDuration,
                                    price: service.servicePrice
                                },
                                create: {
                                    service_id: service.serviceId,
                                    duration: service.serviceDuration,
                                    price: service.servicePrice
                                }
                            }
                        }
                    },
                    // This part is not neccessary as if id (business.id) doesn't exist it, will throw an error from the begning
                    // So this part will never be touched
                    create: {
                        id: business.id,
                        userId: userId,
                        services: {
                            create: {
                                service_id: service.serviceId,
                                duration: service.serviceDuration,
                                price: service.servicePrice
                            }
                        }
                    }
                });
            }));

        });

    } catch (error) {
        console.error('Error submitting business services:', error);
        throw new Error("Error submitting business services")
    }

    redirect("/professional/onboarding/business-location")

}

// TODO: Remove this schema, and use the one in the form (but it shows an error if i import it!!!!! very wierdd)
const businessLocationSchema = z.object({
    lat: z.number().gt(0, { message: "Please provide a location" }),
    lng: z.number().gt(0, { message: "Please provide a location" }),
    place_id: z.string().trim().min(1, { message: "Please provide a location" }),
    address: z.string().trim().min(1, { message: "Please provide a location" }),
    district: z.string().optional(),
    city: z.string().optional(),
    country: z.string().trim().min(1, { message: "Please provide a location" }),
    directions: z.string().optional(),
    street: z.string().optional(),
    apartment: z.string().optional(),
    building: z.string().optional(),

})


export const handleSubmitBusinessLocation = async (formData: BusinessLocationFormData): Promise<ErrorFormState<BusinessLocationErrors | null, BusinessLocationFormData> | void> => {

    const session = await getSession()
    const userId = session ? session.id : null
    if (!userId) redirect("/login?sessionEnded=true")

    const payload = {
        lat: formData.lat,
        lng: formData.lng,
        place_id: formData.place_id,
        address: formData.address,
        district: formData.district,
        city: formData.city,
        country: formData.country,
        directions: formData.directions,
        street: formData.street,
        apartment: formData.apartment,
        building: formData.building,
    }

    console.log("payload", payload)

    const validatedFields = businessLocationSchema.safeParse(payload)

    if (!validatedFields.success) {
        return {
            success: false,
            clientFieldsErrors: validatedFields.error.flatten().fieldErrors,
            apiDataResponse: null,
            apiMsgs: "",
            formData: payload
        }
    }

    try {

        const business = await prisma.business.findUnique({
            where: {
                userId: Number(userId)
            },
            select: {
                id: true
            }
        })

        if (!business) throw new Error("Business not found")

        console.log("business", business)

        // TODO: Use validatedData instead of payload
        await prisma.business.update({
            where: {
                userId: userId,
            },
            data: {
                location: {
                    upsert: {
                        where: {
                            businessId: business.id
                        },
                        update: {
                            lat: payload.lat,
                            lng: payload.lng,
                            place_id: payload.place_id,
                            address: payload.address,
                            district: payload.district,
                            city: payload.city,
                            country: payload.country,
                            directions: payload.directions,
                            street: payload.street,
                            apartment: payload.apartment,
                            building: payload.building,
                        },
                        create: {
                            lat: payload.lat,
                            lng: payload.lng,
                            place_id: payload.place_id,
                            address: payload.address,
                            district: payload.district,
                            city: payload.city,
                            country: payload.country,
                            directions: payload.directions,
                            street: payload.street,
                            apartment: payload.apartment,
                            building: payload.building,
                        }
                    }
                }
            }
        })

    } catch (error) {
        console.error('Error submitting business location:', error);
        throw new Error("Error submitting business location")
    }

    redirect("/professional/onboarding/business-capacity")


}