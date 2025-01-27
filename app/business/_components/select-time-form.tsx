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
        console.log("formattedDate", formattedDate)
        try {
            const response = await fetchApi<ApiResponse<{ slots: Slot[] }>>(`/businesses/available-slots`, {
                method: "POST",
                body: {
                    business_id: businessId,
                    date: formattedDate,
                    service_ids: serviceIds
                }
            })
            console.log("response", response)
            // const allPossibleSlots = [
            //     '10:00', '10:15', '10:30', '10:45',
            //     '11:00', '11:15', '11:30', '11:45',
            //     '12:00', '12:15', '12:30', '12:45',
            //     '13:00', '13:15', '13:30', '13:45',
            //     '14:00', '14:15', '14:30', '14:45',
            //     '15:00', '15:15', '15:30', '15:45',
            //     '16:00', '16:15', '16:30', '16:45',
            //     '17:00', '17:15'
            // ]

            // const testSlots = await new Promise<string[]>((resolve) => {
            //     // Randomly select between 5-15 slots
            //     const numSlots = Math.floor(Math.random() * 11) + 5
            //     const shuffled = [...allPossibleSlots].sort(() => 0.5 - Math.random())
            //     setTimeout(() => {
            //         resolve(shuffled.slice(0, numSlots).sort())
            //     }, 2000)
            // })
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

    console.log("isLodingSlots", isLoadingSlots)



    // Handle form submission response
    useEffect(() => {
        handleFormResponse({
            showSuccessToast: false,
            showErrorToast: true,
            formState,
            successCallback: () => {
                router.push(`/business/${businessId}/successful-appointment`)
                console.log("successsss")

            },
            errorCallback: () => {
                if (formState.apiMsgs === "Session expired") {
                    // router.push(`/login?sessionEnded=true`)
                    redirectToLoginIfNotAuthenticated(formState.apiMsgs, ["loginRequiredForBooking=true"])
                }
                console.log("errorrr")
            }
        })
    }, [formState]);
    console.log("formState", formState)

    // const handleSelectingSlot = (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault()
    //     const formData = new FormData(event.target as HTMLFormElement)
    //     const slot = formData.get('slot') as string
    //     console.log("slot", slot)
    //     // setSelectedSlot(slot)
    // }

    return <div className="space-y-8">

        <Button isLink href={`/business/${businessId}/successful-appointment`} variant={"outline"}>
            done
        </Button>


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



        <form className="w-full" action={formAction} id="select-time-form">

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
                        <label key={slot} htmlFor={slot} className="flex justify-start grow border-b md:border border-gray-200 md:rounded-lg py-4 md:p-5 cursor-pointer hover:bg-accent/5 transition-colors duration-150 relative">
                            <input defaultChecked={formState.formData.slot === slot} type="radio" id={slot} className="peer hidden appearance-none" name="slot" value={slot} />
                            <p className="text-xl font-semibold peer-checked:text-accent-600">{slot}</p>
                            <div className="peer-checked:ring-2 ring-accent peer-checked:bg-accent/5 absolute inset-0 rounded-lg"></div>
                        </label>
                    ))
                ) : (
                    <div className="min-h-[400px] flex flex-col items-center justify-center gap-4 md:border md:border-gray-200 rounded-lg">
                        <CalendarOff className="text-accent size-14 sm:size-16 md:size-16" />
                        <p className="text-xl font-bold">Fully booked on this date</p>
                    </div>
                )}

                {/* <div className="flex justify-start grow border-b md:border border-gray-200 md:rounded-lg py-4 md:p-5 cursor-pointer hover:bg-accent/5 transition-colors duration-150 ring-2 ring-accent text-accent-600 bg-accent/5">
                        <p className="text-xl font-semibold">9:00 AM</p>
                    </div> */}



            </div>

            <Link href={`/login?${new URLSearchParams({
                type: 'customer',
                loginRequiredForBooking: 'true'
            }).toString()}`} scroll={false}>
                <Button>
                    test
                </Button>
            </Link>

            {/* <div className="min-h-[400px] flex flex-col items-center justify-center gap-4 md:border md:border-gray-200 rounded-lg">

                        <CalendarOff className="text-accent size-14 sm:size-16 md:size-16" />
                        <p className="text-xl font-bold">Fully booked on this date</p>
                    </div> */}
        </form>

    </div>
}