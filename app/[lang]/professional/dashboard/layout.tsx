import { SidebarProvider, SidebarTrigger } from "@/_ui/components/sidebar"
import { AppSidebar } from "@/_ui/components/custom/app-sidebar"
import { Suspense } from "react"
import NavBar from "@/_ui/components/custom/nav-bar"
import { NavBarSkeleton } from "@/[lang]/(home)/_components/skeletons"
import { getUserData } from "@/[lang]/(auth)/_lib/auth-server-services"
import { NotepadText } from "lucide-react"

export default async function ProfessionalDashboardLayout({ children, params }: { children: React.ReactNode, params: Promise<{ lang: string }> }) {

    const currentLang = (await params).lang as string

    const userData = await getUserData()

    const sidebarTabs = [
        {
            key: 'appointments',
            title: 'Appointments',
            href: `/${currentLang}/professional/dashboard/appointments`,
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
            <AppSidebar userData={userData} sidebarTabs={sidebarTabs} triggerClass="top-0" />

            <div className="bg-gray-50 h-dvh w-full">
                {/* <div className=""> */}
                <SidebarTrigger className="md:hidden fixed top-0 left-0" />
                {children}
            </div>
            {/* </div> */}
        </SidebarProvider>

    )
}