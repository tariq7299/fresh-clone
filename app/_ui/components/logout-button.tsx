"use client"

import { logoutUserClientSide } from "@/[lang]/(auth)/_lib/auth-client-services";
import { logoutUserServerSide } from "@/[lang]/(auth)/_lib/auth-server-services";
import { navigateToLogin } from "@/[lang]/(auth)/_lib/auth-client-services";
import useLocalStorage from "@/_lib/hooks/use-local-storage";
import { SessionData } from "@/[lang]/(auth)/_lib/definitions";
import { Button } from "./button";

export default function LogoutButton() {
    const [_, setSessionData] = useLocalStorage<SessionData | null>({ key: "user", defaultValue: null })

    const handleLogout = () => {
        logoutUserServerSide()
        logoutUserClientSide(setSessionData)
        navigateToLogin(["sessionEnded=true"])
    }

    return <Button onClick={handleLogout} size={"lg"} variant={"ghost"} className="font-bold p-3 lg:hidden">Log out</Button>
}