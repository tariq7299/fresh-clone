import { getAllServices } from '@/lib/data';
import BusinessServicesForm from '@/professional/_components/business-services-form';
import { getBusinessStepFormData } from '@/professional/_lib/data';
import { StoredService } from '@/professional/_lib/definitions';
import { Suspense } from 'react';
import { OnboardingBusinessServicesSkeleton } from '@/ui/skeletons';

export default async function BusinessServicesPage() {

    // Get all services from backend
    const services = await getAllServices()
    if (services && services.length === 0 || !services) throw new Error("Services list is empty")

    // Get the services from the db that the user has submitted before
    // i need to use type assertion because the function returns other types of data, but here because the param of "servicesStep", so it will return the services only  

    const stroredTempServices = await getBusinessStepFormData("servicesStep") as StoredService[] | null


    return <div className='w-full max-w-4xl p-5 py-24 min-h-dvh  mx-auto space-y-8 pb-20'>

        {/* Header section with title and description */}
        <div className="flex flex-col w-full text-start space-y-1">
            <p className="text-sm text-muted-foreground text-start"> Account setup</p>
            <h1 className="text-3xl lg:text-4xl font-bold font-source-sans">Build Your Service List</h1>
            <p className="text-sm text-muted-foreground ">Choose a service then press <span className="font-bold text-accent-600">Add</span> to add it to your list.</p>
        </div>


        <Suspense fallback={<OnboardingBusinessServicesSkeleton />}>
            <BusinessServicesForm services={services} stroredTempServices={stroredTempServices} />
        </Suspense>
    </div>
}