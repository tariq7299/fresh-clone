"use client"

/*Since the map was loaded on client side, 
we need to make this component client rendered as well*/
'use client'

import { Map as MapComponent, Marker, MapCameraChangedEvent, useMapsLibrary, useMap } from "@vis.gl/react-google-maps";
import { useCallback, useEffect, useState } from "react";
import { Input } from "@/ui/components/input";
import { useGeolocation } from "@/lib/hooks/use-geo-location";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
    PopoverAnchor,
    PopoverPortal
} from "@/ui/components/popover"
import { useDebouncedCallback } from "use-debounce";
import { MapPin } from "lucide-react";
import { Checkbox } from "@/ui/components/checkbox";
import { Button } from "@/ui/components/custom/button";
import { cn } from "@/lib/utils/utils";

export default function SearchLocation({ className, setOpen, open, handleSearch, handleSettingLocation, result, isSearching }: { className: string, setOpen: (open: boolean) => void, open: boolean, handleSearch: (value: string) => void, handleSettingLocation: (place: any) => void, result: any, isSearching: boolean }) {

    const [value, setValue] = useState("")

    // console.log('open', open)
    // console.log('result', result)


    return <div className={cn("flex flex-col gap-2", className)}>
        <Popover open={open} onOpenChange={setOpen} data-side={"bottom"}>
            <PopoverAnchor>
                <p className=" font-bold pb-1">Where is your business located?</p>
                <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2  text-muted-foreground/70">
                        <MapPin className="w-5 h-5" />
                    </div>
                    <Input value={value} onChange={(e) => {
                        handleSearch(e.target.value)
                        setValue(e.target.value)
                    }} className="w-full  p-6 ps-12" />
                </div>
                <p className="text-sm text-destructive pt-1
            ">Please enter a valid address</p>
            </PopoverAnchor>

            <PopoverContent sideOffset={8} side="bottom" className=" text-nowrap truncate  w-[340px] sm:w-[500px] md:w-[630px] grid grid-cols-1  font-semibold rounded-lg p-2" onOpenAutoFocus={(e) => e.preventDefault()} onInteractOutside={(e) => {
                // setOpen(false)
                // setValue("")
                // setQuery("")
                // e.preventDefault()
            }}>
                {isSearching && <p className="text-sm text-muted-foreground px-3 py-2">Searching for your address...</p>}
                {/* <div className=" text-wrap truncate"> */}
                {result && result.map((place: { formatted_address: string | undefined; geometry: { location?: { lat: () => number; lng: () => number; } | undefined; } | undefined; place_id: string | undefined; }) =>
                    <p
                        onClick={
                            () => {
                                setOpen(false)
                                handleSettingLocation(place)
                            }

                        } className="text-md  w-full text-nowrap truncate hover:bg-muted cursor-pointer p-3  rounded-lg" key={place.formatted_address}>{place.formatted_address}</p>)}

                {/* </div> */}
            </PopoverContent>
        </Popover>



    </div>

}