"use client"

import { cn } from "@/lib/utils/utils";
import { ApiService } from "@/professional/_lib/definitions";
import { Button } from "@/ui/components/custom/button";
import { Plus, Check, Minus } from "lucide-react";
import { usePathname } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
// export const dynamic = 'force-dynamic'

export function AddServiceCard({ service }: { service: ApiService }) {

    //     const params = new URLSearchParams(searchParams);
    //     params.set('page', pageNumber.toString());
    //     return `${pathname}?${params.toString()}`;
    //   };

    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();
    const [items, setItems] = useState<number[]>([])

    const [isLoading, setIsLoading] = useState(true)



    useEffect(() => {
        setItems(getItems())
        setIsLoading(false)
    }, [searchParams])

    function getItems() {
        const items = searchParams.get("items")
        console.log("itemsInGetItems", items)
        const itemsList = items?.split(",").map(item => Number(item.trim())) || []
        console.log("itemsListInGetItems", itemsList)
        return itemsList
    }

    const checked = items.includes(service.id)
    console.log("items", items)

    // console.log("items.includes(service.id)", items.includes(service.id))


    function handleClickingSerivce() {

        // const items = getItems()
        // console.log("items", items)
        // Check first if it exists already if it does then remove it

        let newItems: number[] = []

        // If it doesn't exist then push it in itmes array
        if (items.includes(service.id)) {
            newItems = items.filter(item => item !== service.id)
        } else {
            newItems = [...items, service.id]
        }

        setItems(newItems)

        // console.log("newItems", newItems)
        const params = new URLSearchParams(searchParams);
        params.set('items', newItems.join(","));
        // This will update the URL without triggering a full page reload
        // router.push(`${pathname}?${params.toString()}`, undefined, { shallow: true })
        // router.replace(`${pathname}?${params.toString()}`, undefined, { shallow: true });

        // Update URL without full navigation
        window.history.replaceState(null, '', `${pathname}?${params.toString()}`);

        // window.history.pushState(null, '', `${pathname}?${params.toString()}`)


    }

    if (isLoading) {
        return (
            <div className="flex justify-between items-center w-full md:border border-gray-200 md:rounded-lg md:p-5 border-b pb-4">
                <div className="space-y-3">
                    <div className="h-6 w-32 bg-gray-200 rounded animate-pulse" />
                    <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
                    <div className="h-4 w-48 bg-gray-200 rounded animate-pulse" />
                    <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
                </div>
                <div className="h-7 w-7 bg-gray-200 rounded-lg animate-pulse" />
            </div>
        )
    }

    return <div onClick={handleClickingSerivce} className={cn("flex justify-between items-center w-full md:border border-gray-200 md:rounded-lg md:p-5 border-b pb-4 cursor-pointer hover:bg-accent/10 group transition-colors duration-150 ", items.includes(service.id) ? "bg-accent/5 ring-2 ring-accent" : "")} >
        <div>
            <p className="font-semibold text-lg">{service.name}</p>
            <p className="text-sm text-muted-foreground">{service.duration}min</p>
            <p className="text-sm text-muted-foreground pb-3">{service.description}min</p>
            <p className="font-semibold text-sm">{service.price} EGP</p>
        </div>
        <Button size={"icon"} className={cn("font-semibold h-7 w-7 p-1 bg-muted rounded-lg shadow-none text-primary   transition-colors duration-150 ", items.includes(service.id) ? "bg-accent text-background group-hover:bg-destructive" : "group-hover:bg-accent/10")}>
            {items.includes(service.id) ? (
                <>
                    <Check className="group-hover:hidden" />
                    <Minus className="hidden group-hover:block" />
                </>
            ) : (<Plus className="" />)}


        </Button>
    </div>
}