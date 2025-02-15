"use server"

import { z } from "zod"
import prisma from "@/_lib/prisma"
import { createSession, getSession } from "@/[lang]/(auth)/_lib/sessions"
import { redirect } from "next/navigation"
import { SuccessFormState } from "@/_lib/definitions/definitions"
import { ErrorFormState } from "@/_lib/definitions/definitions"
import { GenderOfCustomers, Service } from "./definitions"
import { BusinessLocationErrors } from "../onboarding/business-location/business-location-form"
import { BusinessLocationFormData } from "../onboarding/business-location/business-location-form"
import { BusinessCapacityFormData } from "../onboarding/business-capacity/business-capacity-form"
import { BusinessCapacityFieldErrors } from "../onboarding/business-capacity/business-capacity-form"
import { setApiSuccessMsg } from "@/_lib/utils/api/setApiSuccessMsg"
import { handleCreatingNewbusiness, removeTempBusinessFormSumbissions } from "./data"



const businessNameSchema = z.object({
    nameEn: z.string().trim().min(3, { message: "required_error" }),
    nameAr: z.string().trim().min(3, { message: "required_error" }),
    descriptionEn: z.string().trim().min(3, { message: "required_error" }),
    descriptionAr: z.string().trim().min(3, { message: "required_error" }),
    websiteUrl: z.string().regex(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/, { message: "invalid_url_error" }).url({ message: "invalid_url_error" }),
    genderOfCustomers: z.enum(["male", "female", "both"], { message: "required_error" })
})

const businessCategorySchema = z.object({
    categoryId: z.string().trim().min(1, { message: "required_error" }),
})


export type BusinessNameFormData = z.infer<typeof businessNameSchema>
export type BusinessCategoryFormData = z.infer<typeof businessCategorySchema>

export type BusinessNameFieldErrors = {
    nameEn?: string | string[]
    nameAr?: string | string[]
    descriptionEn?: string | string[]
    descriptionAr?: string | string[]
    websiteUrl?: string | string[]
    genderOfCustomers?: string | string[]
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
        genderOfCustomers: formData.get("genderOfCustomers") as GenderOfCustomers || "",
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
                gender_of_customers: validatedFields.data.genderOfCustomers,
            },
            create: {
                userId: Number(userId),
                name_en: validatedFields.data.nameEn,
                name_ar: validatedFields.data.nameAr,
                description_en: validatedFields.data.descriptionEn,
                description_ar: validatedFields.data.descriptionAr,
                website_url: validatedFields.data.websiteUrl,
                gender_of_customers: validatedFields.data.genderOfCustomers,
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

        console.log("formData.get('categoryId')", formData.get("categoryId"))

        const validatedFields = businessCategorySchema.safeParse({ categoryId: formData.get("categoryId") ?? "" })

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

        }, {
            timeout: 10000, // Increase timeout to 10 seconds (10000 ms)
        });


    } catch (error) {
        console.error('Error submitting business services:', error);
        throw new Error("Error submitting business services")
    }

    redirect("/professional/onboarding/business-location")

}

const businessLocationSchema = z.object({
    online_business: z.boolean(),
}).and(
    z.discriminatedUnion('online_business', [
        // When online_business is true, don't allow any other fields
        z.object({
            online_business: z.literal(true)
        }),
        // When online_business is false, require location fields
        z.object({
            online_business: z.literal(false),
            lat: z.number(),
            lng: z.number(),
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
    ])
);

export const handleSubmitBusinessLocation = async (formData: BusinessLocationFormData): Promise<ErrorFormState<BusinessLocationErrors | null, BusinessLocationFormData> | void> => {

    const session = await getSession()
    const userId = session ? session.id : null
    if (!userId) redirect("/login?sessionEnded=true")

    let payload: BusinessLocationFormData;

    if (formData.online_business) {

        payload = {
            online_business: formData.online_business,
        }
    } else {
        payload = {
            online_business: formData.online_business,
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
    }

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

        if (payload.online_business) {

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
                                lat: 0,
                                lng: 0,
                                place_id: "",
                                address: "",
                                district: "",
                                city: "",
                                country: "",
                                directions: "",
                                street: "",
                                apartment: "",
                                building: "",
                                online_business: true
                            },
                            create: {
                                lat: 0,
                                lng: 0,
                                place_id: "",
                                address: "",
                                district: "",
                                city: "",
                                country: "",
                                directions: "",
                                street: "",
                                apartment: "",
                                building: "",
                                online_business: true
                            }
                        }
                    }
                }
            })

        } else {
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
                                online_business: false
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
                                online_business: false
                            }
                        }
                    }
                }
            })

        }

    } catch (error) {
        console.error('Error submitting business location:', error);
        throw new Error("Error submitting business location")
    }

    redirect("/professional/onboarding/business-capacity")


}

const businessCapacitySchema = z.object({
    capacity: z.number().gte(1, { message: "Please enter a valid capacity" }).lte(10, { message: "Please enter a valid capacity" })
})

// TODO: Write types
export const handleSubmitBusinessCapacity = async (formState: ErrorFormState<BusinessCapacityFieldErrors | null, BusinessCapacityFormData>, formData: FormData): Promise<ErrorFormState<BusinessCapacityFieldErrors | null, BusinessCapacityFormData> | void> => {

    const session = await getSession()
    const userId = session ? session.id : null
    if (!userId || !session) redirect("/login?sessionEnded=true")

    const validatedFields = businessCapacitySchema.safeParse({ capacity: Number(formData.get("capacity")) || 0 } as BusinessCapacityFormData)


    if (!validatedFields.success) {
        return {
            success: false,
            clientFieldsErrors: validatedFields.error.flatten().fieldErrors,
            apiDataResponse: null,
            apiMsgs: "",
            formData: { capacity: Number(formData.get("capacity")) || 0 }
        }
    }

    try {

        const business = await prisma.business.findUnique({
            where: {
                userId: userId
            },
            select: {
                id: true
            }
        })

        if (!business) throw new Error("Business not found")

        await prisma.business.update({
            where: {
                userId: userId
            },
            data: {
                capacity: validatedFields.data.capacity
            }
        })

        const response = await handleCreatingNewbusiness()

        if (response.success) {

            const successMsg = setApiSuccessMsg({ successResponse: response })

            // TODO: write types
            await createSession({
                ...session,
                has_business: true
            })

            // await updateProfessionalHasBusinessServerSide(session as SessionData)

            await removeTempBusinessFormSumbissions(business.id)

            // TODO: write types
            return {
                success: response.success,
                clientFieldsErrors: null,
                apiDataResponse: session,
                apiMsgs: successMsg,
                formData: { capacity: Number(formData.get("capacity")) || 0 }
            }
        } else {
            return {
                success: false,
                clientFieldsErrors: null,
                apiDataResponse: null,
                apiMsgs: response.apiMsgs,
                formData: { capacity: Number(formData.get("capacity")) || 0 }
            }
            // throw new Error("Error submitting business capacity")

        }



    } catch (error) {
        console.error('Error submitting business capacity:', error);

        // Move this outside of the catch block
        // if (error instanceof ApiError) {
        //     redirectToLoginIfNotAuthenticated(errorMsg)
        // }

        return {
            success: false,
            clientFieldsErrors: null,
            apiDataResponse: null,
            apiMsgs: 'Error submitting business capacity',
            formData: { capacity: Number(formData.get("capacity")) || 0 }
        }

    }

}  