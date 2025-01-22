
import BusinessFormProvider from "@/lib/providers/business-form-provider";
import SubmitButton from "@/ui/components/custom/submit-button";
import BackButton from "@/ui/components/custom/back-button";
import { X } from 'lucide-react';
import { Button } from "@/ui/components/custom/button";

export default function BookingLayout({ children }: { children: React.ReactNode }) {


    return <div className="">
        <BusinessFormProvider>
            {/* <div className="">

                <div className="fixed top-0 left-1/2 -translate-x-1/2 bg-background  px-5 flex flex-col z-50 shadow-sm w-svw">


                    <div className="flex justify-between items-center py-3 w-full max-w-6xl mx-auto">
                        <BackButton />


                        <Button variant={"ghost"} size="icon" className="size-10"> <X className="size-5" /> </Button>


                    </div>

                </div>
            </div> */}

            {children}

            <div className=" fixed bottom-0 left-0 w-full bg-background px-5 py-3.5 flex justify-between items-center border-t-1 lg:hidden">
                <div className="flex flex-col gap-1">
                    <p className="text-sm">EGP 37</p>
                    <p className="text-muted-foreground text-xs">3 services . 1 hour 25 mins</p>
                </div>
                <SubmitButton className="" />
            </div>

        </BusinessFormProvider>

    </div>
}