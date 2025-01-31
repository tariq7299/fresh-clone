import { ScrollBar } from "@/_ui/components/scroll-area";
import { ScrollArea } from "@/_ui/components/scroll-area";
import { Skeleton } from "@/_ui/components/skeleton";

export function AddServiceCardSkeleton() {
    return <div className="w-full md:border border-gray-200 md:rounded-lg md:p-4">
        <div className="flex justify-between items-center">
            <div className="space-y-2">
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-16" />
            </div>
            <Skeleton className="h-9 w-20 rounded-full" />
        </div>
    </div>
}


export function BookingPageSkeleton() {
    return <>
        <Skeleton className="h-12 w-3/4 mb-6" /> {/* Title skeleton */}

        {/* Services categories tabs skeleton */}
        <nav className="w-full bg-background sticky top-16 left-0">
            <div className="flex gap-2 py-4 w-full whitespace-nowrap relative overflow-x-auto bg-background">
                <Skeleton className="h-10 w-24 rounded-full" />
                <Skeleton className="h-10 w-24 rounded-full" />
                <Skeleton className="h-10 w-24 rounded-full" />
            </div>
        </nav>

        <div className="grid grid-cols-1 justify-items-stretch gap-8 md:gap-3 w-full py-6 space-y-8">
            {/* Service category sections */}
            {[1, 2, 3].map((i) => (
                <section key={i} className="flex flex-col gap-4 px-1">
                    <Skeleton className="h-8 w-48 mb-4" /> {/* Category title skeleton */}

                    {/* Service cards skeletons */}
                    {[1, 2, 3].map((j) => (
                        <div key={j} className="w-full md:border border-gray-200 md:rounded-lg md:p-4">
                            <div className="flex justify-between items-center">
                                <div className="space-y-2">
                                    <Skeleton className="h-5 w-32" />
                                    <Skeleton className="h-4 w-24" />
                                    <Skeleton className="h-4 w-16" />
                                </div>
                                <Skeleton className="h-9 w-20 rounded-full" />
                            </div>
                        </div>
                    ))}
                </section>
            ))}
        </div>
    </>;
}


export function ServicesOverviewSkeleton() {
    return (
        <div>
            <ScrollArea className="w-full whitespace-nowrap">
                <div className="flex gap-2 py-4">
                    {[1, 2, 3].map((i) => (
                        <Skeleton key={i} className="h-10 w-24 rounded-full" />
                    ))}
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>

            <div className="grid grid-cols-1 justify-items-stretch gap-8 md:gap-3 w-full py-6">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="flex justify-between items-center w-full md:border border-gray-200 md:rounded-lg md:p-4">
                        <div>
                            <Skeleton className="h-5 w-32 mb-2" />
                            <Skeleton className="h-4 w-24 mb-3" />
                            <Skeleton className="h-4 w-16" />
                        </div>
                        <Skeleton className="h-9 w-20 rounded-full" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export function DesktopCartSkeleton() {
    return <div className="flex flex-col gap-2 py-4">
        {[1, 2, 3].map((i) => (
            <div key={i} className="flex justify-between items-start animate-pulse">
                <div className="space-y-2">
                    <div className="h-4 w-32 bg-muted rounded"></div>
                    <div className="h-3 w-20 bg-muted rounded"></div>
                </div>
                <div className="h-4 w-16 bg-muted rounded"></div>
            </div>
        ))}

        <div className="mt-4 border-t pt-4">
            <div className="flex justify-between items-center animate-pulse">
                <div className="h-5 w-20 bg-muted rounded"></div>
                <div className="h-4 w-24 bg-muted rounded"></div>
            </div>
            <div className="h-10 w-full bg-muted rounded mt-6"></div>
        </div>
    </div>
}
export function MobileCartSkeleton() {
    return <div className="flex flex-col gap-1">
        <div className="flex flex-col gap-1">
            <div className="h-4 w-16 bg-gray-200 animate-pulse rounded" />
            <div className="h-3 w-32 bg-gray-200 animate-pulse rounded" />
        </div>
        <div className="h-9 w-full bg-gray-200 animate-pulse rounded" />
    </div>
}

