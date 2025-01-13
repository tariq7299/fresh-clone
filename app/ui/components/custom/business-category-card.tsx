import { cn } from "@/lib/utils/utils"
import Image from "next/image"
import { CheckIcon } from "lucide-react"

// Supply the col-span-1 class
export default function BusinessCategoryCard({ checkedClassName, className }: { checkedClassName?: string, className?: string }) {
    return <div className={cn(`rounded-lg p-5 flex flex-col justify-center items-start border-1.5 border-gray-200 gap-3 ${checkedClassName}-checked:border-accent ${checkedClassName}-checked:border-2 transition-all duration-200`,
        className,
    )}>

        <div
            className={
                cn("absolute top-2 right-2 bg-accent text-background rounded-lg p-0.5 opacity-0 transition-opacity duration-200",
                    `${checkedClassName}-checked:opacity-100`)
            }>
            <CheckIcon className="size-5" />
        </div>

        <Image
            src="/categories/hair.png"
            alt="hair icon"
            width={32}
            height={32}
        />

        <h1 className='font-black'>Haircuts & styling</h1>
    </div>
}