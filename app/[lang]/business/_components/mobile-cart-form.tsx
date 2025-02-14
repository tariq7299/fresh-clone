"use client"

import useBookingCart from "../_lib/hooks/use-booking-cart";
import { ApiServicesWithCategory } from "@/[lang]/professional/_lib/definitions";
import { Button } from "@/_ui/components/custom/button";
import { useBusinessFormContext } from "@/_lib/providers/business-form-provider";
import { MobileCartSkeleton } from "./skeletons";

interface MobileCartFormProps {
    servicesWithCategories: ApiServicesWithCategory[];
    dict: {
        business_page: {
            cart: {
                services: string;
                min: string;
                next: string;
                loading: string;
                hours: string;
            };
            add_service_card: {
                currency: string;
            };
        };
    };
}

export default function MobileCartForm({ servicesWithCategories, dict }: MobileCartFormProps) {

    const { isLoadingCartServices, selectedItems, isSelectServicesPage, timePageUrl } = useBookingCart({ servicesWithCategories })
    const { isLoading } = useBusinessFormContext()

    if (isLoadingCartServices) {
        return <MobileCartSkeleton />
    }

    return (
        <div className="flex justify-between items-center gap-1">
            <div className="flex flex-col gap-1">
                <p className="font-bold rtl:font-cairo">
                    {selectedItems?.totalAmount} {dict.business_page.add_service_card.currency}
                </p>
                <p className="text-muted-foreground text-xs">
                    {selectedItems?.totalCount} {dict.business_page.cart.services} . {selectedItems?.totalHours && `${selectedItems?.totalHours} ${dict.business_page.cart.hours}`}{" "}
                    {selectedItems?.totalMins ? `${selectedItems?.totalMins} ${dict.business_page.cart.min}` : ""}
                </p>
            </div>

            {isSelectServicesPage ? (
                <Button
                    isLink
                    href={timePageUrl}
                    disabled={selectedItems?.items?.length === 0}
                    className="rtl:font-cairo"
                >
                    {dict.business_page.cart.next}
                </Button>
            ) : (
                <Button
                    form="select-time-form"
                    type="submit"
                    disabled={selectedItems?.items?.length === 0 || isLoading}
                    className="rtl:font-cairo"
                >
                    {isLoading ? dict.business_page.cart.loading : dict.business_page.cart.next}
                </Button>
            )}
        </div>
    )
}
