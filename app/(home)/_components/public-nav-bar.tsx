
'use client'

import { ArrowRightEndOnRectangleIcon, BriefcaseIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/ui/components/dropdown-menu"
import MobileNavMenu from '@/ui/components/custom/mobile-nav-menu'
import { cn } from '@/lib/utils/utils'
import { useEffect, useState } from 'react'
import { Button } from '@/ui/components/custom/button'
import Link from 'next/link'
import { GlobeAsiaAustraliaIcon } from "@heroicons/react/24/outline";
import useIsScrolled from '../_lib/hooks/use-is-scrolled'


export default function PublicNavBar({ fixed = false, hideInMobile = false }: { fixed?: boolean, hideInMobile?: boolean }) {

    const navTabs = [
        {
            title: 'For business',
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

            <div className="p-5 flex justify-between items-center max-w-[1440px] m-auto pe-7">

                <Link href="/" className={cn("text-2xl font-extrabold font-lora ",
                    fixed ? 'text-primary' : isScrolled ? 'text-primary' : 'text-background'
                )}>Lumière</Link>

                {/* Nav menue trigger on mobile devices */}
                <div className="md:hidden">
                    <MobileNavMenu authenticated={false} navTabs={navTabs} isScrolled={isScrolled} fixed={false} />
                </div>

                {/*Closed navbar on desktop screens  */}
                <div className={cn("hidden md:inline-flex space-x-2 items-center",
                    fixed ? 'text-primary' : isScrolled ? 'text-primary' : ' text-background'
                )}>
                    {/* <Link href="/register?type=professional" className={cn("font-semibold",
                        isScrolled ? 'text-primary' : ' text-background'
                    )}>For business</Link> */}

                    <Button borderType="fullRounded" variant="nextLink" href="/register?type=professional" className="bg-transparent font-source-sans font-semibold   hover:bg-muted/50">For business</Button>

                    <DropdownMenu>

                        <DropdownMenuTrigger asChild >
                            <Button borderType="fullRounded" variant="outline" className=" hover:bg-muted/50 bg-transparent inline-flex space-x-3  font-source-sans font-semibold gap-2 group ">
                                Menu <ChevronDownIcon className='size-4 transition duration-200
                         group-data-[state=open]:rotate-180' />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className='w-56 p-2'>

                            <DropdownMenuItem className=''>
                                <Link href="/login" className='flex items-center gap-2  w-full'>
                                    <ArrowRightEndOnRectangleIcon className='size-10' />
                                    <p className='font-semibold'>Log In </p>
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator className='  my-2 mx-2 ' />
                            <DropdownMenuLabel className='font-bold  text-base'>Other</DropdownMenuLabel>
                            <DropdownMenuItem className=''>
                                <Link href="/register?type=professional" className='font-semibold '>
                                    For business
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem className=' text-accent-600  '>
                                <p className=" flex  items-center gap-2  font-semibold "><GlobeAsiaAustraliaIcon className="h-6 w-5" /> English</p>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>




            </div>

        </nav>
    )
}