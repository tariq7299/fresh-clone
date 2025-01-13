import { cn } from "@/lib/utils/utils"
import Image from "next/image"
import { CheckIcon } from "lucide-react"

// Supply the col-span-1 class
export default function BusinessCategoryCard({ categoryName, categoryIconUrl = "/categories/hair.png", categoryId }: { categoryName: string, categoryIconUrl: string, categoryId: string }) {

    return <label htmlFor={categoryId} className="col-span-1 relative  ">
        <input id={categoryId} type="radio" name="business-category" value={categoryId} className="peer appearance-none hidden " />
        <div className={cn(`flex flex-col justify-center gap-3 items-start rounded-lg p-5  border-2 border-gray-200  peer-checked:border-accent peer-checked:border-2 transition-all duration-200 box-border`,
        )}>

            <Image
                src={categoryIconUrl}
                alt={categoryName}
                width={32}
                height={32}
            />

            <h1 className='font-black'>{categoryName}</h1>
        </div>
        <div
            className={
                cn("absolute top-2 right-2 bg-accent text-background rounded-lg p-0.5  transition-opacity duration-200 opacity-0 peer-checked:opacity-100")
            }>
            <CheckIcon className="size-5" />
        </div>
    </label>
}