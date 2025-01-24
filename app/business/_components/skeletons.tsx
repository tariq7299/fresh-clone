export function SkeletonAddServiceCard() {
    return <div className="flex justify-between items-center w-full md:border border-gray-200 md:rounded-lg md:p-5 border-b pb-4">
        <div className="space-y-3">
            <div className="h-6 w-32 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-48 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
        </div>
        <div className="h-7 w-7 bg-gray-200 rounded-lg animate-pulse" />
    </div>
}