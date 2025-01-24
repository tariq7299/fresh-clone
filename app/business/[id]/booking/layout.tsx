
import BusinessFormProvider from "@/lib/providers/business-form-provider";
import SubmitButton from "@/ui/components/custom/submit-button";
import BackButton from "@/ui/components/custom/back-button";
import { X } from 'lucide-react';
import { Button } from "@/ui/components/custom/button";
import { Suspense } from "react";
import { BookingPageSkeleton } from "@/business/_components/skeletons";

export default function BookingLayout({ children, cart, auth }: { children: React.ReactNode, cart: React.ReactNode, auth: React.ReactNode }) {



    return <>



        <BusinessFormProvider>

            <div className="fixed top-0 left-1/2 -translate-x-1/2 bg-background  px-5 flex flex-col z-50 shadow-sm w-svw">
                <div className="flex justify-between items-center py-3 w-full max-w-7xl mx-auto">
                    <BackButton />
                    <Button variant={"ghost"} size="icon" className="size-10"> <X className="size-5" /> </Button>
                </div>

            </div>

            <div className="w-full max-w-screen-xl p-5 py-24 min-h-dvh mx-auto space-y-8 pb-20" >

                <div className=" grid grid-cols-1 md:grid-cols-10 md:gap-4 lg:gap-10">

                    <div className="col-span-10 md:col-span-6" >
                        <Suspense>
                            {children}
                        </Suspense>
                    </div>

                    {/* <div className="hidden lg:block lg:col-span-1 ">

                    </div> */}


                    <div className="col-span-4 relative hidden md:block">

                        <div className="sticky top-16 left-0 pt-5 md:ms-0 lg:ms-14 ">
                            {cart}
                        </div>
                    </div>

                </div>

            </div>


            <div className=" fixed bottom-0 left-0 w-full bg-background px-5 py-3.5 flex justify-between items-center border-t-1 lg:hidden">
                <div className="flex flex-col gap-1">
                    <p className="text-sm">EGP 37</p>
                    <p className="text-muted-foreground text-xs">3 services . 1 hour 25 mins</p>
                </div>
                <SubmitButton hasIcon={false} className="" />
            </div>

            {auth}

        </BusinessFormProvider>

    </>
}