"use client"

import { Button } from "@/_ui/components/custom/button";
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { useState } from "react";
import { useBusinessFormContext } from "../../../_lib/providers/business-form-provider";
import { cn } from "@/_lib/utils/utils";

interface SubmitButtonProps {
    className?: string;
    hasIcon?: boolean;
    dict: {
        onboarding: {
            submit_button: {
                continue: string;
                loading: string;
            };
        };
    };
}

export default function SubmitButton({ className, hasIcon = true, dict }: SubmitButtonProps) {
    const { isLoading } = useBusinessFormContext();


    return <Button size={"lg"} loading={isLoading} form="business-onboarding-form" className={cn("font-bold flex gap-2 justify-center items-center", className)}>
        {isLoading ? dict.onboarding.submit_button.loading : (
            <>
                {dict.onboarding.submit_button.continue}
                {hasIcon && <ArrowRightIcon className="size-4 rtl:rotate-180" />}
            </>
        )}
    </Button>
}