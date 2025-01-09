"use server";

import { LoginFormSchema, LoginFormState } from '@/(auth)/_lib/definitions'
import { redirect } from 'next/navigation'
import { createSession, deleteSession } from '@/(auth)/_lib/sessions';
import { SessionData } from '@/(auth)/_lib/definitions';
import { LoginResponse } from '@/(auth)/_lib/definitions';
import { ApiError, fetchApi } from '@/lib/utils/api/fetch-utils';
import { setApiSuccessMsg } from '@/lib/utils/api/setApiSuccessMsg';
import { setApiErrorMsg } from '@/lib/utils/api/setApiErrorMsg';
// import { redirectToLoginIfNotAuthenticated } from '@/lib/utils/api/redirect-to-login-if-not-authenticated';
import { redirectToOtpIfNotVerified } from '@/lib/utils/api/redirect-otp-if-not-verified';

export async function login(state: LoginFormState, formData: FormData): Promise<LoginFormState> {

    // Validate form fields
    const validatedFields = LoginFormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
    })

    // If any form fields are invalid, return early
    if (!validatedFields.success) {
        return {
            messageType: "client",
            message: "",
            token: null,
            success: false,
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    // let data;

    // Replace this with autheticate function, that will be found in services file in (auth)/_lib/services
    // 

    // const response = await authenticate(validatedFields.data)
    let sessionData: SessionData | null = null;

    try {

        // const response = await authService.login(validatedFields.data.email, validatedFields.data.password)

        const response = await fetchApi<LoginResponse>('/auth/stakeholder/login', {
            method: 'POST',
            body: {
                email: validatedFields.data.email,
                password: validatedFields.data.password
            },
            auth: false,
        });

        // console.log("validatedFields.data", validatedFields.data)


        // const response = await fetch('http://127.0.0.1:8000/api/auth/stakeholder/login', {
        //     method: 'POST',
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //         email: validatedFields.data.email,
        //         password: validatedFields.data.password
        //     }),
        // });


        // if (!response.ok) throw new Error('Failed to send data');

        // const data = await response.json();
        // console.log("responseasdf/asdf", response);
        // console.log("datatatatat", data)
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
        await createSession(sessionData)



        // data = { token: response.data.token, message: setApiSuccessMsg({ successResponse: response }) }
        const successMsg = setApiSuccessMsg({ successResponse: response })

        return { messageType: "server", sessionData: sessionData, message: successMsg, success: response.success }


    } catch (error) {
        // console.log("errorasdfasdf", error)
        let errorMsg: string | string[] = 'Error sending data:';

        if (error instanceof ApiError || error instanceof Error) {

            console.error("ERROR", error)
            redirectToOtpIfNotVerified(error.status, error.code)

            errorMsg = setApiErrorMsg({ errResponse: error })
        } else {
            // console.error(errorMsg, error);
        }
        // console.log("THIISIS THE ERROR MESSGFA", errorMsg)
        // data = { token: null, message: errorMsg }
        return { messageType: "server", sessionData: null, message: errorMsg, success: false }
    }

};


export async function logout() {
    return deleteSession()
}

export async function navigateToLogin() {
    redirect("/login?sessionEnded=true")
}

export async function navigateToOtp() {
    redirect("/login?notVerified=true")
}
