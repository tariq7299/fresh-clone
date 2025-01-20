import { fetchApi } from "@/lib/utils/api/fetch-utils";
import { ApiError } from "./definitions/api";
import { getSession } from "@/(auth)/_lib/sessions";
import { redirect } from "next/navigation";
import { redirectToOtpIfNotVerified } from "@/(auth)/_lib/redirect-otp-if-not-verified";
import { redirectToLoginIfNotAuthenticated } from "@/(auth)/_lib/redirect-to-login-if-not-authenticated";
import { ApiServicesWithCategory } from "@/professional/_lib/definitions";
import { ApiResponse } from "./definitions/api";
import { Category } from "@/professional/onboarding/business-category/business-category-form";



export const getAllCategories = async () => {

    try {

        const categories = await fetchApi<ApiResponse<Category[]>>("/active-categories")
        return categories.data
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch categories')
    }
}

export const getAllServices = async () => {

    try {

        const response = await fetchApi<ApiResponse<ApiServicesWithCategory[]>>("/services/active-with-groups")

        return response.data

    } catch (error) {
        console.log("error", error)
        throw new Error("Failed to fetch services")
    }
}

