import LogoutButton from "@/_ui/components/logout-button";
import OnboardingSteps from "../_components/onboarding-steps";
import BackButton from "@/_ui/components/custom/back-button";
import BusinessFormProvider from "../../../_lib/providers/business-form-provider";
import SubmitButton from "../../../_ui/components/custom/submit-button";
import { getDictionary } from "@/_lib/dictionaries";


export default async function ProfessionalOnboardingLayout({ params: { lang }, children }: { params: { lang: "en" | "ar" }, children: React.ReactNode }) {

    const dict = await getDictionary(lang);

    return <div className=" w-lvw">
        <BusinessFormProvider>
            <div className="fixed top-0 left-1/2 -translate-x-1/2 bg-background w-svw pt-3 px-5 flex flex-col z-50 max-w-6xl ">

                <OnboardingSteps />

                <div className="flex justify-between items-center py-3">
                    <BackButton />

                    <LogoutButton />

                    <SubmitButton className="hidden lg:flex text-md" dict={dict} />

                </div>
            </div>

            {children}

            <div className=" fixed bottom-0 left-0 w-full bg-background px-5 py-3.5 flex justify-center items-center border-t-1 lg:hidden">
                <SubmitButton className="w-full" dict={dict} />
            </div>

        </BusinessFormProvider>

    </div>
}