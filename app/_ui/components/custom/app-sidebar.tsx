"use client"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarTrigger,
    useSidebar,
} from "@/_ui/components/sidebar"
import Link from "next/link"
import { SidebarTabs } from "@/[lang]/business/_components/sidebar-menu"
import { ChevronLeft, NotepadText } from "lucide-react"
import { usePathname } from "next/navigation"
import { SessionData } from "@/[lang]/(auth)/_lib/definitions"
import { Button } from "@/_ui/components/button"
import { cn } from "@/_lib/utils/utils"
import { UserData } from "@/[lang]/(auth)/_lib/definitions"


export function AppSidebar({ userData, sidebarTabs, containerClass, triggerClass }: {
    userData: UserData,
    sidebarTabs: {
        key: string,
        title: string,
        href: string,
        icon: React.ReactNode
    }[],
    containerClass?: string,
    triggerClass?: string
}) {



    const pathname = usePathname()

    const { state, open, setOpen, isMobile } = useSidebar()

    console.log("isMobile", isMobile)
    console.log("userData.role", userData.role)


    return (

        <>


            {/* Sidebar trigger on mobile */}
            <SidebarTrigger className={cn("md:hidden fixed top-2 left-2 text-accent", (isMobile && userData.role === "customer") ? "hidden" : "block")} />


            <Sidebar className={cn("bg-background", open ? "p-3" : " ", containerClass)} collapsible={"icon"}>


                <SidebarTrigger className={cn("text-accent hidden md:inline-flex fixed  transition-all duration-250  ease-in-out ", open ? " left-64" : " left-12", triggerClass)} />

                <SidebarHeader className={cn(open ? " py-2" : "flex justify-center items-center")}>

                    {/* TODO: Create a header component */}
                    {open ? <p className="text-lg font-bold font-source-sans"> {userData?.full_name}</p> : <p className="text-lg font-bold font-source-sans"> {userData?.first_name.charAt(0) + userData?.last_name.charAt(0)}</p>}
                </SidebarHeader>

                <SidebarContent >
                    <SidebarMenu className={cn(open ? "" : "flex justify-center items-center")}>
                        {sidebarTabs.map((tab) => (
                            <SidebarMenuItem key={tab.key}>
                                {/* <SidebarMenuButton asChild isActive={pathname === tab.href}> */}
                                <SidebarMenuButton asChild isActive={pathname === tab.href} className={cn("data-[active=true]:bg-accent-100 py-5 data-[active=true]:text-primary data-[active=true]:font-semibold", open ? "" : "flex justify-center items-center")}>
                                    <Link className="" href={tab.href}>
                                        {tab.icon}
                                        <span className={cn(open ? "" : "hidden")}>{tab.title}</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarContent>

                <SidebarFooter />
            </Sidebar>

        </>
    )
}
