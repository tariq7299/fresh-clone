import { SidebarProvider, SidebarTrigger } from "@/_ui/components/sidebar"
import { AppSidebar } from "@/_ui/components/custom/app-sidebar"
import { Suspense } from "react"
import NavBar from "@/_ui/components/custom/nav-bar"
import { NavBarSkeleton } from "@/[lang]/(home)/_components/skeletons"
import { getUserData } from "@/[lang]/(auth)/_lib/auth-server-services"
import { div } from "framer-motion/client"
import { NotepadText } from "lucide-react"
import BgColor from "@/_ui/components/custom/change-body-color"
import { CustomerSidebar } from "../_components/sidebar"

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
            <BgColor color="#F5F5F6" />
            {userData && <CustomerSidebar userData={userData} sidebarTabs={sidebarTabs} containerClass="pt-[70px]" triggerClass="top-18" />}

            {/* Nav bar */}
            <Suspense fallback={<NavBarSkeleton />}>
                <NavBar showForBusiness={false} className="!px-4 md:!px-20 max-w-full" fixed={true} />
            </Suspense>

            <div className="p-5 pt-24 pb-0 md:ps-14 size-full">
                <Suspense>
                    {children}
                </Suspense>
            </div>

        </SidebarProvider>

    )
}