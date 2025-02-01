"use server"

import { fetchApi } from "@/_lib/utils/api/fetch-utils"
import { setApiSuccessMsg } from "@/_lib/utils/api/setApiSuccessMsg"
import { formatDate } from "date-fns"
import { date, z } from 'zod'
import { ApiError } from "@/_lib/definitions/api"
import { setApiErrorMsg } from "@/_lib/utils/api/setApiErrorMsg"
import { redirectToLoginIfNotAuthenticated } from "@/(auth)/_lib/redirect-to-login-if-not-authenticated"
import { ErrorFormState, SuccessFormState } from "@/_lib/definitions/definitions"
import { SelectTimeClientErrors, SelectTimeFormData } from "./definitions"
import { selectTimeFormSchema } from "./definitions"
import { redirect } from "next/navigation"




// TODO: Write comments
// TODO: Write types
export const handleBooking = async (
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
        preferred_time: payload.slot,
        service_ids: payload.serviceIds,
        payment_method: "cash"
    }

    // let result;

    // try {
    // TODO:write types
    const response = await fetchApi("/bookings", {
        method: "POST",
        body: formattedPayload
    })

    // const successMsg = setApiSuccessMsg({ successResponse: response })

    if (response.success) {
        // if (result.success) {
        redirect(`/business/${businessId}/successful-appointment`)
        // return result as SuccessFormState<SelectTimeClientErrors | null, SelectTimeFormData>
        // }

    }
    // redirectToLoginIfNotAuthenticated(response.apiMsgs, ["sessionEnded=true"])
    return {
        success: false,
        clientFieldsErrors: null,
        apiDataResponse: null,
        apiMsgs: response.apiMsgs,
        formData: payload
    }




    // result = {
    //     apiResponse: response,
    //     success: true,
    //     clientFieldsErrors: null,
    //     apiDataResponse: response,
    //     apiMsgs: successMsg,
    //     formData: payload
    // }

    // } catch (error) {

    // const apiError = error as ApiError
    // redirectToLoginIfNotAuthenticated(apiError.status, apiError.code, false)
    // const errorMsg = setApiErrorMsg({ errResponse: apiError })
    // result = {
    //     apiResponse: apiError,
    //     success: false,
    //     clientFieldsErrors: null,
    //     apiDataResponse: null,
    //     apiMsgs: errorMsg,
    //     formData: payload
    // }
    // }

    // if (result.success) {
    //     redirect(`/business/${businessId}/successful-appointment`)
    //     // return result as SuccessFormState<SelectTimeClientErrors | null, SelectTimeFormData>
    // }
    // // redirectToLoginIfNotAuthenticated(result.apiMsgs, false)
    // return result as ErrorFormState<SelectTimeClientErrors | null, SelectTimeFormData>
}