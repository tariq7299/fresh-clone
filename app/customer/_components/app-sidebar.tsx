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
    useSidebar,
} from "@/ui/components/sidebar"
import Link from "next/link"
import { SidebarTabs } from "@/business/_components/sidebar-menu"
import { ChevronLeft, NotepadText } from "lucide-react"
import { usePathname } from "next/navigation"
import { SessionData } from "@/(auth)/_lib/definitions"
import { Button } from "@/ui/components/button"
import { cn } from "@/lib/utils/utils"


export function AppSidebar({ userData }:
    { userData: Pick<SessionData, "full_name" | "id" | "role" | "first_name" | "last_name"> } | null) {


    const tabs = [
        {
            key: 'appointments',
            title: 'Appointments',
            href: '/customer/dashboard/appointments',
            icon: (<NotepadText />)
        },
        {
            key: 'reservations',
            title: 'Reservations',
            href: '/business/dashboard/reservations',
            icon: (<NotepadText />)
        },
        {
            key: 'sadfasdf',
            title: 'sadfasdf',
            href: '/business/dashboard/sadfasdf',
            icon: (<NotepadText />)
        },
        {
            key: 'sadfasddf',
            title: 'sadfasddf',
            href: '/business/dashboard/sadfasddf',
            icon: (<NotepadText />)
        },
    ]


    const pathname = usePathname()
    const { state, open, setOpen } = useSidebar()

    return (
        <Sidebar className={cn("bg-background  ", open ? "mt-16  p-3" : "mt-20 ")} collapsible={"icon"}>
            <SidebarHeader className={cn(open ? "py-3 " : "flex justify-center items-center")}>
                {/* TODO: Create a header component */}
                {open ? <p className="text-lg font-bold font-source-sans"> {userData?.full_name}</p> : <p className="text-lg font-bold font-source-sans"> {userData?.first_name.charAt(0) + userData?.last_name.charAt(0)}</p>}
            </SidebarHeader>
            <SidebarContent>
                <SidebarMenu className={cn(open ? "" : "flex justify-center items-center")}>
                    {tabs.map((tab) => (
                        <SidebarMenuItem key={tab.key}>
                            {/* <SidebarMenuButton asChild isActive={pathname === tab.href}> */}
                            <SidebarMenuButton asChild isActive={pathname === tab.href} className={cn("data-[active=true]:bg-accent-100 py-5 data-[active=true]:text-primary data-[active=true]:font-semibold", open ? "" : "flex justify-center items-center")}>
                                <Link className="" href={tab.href}>
                                    <NotepadText />
                                    <span className={cn(open ? "" : "hidden")}>{tab.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}
