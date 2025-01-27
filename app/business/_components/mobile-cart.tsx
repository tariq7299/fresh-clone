"use client"

import { Button } from "@/ui/components/custom/button";
import { ApiService, ApiServicesWithCategory } from "@/professional/_lib/definitions";
import { useState, useEffect } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { getItemsFromSearchParams } from "../_lib/utils";
import { createPageURL } from "@/business/_lib/utils";
import { useBusinessFormContext } from "@/lib/providers/business-form-provider";

import SubmitButton from "@/ui/components/custom/submit-button";


export default function MobileCart() {

    const { isLoading } = useBusinessFormContext()
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

    const isSelectServicesPage = pathname.includes("/select-services")
    // const isTimePage = pathname.includes("/time")
    const timePagePath = pathname.replace("/select-services", "/time")

    const [isLoadingCartServices, setIsLoadingCartServices] = useState(true)

    useEffect(() => {

        const servicesIds = getItemsFromSearchParams(searchParams)
        const allServices = servicesWithCategories.flatMap(servicesWithCategory => servicesWithCategory.services)

        const selectedServices = allServices.filter(service => servicesIds.includes(service.id.toString()))

        const total = selectedServices.reduce((acc, curr) => acc + curr.price, 0)

        setSelectedItems({ items: selectedServices, total })

        setIsLoadingCartServices(false)
    }, [searchParams])




    return <div className="flex justify-between items-center">

        <div className="flex flex-col gap-1">
            <p className="text-sm">EGP 37</p>
            <p className="text-muted-foreground text-xs">3 services . 1 hour 25 mins</p>
        </div>
        <SubmitButton hasIcon={false} className="" />


    </div>
}