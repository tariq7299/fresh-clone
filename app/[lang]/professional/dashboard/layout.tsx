import { SidebarProvider, SidebarTrigger } from "@/_ui/components/sidebar"
import { AppSidebar } from "@/_ui/components/custom/app-sidebar"
import { Suspense } from "react"
import NavBar from "@/_ui/components/custom/nav-bar"
import { NavBarSkeleton } from "@/[lang]/(home)/_components/skeletons"
import { getUserData } from "@/[lang]/(auth)/_lib/auth-server-services"
import { NotepadText } from "lucide-react"
import BgColor from "@/_ui/components/custom/bg-color"
import { ProfessionalSidebar } from "../_components/sidebar"


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
    ]


    return (
        <SidebarProvider>
            <BgColor color="#F5F5F6" />

            {userData && <ProfessionalSidebar userData={userData} sidebarTabs={sidebarTabs} triggerClass="top-0" containerClass="bg-gradient-to-b from-[#638C6D]  to-[#1B261E] " />}

            <div className="p-5 pb-0 md:ps-14 size-full ">
                <Suspense>
                    {children}
                </Suspense>
            </div>

        </SidebarProvider>

    )
}