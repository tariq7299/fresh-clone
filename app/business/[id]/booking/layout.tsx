
import BusinessFormProvider from "@/lib/providers/business-form-provider";
import BackButton from "@/ui/components/custom/back-button";
import ExitStepsButton from "@/ui/components/custom/exit-steps-button";
import { Suspense } from "react";

export default async function BookingLayout({ children, desktopCart, mobileCart, params }: { children: React.ReactNode, desktopCart: React.ReactNode, mobileCart: React.ReactNode, params: Promise<{ id: string }> }) {

    const { id } = await params
    const closeButtonLink = `/business/${id}`

    return <>

        <BusinessFormProvider>

            <div className="fixed top-0 left-1/2 -translate-x-1/2 bg-background  px-5 flex flex-col z-50 shadow-sm w-svw">
                <div className="flex justify-between items-center py-3 w-full max-w-7xl mx-auto">
                    <BackButton />

                    <ExitStepsButton href={closeButtonLink} />
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
                            {desktopCart}
                        </div>
                    </div>

                </div>

            </div>


            <div className=" fixed bottom-0 left-0 w-full bg-background px-5 py-3.5  border-t-1 md:hidden">
                {mobileCart}
            </div>
            {/* 
            <div className=" fixed bottom-0 left-0 w-full bg-background px-5 py-3.5  border-t-1 md:hidden">
                <div className="flex justify-between items-center">

                    <div className="flex flex-col gap-1">
                        <p className="text-sm">EGP 37</p>
                        <p className="text-muted-foreground text-xs">3 services . 1 hour 25 mins</p>
                    </div>
                    <SubmitButton hasIcon={false} className="" />
                </div>
            </div> */}

            {/* {auth} */}

        </BusinessFormProvider>

    </>
}