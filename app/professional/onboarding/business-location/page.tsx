import BusinessLocationForm from "@/professional/onboarding/business-location/business-location-form";
import { MapProvider } from "@/lib/providers/map-providers";
import { OnboardingBusinessLocationSkeleton } from "@/ui/skeletons";
import { Suspense } from "react";

export default function BusinessLocationPage() {



    return <MapProvider>
        <div className='w-full max-w-2xl p-5 py-24 min-h-dvh  mx-auto space-y-8 pb-20'>


            <div className="flex flex-col w-full text-start space-y-1">

                <p className="text-sm text-muted-foreground text-start"> Account setup</p>

                <h1 className="text-3xl lg:text-4xl font-bold font-source-sans"> Where's your business located?</h1>

                <p className="text-sm text-muted-foreground "> This is where your business is located. Your billing and legal name can be added later.</p>
            </div>


            <Suspense fallback={<OnboardingBusinessLocationSkeleton />}>
                <BusinessLocationForm />
            </Suspense>
        </div>
    </MapProvider>

}

