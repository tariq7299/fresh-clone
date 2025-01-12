
import { redirect } from 'next/navigation'

const UNAUTHORIZED_STATUS = 403 as const;
const UNAUTHORIZED_CODE = "NOT_VERIFIED" as const;

export function redirectToOtpIfNotVerified(status: number, responseCode: string | number, email: string): void {

    if (status === UNAUTHORIZED_STATUS && responseCode === UNAUTHORIZED_CODE) {

        const isServer = typeof window === "undefined";
        const redirectUrl = "/otp-verification?notVerified=true&email=" + email;

        if (isServer) {
            "use server";
            redirect(redirectUrl);
        }
    }

    return;
}
