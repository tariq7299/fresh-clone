import { Button } from "@/ui/components/custom/button";
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import OnboardingSteps from "../_components/onboarding-steps";

export default function ProfessionalOnboardingLayout({ children }: { children: React.ReactNode }) {


    return <div className=" ">
        <div className="fixed top-0 left-0 bg-background w-full pt-3 px-5 flex flex-col">
            <OnboardingSteps />
            <div className="self-end py-3">

                <Button variant={"ghost"} className="font-bold px-0 py-0 lg:hidden">Log out</Button>

                <Button form="business-onboarding-form" className="font-bold  gap-2 justify-center items-center hidden lg:flex">Continue  <ArrowRightIcon className="size-4" /></Button>

            </div>
        </div>

        {children}

        <div className=" fixed bottom-0 left-0 w-full bg-background px-5 py-3.5 flex justify-center items-center border-t-1 lg:hidden">

            <Button className="w-full font-bold flex gap-2 justify-center items-center">
                Continue  <ArrowRightIcon className="size-4" />
            </Button>
        </div>

    </div>
}