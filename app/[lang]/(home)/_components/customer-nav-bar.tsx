'use client'

import { ArrowLeftEndOnRectangleIcon, BriefcaseIcon } from '@heroicons/react/24/outline'
import { ChevronDown, NotepadText } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/_ui/components/dropdown-menu"
import MobileNavMenu from '@/_ui/components/custom/mobile-nav-menu'
import { cn } from '@/_lib/utils/utils'
import { useEffect, useState } from 'react'
import { Button } from '@/_ui/components/custom/button'
import Link from 'next/link'
import useIsScrolled from '../_lib/hooks/use-is-scrolled'
import { LanguageSwitcherDialog, LanguageSwitcherTrigger } from '@/_ui/components/custom/language-switcher-dialog'
import { useParams } from 'next/navigation'
import UserInitialsBadge from '@/_ui/components/custom/user-initials-badge';
import { UserData } from '@/[lang]/(auth)/_lib/definitions';
import AuthButton from '@/_ui/components/custom/auth-button';

export default function CustomerNavBar({
    userData,
    fixed = false,
    hideInMobile = false,
    showForBusiness = true,
    className }: { userData: UserData, fixed?: boolean, hideInMobile?: boolean, showForBusiness?: boolean, className?: string }) {

    const isScrolled = useIsScrolled()
    // const [isLanguageDialogOpen, setIsLanguageDialogOpen] = useState(false)
    const params = useParams()

    // Get the first and last name of the user
    // THen put the first letter of the first name and the first letter of the last name together

    const navTabs = [
        {
            title: 'For business',
            href: '/register?type=professional',
            icon: (<BriefcaseIcon className='size-6' />),
            type: "other"
        },
        {
            title: 'Appointments',
            href: '/customer/dashboard/appointments',
            icon: (<NotepadText />),
            type: "normal"
        },
    ]

    return (
        <nav className={cn(' w-lvw  z-50 ',
            fixed ? 'bg-white shadow' : isScrolled ? 'bg-white shadow' : 'bg-transparent',
            hideInMobile ? 'hidden md:block fixed top-0 left-0' : 'fixed top-0 left-0'
        )}>
            {/* 
            <LanguageSwitcherDialog hasTrigger={false} open={isLanguageDialogOpen} setOpen={setIsLanguageDialogOpen} /> */}

            <div className={cn("p-5 py-4 flex justify-between items-center max-w-[1440px] m-auto pe-7", className)}>

                <Link href="/" className={cn("text-2xl font-bold font-cinzel ",
                    fixed ? 'text-primary' : isScrolled ? 'text-primary' : 'text-background'
                )}>Lumière</Link>

                {/* Nav menue trigger on mobile devices */}
                <div className={cn("md:hidden",
                    hideInMobile ? 'hidden' : ''
                )}>
                    <MobileNavMenu userData={userData} authenticated={true} navTabs={navTabs} isScrolled={isScrolled} fixed={fixed} />
                </div>

                {/*Closed navbar on desktop screens  */}
                <div className={cn("hidden md:inline-flex space-x-2 items-center",
                    fixed ? 'text-primary' : isScrolled ? 'text-primary' : ' text-background'
                )}>

                    {showForBusiness && <Button borderType="fullRounded" isLink={true} variant="outline" href="/register?type=professional" className="bg-transparent font-source-sans font-semibold   hover:bg-muted/50">For business</Button>}

                    <DropdownMenu>

                        <DropdownMenuTrigger asChild >

                            <Button borderType="fullRounded" variant="ghost" className=" hover:bg-muted/50 bg-transparent inline-flex  gap-1 group items-center py-1 px-0">

                                {userData && <UserInitialsBadge firstName={userData.first_name} lastName={userData.last_name} />}

                                <ChevronDown className='size-4 transition duration-200 group-data-[state=open]:rotate-180' />

                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className='w-56 p-2'>

                            {navTabs.map((tab) =>
                                tab.type === "normal" && (
                                    <DropdownMenuItem key={tab.title} className='' asChild>
                                        <Link href={tab.href} className='font-semibold flex items-center gap-2  w-full'>
                                            {tab.icon}
                                            {tab.title}
                                        </Link>
                                    </DropdownMenuItem>
                                ))}

                            <DropdownMenuItem className='' asChild>

                                <AuthButton authenticated={true} className='flex justify-start items-center gap-2 w-full font-semibold' />
                            </DropdownMenuItem>
                            <DropdownMenuSeparator className='  my-2 mx-2 ' />
                            <DropdownMenuLabel className='font-bold  text-base'>Other</DropdownMenuLabel>
                            {navTabs.map((tab) => (
                                tab.type === "other" && (
                                    <DropdownMenuItem key={tab.title} className='' asChild>
                                        <Link href={tab.href} className='font-semibold '>
                                            {tab.title}
                                        </Link>
                                    </DropdownMenuItem>
                                )
                            ))}

                            <DropdownMenuItem className='   ' asChild>
                                <LanguageSwitcherDialog className='w-full' />
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>




            </div>

        </nav>
    )
}