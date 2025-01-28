"use client"

import { Button } from "@/ui/components/custom/button"
import { Calendar } from "@/ui/components/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/components/popover"
import { CalendarIcon, CalendarOff } from "lucide-react"
import { useActionState, useState } from "react"
import { cn } from "@/lib/utils/utils"
import { format } from "date-fns"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Slot } from "@/business/_lib/definitions"
import { addDays } from "date-fns"
import { useEffect } from "react"
import { fetchApi } from "@/lib/utils/api/fetch-utils-client"
import { ApiResponse } from "@/lib/definitions/api"
import { handleBooking } from "../_lib/form-actions"
import { handleFormResponse } from "@/lib/utils/utils"
import { SuccessFormState, ErrorFormState } from "@/lib/definitions/definitions"
import { z } from "zod"
import { SelectTimeClientErrors, SelectTimeFormData } from "../_lib/definitions"
import { useBusinessFormContext } from "@/lib/providers/business-form-provider"
import { redirectToLoginIfNotAuthenticated } from "@/(auth)/_lib/redirect-to-login-if-not-authenticated"

export default function SelectTimeForm({ businessId, minDateToBook, maxDateToBook, defaultSlots, serviceIds }: { businessId: number, minDateToBook: Date, maxDateToBook: Date, defaultSlots: string[], serviceIds: number[] }) {

    const router = useRouter();
    const INITIAL_DATE = minDateToBook;

    const { setIsLoading } = useBusinessFormContext()


    const [date, setDate] = useState<Date | undefined>(INITIAL_DATE)
    const [selectedSlot, setSelectedSlot] = useState<string>('')
    const [slots, setSlots] = useState<string[]>([])
    const [isLoadingSlots, setIsLoadingSlots] = useState(true)

    const handleDateChange = async (date: Date) => {
        setIsLoadingSlots(true)
        const formattedDate = format(date, "yyyy-MM-dd")
        try {
            const response = await fetchApi<ApiResponse<{ slots: Slot[] }>>(`/businesses/available-slots`, {
                method: "POST",
                body: {
                    business_id: businessId,
                    date: formattedDate,
                    service_ids: serviceIds
                }
            })
            setSlots(response.data?.slots.map(slot => slot.start_time) || [])
            setIsLoadingSlots(false)
        } catch (error) {
            console.log("error", error)
            setSlots([])
            setIsLoadingSlots(false)
        }
    }

    const initialState: SuccessFormState<SelectTimeClientErrors | null, SelectTimeFormData> | ErrorFormState<SelectTimeClientErrors | null, SelectTimeFormData> = {
        success: false,
        clientFieldsErrors: null,
        apiDataResponse: null,
        apiMsgs: "",
        formData: {
            slot: "",
            businessId,
            date: date as Date,
            serviceIds
        }
    }
    // Create a bound version of handleSelectingSlot with all required params
    const boundHandleBooking = handleBooking.bind(null, {
        businessId,
        date: date as Date,
        serviceIds
    });

    const [formState, formAction, isPending] = useActionState(boundHandleBooking, initialState)

    useEffect(() => {
        handleDateChange(date || INITIAL_DATE);
    }, [date]);

    useEffect(() => {
        setIsLoading(isPending)
    }, [isPending])

    // Handle form submission response
    useEffect(() => {
        handleFormResponse({
            showSuccessToast: false,
            showErrorToast: true,
            formState,
            // successCallback: () => {
            //     router.push(`/business/${businessId}/successful-appointment`)
            // },
            errorCallback: () => {
                if (formState.apiMsgs === "Session expired") {
                    redirectToLoginIfNotAuthenticated(formState.apiMsgs, ["loginRequiredForBooking=true"])
                }
            }
        })
    }, [formState]);

    return <div className={cn("space-y-8", isPending ? "opacity-50 pointer-events-none" : "")}>

        <div className="flex justify-between items-center">

            <p className="text-xl font-black text-primary">
                <span className="text-accent-600 text-5xl font-lora">{format(date || INITIAL_DATE, "d")}</span> {format(date || INITIAL_DATE, "MMMM")} {format(date || INITIAL_DATE, "yyyy")}
            </p>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        variant={"outline"}
                        borderType="fullRounded"
                        className={"px-5 py-5 shadow-none"}
                    >
                        <CalendarIcon className="size-6" />
                    </Button>
                    {/* <Button
                        variant={"outline"}
                        className={cn(
                            "w-[240px] pl-3 text-left font-normal",
                            !date && "text-muted-foreground"
                        )}
                        >
                        {date ? (
                            format(date, "PPP")
                        ) : (
                            <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button> */}

                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(date) => {
                            return date > maxDateToBook || date < minDateToBook
                        }}
                        initialFocus
                    />
                </PopoverContent>
            </Popover>
        </div>



        <form className={cn("w-full")} action={formAction} id="select-time-form">

            <div className="grid grid-cols-1 gap-4">
                {isLoadingSlots ? (
                    // Loading skeleton
                    Array.from({ length: 12 }).map((_, index) => (
                        <div key={index} className="flex justify-start grow border-b md:border border-gray-200 md:rounded-lg py-4 md:p-5">
                            <div className="h-7 w-20 bg-gray-200 animate-pulse rounded"></div>
                        </div>
                    ))
                ) : slots.length > 0 ? (
                    slots.map((slot, index) => (
                        <label key={slot} htmlFor={slot} className="flex justify-start grow border-b md:border border-gray-200 md:rounded-lg p-4 md:p-5 cursor-pointer hover:bg-accent/5 transition-colors duration-150 relative">
                            <input defaultChecked={formState.formData.slot === slot} type="radio" id={slot} className="peer hidden appearance-none" name="slot" value={slot} />
                            <p className="text-xl font-semibold peer-checked:text-accent-600">{slot}</p>
                            <div className="peer-checked:ring-2 peer-checked:ring-accent peer-checked:bg-accent/5 absolute inset-0 rounded-lg transition-all duration-150"></div>
                        </label>
                    ))
                ) : (
                    <div className="min-h-[400px] flex flex-col items-center justify-center gap-4 md:border md:border-gray-200 rounded-lg">
                        <CalendarOff className="text-accent size-14 sm:size-16 md:size-16" />
                        <p className="text-xl font-bold">Fully booked on this date</p>
                    </div>
                )}

            </div>

        </form>

    </div>
}