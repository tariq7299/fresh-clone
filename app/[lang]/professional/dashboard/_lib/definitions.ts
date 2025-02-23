import { ErrorFormState, SuccessFormState } from "@/_lib/definitions/definitions"
import { z } from "zod"

export const personalInfoSchema = z.object({
    first_name: z.string().trim().min(1, { message: 'Please enter your first name' }),
    last_name: z.string().trim().min(1, { message: 'Please enter your last name' }),
    phone_number: z.string().trim().min(10, { message: 'Please enter your phone number' }).max(15, { message: 'Please enter a valid phone number' }),
    email: z.string().trim().min(1, { message: "Please enter your email" }).email("Invalid email address"),
})


export type PersonalInfoFormData = z.infer<typeof personalInfoSchema>

export type PersonalInfoFieldErrors = {
    first_name?: string | string[]
    last_name?: string | string[]
    phone_number?: string | string[]
    email?: string | string[]
}

export type PersonalInfoFormState = SuccessFormState<PersonalInfoFormData, PersonalInfoFormData> | ErrorFormState<PersonalInfoFieldErrors |
    null, PersonalInfoFormData>

export const securityInfoSchema = z.object({
    current_password: z.string().trim().min(1, { message: 'Please enter your old password' }),
    new_password: z.string().trim().min(1, { message: 'Please enter your password' }),
    new_password_confirmation: z.string().trim().min(1, { message: 'Please enter your password confirmation' }),
}).refine((data) => data.new_password === data.new_password_confirmation, {
    message: "Passwords do not match",
    path: ["new_password_confirmation"],
})

export type SecurityInfoFormData = z.infer<typeof securityInfoSchema>

export type SecurityInfoFieldErrors = {
    current_password?: string | string[]
    new_password?: string | string[]
    new_password_confirmation?: string | string[]
}

export type SecurityInfoFormState = SuccessFormState<SecurityInfoFormData, SecurityInfoFormData> | ErrorFormState<SecurityInfoFieldErrors |
    null, SecurityInfoFormData>
