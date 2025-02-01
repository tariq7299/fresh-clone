'use client'
import { Combobox } from "@/_ui/components/combo-box";
import { Separator } from "@/_ui/components/separator";
import { Button } from "@/_ui/components/custom/button";
import { MagnifyingGlassIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { useGeolocation } from "@/_lib/hooks/use-geo-location";


export default function HeroFilterField() {

    const { defaultLng, defaultLat, loading, error } = useGeolocation();



    return (
        <form >

            {/* Write types */}
            <div className="flex gap-2 p-1.5 border rounded-lg justify-between mt-8 lg:mt-16 items-center bg-white  ">

                <Combobox triggerIconOnLeft={true} triggerIcon={<MagnifyingGlassIcon className="size-6" />} triggerClassName={"border-0 w-full z-10 "} labelClassName={"font-semibold"} popoverClassName={"w-[200px] sm:w-[400px]"} />

                <div className="self-stretch h-6 my-auto">
                    <Separator className=" me-1 my-auto" orientation="vertical" />
                </div>

                <Combobox triggerOnLeft={true} triggerIcon={<MapPinIcon className="size-6" />} triggerClassName={"border-0 w-full z-10 "} labelClassName={"font-semibold"} popoverClassName={"w-[200px] sm:w-[400px]"} />



                <Button variant="default" className="inline-flex gap-2 items-center h-8 rounded-md px-3 2xs:h-10 2xs:px-8"> <MagnifyingGlassIcon className="size-6" /> Search </Button>

            </div>
        </form>
    )
}