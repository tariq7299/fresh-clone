import { fetchApi } from "@/lib/utils/api/fetch-utils"
import { ApiResponse } from "@/lib/definitions/api"
import { Slot } from "@/business/_lib/definitions"

export const getBusinessData = async (id: string) => {

    try {
        // TODO: Add incoming business type `ApiResponse`
        const business = await fetchApi(`/active-businesses/${id}`, {
            cache: "force-cache",
            tags: ["business-details"],
            revalidate: 3600
        })

        return business.data
    } catch (error) {
        console.log("error", error)
        throw new Error("Failed to fetch business data")
    }

}

export const getAvailableSlots = async (id: number, date: string, service_ids: number[]) => {

    // const formDataPayload = {
    //     business_id: id,
    //     date: date,
    //     service_ids: service_ids
    // }

    try {

        const response = await fetchApi<ApiResponse<{ slots: Slot[] }>>(`/businesses/available-slots`, {
            method: "POST",
            body: {
                business_id: id,
                date: date,
                service_ids: service_ids
            }
        })

        return response.data?.slots || []

    } catch (error) {
        console.log("error", error)
        throw new Error("Failed to fetch slots")
    }
}