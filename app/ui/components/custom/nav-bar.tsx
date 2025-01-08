
'use client'

import { ArrowRightEndOnRectangleIcon, Bars3Icon, ChevronDownIcon } from '@heroicons/react/24/outline'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/ui/components/dropdown-menu"
import MobileNavMenu from '@/ui/components/custom/mobile-nav-menu'
import { cn } from '@/lib/utils/utils'
import { useEffect, useState } from 'react'
import { Button } from '@/ui/components/custom/button'
import Link from 'next/link'
import { GlobeAsiaAustraliaIcon } from "@heroicons/react/24/outline";

export default function NavBar() {

    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const options = { passive: true }; // options must match add/remove event
        const scroll = () => setIsScrolled(window?.scrollY > 0);
        document.addEventListener("scroll", scroll, options);

        // remove event on unmount to prevent a memory leak
        () => document.removeEventListener("scroll", scroll, true);
    }, []);


    return (
        <nav className={cn('fixed top-0 left-0 w-lvw  z-50 ',
            isScrolled ? 'bg-white shadow' : 'bg-transparent'
        )}>

            <div className="p-5 flex justify-between items-center max-w-[1440px] m-auto pe-7">

                <Link href="/" className={cn("text-2xl font-extrabold font-lora ",
                    isScrolled ? 'text-primary' : 'text-background'
                )}>Lumière</Link>

                {/* Nav menue trigger on mobile devices */}
                <div className="md:hidden">
                    <MobileNavMenu isScrolled={isScrolled} />
                </div>

                {/*Closed navbar on desktop screens  */}
                <div className={cn("hidden md:inline-flex space-x-2 items-center",
                    isScrolled ? 'text-primary' : ' text-background'
                )}>
                    <Button borderType="fullRounded" variant="outline" className="bg-transparent font-source-sans font-semibold   hover:bg-muted/50">For business</Button>

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
                                <Link href="/signup" className='font-semibold '>
                                    For business
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem className=' text-accent-600  hover:text-accent-foreground'>
                                <p className=" flex  items-center gap-2  font-semibold "><GlobeAsiaAustraliaIcon className="h-6 w-5" /> English</p>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>




            </div>



        </nav>
    )
}