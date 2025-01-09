import { redirect } from 'next/navigation'
import { navigateToLoginWithSessionEnded } from "@/(auth)/_lib/actions";

const UNAUTHORIZED_STATUS = 401 as const;
const UNAUTHORIZED_MESSAGE = "Unauthenticated." as const;

/**
 * Handles authentication failures by redirecting to login page
 * - Server-side: Uses Next.js redirect
 * - Client-side: Uses navigation action
 * @param status HTTP status code
 * @returns void
 */
export function redirectToLoginIfNotAuthenticated(status: number, responseMsg: string): void {

    // if (status !== UNAUTHORIZED_STATUS || message !== UNAUTHORIZED_MESSAGE) {
    //     return;
    // }

    if (status === UNAUTHORIZED_STATUS && responseMsg === UNAUTHORIZED_MESSAGE) {

        const isServer = typeof window === "undefined";
        const redirectUrl = "/login?sessionEnded=true";

        if (isServer) {
            "use server";
            redirect(redirectUrl);
        } else {
            navigateToLoginWithSessionEnded();
        }
    }

    return;
}
