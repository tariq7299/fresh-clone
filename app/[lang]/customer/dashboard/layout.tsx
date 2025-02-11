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

    const sidebarTabs = [
        {
            key: 'appointments',
            title: 'Appointments',
            href: `/${currentLang}/customer/dashboard/appointments`,
            icon: (<NotepadText />)
        },
    ]


    return (
        <SidebarProvider>

            <AppSidebar userData={userData} sidebarTabs={sidebarTabs} containerClass="pt-[70px]" triggerClass="top-18" />

            {/* Nav bar */}
            <Suspense fallback={<NavBarSkeleton />}>
                <NavBar showForBusiness={false} className="!px-20 max-w-full" fixed={true} hideInMobile={true} />
            </Suspense>

            <div className="  size-full h-[90dvh]">
                <Suspense fallback={<div>Loading...</div>}>
                    {children}
                </Suspense>
            </div>


        </SidebarProvider>

    )
}