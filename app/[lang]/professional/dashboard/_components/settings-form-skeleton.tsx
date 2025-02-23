import { Skeleton } from "@/_ui/components/skeleton"

export default function SettingsFormSkeleton() {
    return (
        <>
            <section className='space-y-2 pb-8'>
                <Skeleton className="h-7 w-40" /> {/* Title skeleton */}

                <div className='bg-muted rounded-lg p-6 flex flex-col space-y-6 md:space-y-4 justify-center items-center'>
                    <div className='grid grid-cols-2 gap-4 w-full'>
                        {/* Personal Info Fields */}
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className='flex flex-col space-y-2'>
                                <Skeleton className="h-4 w-24" /> {/* Label skeleton */}
                                <Skeleton className="h-10 w-full" /> {/* Input skeleton */}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-end items-center w-full">
                    <Skeleton className="h-10 w-20" /> {/* Button skeleton */}
                </div>
            </section>

            <section className='space-y-2 pb-4'>
                <Skeleton className="h-7 w-24" /> {/* Security title skeleton */}

                <div className='bg-muted rounded-lg p-6 flex flex-col space-y-6 md:space-y-4 justify-center items-center'>
                    <div className='grid grid-cols-2 gap-4 w-full'>
                        {/* Security Fields */}
                        {[1, 2, 3].map((i) => (
                            <div key={i} className='flex flex-col space-y-2'>
                                <Skeleton className="h-4 w-32" /> {/* Label skeleton */}
                                <Skeleton className="h-10 w-full" /> {/* Input skeleton */}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-end items-center w-full">
                    <Skeleton className="h-10 w-20" /> {/* Button skeleton */}
                </div>
            </section>
        </>
    )
} 