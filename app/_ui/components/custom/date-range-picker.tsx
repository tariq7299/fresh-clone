"use client"

import * as React from "react"
import { addDays, format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"

import { cn } from "@/_lib/utils/utils"
import { Button } from "@/_ui/components/button"
import { Calendar } from "@/_ui/components/calendar"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/_ui/components/popover"

export function DatePickerWithRange({
    onDateChange,
    className,
    defaultValue
}: {
    onDateChange: (date: DateRange | undefined) => void
    defaultValue?: { from: string, to: string }

} & React.HTMLAttributes<HTMLDivElement>) {


    const [date, setDate] = React.useState<DateRange | undefined>(defaultValue ? {
        from: new Date(defaultValue.from),
        to: new Date(defaultValue.to),
    } : undefined)


    // React.useEffect(() => {  

    //     const formattedDate = date?.from && date?.to ? {
    //         from: format(date.from, "yyyy-MM-dd"),
    //         to: format(date.to, "yyyy-MM-dd")
    //     } : undefined




    //     formattedDate && onDateChange(formattedDate)

    // }, [date])


    console.log("date", date)



    return (
        <div className={cn("grid gap-2 w-full", className)}>
            <Popover >
                <PopoverTrigger asChild>
                    <Button
                        id="date"
                        variant={"outline"}
                        className={cn(
                            "w-full justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                        )}
                    >
                        {/* <CalendarIcon /> */}
                        {date?.from ? (
                            date.to ? (
                                <>
                                    {format(date.from, "LLL dd, y")} -{" "}
                                    {format(date.to, "LLL dd, y")}
                                </>
                            ) : (
                                format(date.from, "LLL dd, y")
                            )
                        ) : (
                            <span>Pick a date</span>
                        )}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        initialFocus
                        mode="range"
                        defaultMonth={date?.from}
                        selected={date}
                        onSelect={(date) => {
                            setDate(date)
                            onDateChange && onDateChange(date)
                        }}
                        numberOfMonths={2}
                    />
                </PopoverContent>
            </Popover>
        </div>
    )
}
