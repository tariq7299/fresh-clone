"use client"
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
    InputOTPSeparator
} from "@/ui/components/input-otp"
import { Button } from "@/ui/components/custom/button"

export default function OtpForm() {

    return (
        <>

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
        </>

    )
}