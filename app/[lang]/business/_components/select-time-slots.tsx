// app/[businessId]/book/SelectTimeSlots.tsx
import { CalendarOff } from "lucide-react"
import { getAvailableSlots } from "../_lib/data"

interface SelectTimeSlotsProps {
    businessId: number;
    date: string;
    serviceIds: number[];
    dict: {
        business_page: {
            select_time: {
                fully_booked: string;
            }
        }
    }
}

export async function SelectTimeSlots({
    businessId,
    date,
    serviceIds,
    dict
}: SelectTimeSlotsProps) {
    // Fetch slots on server
    const slots = await getAvailableSlots(businessId, date, serviceIds)
    const availableSlots = slots.map(slot => slot.start_time)

    return (
        <div className="grid grid-cols-1 gap-4">
            {availableSlots.length > 0 ? (
                availableSlots.map((slot) => (
                    <div
                        className="flex justify-start grow border-b md:border border-gray-200 md:rounded-lg py-4 md:p-5 cursor-pointer hover:bg-accent/5 transition-colors duration-150"
                        key={slot}
                    >
                        <p className="text-xl font-semibold rtl:font-cairo">{slot}</p>
                    </div>
                ))
            ) : (
                <div className="min-h-[400px] flex flex-col items-center justify-center gap-4 md:border md:border-gray-200 rounded-lg">
                    <CalendarOff className="text-accent size-14 sm:size-16 md:size-16" />
                    <p className="text-xl font-bold rtl:font-cairo">
                        {dict.business_page.select_time.fully_booked}
                    </p>
                </div>
            )}
        </div>
    )
}