import { fetchApi } from "@/_lib/utils/api/fetch-utils";
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

export const getAllServices = async (lang: "en" | "ar") => {

    // try {

    const response = await fetchApi<ApiResponse<ApiServicesWithCategory[]>>("/services/active-with-groups", {
        lang
    })

    if (response.success) {
        return response.data
    }
    return []

    // } catch (error) {
    //     console.log("error", error)
    //     throw new Error("Failed to fetch services")
    // }
}



