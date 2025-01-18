import { cn } from "@/lib/utils/utils";
import { Button } from "@/ui/components/custom/button";

// TODO: Write types
export default function LocationDetails({ address, className }: { address: any, className: string }) {
    return <>

        <div className={cn("flex gap-2 w-full justify-between", className)}>
            <div className="flex flex-col text-base ">
                {address.apt && <p className="">{address.apt}</p>}
                {address.address && <p className="">{address.address}</p>}
                {address.district && <p className="">{address.district}</p>}
                {address.city && <p className="">{address.city}</p>}
                {address.country && <p className="">{address.country}</p>}
            </div>
            <div>
                <Button size={"sm"} variant={"outline"} className="font-bold">Edit</Button>
            </div>

        </div>

    </>

}