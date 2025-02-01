import { fetchApi } from "@/_lib/utils/api/fetch-utils";

export const getAppointments = async () => {

    // try {
    const appointments = await fetchApi("/bookings/user")
    if (appointments.success) {
        return appointments.data?.bookings || []
    }
    return []
    // } catch (error) {
    //     console.error(error)
    //     throw new Error("Failed to fetch appointments")
    // }

}