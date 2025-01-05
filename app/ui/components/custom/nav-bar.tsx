
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
import { Button } from '@/ui/components/custom/button'

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
        <nav className={cn('fixed top-0 left-0 w-lvw  z-50 ',
            isScrolled ? 'bg-white shadow' : 'bg-transparent'
        )}>

            <div className="p-5 flex justify-between items-center max-w-[1440px] m-auto pe-7">

                <p className={cn("text-2xl font-extrabold font-lora ",
                    isScrolled ? 'text-primary' : 'text-background'
                )}>Lumière</p>

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




            </div>



        </nav>
    )
}