"use client"
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
    InputOTPSeparator
} from "@/ui/components/input-otp"
import { Button } from "@/ui/components/custom/button"
import { useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Alert, AlertDescription, AlertTitle } from "@/ui/components/alert";
import { AlertCircle } from "lucide-react"

export default function OtpForm() {
    const searchParams = useSearchParams()
    const isNotVerified = searchParams.get("notVerified") === "true";

    useEffect(() => {

    }, [isNotVerified])

    return (
        <>
            {/* If the session ended, show the alert */}
            {isNotVerified && (
                <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Email Verification Required</AlertTitle>
                    <AlertDescription>
                        Your account requires email verification to continue. Please check your email for a 6-digit verification code and enter it below.
                    </AlertDescription>
                </Alert>
            )}

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