import { z } from "zod"
// import { selectTimeFormSchema } from "@/business/_components/select-time-form"

export interface Slot {
    "start_time": string,
    // "is_available": boolean,
}


export type SelectTimeClientErrors = {
    slot?: string | string[],
    businessId?: string | string[],
    date?: string | string[],
    serviceIds?: string | string[]
}

export type SelectTimeFormData = z.infer<typeof selectTimeFormSchema>

export const selectTimeFormSchema = z.object({
    slot: z.string().min(1, "Please select an available time slot"),
    businessId: z.number().gt(-1, "Business ID is required"),
    date: z.date({
        required_error: "Please select a date for your appointment",
        invalid_type_error: "Please select a valid date for your appointment"
    }),
    serviceIds: z.array(z.number().gt(-1, "Please select at least one service"))
})
