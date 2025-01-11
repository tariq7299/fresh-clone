"use server"

import { SessionData } from "./definitions";
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
import { LoginFormData } from "./definitions";
import { loginUserServerSide } from "./auth-server-services";
import { authenticateUser } from "./auth-server-services";
import { NetworkError } from "@/lib/definitions/api";
import { ApiError } from "@/lib/definitions/api";



// This is the server side login function, that will be used in the login form component
// It will be used to login the user and return the form state
export const login = async (formState: SuccessLoginFormState | ErrorLoginFormState, formData: FormData): Promise<SuccessLoginFormState | ErrorLoginFormState> => {

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

    const authenticateUserResponse = await authenticateUser(formData)

    let sessionData: SessionData;

    if (authenticateUserResponse.success) {

        sessionData = {
            userId: authenticateUserResponse.data.user.id,
            name: authenticateUserResponse.data.user.name,
            email: authenticateUserResponse.data.user.email,
            role: authenticateUserResponse.data.user.role,
            phone: authenticateUserResponse.data.user.phone_number,
            isVerified: authenticateUserResponse.data.user.is_verified,
            token: authenticateUserResponse.data.token
        }


        const successMsg = setApiSuccessMsg({ successResponse: authenticateUserResponse })

        await loginUserServerSide(sessionData)

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

    } else {

        const errorMsg = setApiErrorMsg({ errResponse: authenticateUserResponse as ApiError | NetworkError })

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


    }
}