
import BusinessFormProvider from "@/lib/providers/business-form-provider";
import SubmitButton from "@/ui/components/custom/submit-button";
import BackButton from "@/ui/components/custom/back-button";
import { X } from 'lucide-react';
import { Button } from "@/ui/components/custom/button";
import { Suspense } from "react";

export default function BookingLayout({ children, cart }: { children: React.ReactNode, cart: React.ReactNode }) {



    return <div className="">

        <BusinessFormProvider>

            <div className="">

                <div className="fixed top-0 left-1/2 -translate-x-1/2 bg-background  px-5 flex flex-col z-50 shadow-sm w-svw">


                    <div className="flex justify-between items-center py-3 w-full max-w-7xl mx-auto">
                        <BackButton />


                        <Button variant={"ghost"} size="icon" className="size-10"> <X className="size-5" /> </Button>


                    </div>

                </div>

            </div>

            <div className="w-full max-w-6xl p-5 py-24 min-h-dvh mx-auto space-y-8 pb-20" >

                <div className=" grid grid-cols-1 md:grid-cols-3  gap-6">

                    <div className="col-span-3 lg:col-span-2" >
                        {children}
                    </div>


                    <div className="col-span-1 relative hidden lg:block">

                        <div className="sticky top-16 left-0 pt-5 ">

                            {cart}
                            {/* <Suspense fallback={<div className="animate-pulse space-y-8"> */}
                            {/* <div className="h-12 w-3/4 bg-muted rounded-lg"></div> */}
                            {/* <div className="h-6 w-1/2 bg-muted rounded-lg"></div> */}
                            {/* </div>}> */}
                            {/* </Suspense> */}

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

        </BusinessFormProvider>

    </div>
}