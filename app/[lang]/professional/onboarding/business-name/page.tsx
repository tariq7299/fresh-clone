import { getDictionary } from "@/_lib/dictionaries";
import BusinessNameForm from "./business-name-form";
import { Suspense } from "react";
import { OnboardingBusinessNameSkeleton } from "@/[lang]/professional/_components/skeletons";

interface BusinessNamePageProps {
    params: Promise<{ lang: "en" | "ar" }>
}

export default async function BusinessNamePage({ params }: BusinessNamePageProps) {
    const { lang } = await params
    const dict = await getDictionary(lang);

    return (
        <div className='w-full max-w-2xl p-5 py-24 min-h-dvh mx-auto space-y-8 pb-20'>
            <div className='flex flex-col gap-2 w-full'>
                <div className="text-start space-y-1">
                    <p className="text-sm text-muted-foreground text-start rtl:font-cairo">
                        {dict.onboarding.business_name.subtitle}
                    </p>
                    <h1 className="text-3xl lg:text-4xl font-bold font-source-sans rtl:font-cairo">
                        {dict.onboarding.business_name.title}
                    </h1>
                    <p className="text-sm text-muted-foreground rtl:font-cairo">
                        {dict.onboarding.business_name.description}
                    </p>
                </div>
            </div>
            <Suspense fallback={<OnboardingBusinessNameSkeleton />}>
                <BusinessNameForm dict={dict} />
            </Suspense>
        </div>
    );
}