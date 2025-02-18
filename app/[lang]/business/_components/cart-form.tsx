"use client"

import { Button } from "@/_ui/components/custom/button";
import { ApiServicesWithCategory } from "@/[lang]/professional/_lib/definitions";
import { useBusinessFormContext } from "@/_lib/providers/business-form-provider";
import useBookingCart from "../_lib/hooks/use-booking-cart";
import { DesktopCartSkeleton } from "./skeletons";

interface DesktopCartFormProps {
    servicesWithCategories: ApiServicesWithCategory[];
    dict: {
        business_page: {
            cart: {
                total: string;
                min: string;
                services: string;
                empty: {
                    description: string;
                };
                next: string;
                loading: string;
            };
            add_service_card: {
                currency: string;
            };
        };
    };
}

export default function DesktopCartForm({ servicesWithCategories, dict }: DesktopCartFormProps) {
    const { isLoading } = useBusinessFormContext()
    const { isLoadingCartServices, selectedItems, isSelectServicesPage, timePageUrl } = useBookingCart({ servicesWithCategories })

    if (isLoadingCartServices) {
        return <DesktopCartSkeleton />
    }

    return <>
        <div className="flex flex-col gap-2 max-h-[65dvh] overflow-y-auto pt-3 scroll-smooth snap-y snap-mandatory scroll-pt-6">
            {selectedItems?.items?.length > 0 ? selectedItems.items.map((item) => (
                <div key={item.id} className="flex justify-between items-start w-full snap-start px-2" >
                    <div>
                        <p className="font-semibold rtl:font-cairo">{item.name}</p>
                        <p className="text-sm text-muted-foreground pb-3">
                            {item.duration} {dict.business_page.cart.min}
                        </p>
                    </div>
                    <p className="font-semibold text-sm">
                        {item.price} {dict.business_page.add_service_card.currency}
                    </p>
                </div>
            )) : <div className="flex justify-center items-center min-h-[5dvh] pb-3">
                <p className="text-sm text-muted-foreground">
                    {dict.business_page.cart.empty.description}
                </p>
            </div>}

            <div className="sticky bottom-0 left-0 w-full bg-background pt-3.5 flex flex-col items-center border-t-1">
                <div className="flex justify-between items-center w-full font-bold text-lg">
                    <p className="rtl:font-cairo">{dict.business_page.cart.total}</p>
                    <p className="">
                        {selectedItems?.totalAmount} {dict.business_page.add_service_card.currency}
                    </p>
                </div>

                <div className="w-full">
                    {isSelectServicesPage ? (
                        <Button
                            isLink
                            href={timePageUrl}
                            disabled={selectedItems?.items?.length === 0}
                            size="lg"
                            className="w-full mt-6 text-md rtl:font-cairo"
                        >
                            {dict.business_page.cart.next}
                        </Button>
                    ) : (
                        <Button
                            form="select-time-form"
                            type="submit"
                            disabled={selectedItems?.items?.length === 0 || isLoading}
                            size="lg"
                            className="w-full mt-6 text-md rtl:font-cairo"
                        >
                            {isLoading ? dict.business_page.cart.loading : dict.business_page.cart.next}
                        </Button>
                    )}
                </div>
            </div>
        </div>
    </>
}