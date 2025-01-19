import { cn } from "@/lib/utils/utils";
import { Button } from "@/ui/components/custom/button";

// TODO: Write types
export default function LocationDetails({ location, className }: { location: any, className: string }) {
    return <>

        <div className={cn("flex gap-2 w-full justify-between", className)}>
            <div className="flex flex-col text-base ">

                {(location.apartment || location.building || location.street) && <p className="">{`${location.street && location.street + ","} ${location.building && location.building + ","} ${location.apartment && location.apartment}`}</p>}

                {location.address && <p className="">{location.address}</p>}
                {location.district && <p className="">{location.district}</p>}
                {location.city && <p className="">{location.city}</p>}
                {location.country && <p className="">{location.country}</p>}
            </div>
            <div>
                <Button size={"sm"} variant={"outline"} className="font-bold">Edit</Button>
            </div>

        </div>

    </>

}