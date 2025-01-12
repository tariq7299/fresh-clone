import { z } from 'zod'
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

export type User = {
    id: string;
    name: string;
    email: string;
    role: 'stakeholder' | 'user' | 'admin';
    phone_number: string;
    is_verified: boolean;
}

export type SessionData = User & {
    token: string;
}

export type ApiResponseSessionData = {
    user: User
    token: string;
}

export const OtpFormSchema = z.object({
    email: z.string().min(1, { message: "Please enter your email" }).email("Invalid email address"),
    otp: z.string().min(1, { message: 'Please enter your OTP' }),
    src: z.enum(["register"])
})

export type OtpFormData = z.infer<typeof OtpFormSchema>

export type OtpFieldErrors = {
    email?: string | string[]
    otp?: string | string[]
    src?: string | string[]
}

export type SuccessRegisterFormState = SuccessFormState<Omit<SessionData, "token">, RegisterFormData>
export type ErrorRegisterFormState = ErrorFormState<RegisterFieldErrors | null, RegisterFormData>

export const RegisterFormSchema = z.object({
    email: z.string().trim().min(1, { message: "Please enter your email" }).email("Invalid email address"),
    password: z.string().trim().min(1, { message: 'Please enter your password' }),
    password_confirmation: z.string().trim().min(1, { message: 'Please enter your password confirmation' }),
    firstName: z.string().trim().min(1, { message: 'Please enter your first name' }),
    lastName: z.string().trim().min(1, { message: 'Please enter your last name' }),
    phone_number: z.string().trim().min(10, { message: 'Please enter your phone number' }).max(15, { message: 'Please enter a valid phone number' }),
    userType: z.enum(["professional", "customer"])
}).refine((data) => data.password === data.password_confirmation, {
    message: "Passwords do not match",
    path: ["password_confirmation"],
})

export type RegisterFormData = z.infer<typeof RegisterFormSchema>

export type RegisterFieldErrors = {
    userType?: string | string[]
    email?: string | string[]
    password?: string | string[]
    password_confirmation?: string | string[]
    firstName?: string | string[]
    lastName?: string | string[]
    phone_number?: string | string[]
}

export type SuccessOtpFormState = SuccessFormState<Omit<SessionData, "token">, OtpFormData>
export type ErrorOtpFormState = ErrorFormState<OtpFieldErrors | null, OtpFormData>
