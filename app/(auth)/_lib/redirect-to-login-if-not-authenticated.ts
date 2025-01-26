import { redirect } from 'next/navigation'
import { navigateToLoginWithSessionEnded } from "@/(auth)/_lib/auth-client-services";

const UNAUTHORIZED_STATUS = 401 as const;
const UNAUTHORIZED_MESSAGE = "Unauthenticated." as const;

/**
 * Handles authentication failures by redirecting to login page
 * - Server-side: Uses Next.js redirect
 * - Client-side: Uses navigation action
 * @param status HTTP status code
 * @returns void
 */
export function redirectToLoginIfNotAuthenticated(status: number, code: string | number, addSessionEndedParam: boolean = true): void {

    if (status === UNAUTHORIZED_STATUS && code === UNAUTHORIZED_MESSAGE && typeof code === "string") {

        const isServer = typeof window === "undefined";
        const redirectUrl = "/login" + (addSessionEndedParam ? "?sessionEnded=true" : "");

        if (isServer) {
            "use server";
            redirect(redirectUrl);
        } else {
            navigateToLoginWithSessionEnded();
        }
    }

    return;
}
