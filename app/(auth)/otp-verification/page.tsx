import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
    InputOTPSeparator
} from "@/ui/components/input-otp"
import { Button } from "@/ui/components/custom/button"
import OtpForm from "../_components/otp-form"

export default function OtpVerificationPage() {




    return <div className="mt-auto flex flex-col gap-2 w-full max-w-md p-5 pt-20">


        <h1 className="text-center text-2xl font-bold font-source-sans">Otp verification
        </h1>

        <p className="text-muted-foreground text-sm text-center pb-4">Please enter the 6-digit verification code sent to your email address</p>

        <OtpForm />


    </div>
}