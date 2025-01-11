"use client"

import { LogOut } from "lucide-react"
import { Button } from "@/ui/components/button"
import { logoutUserClientSide, navigateToLogin } from "@/(auth)/_lib/auth-client-services"
import { logoutUserServerSide } from "@/(auth)/_lib/auth-server-services"
import { SessionData } from "@/(auth)/_lib/definitions"
import useLocalStorage from "@/lib/hooks/use-local-storage"
import SecureLS from "secure-ls";
import { useRouter, usePathname } from "next/navigation"

export default function AdminDashboard() {
    const ls = new SecureLS();
    const router = useRouter()
    const pathname = usePathname()
    const [sessionData, setSessionData] = useLocalStorage<SessionData | null>({ key: "user", defaultValue: null })


    console.log("sessionDataCLIENT", sessionData)
    console.log("token", ls.get("token"))



    return <div>
        Admin Dashboard

        <Button onClick={() => {
            logoutUserServerSide()
            logoutUserClientSide(router, setSessionData, pathname)
            navigateToLogin()
        }}>Logout</Button>

    </div>
}