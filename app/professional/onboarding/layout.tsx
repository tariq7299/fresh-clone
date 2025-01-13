import { Button } from "@/ui/components/custom/button";
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import OnboardingSteps from "../_components/onboarding-steps";

export default function ProfessionalOnboardingLayout({ children }: { children: React.ReactNode }) {

    const returnSteps = () => {

    }

    return <div className=" ">
        <div className="fixed top-0 left-0 bg-background w-full pt-3 px-5 flex flex-col">
            <OnboardingSteps />
            {/* <div className="flex gap-2 w-full justify-center items-center max-w-5xl m-auto">
                <div className="rounded-full bg-accent-400 flex-auto h-1"></div>
                <div className="rounded-full bg-muted flex-auto h-1"></div>
                <div className="rounded-full bg-muted flex-auto h-1"></div>
                <div className="rounded-full bg-muted flex-auto h-1"></div>
                <div className="rounded-full bg-muted flex-auto h-1"></div>
            </div> */}
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