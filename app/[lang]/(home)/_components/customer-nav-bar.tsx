'use client'

import { NotepadText, BriefcaseIcon } from 'lucide-react';
import MobileNavMenu from '@/_ui/components/custom/mobile-nav-menu'
import { cn } from '@/_lib/utils/utils'
import useIsScrolled from '../_lib/hooks/use-is-scrolled'
import { UserData } from '@/[lang]/(auth)/_lib/definitions';
import Logo from '@/_ui/components/custom/logo';
import NavButton from '@/_ui/components/custom/nav-button';
import DeskTopNavMenu from '@/_ui/components/custom/desk-top-nav-menu';

interface CustomerNavBarProps {
    userData: UserData;
    dict: {
        nav: {
            for_business: string;
            appointments: string;
            other: string;
        };
    };
    fixed?: boolean;
    hideInMobile?: boolean;
    showForBusiness?: boolean;
    className?: string;
}

export default function CustomerNavBar({
    userData,
    dict,
    fixed = false,
    hideInMobile = false,
    showForBusiness = true,
    className
}: CustomerNavBarProps) {
    const isScrolled = useIsScrolled()

    const navTabs = [
        {
            title: dict.nav.for_business,
            href: '/register?type=professional',
            icon: (<BriefcaseIcon />),
            type: "other"
        },
        {
            title: dict.nav.appointments,
            href: '/customer/dashboard/appointments',
            icon: (<NotepadText />),
            type: "normal"
        },
    ]

    return (
        <nav className={cn('w-lvw z-50',
            fixed ? 'bg-white shadow' : isScrolled ? 'bg-white shadow' : 'bg-transparent',
            hideInMobile ? 'hidden md:block fixed top-0 left-0' : 'fixed top-0 left-0'
        )}>
            <div className={cn("p-5 py-4 flex justify-between items-center max-w-[1440px] m-auto pe-7", className)}>
                <Logo className={cn(
                    fixed ? 'text-primary' : isScrolled ? 'text-primary' : 'text-background'
                )} />

                <div className={cn("md:hidden", hideInMobile ? 'hidden' : '')}>
                    <MobileNavMenu userData={userData} authenticated={true} navTabs={navTabs} isScrolled={isScrolled} fixed={fixed} dict={dict} />
                </div>

                <div className={cn("hidden md:inline-flex ltr:space-x-2 rtl:gap-2 items-center",
                    fixed ? 'text-primary' : isScrolled ? 'text-primary' : 'text-background'
                )}>
                    {showForBusiness && (
                        <NavButton href="/register?type=professional">
                            {dict.nav.for_business}
                        </NavButton>
                    )}

                    <DeskTopNavMenu authenticated={true} userData={userData} dict={dict} navTabs={navTabs} />
                </div>
            </div>
        </nav>
    )
}