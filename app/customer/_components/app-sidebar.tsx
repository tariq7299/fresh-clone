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
} from "@/ui/components/sidebar"
import Link from "next/link"
import { SidebarTabs } from "@/business/_components/sidebar-menu"
import { NotepadText } from "lucide-react"
import { usePathname } from "next/navigation"
import { SessionData } from "@/(auth)/_lib/definitions"


export function AppSidebar({ userData }:
    { userData: Pick<SessionData, "full_name" | "id" | "role"> } | null) {


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

    return (
        <Sidebar className="bg-background mt-16 p-3 ">
            <SidebarHeader className="py-4">
                {/* TODO: Create a header component */}
                <p className="text-lg font-bold font-source-sans"> {userData?.full_name}</p>
            </SidebarHeader>
            <SidebarContent>
                <SidebarMenu>
                    {tabs.map((tab) => (
                        <SidebarMenuItem key={tab.key}>
                            {/* <SidebarMenuButton asChild isActive={pathname === tab.href}> */}
                            <SidebarMenuButton asChild isActive={pathname === tab.href}>
                                <Link className="data-[active=true]:bg-accent-100 data-[active=true]:text-primary p-5 data-[active=true]:font-semibold" href={tab.href}>
                                    <NotepadText />
                                    <span>{tab.title}</ span>
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
