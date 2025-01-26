"use server"

import { fetchApi } from "@/lib/utils/api/fetch-utils"
import { setApiSuccessMsg } from "@/lib/utils/api/setApiSuccessMsg"
import { formatDate } from "date-fns"
import { z } from 'zod'
import { ApiError } from "@/lib/definitions/api"
import { setApiErrorMsg } from "@/lib/utils/api/setApiErrorMsg"
import { redirectToLoginIfNotAuthenticated } from "@/(auth)/_lib/redirect-to-login-if-not-authenticated"

const selectTimeFormSchema = z.object({
    slot: z.string().min(1, "Please choose a time slot"),
    businessId: z.number().gt(0, "No business id found"),
    date: z.date(),
    serviceIds: z.array(z.number().gt(0, "Please select a service(s)"))
})

// TODO: Write comments
// TODO: Write types
export const handleSelectingSlot = async ({ businessId, date, serviceIds }: { businessId: number, date: Date, serviceIds: number[] }, formState, formData) => {

    const payload = {
        slot: formData.get("slot") || "",
        businessId,
        date,
        serviceIds
    }
    console.log("payload", payload)
    const validatedData = selectTimeFormSchema.safeParse(payload)

    if (!validatedData.success) {
        return {
            success: false,
            clientFieldsErrors: validatedData.error.flatten().fieldErrors,
            apiDataResponse: null,
            apiMsgs: { errors: Object.values(validatedData.error.flatten().fieldErrors).flat() },
            formData: payload
        }
    }

    const formattedPayload = {
        business_id: payload.businessId,
        date: formatDate(payload.date, "yyyy-MM-dd"),
        slot: payload.slot,
        service_ids: payload.serviceIds,
        payment_method: "cash"
    }


    try {
        const response = await fetchApi("/bookings", {
            method: "POST",
            body: formattedPayload
        })

        const successMsg = setApiSuccessMsg({ successResponse: response })

        return {
            success: true,
            clientFieldsErrors: null,
            apiDataResponse: response,
            apiMsgs: successMsg,
            formData: payload
        }

    } catch (error) {

        const apiError = error as ApiError

        redirectToLoginIfNotAuthenticated(apiError.status, apiError.code, false)
        const errorMsg = setApiErrorMsg({ errResponse: apiError })
        return {
            success: false,
            clientFieldsErrors: null,
            apiDataResponse: null,
            apiMsgs: errorMsg,
            formData: payload
        }
    }
}