"use client"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/_ui/components/tabs";
import { ScrollArea, ScrollBar } from "@/_ui/components/scroll-area"
import { Button } from "@/_ui/components/custom/button";
import { ApiServicesWithCategory } from "@/[lang]/professional/_lib/definitions";
import { useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

interface ServicesOverviewProps {
    services: ApiServicesWithCategory[];
    dict: {
        business_page: {
            services_overview: {
                book: string;
                duration_min: string;
            }
        }
    }
}

export function ServicesOverview({ services, dict }: ServicesOverviewProps) {
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
                        {tabTitles.map((title) => (
                            <TabsTrigger
                                className="data-[state=active]:bg-foreground data-[state=active]:text-background rounded-full font-bold text-foreground"
                                value={title}
                                key={title}
                            >
                                {title}
                            </TabsTrigger>
                        ))}
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </TabsList>

            {services.map((serviceWithCategory) => (
                <TabsContent key={serviceWithCategory.name} value={serviceWithCategory.name} asChild>
                    <div className="grid grid-cols-1 justify-items-stretch gap-8 md:gap-3 w-full py-6">
                        {serviceWithCategory.services.map((service) => (
                            <div
                                className="flex justify-between items-center w-full md:border border-gray-200 md:rounded-lg md:p-4"
                                key={service.id}
                            >
                                <div>
                                    <p className="font-semibold">{service.name}</p>
                                    <p className="text-sm text-muted-foreground pb-3">
                                        {service.duration} {dict.business_page.services_overview.duration_min}
                                    </p>
                                    <p className="font-semibold text-sm">EGP {service.price}</p>
                                </div>

                                <Button
                                    borderType="fullRounded"
                                    isLink={true}
                                    href={createUrl(service.id)}
                                    variant={"outline"}
                                    className="font-semibold"
                                >
                                    {dict.business_page.services_overview.book}
                                </Button>
                            </div>
                        ))}
                    </div>
                </TabsContent>
            ))}
        </Tabs>
    )
}
