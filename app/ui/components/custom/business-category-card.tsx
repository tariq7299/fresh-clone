import { cn } from "@/lib/utils/utils"
import Image from "next/image"
import { CheckIcon } from "lucide-react"
import { Button } from "./button"

// Supply the col-span-1 class
export default function BusinessCategoryCard({ categoryName, categoryIconUrl = "/categories/hair.png", categoryId }: { categoryName: string, categoryIconUrl: string, categoryId: string }) {

    return <label htmlFor={categoryId} className="col-span-1 relative cursor-pointer w-full active:scale-95 transition-transform duration-150">
        <input id={categoryId} type="radio" name="business-category" value={categoryId} className="peer appearance-none hidden" />
        <div className={cn(
            "flex flex-col justify-center gap-3 items-start rounded-lg p-5 transition-all duration-200 box-border",
            "border-1 border-gray-200 hover:bg-accent/5 ",
            "peer-checked:border-accent peer-checked:border-2 peer-checked:bg-accent/5 peer-checked:text-accent-600 "
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
            "absolute top-2 right-2 bg-accent text-background rounded-lg p-0.5",
            "opacity-0 ", // Hidden by default
            "transition-all duration-200",
            "peer-checked:opacity-100 peer-checked:scale-100" // Show and scale up when checked
        )}>
            <CheckIcon className="size-5" />
        </div>
    </label>
}