import BusinessServicesForm from './business-services-form';
import { Suspense } from 'react';
import { OnboardingBusinessServicesSkeleton } from '@/[lang]/professional/_components/skeletons';
import { getDictionary } from "@/_lib/dictionaries";

interface BusinessServicesPageProps {
    params: Promise<{ lang: "en" | "ar" }>;
}

export default async function BusinessServicesPage({ params }: BusinessServicesPageProps) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    return (
        <div className='w-full max-w-4xl p-5 py-24 min-h-dvh mx-auto space-y-8 pb-20'>
            <div className="flex flex-col w-full text-start space-y-1">
                <p className="text-sm text-muted-foreground text-start rtl:font-cairo">
                    {dict.onboarding.business_services.subtitle}
                </p>
                <h1 className="text-3xl lg:text-4xl font-bold font-source-sans rtl:font-cairo">
                    {dict.onboarding.business_services.title}
                </h1>
                <p className="text-sm text-muted-foreground rtl:font-cairo">
                    {dict.onboarding.business_services.description}
                </p>
            </div>

            <Suspense fallback={<OnboardingBusinessServicesSkeleton />}>
                <BusinessServicesForm lang={lang} dict={dict} />
            </Suspense>
        </div>
    );
}