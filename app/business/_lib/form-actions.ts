"use server"

import { fetchApi } from "@/lib/utils/api/fetch-utils"
import { setApiSuccessMsg } from "@/lib/utils/api/setApiSuccessMsg"
import { formatDate } from "date-fns"
import { date, z } from 'zod'
import { ApiError } from "@/lib/definitions/api"
import { setApiErrorMsg } from "@/lib/utils/api/setApiErrorMsg"
import { redirectToLoginIfNotAuthenticated } from "@/(auth)/_lib/redirect-to-login-if-not-authenticated"
import { ErrorFormState, SuccessFormState } from "@/lib/definitions/definitions"
import { SelectTimeClientErrors, SelectTimeFormData } from "./definitions"
import { selectTimeFormSchema } from "./definitions"




// TODO: Write comments
// TODO: Write types
export const handleSelectingSlot = async (
    { businessId, date, serviceIds }: { businessId: number, date: Date, serviceIds: number[] }
    , formState: ErrorFormState<SelectTimeClientErrors | null, SelectTimeFormData>
        | SuccessFormState<SelectTimeClientErrors | null, SelectTimeFormData>,
    formData: FormData)
    : Promise<ErrorFormState<SelectTimeClientErrors | null, SelectTimeFormData>
        | SuccessFormState<SelectTimeClientErrors | null, SelectTimeFormData>> => {

    const payload: SelectTimeFormData = {
        slot: formData.get("slot") as string || "",
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
        // TODO:write types
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