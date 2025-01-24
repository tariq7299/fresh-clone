export default function Loading() {
    return <div className="w-full max-w-6xl p-5 py-24 min-h-dvh mx-auto space-y-8 pb-20">
        <div className="animate-pulse space-y-8">
            {/* Hero section */}
            <div className="space-y-4">
                <div className="h-12 w-3/4 bg-muted rounded-lg"></div>
                <div className="h-6 w-1/2 bg-muted rounded-lg"></div>
            </div>

            {/* Images grid */}
            <div className="hidden md:grid grid-cols-3 grid-rows-2 gap-6">
                <div className="col-span-2 row-span-2 aspect-[2/1] bg-muted rounded-lg"></div>
                <div className="col-start-3 col-span-1 row-start-1 aspect-square bg-muted rounded-lg"></div>
                <div className="col-start-3 col-span-1 row-start-2 aspect-square bg-muted rounded-lg"></div>
            </div>

            {/* Services section */}
            <div className="space-y-4">
                <div className="h-8 w-1/4 bg-muted rounded-lg"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="h-32 bg-muted rounded-lg"></div>
                    ))}
                </div>
            </div>

            {/* About section */}
            <div className="space-y-4">
                <div className="h-8 w-1/4 bg-muted rounded-lg"></div>
                <div className="h-24 bg-muted rounded-lg"></div>
                <div className="aspect-[2/1] bg-muted rounded-lg"></div>
            </div>
        </div>
    </div>
}