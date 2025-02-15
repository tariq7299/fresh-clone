import { getDictionary } from "@/_lib/dictionaries";
import BusinessCategoryForm from "./business-category-form";
import { Suspense } from "react";
import { OnboardingBusinessCategorySkeleton } from "@/[lang]/professional/_components/skeletons";

interface BusinessCategoryPageProps {
    params: {
        lang: "en" | "ar"
    };
}

export default async function BusinessCategoryPage({ params: { lang } }: BusinessCategoryPageProps) {
    const dict = await getDictionary(lang);

    return (
        <div className='w-full max-w-5xl p-5 py-24 min-h-dvh mx-auto space-y-8 pb-20'>
            <div className='flex flex-col gap-2 w-full'>
                <div className="text-start space-y-1">
                    <p className="text-sm text-muted-foreground text-start rtl:font-cairo">
                        {dict.onboarding.business_category.subtitle}
                    </p>
                    <h1 className="text-3xl lg:text-4xl font-bold font-source-sans rtl:font-cairo">
                        {dict.onboarding.business_category.title}
                    </h1>
                    <p className="text-sm text-muted-foreground rtl:font-cairo">
                        {dict.onboarding.business_category.description}
                    </p>
                </div>
            </div>
            <Suspense fallback={<OnboardingBusinessCategorySkeleton />}>
                <BusinessCategoryForm dict={dict} />
            </Suspense>
        </div>
    );
}