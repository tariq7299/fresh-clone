"use client"

import useBookingCart from "../_lib/hooks/use-booking-cart";
import { ApiServicesWithCategory } from "@/professional/_lib/definitions";
import { Button } from "@/_ui/components/custom/button";
import { useBusinessFormContext } from "@/_lib/providers/business-form-provider";
import { MobileCartSkeleton } from "./skeletons";

export default function MobileCartForm({ servicesWithCategories }: { servicesWithCategories: ApiServicesWithCategory[] }) {

    const { isLoadingCartServices, selectedItems, isSelectServicesPage, timePageUrl } = useBookingCart({ servicesWithCategories })


    const { isLoading } = useBusinessFormContext()

    if (isLoadingCartServices) {
        return <MobileCartSkeleton />
    }

    return <div className="flex justify-between items-center gap-1">

        <div className="flex flex-col gap-1">
            <p className="font-bold">EGP {selectedItems?.totalAmount}</p>
            <p className="text-muted-foreground text-xs">{selectedItems?.totalCount} services . {selectedItems?.totalHours} hours {selectedItems?.totalMins ? selectedItems?.totalMins + " mins" : ""}</p>
        </div>

        {isSelectServicesPage ?
            <Button isLink
                href={timePageUrl}
                disabled={selectedItems?.items?.length === 0}

                className="">
                Continue
            </Button> :
            <Button
                form="select-time-form"
                type="submit"
                disabled={selectedItems?.items?.length === 0 || isLoading} className="">
                {isLoading ? "Loading..." : "Continue"}
            </Button>}
    </div>
}
