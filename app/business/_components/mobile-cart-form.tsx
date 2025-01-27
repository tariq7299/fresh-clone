"use client"

import SubmitButton from "@/ui/components/custom/submit-button";
import useBookingCart from "../_lib/hooks/use-booking-cart";
import { ApiServicesWithCategory } from "@/professional/_lib/definitions";
import { Button } from "@/ui/components/custom/button";
import { useBusinessFormContext } from "@/lib/providers/business-form-provider";

export default function MobileCartForm({ servicesWithCategories }: { servicesWithCategories: ApiServicesWithCategory[] }) {

    const { isLoadingCartServices, selectedItems, isSelectServicesPage, timePageUrl } = useBookingCart({ servicesWithCategories })




    const { isLoading } = useBusinessFormContext()

    if (isLoadingCartServices) {
        return <div className="flex flex-col gap-1">
            <div className="flex flex-col gap-1">
                <div className="h-4 w-16 bg-gray-200 animate-pulse rounded" />
                <div className="h-3 w-32 bg-gray-200 animate-pulse rounded" />
            </div>
            <div className="h-9 w-full bg-gray-200 animate-pulse rounded" />
        </div>
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
