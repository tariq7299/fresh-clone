"use client"

// Import Filter type from appointments component
import { Filter } from "@/[lang]/customer/_lib/definitions"
// Import Popover components for dropdown functionality
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/_ui/components/popover"
// Import UI components
import { Button } from "../button"
import { Input } from "../input"
import { Label } from "../label"
// Import chevron icon for dropdown
import { ChevronDown } from 'lucide-react';
// Import Select components for dropdown selection
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/_ui/components/select"
// Import debounce hook for delayed filtering
import { useDebouncedCallback } from 'use-debounce';
// Import Next.js navigation hooks
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
// Import React hooks
import { useMemo, useState } from "react"
// Import custom date picker component
import { DatePickerWithRange } from "./date-range-picker"
// Import date formatting utility
import { format, set } from "date-fns"
import * as React from "react"
// Import DateRange type for date picker
import { DateRange } from "react-day-picker"

// Main component that handles table filtering
export default function TableFilterInput({ filter }: { filter: Filter }) {

    // Extract filter properties
    const filterLabel = filter.label
    const filterName = filter.colName
    // Return null if required props are missing
    if (!filterName || !filterLabel) return null

    // Get URL search params and navigation utilities
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const params = new URLSearchParams(searchParams)

    // Get previous query value from URL params
    const prevQuery = useMemo(() => {
        // Special handling for booking_date filter
        if (filter.type === "date") {
            const data = params.get('booking_date')
            return data ? JSON.parse(data) : undefined
        }
        return params.get(filterName)
    }, [params, filterName])

    // State for current filter value
    const [value, setValue] = useState(prevQuery ?? "")
    const router = useRouter()

    let handleFiltering;

    // Special handling for status filter - no debounce
    if (filter.type === "select") {
        handleFiltering = (query: string | DateRange | undefined) => {
            const params = new URLSearchParams(searchParams)

            // Reset to first page when filtering
            params.set('page', '1');
            if (query) {
                params.set(filterName, query.toString())
            } else {
                params.delete(filterName)
            }

            // Update URL with new params
            router.replace(`${pathname}?${params.toString()}`, { scroll: false })
        }
    } else {
        // Debounced filtering for other filter types
        handleFiltering = useDebouncedCallback((query: string | DateRange | undefined) => {
            const params = new URLSearchParams(searchParams)
            // Reset to first page when filtering
            params.set('page', '1');
            if (query) {
                // Special handling for date range filtering
                if (filterName === "booking_date" && typeof query !== "string") {
                    const formattedDate = {
                        from: query?.from ? format(query.from, "yyyy-MM-dd") : undefined,
                        to: query?.to ? format(query.to, "yyyy-MM-dd") : undefined
                    }
                    formattedDate && params.set(filterName, JSON.stringify(formattedDate))
                } else {
                    params.set(filterName, query.toString())
                }
            } else {
                params.delete(filterName)
            }

            // Update URL with new params
            router.replace(`${pathname}?${params.toString()}`, { scroll: false })

        }, 300) // 300ms debounce delay
    }

    // Handler for clearing the filter
    const handleClearingFilter = () => {
        params.delete(filterName)
        router.replace(`${pathname}?${params.toString()}`, { scroll: false })
        setValue("")
    }

    // Render filter UI
    return (
        <div className=" flex items-center gap-2">
            {/* Popover wrapper for filter dropdown */}
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
                        {/* Render different filter inputs based on filter type */}
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
                            </>
                        ) : filter.type === "select" ? (
                            <>
                                <div className="flex gap-2 items-center">
                                    {filter.icon}
                                    <Label className="text-md">{filterLabel as React.ReactNode || filter.colName}</Label>
                                </div>
                                <Select value={value} onValueChange={(v) => {
                                    setValue(v)
                                    handleFiltering(v)
                                }} >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select value" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            {/* Select header with clear button */}
                                            <div className='flex justify-between w-full items-center'>
                                                <SelectLabel className="p-2">{filterLabel as React.ReactNode || filter.colName}</SelectLabel>
                                                <Button
                                                    disabled={!value}
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={(e) => {
                                                        e.stopPropagation()
                                                        handleClearingFilter()
                                                    }}
                                                >
                                                    Clear
                                                </Button>
                                            </div>
                                            {/* Render select options */}
                                            {filter.options?.map((option: { id: string, label: string }) => (
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
                                {/* Custom date range picker component */}
                                <DatePickerWithRange value={value} defaultValue={prevQuery} onDateChange={setValue} />
                                {/* Date filter actions */}
                                <div className="flex gap-2">
                                    <Button disabled={!value} variant="outline" size="sm" onClick={handleClearingFilter}>Clear</Button>
                                    <Button disabled={!value} variant="outline" size="sm" onClick={() => handleFiltering(value)}>Apply</Button>
                                </div>
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