
import { redirect } from 'next/navigation'
import { navigateToOtp } from "@/(auth)/_lib/auth-client-services";

const UNAUTHORIZED_STATUS = 403 as const;
const UNAUTHORIZED_CODE = "NOT_VERIFIED" as const;

export function redirectToOtpIfNotVerified(status: number, responseCode: string | number): void {

    if (status === UNAUTHORIZED_STATUS && responseCode === UNAUTHORIZED_CODE) {

        const isServer = typeof window === "undefined";
        const redirectUrl = "/otp-verification?notVerified=true";

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
