import { SidebarProvider, SidebarTrigger } from "@/_ui/components/sidebar"
import { AppSidebar } from "@/_ui/components/custom/app-sidebar"
import { Suspense } from "react"
import NavBar from "@/_ui/components/custom/nav-bar"
import { NavBarSkeleton } from "@/[lang]/(home)/_components/skeletons"
import { getUserData } from "@/[lang]/(auth)/_lib/auth-server-services"
import { div } from "framer-motion/client"
import { NotepadText } from "lucide-react"

export default async function CustomerLayout({ children, params }: { children: React.ReactNode, params: Promise<{ lang: string }> }) {

    const currentLang = (await params).lang as string

    const userData = await getUserData()

    console.log("currentLang", currentLang)

    const sidebarTabs = [
        {
            key: 'appointments',
            title: 'Appointments',
            href: `/${currentLang}/customer/dashboard/appointments`,
            icon: (<NotepadText />)
        },
        // {
        //     key: 'reservations',
        //     title: 'Reservations',
        //     href: '/business/dashboard/reservations',
        //     icon: (<NotepadText />)
        // },
        // {
        //     key: 'sadfasdf',
        //     title: 'sadfasdf',
        //     href: '/business/dashboard/sadfasdf',
        //     icon: (<NotepadText />)
        // },
        // {
        //     key: 'sadfasddf',
        //     title: 'sadfasddf',
        //     href: '/business/dashboard/sadfasddf',
        //     icon: (<NotepadText />)
        // },
    ]


    return (
        <SidebarProvider>
            <AppSidebar userData={userData} sidebarTabs={sidebarTabs} containerClass="pt-[70px]" triggerClass="top-16" />

            {/* Nav bar */}
            <Suspense fallback={<NavBarSkeleton />}>
                <NavBar className="max-w-full" fixed={true} hideInMobile={true} />
            </Suspense>

            <div className="bg-gray-50 h-dvh w-full">

                {/* Sidebar trigger on mobile */}
                <SidebarTrigger className="md:hidden fixed top-0 left-0" />
                {children}
            </div>

        </SidebarProvider>

    )
}