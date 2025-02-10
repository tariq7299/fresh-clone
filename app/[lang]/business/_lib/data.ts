import { fetchApi } from "@/_lib/utils/api/fetch-utils"
import { ApiResponse } from "@/_lib/definitions/api"
import { Slot } from "@/[lang]/business/_lib/definitions"

export const getBusinessData = async (id: string) => {

    // try {
    // TODO: Add incoming business type `ApiResponse`
    const business = await fetchApi(`/active-businesses/${id}`, {
        cache: "force-cache",
        tags: ["business-details"],
        revalidate: 3600
    })

    if (business.success) {
        return business.data
    }
    return null

}

export const getAvailableSlots = async (id: number, date: string, service_ids: number[]): Promise<Slot[]> => {

    const response = await fetchApi<ApiResponse<{ slots: Slot[] }>>(`/businesses/available-slots`, {
        method: "POST",
        body: {
            business_id: id,
            date: date,
            service_ids: service_ids
        }
    })

    if (response.success) {
        return response.data?.slots || []
    }
    return []
}