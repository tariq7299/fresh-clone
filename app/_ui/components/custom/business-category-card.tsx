"use client"

import { cn } from "@/_lib/utils/utils"
import Image from "next/image"
import { CheckIcon } from "lucide-react"

// Supply the col-span-1 class
export default function CategoryCard({ categoryName, categoryIconUrl = "/categories/hair.png", isPending, defaultChecked, className, categoryIconWidth = 32, categoryIconHeight = 32, inputName, inputValue }: { categoryName: string, categoryIconUrl: string, isPending: boolean, defaultChecked: boolean, className?: string, categoryIconWidth?: number, categoryIconHeight?: number, inputName: string, inputValue: string }) {

    return <label htmlFor={inputValue} className={cn("col-span-1 relative cursor-pointer w-full active:scale-95 transition-transform duration-150 before:content-[''] before:absolute before:inset-0 before:w-full before:h-full before:border-2 before:border-accent before:rounded-lg", isPending && "opacity-50 pointer-events-none", className)}>
        <input id={inputValue} type="radio" name={inputName} defaultChecked={defaultChecked} value={inputValue} className="peer appearance-none hidden" />
        <div className={cn(
            "flex flex-col justify-center gap-3 items-start rounded-lg p-5 transition-all duration-200 box-border",
            "border-1 border-gray-200 bg-background hover:bg-accent/5 ",
            "peer-checked:border-accent  peer-checked:bg-accent/5 peer-checked:text-accent-600 relative "
        )}>

            <Image
                src={categoryIconUrl}
                alt={categoryName}
                width={categoryIconWidth}
                height={categoryIconHeight}
            />

            <h1 className={cn(
                'font-black',
                ''
            )}>{categoryName}</h1>

        </div>
        <div className={cn(
            "absolute top-2 right-2 rtl:left-2 rtl:right-auto bg-accent text-background rounded-lg p-0.5 scale-75",
            "opacity-0 ", // Hidden by default
            "transition-all duration-200",
            "peer-checked:opacity-100 peer-checked:scale-100" // Show and scale up when checked
        )}>
            <CheckIcon className="size-5" />
        </div>
    </label>
}