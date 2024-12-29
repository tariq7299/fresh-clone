import { ArrowRightEndOnRectangleIcon, Bars3Icon, XMarkIcon, ChevronRightIcon, ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle,
} from "@/ui/components/common/navigation-menu"
import { NavigationMenuDemo } from './test'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/ui/components/common/dropdown-menu"


export default function NavBar() {


    return (
        <>
            {/* <NavigationMenuDemo></NavigationMenuDemo> */}
            {/* closed navbar on mobile screens */}
            <nav className="bg-transparent p-5 flex justify-between items-center">
                <p className="text-lg font-extrabold ">LOGO</p>

                <div className="md:hidden">
                    <Bars3Icon className='size-10' />
                </div>

                {/* <NavigationMenuDemo></NavigationMenuDemo> */}

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

            {/* The oopend navbar in mobile screens */}
            <div className="bg-gray-100 p-5 h-dvh">

                <div className="bg-transparent  flex justify-between items-center p-5 mb-8">
                    <p className="text-lg font-extrabold">LOGO</p>

                    <XMarkIcon className='size-9' />


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