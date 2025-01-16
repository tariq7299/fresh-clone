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

export enum UserRole {
    Professional = "professional",
    Customer = "customer",
    Admin = "admin"
}

export type User = {

    id: number;
    name: string;
    email: string;
    role: UserRole;
    phone_number: string;
    has_business: boolean;
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
    src: z.enum(["register"]),
    userRole: z.enum(["professional", "customer"])
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
    first_name: z.string().trim().min(1, { message: 'Please enter your first name' }),
    last_name: z.string().trim().min(1, { message: 'Please enter your last name' }),
    phone_number: z.string().trim().min(10, { message: 'Please enter your phone number' }).max(15, { message: 'Please enter a valid phone number' }),
    userRole: z.enum(["professional", "customer"])
}).refine((data) => data.password === data.password_confirmation, {
    message: "Passwords do not match",
    path: ["password_confirmation"],
})

export type RegisterFormData = z.infer<typeof RegisterFormSchema>

export type RegisterFieldErrors = {
    userRole?: string | string[]
    email?: string | string[]
    password?: string | string[]
    password_confirmation?: string | string[]
    first_name?: string | string[]
    last_name?: string | string[]
    phone_number?: string | string[]
}

export type SuccessOtpFormState = SuccessFormState<Omit<SessionData, "token">, OtpFormData>
export type ErrorOtpFormState = ErrorFormState<OtpFieldErrors | null, OtpFormData>
