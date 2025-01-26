// "use client"

import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/ui/components/sidebar"

import { Link } from "lucide-react"

import { NotepadText } from "lucide-react"
// import { usePathname } from "next/navigation"

export function SidebarTabs() {

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

    // const pathname = usePathname()

    return <>

        {tabs.map((tab) => (
            <SidebarMenuItem key={tab.key}>
                {/* <SidebarMenuButton asChild isActive={pathname === tab.href}> */}
                <SidebarMenuButton asChild isActive={true}>
                    <Link className="data-[active=true]:bg-accent-100 data-[active=true]:text-primary p-5 data-[active=true]:font-semibold" href={`/customer/dashboard/appointments`}>
                        <NotepadText />
                        <span>{tab.title}</span>
                    </Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
        ))}
    </>


}