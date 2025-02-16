import BusinessCapacityForm from "@/[lang]/professional/onboarding/business-capacity/business-capacity-form";
import { OnboardingBusinessCapacitySkeleton } from "@/[lang]/professional/_components/skeletons";
import { Suspense } from "react";
import { getDictionary } from "@/_lib/dictionaries";

export default async function BusinessCapacityPage({
    params: { lang }
}: {
    params: { lang: string }
}) {
    const dict = await getDictionary(lang);

    return <div className="w-full max-w-3xl p-5 py-24 min-h-dvh items-center m-auto space-y-5">
        <div className="w-full items-start space-y-1">
            <p className="text-sm text-muted-foreground text-start">
                {dict.onboarding.business_capacity.subtitle}
            </p>
            <h1 className="text-3xl lg:text-4xl font-bold font-source-sans rtl:font-cairo">
                {dict.onboarding.business_capacity.title}
            </h1>
            <p className="text-sm text-muted-foreground">
                {dict.onboarding.business_capacity.description}
            </p>
        </div>

        <Suspense fallback={<OnboardingBusinessCapacitySkeleton />}>
            <BusinessCapacityForm dict={dict} />
        </Suspense>
    </div>
}
