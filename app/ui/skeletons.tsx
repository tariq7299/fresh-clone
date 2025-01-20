import { Skeleton } from "./components/skeleton"

export function OnboardingBusinessNameSkeleton() {
    const fields = Array(5).fill(null);

    return <div className="w-full max-w-2xl mx-auto space-y-6">
        {fields.map((_, i) => (
            <div key={i} className="w-full space-y-2">
                <Skeleton className="w-24 h-2" />
                <Skeleton className="w-full h-12" />
            </div>
        ))}

        <div className="flex gap-2">
            {Array(2).fill(null).map((_, i) => (
                <div key={i} className="flex flex-col gap-4 border-1 border-gray-100 rounded-lg p-5 grow">
                    <Skeleton className="w-14 h-12 rounded-full" />
                    <Skeleton className="w-20 h-2" />
                </div>
            ))}
        </div>
    </div>
}

export function OnboardingBusinessCategorySkeleton() {
    const categories = Array(10).fill(null);

    return <div className="w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-stretch items-stretch md:grid-cols-3">
        {categories.map((_, i) => (
            <div key={i} className=" col-span-1 flex flex-col gap-4 border-1 border-gray-100 rounded-lg p-5 h-full">
                <Skeleton className="w-14 h-12 rounded-full" />
                <Skeleton className="w-24 h-2" />
            </div>
        ))}
    </div>
}

export function OnboardingBusinessServicesSkeleton() {
    const categories = Array(10).fill(null);

    return <div className="w-full max-w-4xl mx-auto ">
        <div className=" grid grid-cols-1 justify-items-stretch items-stretch gap-4">

            {Array(10).fill(null).map((_, i) => (
                <div key={i} className="flex gap-2 border-1 border-gray-100 rounded-lg p-6 justify-between">
                    <div className="flex flex-col gap-2">
                        <Skeleton className="w-24 h-6 rounded-full" />
                        <Skeleton className="w-14 h-3 rounded-full" />
                    </div>
                    <div className="flex gap-2 items-center">
                        <Skeleton className="w-6 h-3 rounded-full" />
                        <Skeleton className="w-6 h-3 rounded-full" />
                        <Skeleton className="ps-5 w-3 h-8 rounded-full" />
                    </div>
                </div>

            ))}
        </div>
    </div>
}