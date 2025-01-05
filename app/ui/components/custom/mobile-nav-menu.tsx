'use client'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { ArrowRightEndOnRectangleIcon, Bars3Icon, XMarkIcon, ChevronRightIcon, BriefcaseIcon } from '@heroicons/react/24/outline'
import { Button } from '@/ui/components/custom/button'
import Link from 'next/link'
import { GlobeAsiaAustraliaIcon } from "@heroicons/react/24/outline";

export default function MobileNavMenu({ isScrolled }: { isScrolled: boolean }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>

            <Button size="icon" variant={"ghost"} onClick={() => setIsOpen(!isOpen)}>
                <Bars3Icon className={cn('size-10 ',
                    isScrolled ? 'text-foreground' : 'text-background hover:text-foreground'
                )} />
            </Button>

            {/* The opend nav menu on mobile screens */}
            <div className={cn(
                "bg-gray-100 p-5 h-dvh top-0 left-0 right-0 z-50 transition-all ease-in-out delay-150 duration-200 absolute text-foreground",
                isOpen
                    ? "-translate-y-1 opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
            )}>

                <div className="bg-transparent  flex justify-between items-center p-5 mb-8">
                    <p className={cn("text-2xl font-extrabold font-lora ")}>Lumière</p>

                    <Button size="icon" variant={"ghost"} onClick={() => setIsOpen(!isOpen)}>
                        <XMarkIcon className='size-9' />
                    </Button>

                </div>
                <ul className='space-y-5 font-bold text-lg'>
                    <li className=' '>
                        <Link className='p-5 bg-white flex items-center gap-2 rounded-xl border-solid	border border-gray-200' href="/login">
                            <ArrowRightEndOnRectangleIcon className='size-6' /> Log In
                            <ChevronRightIcon className='size-4 ml-auto' />
                        </Link>
                    </li>
                    <li className='p-5 bg-background rounded-xl border-solid border border-gray-200 space-y-6'>
                        <Link className=' flex items-center gap-2 ' href="/signup">
                            <BriefcaseIcon className='size-6' /> For business
                            <ChevronRightIcon className='size-4 ml-auto' />
                        </Link>

                        <p className=" flex  items-center gap-2  pe-0  font-semibold">
                            <GlobeAsiaAustraliaIcon className="size-6 text-accent-600" />
                            <span className='text-accent-600'>English</span>
                            <ChevronRightIcon className='size-4 ml-auto' />
                        </p>


                    </li>
                </ul>
            </div>
        </>
    )
}
