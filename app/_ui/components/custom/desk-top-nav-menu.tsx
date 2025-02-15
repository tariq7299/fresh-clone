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

export default function DeskTopNavMenu({ dict, navTabs }: { dict: any, navTabs: any }) {
    return <DropdownMenu >

        <DropdownMenuTrigger asChild >
            <Button borderType="fullRounded" variant="outline" className=" hover:bg-muted/50 bg-transparent inline-flex font-source-sans rtl:font-almarai font-semibold gap-2 group ">
                {dict.nav.menue_trigger} <ChevronDownIcon className='size-4 transition duration-200
     group-data-[state=open]:rotate-180' />
            </Button>
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