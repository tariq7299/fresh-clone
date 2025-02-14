
import { fetchApi } from "@/_lib/utils/api/fetch-utils"


// TODO: write types
export const getRecommendedBusinesses = async (lang: 'en' | 'ar') => {
    "use server"
    // try {

    console.log("getRecommendedBusinessesLANG", lang)
    const res = await fetchApi("/recommended-businesses/recommended", { lang })

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
export const getNewBusinesses = async (lang: 'en' | 'ar') => {

    // try {
    const res = await fetchApi("/recommended-businesses/new", { lang })

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
export const getTrendingBusinesses = async (lang: 'en' | 'ar') => {

    // try {
    const res = await fetchApi(`/recommended-businesses/trending`, { lang })

    if (res.success) {
        return res.data
    }
    return null

    // } catch (error) {
    //     console.error(error)
    //     return null
    // }

}

