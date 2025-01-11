// auth/lib/definitions
import { z } from 'zod'
import { ApiResponse } from '@/lib/definitions/api'
import { FormState, SuccessFormState, ErrorFormState } from '@/lib/definitions/definitions'

export const LoginFormSchema = z.object({

    email: z
        .string()
        .min(1, { message: 'Please enter your email' })
        .email({ message: 'Invalid email address' }),
    password: z
        .string()
        .min(1, {
            message: 'Wrong password',
        })
        // .min(8, { message: 'Be at least 8 characters long' })
        // .regex(/[a-zA-Z]/, { message: 'Wrong password' })
        // .regex(/[0-9]/, { message: 'Wrong password' })
        // .regex(/[^a-zA-Z0-9]/, {
        // message: 'Wrong password',
        // })
        .trim(),
})

export type LoginFieldErrors = {
    email?: string[]
    password?: string[]
}

// This is the type of the form state for the login form
// export type LoginFormState = SuccessLoginFormState | ErrorLoginFormState

export type SuccessLoginFormState = SuccessFormState<SessionData, LoginFormData>
export type ErrorLoginFormState = ErrorFormState<LoginFieldErrors | null, LoginFormData>

export type LoginFormData = {
    email: string;
    password: string;
}

export type SessionData = {
    userId: string;
    name: string;
    email: string;
    role: 'stakeholder' | 'customer' | 'admin';
    phone: 'string';
    isVerified: boolean;
    token: string;
}

export type ApiResponseSessionData = {
    user: {
        id: string;
        name: string;
        email: string;
        role: 'stakeholder' | 'customer' | 'admin';
        phone_number: 'string';
        is_verified: boolean;
    }
    token: string;
}

export interface LoginResponse extends ApiResponse<ApiResponseSessionData> {

}

// Create the schema for otp verification form

export const OtpFormSchema = z.object({
    email: z.email().min(1)
    otp: z.string().min(1, { message: 'Please enter your OTP' }),
})

// Create the OtpFormData type
export type OtpFormData = {
    email: string;
    otp: string;
    src: "register" // Maybe this will change
}

export type OtpFieldErrors = {
    email?: string | string[]
    otp?: string | string[]
    src?: string | string[]
}
// Create the SuccessOtpFormState and ErrorOtpFormState

export type SuccessOtpFormState = SuccessFormState<OtpFormData, OtpFormData>
export type ErrorOtpFormState = ErrorFormState<OtpFieldErrors | null, OtpFormData>

// Create the OtpResponse type

export type OtpApiResponse = ApiResponse<ApiResponseSessionData>