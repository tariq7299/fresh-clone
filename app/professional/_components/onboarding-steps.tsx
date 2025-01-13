"use client"
import { usePathname } from "next/navigation"
import Steps from "../../ui/components/custom/steps"

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
        name: "business-services",
        order: 3
    },
    {
        name: "business-capacity",
        order: 4
    },
    {
        name: "business-location",
        order: 5
    },
    {
        name: "business-demographics",
        order: 6
    },
]

export default function OnboardingSteps() {
    // Get the last segment of the pathname which represents the current step
    const pathname = usePathname()
    const currentStepName = pathname?.split("/").pop() || ""

    const currentStepNumber = ONBOARDING_STEPS.find(step => step.name === currentStepName)?.order || 1
    const numberOfSteps = ONBOARDING_STEPS.length

    return <Steps numberOfsteps={numberOfSteps} currentStep={currentStepNumber} />
}