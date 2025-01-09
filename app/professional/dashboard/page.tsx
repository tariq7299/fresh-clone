"use client"

import { LogOut } from "lucide-react"
import { Button } from "@/ui/components/button"
import { logout } from "@/(auth)/_lib/actions"
import { SessionData } from "@/(auth)/_lib/definitions"
import useLocalStorage from "@/lib/hooks/use-local-storage"
import SecureLS from "secure-ls";

export default function ProfessionalDashboard() {
    const ls = new SecureLS();
    const sessionData = useLocalStorage<SessionData | null>({ key: "user", defaultValue: null })


    console.log("sessionData", sessionData)
    console.log("token", ls.get("token"))





    return <div>
        Professional Dashboard

        <Button onClick={() => {
            logout()
        }}>Logout</Button>

    </div>
}