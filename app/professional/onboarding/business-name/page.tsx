import BusinessNameForm from '@/professional/_components/business-name-form';
import { getBusinessStepFormData } from '@/professional/_lib/data';
import { StoredTempBusinessInfo } from '@/professional/_lib/definitions';
import { Suspense } from 'react';
import { OnboardingBusinessNameSkeleton } from '@/ui/skeletons';

export default async function BusinessNamePage({ }) {

    const storedTempBusinessInfo = await getBusinessStepFormData("businessNameStep") as StoredTempBusinessInfo | null


    return <div className='w-full max-w-2xl p-5 py-24 min-h-dvh  mx-auto space-y-8 pb-20'>


        <div className="flex flex-col  w-full text-start space-y-1">

            <p className="text-sm text-muted-foreground text-start"> Account setup</p>

            {/* Change this to more descriptive title */}
            <h1 className="text-3xl lg:text-4xl font-bold font-source-sans"> What's your business info?</h1>

            <p className="text-sm text-muted-foreground "> This the brand name your clients will see. Your billing and legal name can be added later.</p>
        </div>

        <Suspense fallback={<OnboardingBusinessNameSkeleton />}>
            <BusinessNameForm storedTempBusinessInfo={storedTempBusinessInfo} />
        </Suspense>
    </div>
}