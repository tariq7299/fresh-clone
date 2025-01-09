
import { redirect } from 'next/navigation'
import { navigateToOtp } from "@/(auth)/_lib/actions";

const UNAUTHORIZED_STATUS = 403 as const;
const UNAUTHORIZED_MESSAGE = "NOT_VERIFIED" as const;

export function redirectToOtpIfNotVerified(status: number, responseMsg: string): void {

    if (status === UNAUTHORIZED_STATUS && responseMsg === UNAUTHORIZED_MESSAGE) {

        const isServer = typeof window === "undefined";
        const redirectUrl = "/otp-verification";

        if (isServer) {
            "use server";
            redirect(redirectUrl);
        } else {
            // Client side
            navigateToOtp();
        }
    }

    return;
}
