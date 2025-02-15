'use client'

import { cn } from '@/_lib/utils/utils'
import useIsScrolled from '../_lib/hooks/use-is-scrolled'
import { UserData } from '@/[lang]/(auth)/_lib/definitions';
import Logo from '@/_ui/components/custom/logo';
import DeskTopNavMenu from '@/_ui/components/custom/desk-top-nav-menu';
import MobileNavMenu from '@/_ui/components/custom/mobile-nav-menu'

interface ProfessionalNavBarProps {
    userData: UserData;
    dict: {
        nav: {
            other: string;
        };
    };
    fixed?: boolean;
    hideInMobile?: boolean;
}

export default function ProfessionalNavBar({
    fixed = false,
    hideInMobile = false,
    userData,
    dict
}: ProfessionalNavBarProps) {
    const isScrolled = useIsScrolled()

    return (
        <nav className={cn('w-lvw z-50',
            fixed ? 'bg-white shadow' : isScrolled ? 'bg-white shadow' : 'bg-transparent',
            hideInMobile ? 'hidden md:block fixed top-0 left-0' : 'fixed top-0 left-0'
        )}>
            <div className="p-5 py-4 flex justify-between items-center max-w-[1440px] m-auto pe-7">
                <Logo className={cn(
                    fixed ? 'text-primary' : isScrolled ? 'text-primary' : 'text-background'
                )} />

                <div className="md:hidden">
                    <MobileNavMenu userData={userData} authenticated={true} navTabs={[]} isScrolled={isScrolled} fixed={fixed} dict={dict} />
                </div>

                <div className={cn("hidden md:inline-flex ltr:space-x-2 rtl:gap-2 items-center",
                    fixed ? 'text-primary' : isScrolled ? 'text-primary' : 'text-background'
                )}>
                    <DeskTopNavMenu authenticated={true} userData={userData} dict={dict} navTabs={[]} />
                </div>
            </div>
        </nav>
    )
}