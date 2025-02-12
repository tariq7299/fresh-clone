"use server"

import { ApiResponse } from "@/_lib/definitions/api";
import { ApiResponseSessionData, SessionData } from "./definitions";
import { fetchApi } from "@/_lib/utils/api/fetch-utils";
import { createSession, deleteSession, getSession } from '@/[lang]/(auth)/_lib/sessions';
import { redirect } from 'next/navigation'
import { ApiError } from "@/_lib/definitions/api";

export const authenticateUser = async (formData: FormData): Promise<ApiResponse<ApiResponseSessionData>> => {
    // try {
    const response = await fetchApi<ApiResponse<ApiResponseSessionData>>('/login', {
        method: 'POST',
        body: {
            email: formData.get('email'),
            password: formData.get('password')
        },
        auth: false,
    });
    return response
    // if (response.success) {
    // } catch (error) {
    // return error as ApiError
    // }
}

export const loginUserServerSide = async (sessionData: SessionData): Promise<void> => {
    await createSession(sessionData)
}

export const logoutUserServerSide = async (): Promise<void> => {
    await deleteSession()
}

// export async function navigateToLoginWithSessionEnded() {
//     redirect("/login?sessionEnded=true")
// }

export async function navigateToOtp(email: string) {
    redirect("/otp-verification?email=" + email)
}

export async function getUserData() {
    const session = await getSession()
    if (!session) return null

    const { id, role, full_name, first_name, last_name, email } = session

    return { id, role, full_name, first_name, last_name, email }
}

export async function logoutUserFromBackend() {
    const response = await fetchApi('/auth/logout', {
        method: 'POST',
    })
    return response
}


