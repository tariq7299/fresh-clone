"use server"

import { SessionData } from "./definitions";
import { fetchApi } from "@/lib/utils/api/fetch-utils";
import { LoginResponse } from "./definitions";
import { LoginFormSchema } from "./definitions";
import { createSession, deleteSession } from '@/(auth)/_lib/sessions';
import { setApiSuccessMsg } from '@/lib/utils/api/setApiSuccessMsg';
import { setApiErrorMsg } from '@/lib/utils/api/setApiErrorMsg';
import { redirectToOtpIfNotVerified } from "@/lib/utils/api/redirect-otp-if-not-verified";
import { toastApiMsgs } from "@/lib/utils/api/toastApiMsgs";
import { SuccessLoginFormState, ErrorLoginFormState } from "./definitions";
import { redirect } from 'next/navigation'
import { logoutUserClientSide } from "./auth-client-services";
import { ApiError } from "@/lib/definitions/api";
import { NetworkError } from "@/lib/definitions/api";
export const authenticateUser = async (formData: FormData): Promise<LoginResponse> => {

    try {
        const response = await fetchApi<LoginResponse>('/auth/stakeholder/login', {
            method: 'POST',
            body: {
                email: formData.get('email'),
                password: formData.get('password')
            },
            auth: false,
        });
        return response
    } catch (error) {

        if (error instanceof ApiError) {
            return error
        } else {
            console.error("Error", error)
            return {
                success: false,
                status: 500,
                message: "Network error",
                code: 500,
                data: null,
                errors: []
            }
        }

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
    } catch (error) {
        toastApiMsgs('Error ending session', "destructive");
    }
};



export async function navigateToLoginWithSessionEnded() {
    redirect("/login?sessionEnded=true")
}

export async function navigateToOtp() {
    redirect("/login?notVerified=true")
}


// export { authService };
