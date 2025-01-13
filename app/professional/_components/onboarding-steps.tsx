"use client"
import { usePathname } from "next/navigation"
import Steps from "./steps"

const ONBOARDING_STEPS = [
    {
        name: "business-name",
        order: 1
    },
    {
        name: "business-category",
        order: 2
    },
    {
        name: "business-location",
        order: 3
    }
]

export default function OnboardingSteps() {
    // Get the last segment of the pathname which represents the current step
    const pathname = usePathname()
    const currentStepName = pathname?.split("/").pop() || ""

    const currentStepNumber = ONBOARDING_STEPS.find(step => step.name === currentStepName)?.order || 1
    const numberOfSteps = ONBOARDING_STEPS.length

    return <Steps numberOfsteps={numberOfSteps} currentStep={currentStepNumber} />
}