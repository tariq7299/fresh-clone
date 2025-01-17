"use server"

import { categories } from "@/ui/components/custom/category"
import { z } from "zod"
import prisma from "@/lib/prisma"
import { getSession } from "@/(auth)/_lib/sessions"
import { redirect } from "next/navigation"
import { SuccessFormState } from "@/lib/definitions/definitions"
import { ErrorFormState } from "@/lib/definitions/definitions"
import { Service } from "./definitions"

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
        throw new Error("Error submitting business name")
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


export const handleSubmitBusinessCategory = async (formState: ErrorFormState<{ categoryId?: string } | null, BusinessCategoryFormData>, formData: FormData) => {

    const session = await getSession()
    const userId = session ? session.id : null
    if (!userId) redirect("/login?sessionEnded=true")

    try {

        const validatedFields = businessCategorySchema.safeParse({ categoryId: formData.get("categoryId") })

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

// const businessServicesSchema = z.object({
//     serviceId: z.number(),
//     servicePrice: z.number().gte(1, { message: "Please provide a valid price" }),
//     serviceDuration: z.number().gte(1, { message: "Please provide a valid duration" })
// }).array()


// TODO: Write types
export const handleSubmitBusinessServices = async (formData: Service[]): Promise<ErrorFormState<{ service?: string } | null, Service[]>> => {

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

    redirect("/professional/onboarding/business-capacity")

}