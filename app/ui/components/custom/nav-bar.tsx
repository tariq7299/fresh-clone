
"use client"

import { ArrowRightEndOnRectangleIcon, Bars3Icon, ChevronDownIcon } from '@heroicons/react/24/outline'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/ui/components/dropdown-menu"
import MobileNavMenu from '@/ui/components/custom/mobile-nav-menu'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

export default function NavBar() {

    const [isScrolled, setIsScrolled] = useState(window.scrollY > 0)

    useEffect(() => {
        const options = { passive: true }; // options must match add/remove event
        const scroll = () => setIsScrolled(window.scrollY > 0);
        document.addEventListener("scroll", scroll, options);

        // remove event on unmount to prevent a memory leak
        () => document.removeEventListener("scroll", scroll, true);
    }, []);


    return (
        <nav className={cn('fixed top-0 left-0 w-full  z-50 ',
            isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        )}>

            <div className="p-5 flex justify-between items-center max-w-[1440px] m-auto">

                <p className="text-2xl font-extrabold font-lora text-white">Lumière</p>

                {/* Nav menue trigger on mobile devices */}
                <div className="md:hidden">
                    <MobileNavMenu />
                </div>

                {/*Closed navbar on desktop screens  */}
                <DropdownMenu>
                    <DropdownMenuTrigger className='hidden md:inline-flex border rounded-full  space-x-3 items-center border-gray-200 font-bold py-2 px-5 gap-2 group font-montserrat text-white'>

                        {/*
                         - "group-data-[state=open]:rotate-180": this was used to create the animation of the arrow icon (up and down)
                         - "data-[state=open]": This will be given by default to all of DropDownMenu components when the dropdown is open
                         */}
                        Menu <ChevronDownIcon className='size-4 transition duration-200
                         group-data-[state=open]:rotate-180' />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className='w-56'>
                        <DropdownMenuItem>
                            <a className='p-2 flex items-center gap-2  w-full'>
                                <ArrowRightEndOnRectangleIcon className='size-10' />
                                <p className='font-semibold'>Log In </p>
                            </a>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>


            </div>



        </nav>
    )
}