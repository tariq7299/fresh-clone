"use client"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/_ui/components/tabs";
import { ScrollArea, ScrollBar } from "@/_ui/components/scroll-area"
import { Button } from "@/_ui/components/custom/button";
import { ApiServicesWithCategory } from "@/[lang]/professional/_lib/definitions";
import { useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export function ServicesOverview({ services }: { services: ApiServicesWithCategory[] }) {

    const tabTitles = services.map(service => service.name)

    const searchParams = useSearchParams()
    const pathname = usePathname()

    // const [selectedTab, setSelectedTab] = useState<ApiServicesWithCategory | null>(null)

    // const handleTabChange = (tabTitleName: string) => {
    //     setSelectedTab(services.find(service => service.name === tabTitleName) || null)
    // } 

    const createUrl = (serviceId: number) => {

        const params = new URLSearchParams(searchParams)
        params.set('items', serviceId.toString())

        return `${pathname}/booking/select-services?${params.toString()}`
    }

    return (

        <Tabs defaultValue={tabTitles[0]}>
            <TabsList className="w-full bg-transparent">
                <ScrollArea className="w-full whitespace-nowrap ">

                    <div className="flex gap-2 py-4">
                        {tabTitles.map((title, _) => (
                            <TabsTrigger className="data-[state=active]:bg-foreground data-[state=active]:text-background rounded-full font-bold text-foreground" value={title} key={title}>{title}</TabsTrigger>
                        ))}

                    </div>


                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </TabsList>

            {services.map((serviceWithCategory, _) => (
                <TabsContent key={serviceWithCategory.name} value={serviceWithCategory.name} asChild>

                    <div className="grid grid-cols-1 justify-items-stretch gap-8 md:gap-3 w-full py-6">

                        {serviceWithCategory.services.map((service, _) => (
                            <div className="flex justify-between items-center w-full md:border border-gray-200 md:rounded-lg md:p-4" key={service.id}>
                                <div>
                                    <p className="font-semibold">{service.name}</p>
                                    <p className="text-sm text-muted-foreground pb-3">{service.duration}min</p>
                                    <p className="font-semibold text-sm">EGP {service.price}</p>
                                </div>

                                <Button borderType="fullRounded" isLink={true} href={createUrl(service.id)} variant={"outline"} className="font-semibold">Book</Button>
                            </div>
                        ))}

                    </div>
                </TabsContent>
            ))}

        </Tabs>
    )
}
