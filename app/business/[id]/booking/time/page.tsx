"use client"

import { Button } from "@/ui/components/custom/button"
import { Calendar } from "@/ui/components/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/components/popover"
import { CalendarIcon, CalendarOff } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils/utils"
import { format } from "date-fns"
import Link from "next/link"

export default function TimePage() {

    const [date, setDate] = useState<Date | undefined>(new Date())
    return <>

        <h1 className="text-4xl md:text-5xl font-bold font-source-sans ">Select time</h1>
        <div className="space-y-8">

            <div className="flex justify-between items-center">
            </div>
            <div className="flex justify-between items-center">

                <p className="text-2xl font-bold text-primary">
                    <span className="text-accent">21</span>, January 2025
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
                                console.log("date", date)
                                return date > new Date() || date < new Date("1900-01-01")
                            }}
                            initialFocus
                        />
                    </PopoverContent>
                </Popover>
            </div>


            <div className=" w-full">

                <div className="grid grid-cols-1 gap-4">

                    <div className="flex justify-start grow border-b md:border border-gray-200 md:rounded-lg py-4 md:p-5 cursor-pointer hover:bg-accent/5 transition-colors duration-150">
                        <p className="text-xl font-semibold ">9:00 AM</p>
                    </div>
                    <div className="flex justify-start grow border-b md:border border-gray-200 md:rounded-lg py-4 md:p-5 cursor-pointer hover:bg-accent/5 transition-colors duration-150 ring-2 ring-accent text-accent-600 bg-accent/5">
                        <p className="text-xl font-semibold">9:00 AM</p>
                    </div>
                    <div className="flex justify-start grow border-b md:border border-gray-200 md:rounded-lg py-4 md:p-5">
                        <p className="text-xl font-semibold">9:00 AM</p>
                    </div>
                    <div className="flex justify-start grow border-b md:border border-gray-200 md:rounded-lg py-4 md:p-5">
                        <p className="text-xl font-semibold">9:00 AM</p>
                    </div>
                    <div className="flex justify-start grow border-b md:border border-gray-200 md:rounded-lg py-4 md:p-5">
                        <p className="text-xl font-semibold">9:00 AM</p>
                    </div>
                    <div className="flex justify-start grow border-b md:border border-gray-200 md:rounded-lg py-4 md:p-5">
                        <p className="text-xl font-semibold">9:00 AM</p>
                    </div>
                    <div className="flex justify-start grow border-b md:border border-gray-200 md:rounded-lg py-4 md:p-5">
                        <p className="text-xl font-semibold">9:00 AM</p>
                    </div>
                    <div className="flex justify-start grow border-b md:border border-gray-200 md:rounded-lg py-4 md:p-5">
                        <p className="text-xl font-semibold">9:00 AM</p>
                    </div>
                    <div className="flex justify-start grow border-b md:border border-gray-200 md:rounded-lg py-4 md:p-5">
                        <p className="text-xl font-semibold">9:00 AM</p>
                    </div>
                    <div className="flex justify-start grow border-b md:border border-gray-200 md:rounded-lg py-4 md:p-5">
                        <p className="text-xl font-semibold">9:00 AM</p>
                    </div>





                </div>

                {/* <div className="min-h-[400px] flex flex-col items-center justify-center gap-4 md:border md:border-gray-200 rounded-lg">

                    <CalendarOff className="text-accent size-14 sm:size-16 md:size-16" />
                    <p className="text-xl font-bold">Fully booked on this date</p>
                </div> */}
            </div>

        </div>
        <Link href="/login" scroll={false}>
            <Button>
                test
            </Button>
        </Link>
        <Link href="/register" scroll={false}>
            <Button>
                test
            </Button>
        </Link>
        <Link href="/otp-verification" scroll={false}>
            <Button>
                test
            </Button>
        </Link>

    </>
}