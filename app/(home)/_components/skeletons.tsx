import { div } from "framer-motion/client";
import { Skeleton } from "../../ui/components/skeleton"

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

