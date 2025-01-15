"use client"
import { useId } from "react"

export default function Steps(
    { numberOfsteps, currentStep }
        : {
            numberOfsteps: number
            currentStep: number
        }
) {

    const id = useId()

    if (numberOfsteps === 0) return null

    const numberOfLitSteps = currentStep
    const numberOfUnlitSteps = numberOfsteps - currentStep

    return <div className="flex gap-2 w-full justify-center items-center  m-auto">
        {Array.from({ length: numberOfLitSteps }, (_, i) => (<div key={id + i} className="rounded-full bg-accent-400 flex-auto h-1" />))}
        {Array.from({ length: numberOfUnlitSteps }, (_, i) => (<div key={id + i + numberOfLitSteps} className="rounded-full bg-muted flex-auto h-1" />))}
    </div>

}