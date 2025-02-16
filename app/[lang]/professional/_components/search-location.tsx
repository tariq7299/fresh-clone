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
import { BusinessLocationErrors } from "../onboarding/business-location/form";

export default function SearchLocation({
    className,
    setOpen,
    open,
    handleSearch,
    handleSettingLocation,
    result,
    isSearching,
    clientFieldsErrors,
    online_business,
    dict
}: {
    className: string,
    setOpen: (open: boolean) => void,
    open: boolean,
    handleSearch: (value: string) => void,
    handleSettingLocation: (place: any) => void,
    result: any,
    isSearching: boolean,
    clientFieldsErrors: BusinessLocationErrors | null,
    online_business: boolean,
    dict: any
}) {
    return <div className={cn("flex flex-col gap-2", className)}>
        <Popover open={open} onOpenChange={setOpen} data-side={"bottom"}>
            <PopoverAnchor>
                <p className="font-bold pb-1">{dict.onboarding.business_location.search.title}</p>
                <div className="relative">
                    <div className="absolute left-4 rtl:right-4 rtl:left-auto top-1/2 -translate-y-1/2 text-muted-foreground/70">
                        <MapPin className="w-5 h-5" />
                    </div>
                    <Input
                        disabled={online_business}
                        onChange={(e) => handleSearch(e.target.value)}
                        className={cn("w-full p-6 ps-12 ")}
                    />
                </div>
                {clientFieldsErrors?.address && (
                    <p className="text-sm text-destructive pt-2">{clientFieldsErrors?.address}</p>
                )}
            </PopoverAnchor>

            <PopoverContent
                sideOffset={8}
                side="bottom"
                className="text-nowrap truncate w-[340px] sm:w-[500px] md:w-[630px] grid grid-cols-1 font-semibold rounded-lg p-2"
                onOpenAutoFocus={(e) => e.preventDefault()}
            >
                {isSearching && (
                    <p className="text-sm text-muted-foreground px-3 py-2">
                        {dict.onboarding.business_location.search.searching}
                    </p>
                )}

                {result && result.map((place: any) => (
                    <p
                        onClick={() => {
                            setOpen(false)
                            handleSettingLocation(place)
                        }}
                        className="text-md w-full text-nowrap truncate hover:bg-muted cursor-pointer p-3 rounded-lg"
                        key={place.formatted_address}
                    >
                        {place.formatted_address}
                    </p>
                ))}
            </PopoverContent>
        </Popover>
    </div>
}