// auth/lib/definitions
import { z } from 'zod'
import { ApiResponse } from '@/lib/definitions/api'

export const LoginFormSchema = z.object({

    email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
    password: z
        .string()
        // .min(8, { message: 'Be at least 8 characters long' })
        // .regex(/[a-zA-Z]/, { message: 'Wrong password' })
        // .regex(/[0-9]/, { message: 'Wrong password' })
        // .regex(/[^a-zA-Z0-9]/, {
        // message: 'Wrong password',
        // })
        .trim(),
})

export type LoginFormState =
    {
        messageType?: "client" | "server",
        errors?: {
            email?: string[]
            password?: string[]
        }
        message: string | string[],
        token: string | null
        success: boolean
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