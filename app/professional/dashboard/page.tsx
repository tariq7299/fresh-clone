"use client"

import { Button } from "@/ui/components/button"
import { logoutUserClientSide, navigateToLogin } from "@/(auth)/_lib/auth-client-services"
import { logoutUserServerSide } from "@/(auth)/_lib/auth-server-services"
import { SessionData } from "@/(auth)/_lib/definitions"
import useLocalStorage from "@/lib/hooks/use-local-storage"

export default function ProfessionalDashboard() {
    const [_, setSessionData] = useLocalStorage<SessionData | null>({ key: "user", defaultValue: null })


    return <div>
        Professional Dashboard

        <Button onClick={() => {
            logoutUserServerSide()
            logoutUserClientSide(setSessionData)
            navigateToLogin()
        }}>Logout</Button>

    </div>
}