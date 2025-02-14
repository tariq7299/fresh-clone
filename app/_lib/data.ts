import { fetchApi } from "@/_lib/utils/api/fetch-utils";
import { ApiError } from "./definitions/api";
import { getSession } from "@/[lang]/(auth)/_lib/sessions";
import { redirect } from "next/navigation";
import { redirectToOtpIfNotVerified } from "@/[lang]/(auth)/_lib/redirect-otp-if-not-verified";
import { redirectToLoginIfNotAuthenticated } from "@/[lang]/(auth)/_lib/redirect-to-login-if-not-authenticated";
import { ApiServicesWithCategory } from "@/[lang]/professional/_lib/definitions";
import { ApiResponse } from "./definitions/api";
import { Category } from "@/[lang]/business/_lib/definitions";



export const getAllCategories = async (lang: "en" | "ar") => {

    // try {

    const categories = await fetchApi<ApiResponse<Category[]>>("/active-categories",
        {
            cache: "force-cache",
            tags: ["categories"],
            revalidate: 3600,
            lang
        }
    )

    if (categories.success) {
        return categories?.data || []
    }
    return []
    // } catch (error) {
    //     console.error('Database Error:', error);
    //     throw new Error('Failed to fetch categories')
    // }
}

export const getAllServices = async () => {

    // try {

    const response = await fetchApi<ApiResponse<ApiServicesWithCategory[]>>("/services/active-with-groups")

    if (response.success) {
        return response.data
    }
    return []

    // } catch (error) {
    //     console.log("error", error)
    //     throw new Error("Failed to fetch services")
    // }
}

