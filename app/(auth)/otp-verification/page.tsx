import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
    InputOTPSeparator
} from "@/ui/components/input-otp"
import { Button } from "@/ui/components/custom/button"
export default function OtpVerificationPage() {
    return <div className="mt-auto flex flex-col gap-2 w-full max-w-md p-5 pt-20">


        <h1 className="text-center text-2xl font-bold font-source-sans">Otp verification
        </h1>

        <p className="text-muted-foreground text-sm text-center pb-4">Please enter the 6-digit verification code sent to your email address</p>

        <form action="" className="flex flex-col gap-4 justify-center items-center">
            <InputOTP maxLength={6}>
                <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                </InputOTPGroup>
            </InputOTP>

            <Button className="font-bold w-full max-w-[150px]">
                Verify
            </Button>
        </form>


    </div>
}