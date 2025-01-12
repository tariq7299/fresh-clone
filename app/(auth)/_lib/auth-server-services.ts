"use server"

import { ApiResponse } from "@/lib/definitions/api";
import { ApiResponseSessionData, SessionData } from "./definitions";
import { fetchApi } from "@/lib/utils/api/fetch-utils";
import { createSession, deleteSession } from '@/(auth)/_lib/sessions';
import { redirectToOtpIfNotVerified } from "@/(auth)/_lib/redirect-otp-if-not-verified";
import { toastApiMsgs } from "@/lib/utils/api/toastApiMsgs";
import { redirect } from 'next/navigation'
import { logoutUserClientSide } from "./auth-client-services";
import { ApiError } from "@/lib/definitions/api";

export const authenticateUser = async (formData: FormData): Promise<ApiResponse<ApiResponseSessionData>> => {
    try {
        const response = await fetchApi<ApiResponse<ApiResponseSessionData>>('/login', {
            method: 'POST',
            body: {
                email: formData.get('email'),
                password: formData.get('password')
            },
            auth: false,
        });
        return response
    } catch (error) {
        return error as ApiError
    }
}

export const loginUserServerSide = async (sessionData: SessionData): Promise<void> => {
    await createSession(sessionData)
}

export const logoutUserServerSide = async (): Promise<void> => {
    await deleteSession()
}

export async function navigateToLoginWithSessionEnded() {
    redirect("/login?sessionEnded=true")
}

export async function navigateToOtp(email: string) {
    redirect("/otp-verification?email=" + email)
}
