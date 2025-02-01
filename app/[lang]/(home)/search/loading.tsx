import { NavBarSkeleton } from "../_components/skeletons";

export default function SearchLoading() {
    return (
        <div className="container mx-auto  max-w-2xl mt-24 ">

            <div className="flex flex-col space-y-12">


                {/* Results grid skeleton */}
                <div className="grid grid-cols-1 gap-6">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="border rounded-lg p-4 space-y-4">
                            <div className="h-72 bg-gray-200 animate-pulse rounded-md"></div>
                            <div className="space-y-2">
                                <div className="h-6 w-3/4 bg-gray-200 animate-pulse rounded-md"></div>
                                <div className="h-4 w-1/2 bg-gray-200 animate-pulse rounded-md"></div>
                                <div className="h-4 w-1/4 bg-gray-200 animate-pulse rounded-md"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}