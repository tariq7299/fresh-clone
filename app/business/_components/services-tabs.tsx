"use client"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/ui/components/tabs";
import { ScrollArea, ScrollBar } from "@/ui/components/scroll-area"
import { Button } from "@/ui/components/custom/button";
import { ApiServicesWithCategory } from "@/professional/_lib/definitions";
import { useState } from "react";

export function ServicesTabs({ services }: { services: ApiServicesWithCategory[] }) {

    const tabTitles = services.map(service => service.name)

    // const [selectedTab, setSelectedTab] = useState<ApiServicesWithCategory | null>(null)

    // const handleTabChange = (tabTitleName: string) => {
    //     setSelectedTab(services.find(service => service.name === tabTitleName) || null)
    // } 

    console.log("services", services)



    return (

        <Tabs defaultValue={tabTitles[0]}>
            <TabsList className="w-full bg-transparent">
                <ScrollArea className="w-full whitespace-nowrap ">

                    <div className="flex gap-2 py-4">
                        {tabTitles.map((title, index) => (
                            <TabsTrigger className="data-[state=active]:bg-foreground data-[state=active]:text-background rounded-full font-bold text-foreground" value={title} key={title}>{title}</TabsTrigger>
                        ))}

                    </div>


                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </TabsList>

            {services.map((serviceWithCategory, index) => (
                <TabsContent key={index} value={serviceWithCategory.name} asChild>

                    <div className="grid grid-cols-1 justify-items-stretch gap-8 md:gap-3 w-full py-6">

                        {serviceWithCategory.services.map((service, index) => (
                            <div className="flex justify-between items-center w-full md:border border-gray-200 md:rounded-lg md:p-4" key={index}>
                                <div>
                                    <p className="font-semibold">{service.name}</p>
                                    <p className="text-sm text-muted-foreground pb-3">{service.duration}min</p>
                                    <p className="font-semibold text-sm">EGP {service.price}</p>
                                </div>

                                <Button borderType="fullRounded" variant={"outline"} className="font-semibold">Book</Button>
                            </div>
                        ))}

                    </div>
                </TabsContent>
            ))}

        </Tabs>
    )
}
