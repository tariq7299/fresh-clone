"use client"
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
    InputOTPSeparator
} from "@/ui/components/input-otp"
import { Button } from "@/ui/components/custom/button"
import { SuccessOtpFormState, ErrorOtpFormState, SessionData, LoginFieldErrors, LoginFormData, OtpFieldErrors, OtpFormData } from "../_lib/definitions"
import { useActionState, useEffect } from "react"
import { verifyOtp } from "../_lib/form-actions"
import { handleFormResponse } from "@/lib/utils/utils"
import { loginUserClientSide, navigateToDashboard } from "../_lib/auth-client-services"
import { useRouter } from "next/navigation"
import useLocalStorage from "@/lib/hooks/use-local-storage";
import { toastApiMsgs } from "@/lib/utils/api/toastApiMsgs"

export default function OtpForm({ email = "" }: { email: string }) {


    const INITIAL_STATE: SuccessOtpFormState | ErrorOtpFormState = {
        success: false,
        clientFieldsErrors: null,
        apiDataResponse: null,
        apiMsgs: "",
        formData: {
            email: email,
            otp: "",
            src: "register"
        }
    };


    const [formState, formAction, isPending] = useActionState(verifyOtp, INITIAL_STATE);
    const router = useRouter()
    const [_, setSessionData] = useLocalStorage<SessionData | null>({ key: "user", defaultValue: null })

    // Write commnets
    useEffect(() => {

        // Write types
        // if (!formState) return;
        handleFormResponse(
            formState,
            () => {
                console.log("formState.apiDataResponse", formState.apiDataResponse)
                loginUserClientSide(formState.apiDataResponse as SessionData, setSessionData, router)
                navigateToDashboard(formState.apiDataResponse?.role as "stakeholder" | "admin" | "user")
            }, () => {
                if (formState.clientFieldsErrors) {
                    const { otp, ...rest } = formState.clientFieldsErrors
                    toastApiMsgs(rest, "destructive")
                }
            }
        )


    }, [formState]);

    return (
        <>

            <form action={formAction} className="flex flex-col gap-4 justify-center items-center">
                <InputOTP name="otp" maxLength={6} disabled={isPending || !email}>
                    <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        {/* <InputOTPSlot index={2} /> */}
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                    </InputOTPGroup>
                </InputOTP>
                {formState?.clientFieldsErrors?.otp?.[0] && <p className="text-red-500 text-sm">{formState?.clientFieldsErrors?.otp?.[0]}</p>}

                <Button
                    loading={isPending}
                    variant="default"
                    className="font-bold w-full max-w-[150px]"
                    disabled={isPending || !email}
                >
                    {isPending ? 'Verifying...' : 'Verify'}
                </Button>

            </form>
        </>

    )
}