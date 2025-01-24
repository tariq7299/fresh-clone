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
import { SkeletonAddServiceCard } from "./skeletons";

export function AddServiceCard({ service }: { service: ApiService }) {

    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [items, setItems] = useState<number[]>([])
    const checked = items.includes(service.id)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setItems(getItemsFromSearchParams())
        setIsLoading(false)
    }, [searchParams])

    function getItemsFromSearchParams() {
        const items = searchParams.get("items")
        const itemsList = items?.split(",").map(item => Number(item.trim())) || []
        return itemsList
    }


    function handleClickingService() {

        const newItems: number[] = checked ? items.filter(item => item !== service.id) : [...items, service.id]

        setItems(newItems)
        const params = new URLSearchParams(searchParams);
        params.set('items', newItems.join(","));

        // This will update the URL without triggering a full page reload
        window.history.replaceState(null, '', `${pathname}?${params.toString()}`);

        // I coudl't use router.replace because it will trigger like a partial page reload and ruins my scroll spied sections !
        // router.replace(`${pathname}?${params.toString()}`, undefined, { shallow: true });
    }

    if (isLoading) {
        return (
            <SkeletonAddServiceCard />
        )
    }

    return <div onClick={handleClickingService} className={cn("flex justify-between items-center w-full md:border border-gray-200 md:rounded-lg md:p-5 border-b pb-4 cursor-pointer hover:bg-accent/10 group transition-colors duration-150 ", checked ? "bg-accent/5 ring-2 ring-accent" : "")} >
        <div>
            <p className="font-semibold text-lg">{service.name}</p>
            <p className="text-sm text-muted-foreground">{service.duration}min</p>
            <p className="text-sm text-muted-foreground pb-3">{service.description}min</p>
            <p className="font-semibold text-sm">{service.price} EGP</p>
        </div>
        <Button size={"icon"} className={cn("font-semibold h-7 w-7 p-1 bg-muted rounded-lg shadow-none text-primary   transition-colors duration-150 ", checked ? "bg-accent text-background group-hover:bg-destructive" : "group-hover:bg-accent/10")}>
            {checked ? (
                <>
                    <Check className="group-hover:hidden" />
                    <Minus className="hidden group-hover:block" />
                </>
            ) : (<Plus className="" />)}
        </Button>
    </div>
}