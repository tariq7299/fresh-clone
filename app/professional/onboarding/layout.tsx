import { Button } from "@/ui/components/custom/button";
import OnboardingSteps from "../_components/onboarding-steps";
import BackButton from "@/ui/components/custom/back-button";
import BusinessFormProvider from "../_components/business-form-provider";
import SubmitButton from "../_components/submit-button";


export default function ProfessionalOnboardingLayout({ children }: { children: React.ReactNode }) {


    return <div className=" w-lvw">
        <BusinessFormProvider>
            <div className="fixed top-0 left-1/2 -translate-x-1/2 bg-background w-svw pt-3 px-5 flex flex-col z-50 max-w-5xl ">

                <OnboardingSteps />

                <div className="flex justify-between items-center py-3">
                    <BackButton />


                    <Button size={"lg"} variant={"ghost"} className="font-bold px-0 py-0 lg:hidden">Log out</Button>

                    <SubmitButton className="hidden lg:flex text-md" />

                </div>
            </div>

            {children}

            <div className=" fixed bottom-0 left-0 w-full bg-background px-5 py-3.5 flex justify-center items-center border-t-1 lg:hidden">
                <SubmitButton className="w-full" />
            </div>

        </BusinessFormProvider>

    </div>
}