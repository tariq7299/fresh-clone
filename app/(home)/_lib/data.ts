import { fetchApi } from "@/lib/utils/api/fetch-utils"


// TODO: write types
export const getRecommendedBusinesses = async () => {

    try {
        const res = await fetchApi("/recommended-businesses/recommended")

        return res.data

    } catch (error) {
        console.error(error)
        return null
    }

}

// TODO: write types
export const getNewBusinesses = async () => {

    try {
        const res = await fetchApi("/recommended-businesses/new")

        return res.data

    } catch (error) {
        console.error(error)
        return null
    }

}

// TODO: write types
export const getTrendingBusinesses = async () => {

    try {
        const res = await fetchApi("/recommended-businesses/trending")

        return res.data

    } catch (error) {
        console.error(error)
        return null
    }

}

