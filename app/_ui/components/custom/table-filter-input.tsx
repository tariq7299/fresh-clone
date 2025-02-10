"use client"

import { Filter } from "@/[lang]/customer/_components/appointments"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/_ui/components/popover"
import { Button } from "../button"
import { Input } from "../input"
import { Label } from "../label"
import { ChevronDown } from 'lucide-react';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/_ui/components/select"
import { useReactTable, getCoreRowModel, getFilteredRowModel } from "@tanstack/react-table"
import { useDebouncedCallback } from 'use-debounce';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useMemo, useState } from "react"
import { DatePickerWithRange } from "./date-range-picker"
import { format } from "date-fns"
import * as React from "react"

export default function TableFilterInput({ filter, filterLabel }: { filter: Filter, filterLabel: string | undefined }) {

    const filterName = filter.colName
    // const filterLabel = table.getColumn(filter.colName)?.columnDef.header

    if (!filterName || !filterLabel) return null

    const searchParams = useSearchParams()
    const pathname = usePathname()
    const params = new URLSearchParams(searchParams)

    const prevQuery = useMemo(() => {
        if (filterName === "booking_date") {
            const data = params.get('booking_date')
            return data ? JSON.parse(data) : undefined
        }
        return params.get(filterName)
    }, [params, filterName])
    const router = useRouter()

    let handleFiltering;

    if (filterName === "status") {
        handleFiltering = (query: string | { from: string, to: string }) => {
            const params = new URLSearchParams(searchParams)

            // Set the page to be 1
            params.set('page', '1');
            if (query) {
                params.set(filterName, query.toString())
            } else {
                params.delete(filterName)
            }

            router.replace(`${pathname}?${params.toString()}`, { scroll: false })
        }
    } else {

        handleFiltering = useDebouncedCallback((query: string | { from: string, to: string }) => {
            const params = new URLSearchParams(searchParams)
            // Set the page to be 1
            params.set('page', '1');
            if (query) {
                if (filterName === "booking_date" && typeof query !== "string") {
                    const formattedDate = query?.from && query?.to ? {
                        from: format(query.from, "yyyy-MM-dd"),
                        to: format(query.to, "yyyy-MM-dd")
                    } : undefined
                    formattedDate && params.set(filterName, JSON.stringify(formattedDate))

                } else {
                    params.set(filterName, query.toString())
                }

            } else {
                params.delete(filterName)
            }


            router.replace(`${pathname}?${params.toString()}`, { scroll: false })
        }, 300)

    }



    return (
        <div className="pb-4 flex items-center gap-2">



            <Popover key={filter.colName}>
                <PopoverTrigger asChild>
                    <Button variant="ghost" className="bg-transparent border border-gray-300 rounded-lg flex items-center gap-2" >
                        {filter.icon}
                        <p className="text-sm"> {filterLabel as React.ReactNode || filter.colName}</p>
                        <ChevronDown className="w-4 h-4" />
                    </Button>


                </PopoverTrigger>
                <PopoverContent className="md:min-w-[300px]">


                    <div className="flex items-start gap-2 flex-col">


                        {filter.type === "string" ? (
                            <>
                                <div className="flex gap-2 items-center">
                                    {filter.icon}
                                    <Label className="text-md">{filterLabel as React.ReactNode || filter.colName}</Label>


                                </div>

                                <Input
                                    placeholder="Filter business name..." type="text"
                                    defaultValue={prevQuery ?? ""}
                                    onChange={(e) => {
                                        handleFiltering(e.target.value)
                                    }}
                                />
                                {/* <Input
                                    placeholder="Filter business name..." type="text"
                                    value={table.getColumn(filter.colName)?.getFilterValue() as string ?? ""}
                                    onChange={(e) => {
                                        table.getColumn(filter.colName)?.setFilterValue(e.target.value)
                                    }}
                                /> */}
                            </>


                        ) : filter.type === "select" ? (
                            <>
                                <div className="flex gap-2 items-center">
                                    {filter.icon}

                                    <Label className="text-md">{filterLabel as React.ReactNode || filter.colName}</Label>



                                </div>
                                <Select onValueChange={handleFiltering} defaultValue={prevQuery || ""}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select value" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>

                                            <div className='flex justify-between w-full items-center'>
                                                <SelectLabel className="p-2">{filterLabel as React.ReactNode || filter.colName}</SelectLabel>
                                                <Button
                                                    // disabled={!field?.value}
                                                    variant="outline"
                                                    size="sm"
                                                    // TODO: clear the filter




                                                    onClick={(e) => {
                                                        e.stopPropagation()
                                                        // setValue(`${filter?.filter_name}.fieldValue`, "")
                                                        console.log("clear")
                                                    }}
                                                >
                                                    Clear
                                                </Button>
                                            </div>
                                            {filter.options?.map((option) => (
                                                <SelectItem key={option.id} value={option.id}>
                                                    {option.label}
                                                </SelectItem>
                                            ))}


                                        </SelectGroup>

                                    </SelectContent>
                                </Select>
                            </>
                        ) : filter.type === "date" ? (
                            <>
                                <div className="flex gap-2 items-center">
                                    {filter.icon}


                                    <Label className="text-md">{filterLabel as React.ReactNode || filter.colName}</Label>



                                </div>
                                <DatePickerWithRange defaultValue={prevQuery} onDateChange={handleFiltering} />
                            </>
                        ) : (
                            <></>
                        )}








                    </div>

                </PopoverContent>
            </Popover>
        </div>
    )
}