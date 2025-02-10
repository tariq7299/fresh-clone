import { fetchApi } from "@/_lib/utils/api/fetch-utils";
import { AppointmentPageQueries } from "@/[lang]/customer/_lib/definitions"

export const getAppointments = async (params: AppointmentPageQueries) => {

    const urlParams = new URLSearchParams()

    for (const [paramKey, paramValue] of Object.entries(params)) {
        console.log(`${paramKey}: ${paramValue}`);
        urlParams.set(paramKey, paramValue)
    }

    const backendUrl = `/bookings/user?${urlParams}`

    console.log("urlParams", urlParams)
    console.log("backendUrl", backendUrl)
    // try {
    const appointments = await fetchApi(backendUrl)
    if (appointments.success) {
        return appointments.data?.bookings || []
    }
    return []
    // } catch (error) {
    //     console.error(error)
    //     throw new Error("Failed to fetch appointments")
    // }

}