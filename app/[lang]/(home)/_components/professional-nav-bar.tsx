'use client'

import { ArrowLeftEndOnRectangleIcon, ArrowRightEndOnRectangleIcon, BriefcaseIcon, } from '@heroicons/react/24/outline'
import { ChevronDown } from 'lucide-react';
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
import { Button } from '@/_ui/components/custom/button'
import Link from 'next/link'
import { GlobeAsiaAustraliaIcon } from "@heroicons/react/24/outline";
import useIsScrolled from '../_lib/hooks/use-is-scrolled'
import Image from 'next/image'
import userAvatar from "@/../public/avatars/avatar11.png"
import { useState } from 'react'
import { LanguageSwitcherDialog, LanguageSwitcherTrigger } from '@/_ui/components/custom/language-switcher-dialog'
import { useParams } from 'next/navigation'
import { UserData } from '@/[lang]/(auth)/_lib/definitions';
import AuthButton from '@/_ui/components/custom/auth-button';

export default function ProfessionalNavBar({ fixed = false, hideInMobile = false, userData }: { fixed?: boolean, hideInMobile?: boolean, userData: UserData }) {

    const [isLanguageDialogOpen, setIsLanguageDialogOpen] = useState(false)
    const isScrolled = useIsScrolled()
    const params = useParams()

    return (
        <nav className={cn(' w-lvw  z-50 ',
            fixed ? 'bg-white shadow' : isScrolled ? 'bg-white shadow' : 'bg-transparent',
            hideInMobile ? 'hidden md:block fixed top-0 left-0' : 'fixed top-0 left-0'
        )}>

            <LanguageSwitcherDialog hasTrigger={false} open={isLanguageDialogOpen} setOpen={setIsLanguageDialogOpen} />

            <div className="p-5 py-4 flex justify-between items-center max-w-[1440px] m-auto pe-7">

                <Link href="/" className={cn("text-2xl font-bold font-cinzel ",
                    fixed ? 'text-primary' : isScrolled ? 'text-primary' : 'text-background'
                )}>Lumière</Link>

                {/* Nav menue trigger on mobile devices */}
                <div className="md:hidden">
                    <MobileNavMenu userData={userData} authenticated={true} navTabs={[]} isScrolled={isScrolled} fixed={fixed} />
                </div>

                {/*Closed navbar on desktop screens  */}
                <div className={cn("hidden md:inline-flex space-x-2 items-center",
                    fixed ? 'text-primary' : isScrolled ? 'text-primary' : ' text-background'
                )}>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild >
                            <Button borderType="fullRounded" variant="outline" className=" hover:bg-muted/50 bg-transparent inline-flex  font-source-sans font-semibold gap-2 group py-4 pe-3 ps-1 items-center ">
                                <Image
                                    src={userAvatar}
                                    alt="user avatar"
                                    className="size-8 "
                                />

                                <ChevronDown className='size-4 transition duration-200
                         group-data-[state=open]:rotate-180' />

                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className='w-56 p-2'>

                            <DropdownMenuItem className='' asChild>
                                <AuthButton authenticated={true} className='flex justify-start items-center gap-2 w-full font-semibold' />
                            </DropdownMenuItem>
                            <DropdownMenuSeparator className='  my-2 mx-2 ' />
                            <DropdownMenuLabel className='font-bold  text-base'>Other</DropdownMenuLabel>
                            <DropdownMenuItem className=' text-accent-600  ' onClick={() => setIsLanguageDialogOpen(true)} asChild>
                                <LanguageSwitcherTrigger />
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

            </div>

        </nav>
    )
}