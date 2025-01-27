import { redirect } from 'next/navigation'
import { navigateToLogin } from "@/(auth)/_lib/auth-client-services";

const UNAUTHORIZED_STATUS = 401 as const;
const UNAUTHORIZED_MESSAGE = "Session expired" as const;

/**
 * Handles authentication failures by redirecting to login page
 * - Server-side: Uses Next.js redirect
 * - Client-side: Uses navigation action
 * @param status HTTP status code
 * @returns void
 */
export function redirectToLoginIfNotAuthenticated(code: string | number | string[], params: string[] = []): void {

    console.log("code", code)

    if (code === UNAUTHORIZED_MESSAGE && typeof code === "string") {

        const isServer = typeof window === "undefined";


        const redirectUrl = "/login" + (params.length > 0 ? "?" + params.join("&") : "");

        console.log("redirectUrl", redirectUrl)

        if (isServer) {
            "use server";
            redirect(redirectUrl);
        } else {
            navigateToLogin(params);
        }
    }

    return;
}
