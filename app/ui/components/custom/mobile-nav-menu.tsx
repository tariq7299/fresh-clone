'use client'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { ArrowRightEndOnRectangleIcon, Bars3Icon, XMarkIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { Button } from '@/ui/components/custom/button'

export default function MobileNavMenu() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>


            <Button size="icon" variant={"ghost"} onClick={() => setIsOpen(!isOpen)}>
                <Bars3Icon className='size-10' />
            </Button>



            {/* The opend navbar in mobile screens */}

            <div className={cn(
                "bg-gray-100 p-5 h-dvh top-0 left-0 right-0 z-50 transition-all ease-in-out delay-150 duration-300 absolute",
                isOpen
                    ? "-translate-y-1 opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
            )}>

                <div className="bg-transparent  flex justify-between items-center p-5 mb-8">
                    <p className="text-lg font-extrabold">LOGO</p>

                    <Button size="icon" variant={"ghost"} onClick={() => setIsOpen(!isOpen)}>
                        <XMarkIcon className='size-9' />
                    </Button>

                </div>
                <ul >
                    <li className='p-5 bg-white flex items-center gap-2 rounded-xl border-solid	border border-gray-200 '>
                        <ArrowRightEndOnRectangleIcon className='size-6' /> Log In
                        <ChevronRightIcon className='size-4 ml-auto' />
                    </li>
                </ul>
            </div>
        </>
    )
}
