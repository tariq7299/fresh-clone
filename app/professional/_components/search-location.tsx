"use client"

import { useState } from "react";
import { Input } from "@/ui/components/input";
import {
    Popover,
    PopoverContent,
    PopoverAnchor,
} from "@/ui/components/popover"
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils/utils";
import { BusinessLocationErrors } from "./business-location-form";

export default function SearchLocation({ className, setOpen, open, handleSearch, handleSettingLocation, result, isSearching, clientFieldsErrors }: { className: string, setOpen: (open: boolean) => void, open: boolean, handleSearch: (value: string) => void, handleSettingLocation: (place: any) => void, result: any, isSearching: boolean, clientFieldsErrors: BusinessLocationErrors }) {

    // const [value, setValue] = useState("")

    return <div className={cn("flex flex-col gap-2", className)}>
        <Popover open={open} onOpenChange={setOpen} data-side={"bottom"}>
            <PopoverAnchor>
                <p className=" font-bold pb-1">Where is your business located?</p>
                <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2  text-muted-foreground/70">
                        <MapPin className="w-5 h-5" />
                    </div>
                    <Input onChange={(e) => handleSearch(e.target.value)} className="w-full  p-6 ps-12" />
                </div>
                {clientFieldsErrors?.address && <p className="text-sm text-destructive pt-2 ">{clientFieldsErrors?.address}</p>}
            </PopoverAnchor>

            <PopoverContent sideOffset={8} side="bottom" className=" text-nowrap truncate  w-[340px] sm:w-[500px] md:w-[630px] grid grid-cols-1  font-semibold rounded-lg p-2" onOpenAutoFocus={(e) => e.preventDefault()}>

                {isSearching && <p className="text-sm text-muted-foreground px-3 py-2">Searching for your address...</p>}

                {result && result.map((place: { formatted_address: string | undefined; geometry: { location?: { lat: () => number; lng: () => number; } | undefined; } | undefined; place_id: string | undefined; }) =>
                    <p
                        onClick={
                            () => {
                                setOpen(false)
                                handleSettingLocation(place)
                            }

                        } className="text-md  w-full text-nowrap truncate hover:bg-muted cursor-pointer p-3  rounded-lg" key={place.formatted_address}>{place.formatted_address}</p>)}
            </PopoverContent>
        </Popover>
    </div>
}