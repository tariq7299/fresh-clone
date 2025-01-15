import { fetchApi } from "@/lib/utils/api/fetch-utils";

// TODO: Write types
// TODO: Write comments
export const getBusinessCategories = async () => {

    try {

        const categories = await fetchApi("/active-categories")
        return categories.data
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch categories')
    }
}