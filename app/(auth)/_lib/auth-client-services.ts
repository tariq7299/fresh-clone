import { SessionData, UserRole } from "./definitions";
import SecureLS from "secure-ls";
import { redirect } from 'next/navigation'
import { toastApiMsgs } from "@/lib/utils/api/toastApiMsgs";
import { logoutUserServerSide } from "./auth-server-services";

// This is the client side login function
// It will be used to login the user and return nothing
// It will be used in the loginform page after the form is submitted
export const loginUserClientSide = (sessionData: SessionData, setSessionData: (sessionData: SessionData) => void): void => {
    const ls = new SecureLS();
    ls.set('token', sessionData.token);
    setSessionData(sessionData,)
}

export const logoutUserClientSide = (setSessionData: (sessionData: SessionData | null) => void): void => {
    const ls = new SecureLS();
    ls.remove('token');
    setSessionData(null)
}

export async function navigateToLoginWithSessionEnded() {
    redirect("/login?sessionEnded=true")
}

export async function navigateToOtp(email: string, userRole: UserRole.Professional | UserRole.Customer, loginRequiredForBooking: boolean = false) {
    if (loginRequiredForBooking) {
        redirect("/otp-verification?email=" + email + "&userRole=" + userRole + "&loginRequiredForBooking=true",)
    } else {
        redirect("/otp-verification?email=" + email + "&userRole=" + userRole)
    }
}


export async function navigateToLogin() {
    redirect("/login")
}

export async function navigateToDashboard(role: UserRole) {

    if (role === UserRole.Professional) {
        redirect("/professional/dashboard")
    } else if (role === UserRole.Admin) {
        redirect("/admin/dashboard")
    } else if (role === UserRole.Customer) {
        redirect("/")
    }

}


export const endUserSession = async (setSessionData: (sessionData: SessionData | null) => void) => {
    try {
        await logoutUserServerSide();
        logoutUserClientSide(setSessionData)
        navigateToLoginWithSessionEnded()
    } catch (error) {
        toastApiMsgs('Error ending session', "destructive");
    }
};

