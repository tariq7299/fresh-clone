'use client'
import { useState } from 'react'
import { cn } from '@/_lib/utils/utils'
import { ArrowRightEndOnRectangleIcon, Bars3Icon, XMarkIcon, ChevronRightIcon, BriefcaseIcon } from '@heroicons/react/24/outline'
import { Button } from '@/_ui/components/custom/button'
import Link from 'next/link'
import { GlobeAsiaAustraliaIcon } from "@heroicons/react/24/outline";
import MobileNavToggler from './mobile-nav-toggler'
import { UserData } from '@/[lang]/(auth)/_lib/definitions';

export default function MobileNavMenu({ authenticated, navTabs, isScrolled, fixed, userData }: { authenticated: boolean, navTabs: { title: string, href: string, icon: JSX.Element }[], isScrolled: boolean, fixed: boolean, userData: UserData }) {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <MobileNavToggler setIsOpen={setIsOpen} fixed={fixed} isScrolled={isScrolled} authenticated={authenticated} isOpen={isOpen} userData={userData} />

            {/* The opend nav menu on mobile screens */}
            <div className={cn(
                "bg-gray-100 p-5 h-dvh top-0 left-0 right-0 z-50 transition-all ease-in-out delay-150 duration-200 absolute text-foreground",
                isOpen
                    ? "-translate-y-1 opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
            )}>

                <div className="bg-transparent  flex justify-between items-center p-5 mb-8">
                    <p className={cn("text-2xl font-bold font-cinzel ")}>Lumière</p>

                    <Button size="icon" variant={"ghost"} onClick={() => setIsOpen(!isOpen)}>
                        <XMarkIcon className='size-9' />
                    </Button>

                </div>
                <ul className='space-y-5 font-bold text-lg'>
                    {/* Log in and log out */}

                    <li className=' '>
                        {authenticated ? <>
                            <Link className='p-5 bg-white flex items-center gap-3 rounded-xl border-solid	border border-gray-200' href="/login?sessionEnded=true">
                                <ArrowRightEndOnRectangleIcon className='size-6' />
                                Log out
                                <ChevronRightIcon className='size-4 ml-auto' />
                            </Link>
                        </>
                            : <>
                                <Link className='p-5 bg-white flex items-center gap-3 rounded-xl border-solid	border border-gray-200' href="/login">
                                    <ArrowRightEndOnRectangleIcon className='size-6' />
                                    Log In
                                    <ChevronRightIcon className='size-4 ml-auto' />
                                </Link>
                            </>
                        }

                    </li>

                    <li className='p-5 bg-background rounded-xl border-solid border border-gray-200 space-y-6'>

                        {/* Nav tabs */}
                        {navTabs && navTabs?.length > 0 && navTabs.map((tab) => (
                            <Link key={tab.title} className=' flex items-center gap-3 ' href={tab.href}>
                                {tab.icon} {tab.title}
                                <ChevronRightIcon className='size-4 ml-auto' />
                            </Link>
                        ))}

                        {/* Language selector */}
                        <p className=" flex  items-center gap-3  pe-0  font-semibold">
                            <GlobeAsiaAustraliaIcon className="size-6 text-accent-600" />
                            <span className='text-accent-600'>English</span>
                            <ChevronRightIcon className='size-4 ml-auto' />
                        </p>


                    </li>
                </ul>
            </div>
        </>
    )
}
