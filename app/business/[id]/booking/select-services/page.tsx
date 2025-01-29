
import { getBusinessData } from "@/business/_lib/data";
import { Business } from "@/business/[id]/(business-overview)/page";
import ServicesTabsScrollSpied from "@/business/_components/services-tabs-scroll-spied";
import { AddServiceCard } from "@/business/_components/add-service-card";
import { Suspense } from "react";
import { AddServiceCardSkeleton } from "@/business/_components/skeletons";

export default async function BookingPage(props: { params: Promise<{ id: string }>, searchParams: Promise<{ items: string }> }) {

    const params = await props.params
    const businessId = params?.id

    const businessData = await getBusinessData(businessId) as Business
    const services = businessData?.services_with_categories

    const tabTitles = services.map(service => service.name)

    return <>


        <h1 className="text-4xl md:text-5xl font-bold font-source-sans pb-3">Select services</h1>

        {/* Services categories tabs */}
        <nav className="w-full bg-background sticky top-16 left-0 ">
            <ServicesTabsScrollSpied tabTitles={tabTitles} />
        </nav>

        <div className="grid grid-cols-1 justify-items-stretch gap-8 md:gap-3 w-full py-6 space-y-8">

            {services.map((serviceWithCategory) => (
                <section key={serviceWithCategory.name} id={serviceWithCategory.name} className="flex flex-col gap-4 px-1">
                    {/* Featured */}
                    <h2 className="text-2xl md:text-3xl font-bold font-source-sans pb-3">{serviceWithCategory.name}</h2>

                    {serviceWithCategory.services.map((service) => (
                        <Suspense key={service.id} fallback={<AddServiceCardSkeleton />}>
                            <AddServiceCard service={service} />
                        </Suspense>
                    ))}
                </section>

            ))}

        </div>



    </>;
}