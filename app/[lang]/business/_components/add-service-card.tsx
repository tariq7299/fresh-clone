"use client"

import { cn } from "@/_lib/utils/utils";
import { ApiService } from "@/[lang]/professional/_lib/definitions";
import { Button } from "@/_ui/components/custom/button";
import { Plus, Check, Minus } from "lucide-react";
import { usePathname } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
// export const dynamic = 'force-dynamic'
import { AddServiceCardSkeleton } from "./skeletons";

export function AddServiceCard({ service }: { service: ApiService }) {

    const router = useRouter()

    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [items, setItems] = useState<string[]>([])
    const checked = items.includes(service.id.toString())
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setItems(getItemsFromSearchParams())
        setIsLoading(false)
    }, [searchParams])

    function getItemsFromSearchParams() {
        const items = searchParams.get("items")
        const itemsList = items?.split(",").map(item => item.trim()).filter(item => item !== "") || []
        return itemsList
    }


    function handleClickingService() {

        const newItems: string[] = checked ? items.filter(item => item !== service.id.toString()).filter(item => item !== "") : [...items, service.id.toString()]

        setItems(newItems)
        const params = new URLSearchParams(searchParams);
        params.set('items', newItems.join(","));

        // This will update the URL without triggering a full page reload
        window.history.replaceState(null, '', `${pathname}?${params.toString()}`);

        // TODO: Try to enable it again and test in production !
        // This is slower than window.history.replaceState !!!!!!!!!!! very weird !
        // Try to enable it againa and add service or remove service and see by yourself !, you will notive that the cart gets updated in more time than the window.history.replaceState !
        // Maybe in production it will be better to use it !
        // router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }

    if (isLoading) {
        return (
            <AddServiceCardSkeleton />
        )
    }

    return <div onClick={handleClickingService} className={cn("flex justify-between items-center w-full md:border border-gray-200 rounded-lg p-4 md:p-5 border-b pb-4 cursor-pointer hover:bg-accent/10 group transition-colors duration-150 ", checked ? "bg-accent/5 ring-2 ring-accent text-accent-600" : "")} >
        <div className="flex-auto overflow-hidden">
            <p className="font-semibold text-lg">{service.name}</p>
            <p className="text-sm text-muted-foreground">{service.duration}min</p>
            <p className="text-sm text-muted-foreground pb-3 text-nowrap truncate ">{service.description}</p>
            <p className="font-semibold text-sm">{service.price} EGP</p>
        </div>
        <div className="flex-none ">

            <Button size={"icon"} className={cn("font-semibold h-7 w-7 p-1 bg-muted rounded-lg shadow-none text-primary   transition-colors duration-150 ", checked ? "bg-accent text-background group-hover:bg-accent/90" : "group-hover:bg-accent/10")}>
                {checked ? <Check className="" /> : <Plus className="" />}
                {/* {checked ? (
                    <>
                        <Check className="group-hover:hidden" />
                        <Minus className="hidden group-hover:block" />
                    </>
                ) : (<Plus className="" />)} */}
            </Button>
        </div>
    </div >
}