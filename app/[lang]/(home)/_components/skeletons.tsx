import { div } from "framer-motion/client";
import { Skeleton } from "../../../_ui/components/skeleton"

export function ShopsCarouselSkeleton() {
    const fields = Array(5).fill(null);

    return <div className="mx-auto max-w-[1440px] space-y-4">

        <Skeleton className="w-44 h-4"></Skeleton>
        <div className="grid grid-flow-col auto-cols-max w-full gap-4 ">
            {Array(4).fill(null).map((_, i) => (
                <div key={i} className="w-full rounded-lg">
                    <Skeleton className="w-[350px] h-[230px]" />
                </div>
            ))}
        </div>
    </div>
}

export function NavBarSkeleton() {

    return <div className="fixed top-0 left-0 w-lvw  z-50 bg-white">
        <div className="p-5 flex justify-between items-center max-w-[1440px] m-auto pe-7">
            <div className="text-2xl font-extrabold font-lora text-primary">Lumière</div>

            <div className="hidden md:flex space-x-2 items-center">
                <Skeleton className="w-[110px] h-[36px] rounded-full" />
                <Skeleton className="w-[90px] h-[36px] rounded-full" />
            </div>
        </div>
    </div>
}
