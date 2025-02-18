import { ArrowRightEndOnRectangleIcon, Bars3Icon } from "@heroicons/react/24/outline";

import { Button } from "@/_ui/components/custom/button";
import { cn } from "@/_lib/utils/utils";
import Image from 'next/image'
import userAvatar from "@/../public/avatars/avatar11.png"
import { div } from "framer-motion/client";
import UserInitialsBadge from "./user-initials-badge";

// Write types
type UserData = {
    id: number
    role: string
    full_name: string
    first_name: string
    last_name: string
} | null

export default function MobileNavToggler({ fixed, isScrolled, authenticated, setIsOpen, isOpen, userData }: { fixed: boolean, isScrolled: boolean, authenticated: boolean, setIsOpen: (isOpen: boolean) => void, isOpen: boolean, userData: UserData }) {

    return <>
        {authenticated && userData ?

            <Button size="icon" variant={"ghost"} className={cn("bg-background/20 rounded-full p-1  w-14 h-auto",
                authenticated ? "bg-background/20 rounded-full p-1  w-14 h-auto" : ""
            )} onClick={() => setIsOpen(!isOpen)}>
                <UserInitialsBadge firstName={userData.first_name} lastName={userData.last_name} />
            </Button>
            // <Button size="icon" variant={"ghost"} className={cn("bg-background/20 rounded-full p-1  w-14 h-auto",
            //     authenticated ? "bg-background/20 rounded-full p-1  w-14 h-auto" : ""
            // )} onClick={() => setIsOpen(!isOpen)}>
            //     <Image
            //         src={userAvatar}
            //         alt="user avatar"clear
            // </Button>
            // <div className="bg-background rounded-full p-1  w-44 h-auto">
            //     <Image
            //         src={userAvatar}
            //         alt="user avatar"
            //         className="size-full "
            //     />
            // </div> :


            :
            <Button size="icon" variant={"ghost"} onClick={() => setIsOpen(!isOpen)} className="w-8 h-8">
                <Bars3Icon className={cn('',
                    fixed ? 'text-foreground' : isScrolled ? 'text-foreground' : 'text-background hover:text-foreground'
                )} />
            </Button>
        }
    </>
}