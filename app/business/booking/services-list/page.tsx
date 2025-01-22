"use client"

import { useScrollspy } from "@/lib/hooks/use-scroll-spy";
import { cn } from "@/lib/utils/utils";
import { ScrollArea, ScrollBar } from "@/ui/components/scroll-area"
import { useState, useEffect } from "react"

export default function BookingPage() {

    const tabTitles = ["Featured", "Hair", "Beard", "Facial", "Massage"]


    const [elements, setElements] = useState<Element[]>([])
    const [currentIntersectingElementIndex] = useScrollspy(elements, { offset: 500 })

    useEffect(() => {

        const elements = tabTitles.map(title => document.getElementById(title))
        setElements(elements)
        console.log("currentIntersectingElementIndex", currentIntersectingElementIndex)
    }, [currentIntersectingElementIndex])


    return <div className="w-full max-w-6xl p-5 py-24 min-h-dvh  mx-auto space-y-8 pb-20">
        <div className=" grid grid-cols-1 md:grid-cols-3 md:grid-rows-2  gap-6">
            <div className="col-span-2 row-span-2">
                <div className="w-full bg-transparent">
                    <ScrollArea className="w-full whitespace-nowrap ">

                        <div className="flex gap-2 py-4 fixed top-0 left-0 w-full pt-20">
                            {tabTitles.map((title, index) => (
                                <div className={cn(" p-3 rounded-full font-bold bg-muted text-foreground", currentIntersectingElementIndex === index && "bg-foreground text-background")} key={title}>{title}</div>
                            ))}

                        </div>


                        <div className="grid gap-4" id="root-element">


                            <div id="Hair" className="h-[800px] bg-red-500">
                                <h1>Hair</h1>
                            </div>
                            <div id="Beard" className="h-[800px] bg-red-500">
                                <h1>Beard</h1>
                            </div>
                            <div id="Facial" className="h-[800px] bg-red-500">
                                <h1>Facial</h1>
                            </div>
                            <div id="Massage" className="h-[800px] bg-red-500">
                                <h1>Massage</h1>
                            </div>
                            <div id="Featured" className="h-[800px] bg-red-500">
                                <h1>Featured</h1>
                            </div>
                        </div>


                        <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                </div>
            </div>
        </div>
    </div>;
}