"use client"

import { Button } from "@/ui/components/custom/button";
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { useState } from "react";
import { useBusinessFormContext } from "../../../lib/providers/business-form-provider";
import { cn } from "@/lib/utils/utils";

export default function SubmitButton({ className, hasIcon = true }: { className?: string, hasIcon?: boolean }) {

    // const [isLoading, setIsLoading] = useState(false)

    const { isLoading } = useBusinessFormContext()

    return <Button size={"lg"} loading={isLoading} form="business-onboarding-form" className={cn("font-bold flex gap-2 justify-center items-center", className)}>
        {isLoading ? "loading..." : (
            <>
                Continue
                {hasIcon && <ArrowRightIcon className="size-4" />}
            </>
        )}
    </Button>
}