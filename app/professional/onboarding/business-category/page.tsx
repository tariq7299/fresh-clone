import { getBusinessStepFormData } from '@/professional/_lib/data';
import { getAllCategories } from '@/lib/data';
import BusinessCategoryForm, { StoredTempCategory } from '@/professional/_components/business-category-form';
import { OnboardingBusinessCategorySkeleton } from '@/ui/skeletons';
import { Suspense } from 'react';

export default async function BusinessCategoryPage() {

    const storedTempCategory = await getBusinessStepFormData("categoryStep") as StoredTempCategory | null

    const categories = await getAllCategories()

    if (!categories || categories.length === 0) throw new Error("Failed to fetch categories")

    return <div className='w-full max-w-4xl p-5 py-24 min-h-dvh  mx-auto space-y-8 pb-20'>

        <div className='flex flex-col gap-2 w-full'>

            <div className="text-start space-y-1">

                <p className="text-sm text-muted-foreground text-start"> Account setup</p>

                <h1 className="text-3xl lg:text-4xl font-bold font-source-sans"> What's your speciality?</h1>

                <p className="text-sm text-muted-foreground ">Choose a category that best describes your business.</p>
            </div>
        </div>

        <Suspense fallback={<OnboardingBusinessCategorySkeleton />}>

            <BusinessCategoryForm storedTempCategory={storedTempCategory} categories={categories} />
        </Suspense>
    </div>
}