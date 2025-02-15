"use client"

import { logoutUserClientSide } from "@/[lang]/(auth)/_lib/auth-client-services";
import { logoutUserServerSide } from "@/[lang]/(auth)/_lib/auth-server-services";
import { navigateToLogin } from "@/[lang]/(auth)/_lib/auth-client-services";
import useLocalStorage from "@/_lib/hooks/use-local-storage";
import { SessionData, UserData } from "@/[lang]/(auth)/_lib/definitions";
import { Button } from "@/_ui/components/custom/button";
import { cn } from "@/_lib/utils/utils";
import Link from "next/link";
import { logoutUserFromBackend } from "@/[lang]/(auth)/_lib/auth-server-services";
import { toastApiMsgs } from "@/_lib/utils/api/toastApiMsgs";
import { useState } from "react";
import { ArrowLeftEndOnRectangleIcon, ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/outline";

export default function AuthButton({ authenticated, className, children, dict, iconSize = "10" }: { authenticated: boolean, className?: string, children?: React.ReactNode, dict: any, iconSize?: string }) {
    const [_, setSessionData] = useLocalStorage<SessionData | null>({ key: "user", defaultValue: null })

    const [isLoading, setIsLoading] = useState(false)


    const handleLogout = async () => {
        setIsLoading(true)
        try {
            const response = await logoutUserFromBackend()
            if (response.success) {
                await logoutUserServerSide()
                logoutUserClientSide(setSessionData)
                navigateToLogin()
            } else {
                throw new Error()
            }
        } catch (error) {
            toastApiMsgs('Error logging out', "destructive");
        } finally {
            setIsLoading(false)
        }
    }

    if (authenticated) {
        return <Button loading={isLoading} onClick={handleLogout} size={"lg"} variant={"ghost"} className={cn(" justify-start font-semibold h-auto", className)} disabled={isLoading}>
            {children ? children : (<><ArrowLeftEndOnRectangleIcon className={`size-${iconSize}`} />{dict.nav.logout}</>)}
        </Button>
    } else {
        return <Button variant={"ghost"} isLink href="/login" className={cn("justify-start font-semibold h-auto", className)}>
            {children ? children : (<><ArrowRightEndOnRectangleIcon className={`size-${iconSize}`} />{dict.nav.login}</>)}
        </Button>
    }
}