import BusinessCapacityForm from "@/professional/onboarding/business-capacity/business-capacity-form";
import { OnboardingBusinessCapacitySkeleton } from "@/ui/skeletons";
import { Suspense } from "react";

export default function BusinessCapacityPage() {

    return <div className="w-full max-w-3xl p-5 py-24 min-h-dvh  items-center m-auto space-y-5">

        <div className=" w-full items-start  space-y-1">

            <p className="text-sm text-muted-foreground text-start"> Account setup</p>

            <h1 className="text-3xl lg:text-4xl font-bold font-source-sans">How many clients can you serve at once?</h1>

            <p className="text-sm text-muted-foreground">This helps us understand your business capacity and optimize your booking schedule</p>
        </div>


        <Suspense fallback={<OnboardingBusinessCapacitySkeleton />}>
            <BusinessCapacityForm />
        </Suspense>
    </div>
}
