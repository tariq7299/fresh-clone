
import { fetchApi } from "@/_lib/utils/api/fetch-utils"


// TODO: write types
export const getRecommendedBusinesses = async () => {
    "use server"
    // try {
    const res = await fetchApi("/recommended-businesses/recommended")

    if (res.success) {
        return res.data
    }
    return null

    // } catch (error) {
    //     console.error(error)
    //     return null
    // }

}

// TODO: write types
export const getNewBusinesses = async () => {

    // try {
    const res = await fetchApi("/recommended-businesses/new")

    // return res.data

    if (res.success) {
        return res.data
    }
    return null


    // } catch (error) {
    //     console.error(error)
    //     return null
    // }

}

// TODO: write types
export const getTrendingBusinesses = async () => {

    // try {
    const res = await fetchApi("/recommended-businesses/trending")

    if (res.success) {
        return res.data
    }
    return null

    // } catch (error) {
    //     console.error(error)
    //     return null
    // }

}

