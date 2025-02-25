"use client"

import { useState } from "react";
import { Input } from "@/_ui/components/input";
import {
    Popover,
    PopoverContent,
    PopoverAnchor,
} from "@/_ui/components/popover"
import { MapPin } from "lucide-react";
import { cn } from "@/_lib/utils/utils";

export default function SearchLocation2({ className, setOpen, open, handleSearch, handleSettingLocation, result, isSearching, inputPlaceholder, inputClassName, triggerIcon, popoverClassName, triggerIconWrapperClassName }: { className?: string, setOpen: (open: boolean) => void, open: boolean, handleSearch: (value: string) => void, handleSettingLocation: (place: any) => void, result: any, isSearching: boolean, inputPlaceholder: string, inputClassName: string, triggerIcon: React.ReactNode, popoverClassName: string, triggerIconWrapperClassName: string }) {

    const [value, setValue] = useState("")

    return <div className={cn("flex flex-col gap-2", className)}>
        <Popover open={open} onOpenChange={setOpen} data-side={"bottom"}>
            <PopoverAnchor>
                {/* <p className=" font-bold pb-1">Where is your business located?</p> */}
                <div className="relative">
                    <div className={cn("absolute  top-1/2 -translate-y-1/2  ", triggerIconWrapperClassName)}>
                        {triggerIcon}
                        {/* <MapPin className={cn("size-5 text-muted-foreground/70", iconClassName)} /> */}
                    </div>
                    <Input value={value} onChange={(e) => {
                        handleSearch(e.target.value)
                        setValue(e.target.value)
                    }} className={cn("w-full  p-6 ps-12", inputClassName)} placeholder={inputPlaceholder} />
                </div>
            </PopoverAnchor>

            <PopoverContent sideOffset={8} side="bottom" className={cn(" text-nowrap truncate  ] grid grid-cols-1  font-semibold rounded-lg p-2", popoverClassName)} onOpenAutoFocus={(e) => e.preventDefault()}>

                {isSearching && <p className="text-sm text-muted-foreground px-3 py-2">Searching for your address...</p>}

                {result && result.map((place: { formatted_address: string | undefined; geometry: { location?: { lat: () => number; lng: () => number; } | undefined; } | undefined; place_id: string | undefined; }) =>
                    <p
                        onClick={
                            () => {
                                setOpen(false)
                                handleSettingLocation(place)
                                setValue(place.formatted_address || "")
                            }

                        } className="text-md  w-full text-nowrap truncate hover:bg-muted cursor-pointer p-3  rounded-lg" key={place.formatted_address}>{place.formatted_address}</p>)}
            </PopoverContent>
        </Popover>
    </div>
}