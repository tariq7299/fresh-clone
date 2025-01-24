
import { cn } from "@/lib/utils/utils";
import { Button } from "@/ui/components/custom/button";
import { Plus, Check } from 'lucide-react';
import { getBusinessData } from "@/business/_lib/data";
import { Business } from "@/business/[id]/(business-overview)/page";
import ServicesTabs2 from "@/business/_components/services-tabs-2";
import { AddServiceCard } from "@/business/_components/add-service-card";
import { Suspense } from "react";

export default async function BookingPage(props: { params: Promise<{ id: string }>, searchParams: Promise<{ items: string }> }) {

    const params = await props.params
    const businessId = params?.id

    const businessData = await getBusinessData(businessId) as Business
    const services = businessData?.services_with_categories

    console.log("services", services)

    const tabTitles = services.map(service => service.name)

    console.log("tabTitles", tabTitles)
    // const tabTitles = ["Featured", "Hair", "Beard", "Facial", "Massage", "Manicure", "Pedicure", "Waxing", "Threading", "Body Treatment", "Spa Package", "Makeup", "Tanning", "Color Treatment", "Hair Treatment"]



    return <>


        <h1 className="text-4xl md:text-5xl font-bold font-source-sans pb-3">Select services</h1>

        {/* Services categories tabs */}
        <nav className="w-full bg-background sticky top-16 left-0 ">
            <ServicesTabs2 tabTitles={tabTitles} />
        </nav>

        <div className="grid grid-cols-1 justify-items-stretch gap-8 md:gap-3 w-full py-6 space-y-8">

            {services.map((serviceWithCategory) => (
                <section key={serviceWithCategory.name} id={serviceWithCategory.name} className="flex flex-col gap-4">
                    {/* Featured */}
                    <h2 className="text-2xl md:text-3xl font-bold font-source-sans pb-3">{serviceWithCategory.name}</h2>

                    {serviceWithCategory.services.map((service) => (
                        <Suspense key={service.id} fallback={<div>Loading...</div>}>
                            <AddServiceCard service={service} />
                        </Suspense>
                    ))}
                </section>
            ))}

            {/* service */}
            <div className="flex justify-between items-center w-full md:border border-gray-200 md:rounded-lg md:p-5 border-b pb-4 ring-2 ring-accent bg-accent/5 text-accent-700 transition-colors duration-200 cursor-pointer hover:bg-accent/10" >
                <div>
                    <p className="font-semibold text-lg">Featured</p>
                    <p className="text-sm text-muted-foreground pb-3">10min</p>
                    <p className="font-semibold text-sm">EGP 100</p>
                </div>
                <Button size={"icon"} className="font-semibold h-7 w-7 p-1  rounded-lg shadow-none text-background bg-accent transition-colors duration-200">
                    <Check />
                </Button>
            </div>



        </div>



    </>;
}