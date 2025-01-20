import BusinessServicesForm from '@/professional/onboarding/business-services/business-services-form';
import { Suspense } from 'react';
import { OnboardingBusinessServicesSkeleton } from '@/professional/_components/skeletons';

export default function BusinessServicesPage() {

    return <div className='w-full max-w-4xl p-5 py-24 min-h-dvh  mx-auto space-y-8 pb-20'>

        {/* Header section with title and description */}
        <div className="flex flex-col w-full text-start space-y-1">
            <p className="text-sm text-muted-foreground text-start"> Account setup</p>
            <h1 className="text-3xl lg:text-4xl font-bold font-source-sans">Build Your Service List</h1>
            <p className="text-sm text-muted-foreground ">Choose a service then press <span className="font-bold text-accent-600">Add</span> to add it to your list.</p>
        </div>


        <Suspense fallback={<OnboardingBusinessServicesSkeleton />}>
            <BusinessServicesForm />
        </Suspense>
    </div>
}