"use client"

import { cn } from "@/lib/utils/utils"
import Image from "next/image"
import { CheckIcon } from "lucide-react"
import { Button } from "./button"

// Supply the col-span-1 class
export default function BusinessCategoryCard({ categoryName, categoryIconUrl = "/categories/hair.png", categoryId, isPending, defaultChecked }: { categoryName: string, categoryIconUrl: string, categoryId: string, isPending: boolean, defaultChecked: boolean }) {

    return <label htmlFor={categoryId} className={cn("col-span-1 relative cursor-pointer w-full active:scale-95 transition-transform duration-150 before:content-[''] before:absolute before:inset-0 before:w-full before:h-full before:border-2 before:border-accent before:rounded-lg", isPending && "opacity-50 pointer-events-none")}>
        <input id={categoryId} type="radio" name="category_id" defaultChecked={defaultChecked} value={categoryId} className="peer appearance-none hidden" />
        <div className={cn(
            "flex flex-col justify-center gap-3 items-start rounded-lg p-5 transition-all duration-200 box-border",
            "border-1 border-gray-200 bg-background hover:bg-accent/5 ",
            "peer-checked:border-accent  peer-checked:bg-accent/5 peer-checked:text-accent-600 relative "
        )}>

            <Image
                src={categoryIconUrl}
                alt={categoryName}
                width={32}
                height={32}
            />

            <h1 className={cn(
                'font-black',
                ''
            )}>{categoryName}</h1>

        </div>
        <div className={cn(
            "absolute top-2 right-2 bg-accent text-background rounded-lg p-0.5 scale-75",
            "opacity-0 ", // Hidden by default
            "transition-all duration-200",
            "peer-checked:opacity-100 peer-checked:scale-100" // Show and scale up when checked
        )}>
            <CheckIcon className="size-5" />
        </div>
    </label>
}