'use client'

import { BriefcaseIcon } from '@heroicons/react/24/outline'
import { cn } from '@/_lib/utils/utils'
import useIsScrolled from '../_lib/hooks/use-is-scrolled'
import MobileNavMenu from '@/_ui/components/custom/mobile-nav-menu'
import Logo from '@/_ui/components/custom/logo'
import NavButton from '@/_ui/components/custom/nav-button'
import DeskTopNavMenu from '@/_ui/components/custom/desk-top-nav-menu'

export default function PublicNavBar({ dict, fixed = false, hideInMobile = false }: { dict: any, fixed?: boolean, hideInMobile?: boolean }) {
    const navTabs = [
        {
            title: dict.nav.for_business,
            href: '/register?type=professional',
            icon: (<BriefcaseIcon className='size-6' />)
        },
    ]

    const isScrolled = useIsScrolled()

    return (
        <nav className={cn(' w-lvw  z-50 ',
            fixed ? 'bg-white shadow' : isScrolled ? 'bg-white shadow' : 'bg-transparent',
            hideInMobile ? 'hidden md:block fixed top-0 left-0' : 'fixed top-0 left-0'
        )}>
            <div className="p-5 py-4 flex justify-between items-center max-w-[1440px] m-auto ">
                <Logo className={cn(
                    fixed ? 'text-primary' : isScrolled ? 'text-primary' : 'text-background'
                )} />

                <div className="md:hidden">
                    <MobileNavMenu userData={null} authenticated={false} navTabs={navTabs} isScrolled={isScrolled} fixed={fixed} dict={dict} />
                </div>

                <div className={cn("hidden md:inline-flex ltr:space-x-2 rtl:gap-2 items-center",
                    fixed ? 'text-primary' : isScrolled ? 'text-primary' : ' text-background'
                )}>
                    <NavButton href="/register?type=professional">{dict.nav.for_business}</NavButton>

                    <DeskTopNavMenu dict={dict} navTabs={navTabs} />
                </div>
            </div>
        </nav>
    )
}