import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
    InputOTPSeparator
} from "@/ui/components/input-otp"
import { Button } from "@/ui/components/custom/button"
import OtpForm from "../_components/otp-form"
import { Alert, AlertDescription, AlertTitle } from "@/ui/components/alert";
import { AlertCircle } from "lucide-react"

export default async function OtpVerificationPage(props: {
    searchParams?: Promise<{
        notVerified?: string;
        email?: string;
    }>
}) {

    const searchParams = await props.searchParams
    const notVerified = searchParams?.notVerified || "";
    const email = searchParams?.email || "";

    if (notVerified && !email) throw new Error("No email provided for otp verfication!")

    return (
        <>
            {notVerified && (
                <div className="absolute top-0 left-0 w-full pt-20 p-5">

                    <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Email Verification Required</AlertTitle>
                        <AlertDescription>
                            Your account requires email verification to continue. Please check your email for a 6-digit verification code and enter it below.
                        </AlertDescription>
                    </Alert>
                </div>
            )}

            <div className="mt-auto flex flex-col gap-2 w-full max-w-md p-5 ">



                <h1 className="text-center text-2xl font-bold font-source-sans">Otp verification
                </h1>

                <p className="text-muted-foreground text-sm text-center pb-4">Please enter the 6-digit verification code sent to your email address</p>

                <OtpForm email={email} />


            </div>
        </>
    )
}
