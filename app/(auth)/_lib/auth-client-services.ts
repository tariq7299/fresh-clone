import { SessionData } from "./definitions";
import SecureLS from "secure-ls";
import { redirect } from 'next/navigation'

// This is the client side login function
// It will be used to login the user and return nothing
// It will be used in the loginform page after the form is submitted
export const loginUserClientSide = (apiDataResponse: SessionData, setSessionData: (sessionData: SessionData) => void, router: any): void => {

    // const { apiDataResponse, success, apiMsgs } = formState;
    const sessionData = apiDataResponse;

    const ls = new SecureLS();
    ls.set('token', sessionData.token);
    // toastApiMsgs(apiMsgs, "success");
    setSessionData(sessionData,)
    console.log("sessionData", sessionData)

    if (sessionData.role === "stakeholder") {
        router.push("/professional/dashboard")
    } else if (sessionData.role === "admin") {
        router.push("/admin/dashboard")
    } else if (sessionData.role === "customer") {
        router.push("/")
    }


}

export const logoutUserClientSide = (router: any, setSessionData: (sessionData: SessionData | null) => void, pathname: string): void => {
    const ls = new SecureLS();
    ls.remove('token');
    setSessionData(null)
    if (pathname !== "/login") {
        router.push("/login")
    }
}


// export const endUserSession = async (router: any, setSessionData: (sessionData: SessionData | null) => void, pathname: string) => {
//     try {
//         await logoutUserServerSide();
//         logoutUserClientSide(router, setSessionData, pathname)
//     } catch (error) {
//         toastApiMsgs('Error ending session', "destructive");
//     }
// };



export async function navigateToLoginWithSessionEnded() {
    redirect("/login?sessionEnded=true")
}

export async function navigateToOtp() {
    redirect("/login?notVerified=true")
}


// export { authService };
