import { fetchApi } from "@/lib/utils/api/fetch-utils";

export const getAppointments = async () => {

    try {
        const appointments = await fetchApi("/bookings/user")
        return appointments
    } catch (error) {
        console.error(error)
        throw new Error("Failed to fetch appointments")
    }

}