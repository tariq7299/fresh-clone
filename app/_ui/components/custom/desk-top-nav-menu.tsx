"use client"

import { ArrowRightEndOnRectangleIcon, BriefcaseIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/_ui/components/dropdown-menu"
import { Button } from "@/_ui/components/custom/button"
import { LanguageSwitcherDialog, LanguageSwitcherTrigger } from "@/_ui/components/custom/language-switcher-dialog"
import AuthButton from "@/_ui/components/custom/auth-button"
import Link from "next/link"
import UserInitialsBadge from "@/_ui/components/custom/user-initials-badge"
import { ChevronDown } from 'lucide-react'
import { UserData } from "@/[lang]/(auth)/_lib/definitions"

export default function DeskTopNavMenu({ dict, navTabs, authenticated = false, userData = null }: { dict: any, navTabs: any, authenticated?: boolean, userData?: UserData }) {

    return <DropdownMenu >

        <DropdownMenuTrigger asChild >

            {authenticated ? (
                <Button borderType="fullRounded" variant="ghost" className="hover:bg-muted/50 bg-transparent inline-flex gap-1 group items-center py-1 px-0">
                    {userData && <UserInitialsBadge firstName={userData.first_name} lastName={userData.last_name} />}
                    <ChevronDown className='size-4 transition duration-200 group-data-[state=open]:rotate-180' />
                </Button>
            ) : (
                <Button borderType="fullRounded" variant="outline" className=" hover:bg-muted/50 bg-transparent inline-flex font-source-sans rtl:font-almarai font-semibold gap-2 group ">
                    {dict.nav.menue_trigger} <ChevronDownIcon className='size-4 transition duration-200
     group-data-[state=open]:rotate-180' />
                </Button>
            )}
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-56 p-2'>

            <DropdownMenuItem className='' asChild>
                {/* <Link href="/login" className='flex items-center gap-2  w-full'>
                <ArrowRightEndOnRectangleIcon className='size-10' />
                <p className='font-semibold'>Log In </p>
            </Link> */}

                <AuthButton dict={dict} authenticated={false} className='flex  items-center gap-2 w-full font-semibold' />

            </DropdownMenuItem>

            <DropdownMenuSeparator className='  my-2 mx-2 ' />

            <DropdownMenuLabel className='rtl:font-black font-bold  text-base'>{dict.nav.other}</DropdownMenuLabel>


            {/* Nav-tabs */}
            {navTabs.map((tab: any) => (
                <DropdownMenuItem className='' asChild key={tab.title}>
                    <Link href={tab.href} className='font-semibold '>
                        {tab.title}
                    </Link>
                </DropdownMenuItem>
            ))}

            <DropdownMenuItem asChild>
                <LanguageSwitcherDialog dict={dict} />
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>

}