import { NotepadText } from "lucide-react";

import { SidebarMenuButton } from "@/ui/components/sidebar"
import { Link } from "lucide-react"

export function SidebarLink({ href, title, icon }: { href: string, title: string, icon: React.ReactNode }) {
    return <SidebarMenuButton asChild isActive={true}>
        <Link className="data-[active=true]:bg-accent-100 data-[active=true]:text-primary p-5 data-[active=true]:font-semibold" href={`/customer/dashboard/appointments`}>
            <NotepadText />
            <span>{title}</span>
        </Link>
    </SidebarMenuButton>
}