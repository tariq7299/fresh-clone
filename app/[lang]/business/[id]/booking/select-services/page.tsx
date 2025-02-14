import { getBusinessData } from "@/[lang]/business/_lib/data";
import { Business } from "@/[lang]/business/[id]/(business-overview)/page";
import ServicesTabsScrollSpied from "@/[lang]/business/_components/services-tabs-scroll-spied";
import { AddServiceCard } from "@/[lang]/business/_components/add-service-card";
import { Suspense } from "react";
import { AddServiceCardSkeleton } from "@/[lang]/business/_components/skeletons";
import { getDictionary } from "@/_lib/dictionaries";

export default async function BookingPage(props: { params: Promise<{ id: string, lang: "en" | "ar" }>, searchParams: Promise<{ items: string }> }) {

    const params = await props.params
    const businessId = params?.id
    const lang = params.lang

    const businessData = await getBusinessData(businessId, lang) as Business
    const dict = await getDictionary(lang)
    const services = businessData?.services_with_categories

    const tabTitles = services.map(service => service.name)

    return <>
        <h1 className="text-4xl md:text-5xl font-bold font-source-sans rtl:font-cairo rtl:font-bold pb-3">
            {dict.business_page.select_services.title}
        </h1>

        {/* Services categories tabs */}
        <nav className="w-full bg-background sticky top-16 left-0 ">
            <ServicesTabsScrollSpied tabTitles={tabTitles} />
        </nav>

        <div className="grid grid-cols-1 justify-items-stretch gap-8 md:gap-3 w-full py-6 space-y-8">
            {services.map((serviceWithCategory) => (
                <section key={serviceWithCategory.name} id={serviceWithCategory.name} className="flex flex-col gap-4 px-1">
                    <h2 className="text-2xl md:text-3xl font-bold font-source-sans rtl:font-cairo rtl:font-bold pb-3">
                        {serviceWithCategory.name}
                    </h2>

                    {serviceWithCategory.services.map((service) => (
                        <Suspense key={service.id} fallback={<AddServiceCardSkeleton />}>
                            <AddServiceCard service={service} dict={dict} />
                        </Suspense>
                    ))}
                </section>
            ))}
        </div>
    </>;
}