"use client"

import { Button } from "@/ui/components/custom/button";
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { useState } from "react";
import { useBusinessFormContext } from "./business-form-provider";

export default function SubmitButton() {

    // const [isLoading, setIsLoading] = useState(false)

    const { isLoading } = useBusinessFormContext()

    return <Button loading={isLoading} form="business-onboarding-form" className="font-bold  gap-2 justify-center items-center hidden lg:flex">{isLoading ? "loading..." : "Continue"}  <ArrowRightIcon className="size-4" /></Button>
}