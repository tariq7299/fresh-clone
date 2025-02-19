import { SidebarProvider } from "@/_ui/components/sidebar"
import { Suspense } from "react"
import { getUserData } from "@/[lang]/(auth)/_lib/auth-server-services"
import { NotepadText } from "lucide-react"
import ChangeBodyColor from "@/_ui/components/custom/change-body-color"
import { ProfessionalSidebar } from "../_components/sidebar"
import { getDictionary } from "@/_lib/dictionaries";
import { BriefcaseBusiness } from 'lucide-react';
import { MapProvider } from "@/_lib/providers/map-providers";
export default async function ProfessionalDashboardLayout({ children, params }: { children: React.ReactNode, params: Promise<{ lang: "en" | "ar" }> }) {

    const currentLang = (await params).lang as "en" | "ar"

    const userData = await getUserData()

    const dict = await getDictionary(currentLang)

    const sidebarTabs = [
        {
            key: 'appointments',
            collapsible: false,
            title: dict.dashboard.sidebar.appointments,
            href: `/${currentLang}/professional/dashboard/appointments`,
            icon: (<NotepadText className="size-5" />)
        },
        {
            key: "business",
            collapsible: true,
            title: "Business",
            icon: (<BriefcaseBusiness className="size-5" />),
            children: [{
                key: "business-details",
                title: "Business Details",
                href: `/${currentLang}/professional/dashboard/business-details`,
                icon: null
            },
            {
                key: "business-services",
                title: "Services",
                href: `/${currentLang}/professional/dashboard/business-services`,
                icon: null
            }]
        }
    ]


    return (
        <SidebarProvider>
            <MapProvider>
                {/* <ChangeBodyColor color="#F5F5F6" /> */}

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
            </MapProvider>

        </SidebarProvider>

    )
}