// import { ApiResponse } from "@/lib/definitions/api";
// import { redirect } from "next/dist/server/api-utils";
import { redirect } from 'next/navigation'
// import { deleteSession } from "@/(auth)/_lib/sessions";
// import SecureLS from "secure-ls";
import { navigateToLoginWithSessionEnded } from "@/(auth)/_lib/actions";

// This function will be used in the responses of server side actions and also client side fetch responses
// This sole purpose to show message in login that the current user is not session expired
// And to also redirect to login page


// This function will remove the token form local storate in case of used in client side
// Also this will remvoe the end the session and delete the session cookie, in case of used in server side
// Then redirect to login
export function redirectToLogin() {

    if (typeof window === "undefined") {
        "use server"
        // deleteSession()
        redirect("/login?sessionEnded=true")
    } else {
        // const ls = new SecureLS();
        // ls.remove('token');
        navigateToLoginWithSessionEnded()
        //     window.location.href = '/login?sessionEnded=true';
        // }
    }
}
