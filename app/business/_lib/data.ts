import { fetchApi } from "@/lib/utils/api/fetch-utils"

export const getBusinessData = async (id: string) => {

    try {

        // TODO: Add incoming busienss type `ApiResponse`
        const business = await fetchApi(`/active-businesses/${id}`)


        return business.data
    } catch (error) {
        console.log("error", error)
        throw new Error("Failed to fetch business data")
    }

}