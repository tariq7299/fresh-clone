"use server"

import { getSession } from "@/[lang]/(auth)/_lib/sessions"
import { prisma } from "@/_lib/prisma"
import { SuccessFormState, ErrorFormState } from "@/_lib/definitions/definitions"
import { redirect } from "next/navigation"
import { z } from "zod"
import { redirectToLoginIfNotAuthenticated } from "@/[lang]/(auth)/_lib/redirect-to-login-if-not-authenticated";
import { fetchApi } from "@/_lib/utils/api/fetch-utils"
import { SecurityInfoFormState, securityInfoSchema, personalInfoSchema, PersonalInfoFormState } from "./definitions"


export const handleUpdateProfessionalPersonalInfo = async (formState: PersonalInfoFormState, formData: FormData): Promise<PersonalInfoFormState> => {

    const payload = {
        first_name: formData.get("first_name") as string || "",
        last_name: formData.get("last_name") as string || "",
        phone_number: formData.get("phone_number") as string || "",
        email: formData.get("email") as string || "",
    }

    const session = await getSession()
    const userId = session ? session.id : null
    if (!userId) {
        redirectToLoginIfNotAuthenticated("Session expired", ["sessionEnded=true"])
    }


    const validatedFields = personalInfoSchema.safeParse(payload)

    if (!validatedFields.success) {
        return {
            success: false,
            clientFieldsErrors: validatedFields.error.flatten().fieldErrors,
            apiDataResponse: null,
            apiMsgs: "",
            formData: payload
        }
    }

    // TODO: Write types
    const response = await fetchApi("/auth/update-profile", {
        method: "POST",
        body: payload
    })

    if (response.success) {
        return {
            success: true,
            clientFieldsErrors: null,
            apiDataResponse: response.data,
            apiMsgs: response.apiMsgs,
            formData: payload
        }
    }

    redirectToLoginIfNotAuthenticated(response.apiMsgs, ["sessionEnded=true"])

    return {
        success: false,
        clientFieldsErrors: null,
        apiDataResponse: null,
        apiMsgs: response.apiMsgs,
        formData: payload
    }
}

export const handleUpdateProfessionalSecurityInfo = async (formState: SecurityInfoFormState, formData: FormData): Promise<SecurityInfoFormState> => {

    const payload = {
        password: formData.get("password") as string || "",
        password_confirmation: formData.get("password_confirmation") as string || "",
    }

    const session = await getSession()
    const userId = session ? session.id : null
    if (!userId) {
        redirectToLoginIfNotAuthenticated("Session expired", ["sessionEnded=true"])
    }


    const validatedFields = securityInfoSchema.safeParse(payload)

    if (!validatedFields.success) {
        return {
            success: false,
            clientFieldsErrors: validatedFields.error.flatten().fieldErrors,
            apiDataResponse: null,
            apiMsgs: "",
            formData: payload
        }
    }

    // TODO: Write types
    const response = await fetchApi("/auth/change-password", {
        method: "POST",
        body: payload
    })

    if (response.success) {
        return {
            success: true,
            clientFieldsErrors: null,
            apiDataResponse: response.data,
            apiMsgs: response.apiMsgs,
            formData: payload
        }
    }

    redirectToLoginIfNotAuthenticated(response.apiMsgs, ["sessionEnded=true"])

    return {
        success: false,
        clientFieldsErrors: null,
        apiDataResponse: null,
        apiMsgs: response.apiMsgs,
        formData: payload
    }
}