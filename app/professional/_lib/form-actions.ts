"use server"

import { categories } from "@/ui/components/custom/category"
import { z } from "zod"
import prisma from "@/lib/prisma"
import { getSession } from "@/(auth)/_lib/sessions"
import { redirect } from "next/navigation"
import { SuccessFormState } from "@/lib/definitions/definitions"
import { ErrorFormState } from "@/lib/definitions/definitions"

const businessNameSchema = z.object({
    nameEn: z.string().trim().min(3, { message: "Business name (En) is required" }),
    nameAr: z.string().trim().min(3, { message: "Business name (Ar) is required" }),
    descriptionEn: z.string().trim().min(3, { message: "Description (En) is required" }),
    descriptionAr: z.string().trim().min(3, { message: "Description (Ar) is required" }),
    websiteUrl: z.string().trim().min(3, { message: "Website URL is required" }),
})

const businessCategorySchema = z.object({
    category_id: z.string().trim().min(1, { message: "Please select a category" }),
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

export const handleSubmitBusinessName = async (formState: BusinessNameFormState, formData: FormData) => {

    const payload = {
        nameEn: formData.get("nameEn"),
        nameAr: formData.get("nameAr"),
        descriptionEn: formData.get("descriptionEn"),
        descriptionAr: formData.get("descriptionAr"),
        websiteUrl: formData.get("websiteUrl"),
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

        const session = await getSession()
        const userId = session ? session.id : null
        if (!userId) redirect("/login?sessionExpired=true")

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
        return {
            success: false,
            clientFieldsErrors: null,
            apiDataResponse: null,
            apiMsgs: "Error fetching form data",
            formData: formData
        }
    }


    redirect("/professional/onboarding/business-category")
}


export const handleSubmitBusinessCategory = async (formState: any, formData: FormData) => {

    const session = await getSession()
    const userId = session ? session.id : null
    if (!userId) redirect("/login?sessionEnded=true")

    try {

        const validatedFields = businessCategorySchema.safeParse({ category_id: formData.get("category_id") })

        if (!validatedFields.success) {
            return {
                success: false,
                clientFieldsErrors: validatedFields.error.flatten().fieldErrors,
                apiDataResponse: null,
                apiMsgs: "",
                formData: formData
            }
        }

        await prisma.business.upsert({
            where: {
                userId,
            },
            update: {
                category_id: Number(validatedFields.data.category_id)
            },
            create: {
                userId,
                category_id: Number(validatedFields.data.category_id)
            }
        })


    } catch (error) {
        console.error('Error submitting business category:', error);
        return {
            success: false,
            clientFieldsErrors: null,
            apiDataResponse: null,
            apiMsgs: "Error fetching form data",
            formData: formData
        }
    }

    redirect("/professional/onboarding/business-services")
}

// const businessServicesSchema = z.object({
//     serviceId: z.number(),
//     servicePrice: z.number().gte(1, { message: "Please provide a valid price" }),
//     serviceDuration: z.number().gte(1, { message: "Please provide a valid duration" })
// }).array()


// TODO: Write types
export const handleSubmitBusinessServices = async (formData: any) => {

    console.log("formData", formData)

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

    try {

        const formattedFormData = formData?.map((selectedService: any) => {
            return {
                service_id: Number(selectedService.serviceId),
                service_price: Number(selectedService.servicePrice),
                service_duration: Number(selectedService.serviceDuration),
            }
        })

        console.log("formattedFormData", formattedFormData)

        const session = await getSession()
        const userId = session ? session.id : null
        if (!userId) redirect("/login?sessionEnded=true")

        const business = await prisma.business.findUnique({
            where: {
                userId: Number(userId)
            },
            select: {
                id: true
            }
        })

        console.log("business", business)

        if (!business) throw new Error("Business not found")

        // TODO: write types
        // TODO: write comments
        await prisma.$transaction(async (tx) => {



            // Use Promise.all with map instead of forEach
            await Promise.all(formattedFormData.map(async (service) => {

                // First, delete all services that are not in the new formattedFormData
                await tx.businessService.deleteMany({
                    where: {
                        businessId: business.id,
                        service_id: {
                            notIn: formattedFormData.map(service => service.service_id)
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
                                        service_id: service.service_id
                                    }
                                },
                                update: {
                                    duration: service.service_duration,
                                    price: service.service_price
                                },
                                create: {
                                    service_id: service.service_id,
                                    duration: service.service_duration,
                                    price: service.service_price
                                }
                            }
                        }
                    },
                    create: {
                        id: business.id,
                        userId: userId,
                        services: {
                            create: {
                                service_id: service.service_id,
                                duration: service.service_duration,
                                price: service.service_price
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

    redirect("/professional/onboarding/business-capacity")

}