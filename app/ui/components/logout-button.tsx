"use client"

import { logoutUserClientSide } from "@/(auth)/_lib/auth-client-services";
import { logoutUserServerSide } from "@/(auth)/_lib/auth-server-services";
import { navigateToLogin } from "@/(auth)/_lib/auth-client-services";
import useLocalStorage from "@/lib/hooks/use-local-storage";
import { SessionData } from "@/(auth)/_lib/definitions";
import { Button } from "./button";

export default function LogoutButton() {
    const [_, setSessionData] = useLocalStorage<SessionData | null>({ key: "user", defaultValue: null })

    return <Button onClick={() => {
        logoutUserServerSide()
        logoutUserClientSide(setSessionData)
        navigateToLogin()
    }} size={"lg"} variant={"ghost"} className="font-bold p-3 lg:hidden">Log out</Button>
}