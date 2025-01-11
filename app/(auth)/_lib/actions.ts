"use server"

import { setApiSuccessMsg } from '@/lib/utils/api/setApiSuccessMsg';
import { setApiErrorMsg } from '@/lib/utils/api/setApiErrorMsg';
import { redirectToOtpIfNotVerified } from "@/lib/utils/api/redirect-otp-if-not-verified";
import { loginUserServerSide, authenticateUser } from "./auth-server-services";
import { ApiError, ApiSucess } from "@/lib/definitions/api";
import { SessionData, LoginFormSchema, SuccessLoginFormState, ErrorLoginFormState, OtpFormSchema, SuccessOtpFormState, ErrorOtpFormState, OtpFormData } from "./definitions";
import { fetchApi } from "@/lib/utils/api/fetch-utils";
import { ApiResponse } from "@/lib/definitions/api";
import { ApiResponseSessionData } from "./definitions";

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

        redirectToOtpIfNotVerified(authenticateUserResponse.status, authenticateUserResponse.code, formData.get('email') as string)

        const errorMsg = setApiErrorMsg({ errResponse: authenticateUserResponse as ApiError })

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


export const verifyOtp = async (formState: SuccessOtpFormState | ErrorOtpFormState, formData: FormData): Promise<SuccessOtpFormState | ErrorOtpFormState> => {

    const payload = {
        email: formState.formData.email as string,
        otp: formData.get('otp') as string,
        src: formState.formData.src as "register",
    }

    // Validate form fields
    const validatedFields = OtpFormSchema.safeParse(payload)

    // If any form fields are invalid, return early
    if (!validatedFields.success) {
        return {
            success: false,
            clientFieldsErrors: validatedFields.error.flatten().fieldErrors,
            apiDataResponse: null,
            apiMsgs: "",
            formData: payload
        }
    }

    let sessionData: SessionData;

    // Change the otp form string to number before sending it to the server
    const formDataPayload = { ...payload, otp: Number(payload.otp) }

    try {

        const response = await fetchApi<ApiResponse<ApiResponseSessionData>>('/auth/stakeholder/verify-otp', {
            method: 'POST',
            body: formDataPayload,
        }) as ApiSucess<ApiResponseSessionData>;

        const successMsg = setApiSuccessMsg({ successResponse: response })

        sessionData = {
            userId: response.data.user.id,
            name: response.data.user.name,
            email: response.data.user.email,
            role: response.data.user.role,
            phone: response.data.user.phone_number,
            isVerified: response.data.user.is_verified,
            token: response.data.token
        }

        await loginUserServerSide(sessionData)

        return {
            success: true,
            clientFieldsErrors: null,
            apiDataResponse: sessionData,
            apiMsgs: successMsg,
            formData: payload
        }
    } catch (error) {
        const errorMsg = setApiErrorMsg({ errResponse: error as ApiError })
        return {
            success: false,
            clientFieldsErrors: null,
            apiDataResponse: null,
            apiMsgs: errorMsg,
            formData: payload
        }
    }

}