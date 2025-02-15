'use client'

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
import useIsScrolled from '../_lib/hooks/use-is-scrolled'
import { LanguageSwitcherDialog } from '@/_ui/components/custom/language-switcher-dialog'
import { UserData } from '@/[lang]/(auth)/_lib/definitions';
import AuthButton from '@/_ui/components/custom/auth-button';
import UserInitialsBadge from '@/_ui/components/custom/user-initials-badge';
import Logo from '@/_ui/components/custom/logo';
import DeskTopNavMenu from '@/_ui/components/custom/desk-top-nav-menu';

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

                <div className={cn("hidden md:inline-flex space-x-2 items-center",
                    fixed ? 'text-primary' : isScrolled ? 'text-primary' : 'text-background'
                )}>

                    <DeskTopNavMenu authenticated={true} userData={userData} dict={dict} navTabs={[]} />

                    {/* <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button borderType="fullRounded" variant="ghost" className="hover:bg-muted/50 bg-transparent inline-flex gap-1 group items-center py-1 px-0">
                                {userData && <UserInitialsBadge firstName={userData.first_name} lastName={userData.last_name} />}
                                <ChevronDown className='size-4 transition duration-200 group-data-[state=open]:rotate-180' />
                            </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent className='w-56 p-2'>
                            <DropdownMenuItem className='' asChild>
                                <AuthButton authenticated={true} className='flex justify-start items-center gap-2 w-full font-semibold' dict={dict} />
                            </DropdownMenuItem>

                            <DropdownMenuSeparator className='my-2 mx-2' />
                            <DropdownMenuLabel className='font-bold text-base rtl:font-cairo'>{dict.nav.other}</DropdownMenuLabel>

                            <DropdownMenuItem className='' asChild>
                                <LanguageSwitcherDialog className='w-full' dict={dict} />
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu> */}
                </div>
            </div>
        </nav>
    )
}