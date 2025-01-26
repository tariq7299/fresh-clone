"use client"

import { Button } from "@/ui/components/custom/button";
import { ApiService, ApiServicesWithCategory } from "@/professional/_lib/definitions";
import { useState, useEffect } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { getItemsFromSearchParams } from "../_lib/utils";
import { createPageURL } from "@/business/_lib/utils";

export default function CartForm({ servicesWithCategories }: { servicesWithCategories: ApiServicesWithCategory[] }) {


    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();
    const [selectedItems, setSelectedItems] = useState<{
        total: number
        items: ApiService[]
    }>({
        total: 0,
        items: []
    })

    const isBookingPage = pathname.includes("/select-services")
    const timePagePath = pathname.replace("/select-services", "/time")
    const isTimePage = pathname.includes("/time")

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        const servicesIds = getItemsFromSearchParams(searchParams)
        const allServices = servicesWithCategories.flatMap(servicesWithCategory => servicesWithCategory.services)

        const selectedServices = allServices.filter(service => servicesIds.includes(service.id))

        const total = selectedServices.reduce((acc, curr) => acc + curr.price, 0)

        setSelectedItems({ items: selectedServices, total })

        setIsLoading(false)
    }, [searchParams])



    if (isLoading) {
        return (
            <div className="flex flex-col gap-2 py-4">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="flex justify-between items-start animate-pulse">
                        <div className="space-y-2">
                            <div className="h-4 w-32 bg-muted rounded"></div>
                            <div className="h-3 w-20 bg-muted rounded"></div>
                        </div>
                        <div className="h-4 w-16 bg-muted rounded"></div>
                    </div>
                ))}

                <div className="mt-4 border-t pt-4">
                    <div className="flex justify-between items-center animate-pulse">
                        <div className="h-5 w-20 bg-muted rounded"></div>
                        <div className="h-4 w-24 bg-muted rounded"></div>
                    </div>
                    <div className="h-10 w-full bg-muted rounded mt-6"></div>
                </div>
            </div>
        )
    }




    return <>
        <div className="flex flex-col gap-2 max-h-[65dvh] overflow-y-auto pt-3 scroll-smooth snap-y snap-mandatory scroll-pt-6">


            {selectedItems?.items?.length > 0 ? selectedItems.items.map((item) => (
                <div key={item.id} className="flex justify-between items-start w-full  snap-start px-2" >
                    <div>
                        <p className="font-semibold ">{item.name}</p>
                        <p className="text-sm text-muted-foreground pb-3">{item.duration}min</p>
                    </div>
                    <p className="font-semibold text-sm">EGP {item.price}</p>
                </div>
            )) : <div className="flex justify-center items-center min-h-[5dvh] pb-3">
                <p className="text-sm text-muted-foreground">No services selected</p>
            </div>}

            <div className="sticky bottom-0 left-0 w-full bg-background pt-3.5  flex flex-col  items-center border-t-1 ">

                <div className="flex justify-between items-center w-full  font-bold text-lg " >
                    <p className="">Total</p>
                    <p className="">EGP {selectedItems?.total}</p>
                </div>

                <div className="w-full">

                    {isBookingPage ?
                        <Button isLink
                            href={createPageURL(timePagePath, searchParams)}
                            disabled={selectedItems?.items?.length === 0}
                            size="lg"
                            className="w-full mt-6 text-md">
                            Continue
                        </Button> :
                        <Button
                            disabled={selectedItems?.items?.length === 0} onClick={() => router.push("/login")} size="lg" className="w-full mt-6 text-md">
                            Continue
                        </Button>}

                    {/* <Button disabled={selectedItems?.items?.length === 0} onClick={() => router.push("/login")} size="lg" className="w-full mt-6 text-md">
                        Continue
                    </Button> */}
                </div>

            </div>
        </div>

    </>
}