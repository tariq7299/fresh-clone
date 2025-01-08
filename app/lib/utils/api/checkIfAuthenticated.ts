import { redirect } from 'next/navigation'
import { navigateToLogin } from "@/lib/actions";

const UNAUTHORIZED_STATUSES = [401, 403, 419] as const;
type UnauthorizedStatus = typeof UNAUTHORIZED_STATUSES[number];

/**
 * Handles authentication failures by redirecting to login page
 * - Server-side: Uses Next.js redirect
 * - Client-side: Uses navigation action
 * @param status HTTP status code
 * @returns void
 */
export function checkIfAuthenticated(status: number): void {
    if (!UNAUTHORIZED_STATUSES.includes(status as UnauthorizedStatus)) {
        return;
    }

    const isServer = typeof window === "undefined";
    const redirectUrl = "/login?sessionEnded=true";

    if (isServer) {
        "use server";
        redirect(redirectUrl);
    } else {
        navigateToLogin();
    }
}
