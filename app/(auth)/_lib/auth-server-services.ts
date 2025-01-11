"use server"

import { ApiResponse } from "@/lib/definitions/api";
import { ApiResponseSessionData, SessionData } from "./definitions";
import { fetchApi } from "@/lib/utils/api/fetch-utils";
import { LoginFormSchema } from "./definitions";
import { createSession, deleteSession } from '@/(auth)/_lib/sessions';
import { setApiSuccessMsg } from '@/lib/utils/api/setApiSuccessMsg';
import { setApiErrorMsg } from '@/lib/utils/api/setApiErrorMsg';
import { redirectToOtpIfNotVerified } from "@/(auth)/_lib/redirect-otp-if-not-verified";
import { toastApiMsgs } from "@/lib/utils/api/toastApiMsgs";
import { SuccessLoginFormState, ErrorLoginFormState } from "./definitions";
import { redirect } from 'next/navigation'
import { logoutUserClientSide } from "./auth-client-services";
import { ApiError } from "@/lib/definitions/api";



export const authenticateUser = async (formData: FormData): Promise<ApiResponse<ApiResponseSessionData>> => {

    try {
        const response = await fetchApi<ApiResponse<ApiResponseSessionData>>('/auth/user/login', {
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

export const endUserSession = async (router: any, setSessionData: (sessionData: SessionData | null) => void, pathname: string) => {
    try {
        await logoutUserServerSide();
        logoutUserClientSide(router, setSessionData, pathname)
        navigateToLoginWithSessionEnded()
    } catch (error) {
        toastApiMsgs('Error ending session', "destructive");
    }
};



export async function navigateToLoginWithSessionEnded() {
    redirect("/login?sessionEnded=true")
}

export async function navigateToOtp(email: string) {
    redirect("/otp-verification?email=" + email)
}

