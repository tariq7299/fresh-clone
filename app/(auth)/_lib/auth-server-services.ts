"use server"

import { SessionData } from "./definitions";
import { ApiError, fetchApi } from "@/lib/utils/api/fetch-utils";
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

// This is the server side login function
// It will be used to login the user and return the form state
// It will be used in the login form component
export const loginUserServerSide = async (formState: SuccessLoginFormState | ErrorLoginFormState, formData: FormData): Promise<SuccessLoginFormState | ErrorLoginFormState> => {
    'use server';

    // Validate form fields
    const validatedFields = LoginFormSchema.safeParse({
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    })

    // If any form fields are invalid, return early
    if (!validatedFields.success) {
        return {
            success: false,
            clientFieldsErrors: validatedFields.error.flatten().fieldErrors,
            apiDataResponse: null,
            apiMsgs: "",
            formData: {
                email: formData.get('email') as string,
                password: formData.get('password') as string,
            }
        }
    }

    let sessionData: SessionData | null = null;

    try {

        const response = await fetchApi<LoginResponse>('/auth/stakeholder/login', {
            method: 'POST',
            body: {
                email: formData.get('email'),
                password: formData.get('password')
            },
            auth: false,
        });

        sessionData = {
            userId: response.data.user.id,
            name: response.data.user.name,
            email: response.data.user.email,
            role: response.data.user.role,
            phone: response.data.user.phone_number,
            isVerified: response.data.user.is_verified,
            token: response.data.token
        }

        // Store the session in a secure http only cookie
        // This will be used to authenticate the user in the next requests
        // This is only used in the server side and server actions 
        await createSession(sessionData)

        const successMsg = setApiSuccessMsg({ successResponse: response })

        return {
            success: true,
            clientFieldsErrors: null,
            apiDataResponse: sessionData,
            apiMsgs: successMsg,
            formData: {
                email: formData.get('email') as string,
                password: formData.get('password') as string,
            }
        }

    } catch (error) {

        if (error instanceof ApiError) {
            const errorMsg = setApiErrorMsg({ errResponse: error })
            redirectToOtpIfNotVerified(error.status, error.code)
            return {
                success: false,
                clientFieldsErrors: null,
                apiDataResponse: null,
                apiMsgs: errorMsg,
                formData: {
                    email: formData.get('email') as string,
                    password: formData.get('password') as string,
                }
            }

        } else {
            console.error("Error", error)
            return {
                success: false,
                clientFieldsErrors: null,
                apiDataResponse: null,
                apiMsgs: "",
                formData: {
                    email: formData.get('email') as string,
                    password: formData.get('password') as string,
                }
            }
        }

    }
}


export const logoutUserServerSide = async (): Promise<void> => {
    'use server';
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
