import { fetchApi } from "@/_lib/utils/api/fetch-utils";
import { AppointmentPageQueries } from "@/[lang]/customer/_lib/definitions"

export const getAppointments = async (params?: AppointmentPageQueries, lang?: "en" | "ar") => {
    const urlParams = new URLSearchParams()

    for (const [paramKey, paramValue] of Object.entries(params ?? {})) {
        if (paramKey === "booking_date") {
            const date = paramValue ? JSON.parse(paramValue) as { from: string, to: string } : null
            if (date) {
                date?.from && urlParams.set('date_from', date.from.toString())
                date?.to && urlParams.set('date_to', date.to.toString())
            }
        } else {
            urlParams.set(paramKey, paramValue)
        }
    }

    const backendUrl = `/bookings/user?${urlParams}`

    const appointments = await fetchApi(backendUrl, { lang })
    if (appointments.success) {
        return { appointments: appointments.data?.bookings || [], pagination: appointments.data?.pagination || null }
    }
    return { appointments: [], pagination: null }

}