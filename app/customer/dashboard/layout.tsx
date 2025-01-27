import { SidebarProvider, SidebarTrigger } from "@/ui/components/sidebar"
import { AppSidebar } from "@/customer/_components/app-sidebar"
import { Suspense } from "react"
import NavBar from "@/ui/components/custom/nav-bar"
import { NavBarSkeleton } from "@/(home)/_components/skeletons"
import { getUserData } from "@/(auth)/_lib/auth-server-services"
import { div } from "framer-motion/client"

export default async function CustomerLayout({ children }: { children: React.ReactNode }) {

    const userData = await getUserData()

    return (
        <div className="md:mt-20">
            <SidebarProvider>
                <AppSidebar userData={userData} />

                {/* Nav bar */}
                <Suspense fallback={<NavBarSkeleton />}>
                    <NavBar className="max-w-full" fixed={true} hideInMobile={true} />
                </Suspense>

                <div className="bg-gray-50 h-dvh w-full">
                    <SidebarTrigger className="md:hidden fixed top-0 left-0" />
                    {children}
                </div>
            </SidebarProvider>
        </div>

    )
}