import { getBusinessStepFormData } from '@/professional/_lib/data';
import { getAllCategories } from '@/lib/data';
import BusinessCategoryForm, { StoredTempCategory } from '@/professional/onboarding/business-category/business-category-form';
import { OnboardingBusinessCategorySkeleton } from '@/ui/skeletons';
import { Suspense } from 'react';

export default function BusinessCategoryPage() {

    return <div className='w-full max-w-5xl p-5 py-24 min-h-dvh  mx-auto space-y-8 pb-20'>

        <div className='flex flex-col gap-2 w-full'>

            <div className="text-start space-y-1">

                <p className="text-sm text-muted-foreground text-start"> Account setup</p>

                <h1 className="text-3xl lg:text-4xl font-bold font-source-sans"> What's your speciality?</h1>

                <p className="text-sm text-muted-foreground ">Choose a category that best describes your business.</p>
            </div>
        </div>
        <Suspense fallback={<OnboardingBusinessCategorySkeleton />}>
            <BusinessCategoryForm />
        </Suspense>
    </div>
}