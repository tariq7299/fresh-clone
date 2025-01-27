"use client"

import { createContext, useContext, useEffect, useState } from "react";
import { createPageURL, getItemsFromSearchParams } from "../utils";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";
import { ApiService, ApiServicesWithCategory } from "@/professional/_lib/definitions";





export default function useBookingCart({ servicesWithCategories }: { servicesWithCategories: ApiServicesWithCategory[] }) {

    const pathname = usePathname();
    const searchParams = useSearchParams();
    // const router = useRouter();
    const [selectedItems, setSelectedItems] = useState<{
        totalAmount: number,
        totalHours: string,
        totalMins: number | null,
        totalCount: number,
        items: ApiService[]
    }>({
        totalAmount: 0,
        totalHours: "",
        totalMins: null,
        totalCount: 0,
        items: []
    })

    const isSelectServicesPage = pathname.includes("/select-services")

    // const isTimePage = pathname.includes("/time")
    const timePagePath = pathname.replace("/select-services", "/time")

    const [isLoadingCartServices, setIsLoadingCartServices] = useState(true)

    const timePageUrl = createPageURL(timePagePath, searchParams)


    // const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const servicesIds = getItemsFromSearchParams(searchParams)
        const allServices = servicesWithCategories.flatMap(servicesWithCategory => servicesWithCategory.services)

        const selectedServices = allServices.filter(service => servicesIds.includes(service.id.toString()))

        const totalAmount = selectedServices.reduce((acc, curr) => acc + curr.price, 0)
        // const total = (selectedServices.reduce((acc, curr) => acc + curr.duration, 0) / 60).toFixed(2)
        const total = (selectedServices.reduce((acc, curr) => acc + curr.duration, 0) / 60).toFixed(2)
        // const totalDurationHour = (total / 60).toFixed(2)
        const totalHours = total.split(".")?.[0] === "0" ? "" : total.split(".")?.[0]
        const totalMins = (selectedServices.reduce((acc, curr) => acc + curr.duration, 0) % 60) ? (selectedServices.reduce((acc, curr) => acc + curr.duration, 0) % 60) : null
        const totalCount = selectedServices.length

        console.log(totalAmount, totalCount, totalHours, totalMins)
        const totalTest = (selectedServices.reduce((acc, curr) => acc + curr.duration, 0) % 60).toFixed(2)
        console.log(totalTest)

        setSelectedItems({ items: selectedServices, totalAmount, totalHours, totalMins, totalCount })


        setIsLoadingCartServices(false)
    }, [searchParams])


    return {
        isLoadingCartServices,

        selectedItems,
        isSelectServicesPage,
        timePageUrl
    };
}


