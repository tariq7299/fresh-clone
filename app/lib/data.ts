import { fetchApi } from "@/lib/utils/api/fetch-utils";
import { ApiError } from "./definitions/api";
import { getSession } from "@/(auth)/_lib/sessions";
import { redirect } from "next/navigation";
import { redirectToOtpIfNotVerified } from "@/(auth)/_lib/redirect-otp-if-not-verified";
import { redirectToLoginIfNotAuthenticated } from "@/(auth)/_lib/redirect-to-login-if-not-authenticated";

// TODO: Write types
// TODO: Write comments
export const getAllCategories = async () => {

    try {

        const categories = await fetchApi("/active-categories")
        return categories.data
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch categories')
    }
}

// TODO: Write types
// TODO: Write comments
export const getAllServices = async () => {

    try {

        const services = await fetchApi("/services/active-with-groups")
        return services.data

    } catch (error) {
        console.log("error", error)
        throw new Error("Failed to fetch services")
    }
}