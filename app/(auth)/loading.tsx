"use client"

import { Skeleton } from "@/ui/components/skeleton";

export default function Loading() {
    return (
        <div className="flex flex-col gap-4">
            {/* Email field skeleton */}

            <div className="flex flex-col gap-2">
                <Skeleton className="h-4 w-12" /> {/* Label */}
                <Skeleton className="h-10 w-full rounded-md" /> {/* Input */}
            </div>

            {/* Password field skeleton */}
            <div className="flex flex-col gap-2">
                <Skeleton className="h-4 w-16" /> {/* Label */}
                <Skeleton className="h-10 w-full rounded-md" /> {/* Input */}
            </div>

            {/* Button skeleton */}
            <Skeleton className="h-10 w-full rounded-md" />

            {/* Sign up text skeleton */}
            <div className="flex flex-col justify-center items-center gap-1">
                <Skeleton className="h-4 w-20" /> {/* "First time?" text */}
                <Skeleton className="h-4 w-16" /> {/* "Sign up" link */}
            </div>
        </div>
    );
}