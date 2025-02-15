'use client'
import { useState } from 'react'
import { cn } from '@/_lib/utils/utils'
import { XMarkIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { Button } from '@/_ui/components/custom/button'
import Link from 'next/link'
import MobileNavToggler from './mobile-nav-toggler'
import { UserData } from '@/[lang]/(auth)/_lib/definitions';
import AuthButton from './auth-button';
import { LanguageSwitcherDialog } from './language-switcher-dialog'

export default function MobileNavMenu({ authenticated, navTabs, isScrolled, fixed, userData, dict }: { authenticated: boolean, navTabs: { title: string, href: string, icon: JSX.Element }[], isScrolled: boolean, fixed: boolean, userData: UserData, dict: any }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <MobileNavToggler setIsOpen={setIsOpen} fixed={fixed} isScrolled={isScrolled} authenticated={authenticated} isOpen={isOpen} userData={userData} />

            <div className={cn(
                "bg-gray-100 p-5 h-dvh top-0 left-0 right-0 z-50 transition-all ease-in-out delay-150 duration-200 absolute text-foreground",
                isOpen
                    ? "-translate-y-1 opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
            )}>
                <div className="bg-transparent flex justify-between items-center p-5 mb-8">
                    <p className={cn("text-2xl font-bold font-cinzel")}>Lumière</p>
                    <Button size="icon" variant={"ghost"} onClick={() => setIsOpen(!isOpen)}>
                        <XMarkIcon className='size-9' />
                    </Button>
                </div>

                <ul className='space-y-5 font-bold text-lg'>
                    <li className='p-5 bg-background rounded-xl border-solid border border-gray-200'>
                        <AuthButton className='flex justify-start items-center gap-3 h-auto w-full text-md font-semibold p-0' authenticated={authenticated} dict={dict} iconSize='6' />
                    </li>

                    <li className='p-5 bg-background rounded-xl border-solid border border-gray-200 space-y-6'>
                        {navTabs && navTabs?.length > 0 && navTabs.map((tab) => (
                            <Link key={tab.title} className='flex items-center gap-3' href={tab.href}>
                                {tab.icon} {tab.title}
                                <ChevronRightIcon className='size-4 ml-auto' />
                            </Link>
                        ))}

                        <LanguageSwitcherDialog iconSize='6' className='w-full justify-start text-md h-auto p-0 gap-3' dict={dict} />
                    </li>
                </ul>
            </div>
        </>
    )
}
