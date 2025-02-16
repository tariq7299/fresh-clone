import BusinessLocationForm from "@/[lang]/professional/onboarding/business-location/business-location-form";
import { MapProvider } from "@/_lib/providers/map-providers";
import { OnboardingBusinessLocationSkeleton } from "@/[lang]/professional/_components/skeletons";
import { Suspense } from "react";
import { getDictionary } from "@/_lib/dictionaries";

export default async function BusinessLocationPage({
    params
}: {
    params: Promise<{ lang: "en" | "ar" }>
}) {

    const lang = (await params)?.lang
    const dict = await getDictionary(lang as "en" | "ar");

    return (
        <MapProvider>
            <div className='w-full max-w-2xl p-5 py-24 min-h-dvh mx-auto space-y-8 pb-20'>
                <div className="flex flex-col w-full text-start space-y-1">
                    <p className="text-sm text-muted-foreground text-start">
                        {dict.onboarding.business_location.subtitle}
                    </p>
                    <h1 className="text-3xl lg:text-4xl font-bold font-source-sans rtl:font-cairo">
                        {dict.onboarding.business_location.title}
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        {dict.onboarding.business_location.description}
                    </p>
                </div>

                <Suspense fallback={<OnboardingBusinessLocationSkeleton />}>
                    <BusinessLocationForm dict={dict} />
                </Suspense>
            </div>
        </MapProvider>
    );
}

