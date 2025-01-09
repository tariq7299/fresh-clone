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

export type SuccessLoginFormState = SuccessFormState<SessionData>
export type ErrorLoginFormState = ErrorFormState<LoginFieldErrors | null>



// export type LoginFormState =
//     {
//         messageType?: "client" | "server",
//         errors?: {
//             email?: string[]
//             password?: string[]
//         }
//         message: string | string[],
//         sessionData: SessionData | null
//         success: boolean
//     }


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