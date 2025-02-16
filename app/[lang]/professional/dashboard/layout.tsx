import { SidebarProvider } from "@/_ui/components/sidebar"
import { Suspense } from "react"
import { getUserData } from "@/[lang]/(auth)/_lib/auth-server-services"
import { NotepadText } from "lucide-react"
import ChangeBodyColor from "@/_ui/components/custom/change-body-color"
import { ProfessionalSidebar } from "../_components/sidebar"
import { getDictionary } from "@/_lib/dictionaries"

export default async function ProfessionalDashboardLayout({ children, params }: { children: React.ReactNode, params: Promise<{ lang: "en" | "ar" }> }) {

    const currentLang = (await params).lang as "en" | "ar"

    const userData = await getUserData()

    const dict = await getDictionary(currentLang)

    const sidebarTabs = [
        {
            key: 'appointments',
            title: dict.dashboard.sidebar.appointments,
            href: `/${currentLang}/professional/dashboard/appointments`,
            icon: (<NotepadText />)
        },
    ]


    return (
        <SidebarProvider>
            <ChangeBodyColor color="#F5F5F6" />

            {userData &&
                <ProfessionalSidebar
                    side={currentLang === "ar" ? "right" : "left"}
                    dict={dict}
                    userData={userData}
                    sidebarTabs={sidebarTabs}
                    triggerClass="top-0"
                    containerClass="bg-gradient-to-b from-[#638C6D]  to-[#1B261E] "
                />
            }

            <div className="p-5 pb-0 md:ps-14 size-full ">
                <Suspense>
                    {children}
                </Suspense>
            </div>

        </SidebarProvider>

    )
}