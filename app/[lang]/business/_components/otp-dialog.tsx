"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/_ui/components/dialog";
import { UserRole } from "@/[lang]/(auth)/_lib/definitions";
import OtpForm from "@/[lang]/(auth)/_components/otp-form";
import { useRouter } from "next/navigation";


export default function OtpDialog({ userRole, email, loginRequiredForBooking, dict }: { userRole: UserRole.Professional | UserRole.Customer, email: string, loginRequiredForBooking: boolean, dict: any }) {

    const router = useRouter();
    return <Dialog open={true} onOpenChange={() => router.back()}>
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader className="">
                <DialogTitle className="sr-only">Just one more step to continue</DialogTitle>
            </DialogHeader>
            <>
                {/* {notVerified && (
                <div className="absolute top-0 left-0 w-full pt-20 p-5">

                    <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Email Verification Required</AlertTitle>
                        <AlertDescription>
                            Your account requires email verification to continue. Please check your email for a 6-digit verification code and enter it below.
                        </AlertDescription>
                    </Alert>
                </div>
            )} */}

                <div className="mt-auto flex flex-col gap-2 w-full max-w-md  ">

                    <h1 className="text-center text-2xl font-bold font-source-sans">Otp verification
                    </h1>

                    <p className="text-muted-foreground text-sm text-center pb-4">Please enter the 6-digit verification code sent to your email address</p>

                    {/* Iam not using Suspense because Iam passing the userRole as a prop to the OtpForm component, and not like in login-form.tsx where Iam using useSearchParams */}
                    <OtpForm email={email} userRole={userRole} loginRequiredForBooking={loginRequiredForBooking} dict={dict} />

                </div>
            </>
        </DialogContent>
    </Dialog>
}