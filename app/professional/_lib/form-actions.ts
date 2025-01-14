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

export type BusinessNameFormData = z.infer<typeof businessNameSchema>

export type BusinessNameFieldErrors = {
    nameEn?: string | string[]
    nameAr?: string | string[]
    descriptionEn?: string | string[]
    descriptionAr?: string | string[]
    websiteUrl?: string | string[]
}

export type BusinessNameFormState = SuccessFormState<BusinessNameFormData, BusinessNameFormData> | ErrorFormState<BusinessNameFieldErrors |
    null, BusinessNameFormData>



export const handleSubmit = async (formState: any, formData: FormData) => {
    console.log("formState", formState)
    console.log("formData", formData)
    return formState
}

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
        if (!userId) throw new Error("Error getting user id!")

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

        // return {
        //     success: true,
        //     clientFieldsErrors: null,
        //     apiDataResponse: null,
        //     apiMsgs: "",
        //     formData: formData
        // }


    } catch (error) {
        console.error('Database Error:', error);
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
