
import { ArrowRightEndOnRectangleIcon, Bars3Icon, ChevronDownIcon } from '@heroicons/react/24/outline'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/ui/components/common/dropdown-menu"
import MobileNavMenu from '@/ui/components/custom/mobile-nav-menu'

export default function NavBar() {


    return (
        <>
            {/* closed navbar on mobile screens */}
            <nav className="bg-transparent p-5 flex justify-between items-center">
                <p className="text-lg font-extrabold ">LOGO</p>

                <div className="md:hidden">
                    {/* <Bars3Icon className='size-10' /> */}
                    <MobileNavMenu />
                </div>

                {/*Closed navbar on desktopscreens  */}
                <DropdownMenu>
                    <DropdownMenuTrigger className='hidden md:inline-flex border rounded-full  space-x-3 items-center border-gray-200 font-bold py-2 px-5 gap-2'>Menu <ChevronDownIcon className='size-4' /></DropdownMenuTrigger>
                    <DropdownMenuContent className='w-56'>
                        <DropdownMenuItem>
                            <a className='p-2 flex items-center gap-2  w-full'>
                                <ArrowRightEndOnRectangleIcon className='size-10' />
                                <p className='font-semibold'>Log In </p>
                            </a>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

            </nav>



        </>
    )
}