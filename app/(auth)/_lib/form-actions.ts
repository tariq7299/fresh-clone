"use server"

import { setApiSuccessMsg } from '@/_lib/utils/api/setApiSuccessMsg';
import { setApiErrorMsg } from '@/_lib/utils/api/setApiErrorMsg';
import { redirectToOtpIfNotVerified } from "./redirect-otp-if-not-verified";
import { loginUserServerSide, authenticateUser } from "./auth-server-services";
import { ApiError, ApiSucess } from "@/_lib/definitions/api";
import { SessionData, LoginFormSchema, SuccessLoginFormState, ErrorLoginFormState, OtpFormSchema, SuccessOtpFormState, ErrorOtpFormState, UserRole } from "./definitions";
import { fetchApi } from "@/_lib/utils/api/fetch-utils";
import { ApiResponse } from "@/_lib/definitions/api";
import { ApiResponseSessionData } from "./definitions";
import { RegisterFormSchema, SuccessRegisterFormState, ErrorRegisterFormState } from "./definitions";

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

        sessionData = { ...authenticateUserResponse.data.user, token: authenticateUserResponse.data.token }

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
        userRole: formState.formData.userRole as UserRole.Professional | UserRole.Customer
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
    const url = payload.userRole === UserRole.Professional ? "/auth/stakeholder/verify-otp" : "/auth/user/verify-otp"
    // try {

    const response = await fetchApi<ApiResponse<ApiResponseSessionData>>(url, {
        method: 'POST',
        body: formDataPayload,
    }) as ApiSucess<ApiResponseSessionData>;

    if (response.success) {
        // const successMsg = setApiSuccessMsg({ successResponse: response })

        sessionData = { ...response.data.user, token: response.data.token }

        await loginUserServerSide(sessionData)


        return {
            success: true,
            clientFieldsErrors: null,
            apiDataResponse: sessionData,
            apiMsgs: response.apiMsgs,
            formData: payload
        }
    }
    // } catch (error) {
    //     const errorMsg = setApiErrorMsg({ errResponse: error as ApiError })
    //     return {
    //         success: false,
    //         clientFieldsErrors: null,
    //         apiDataResponse: null,
    //         apiMsgs: errorMsg,
    //         formData: payload
    //     }
    // }
    return {
        success: false,
        clientFieldsErrors: null,
        apiDataResponse: null,
        apiMsgs: response.apiMsgs,
        formData: payload
    }

}


export const register = async (formState: SuccessRegisterFormState | ErrorRegisterFormState, formData: FormData): Promise<SuccessRegisterFormState | ErrorRegisterFormState> => {

    const payload = {
        userRole: formState.formData.userRole as UserRole.Professional | UserRole.Customer,
        email: formData.get('email') as string,
        password: formData.get('password') as string,
        password_confirmation: formData.get('password_confirmation') as string,
        first_name: formData.get('first_name') as string,
        last_name: formData.get('last_name') as string,
        phone_number: formData.get('phone_number') as string,
    }

    const validatedFields = RegisterFormSchema.safeParse(payload)

    if (!validatedFields.success) {
        return {
            success: false,
            clientFieldsErrors: validatedFields.error.flatten().fieldErrors,
            apiDataResponse: null,
            apiMsgs: "",
            formData: payload
        }
    }

    // try {

    const url = formState.formData.userRole === UserRole.Professional ? "/auth/stakeholder/register" : "/auth/user/register"

    // const { firstName, lastName, ...rest } = payload
    // const formattedPayload = { ...rest, name: firstName + " " + lastName }

    const response = await fetchApi<ApiResponse<Omit<ApiResponseSessionData, "token">>>(url, {
        method: 'POST',
        body: payload,
    }) as ApiSucess<Omit<ApiResponseSessionData, "token">>;

    if (response.success) {
        return {
            success: true,
            clientFieldsErrors: null,
            apiDataResponse: response.data.user,
            apiMsgs: response.apiMsgs,
            formData: payload
        }

    }
    return {
        success: false,
        clientFieldsErrors: null,
        apiDataResponse: null,
        apiMsgs: response.apiMsgs,
        formData: payload
    }

    // } catch (error) {
    //     const errorMsg = setApiErrorMsg({ errResponse: error as ApiError })
    //     return {
    //         success: false,
    //         clientFieldsErrors: null,
    //         apiDataResponse: null,
    //         apiMsgs: errorMsg,
    //         formData: payload
    //     }
    // }


}