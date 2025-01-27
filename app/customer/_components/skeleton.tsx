import { SidebarMenuSkeleton } from "@/ui/components/sidebar";

import { SidebarMenuItem } from "@/ui/components/sidebar";

import { SidebarMenu } from "@/ui/components/sidebar";

export function SidebarSkeleton() {
    return (
        <SidebarMenu>
            {Array.from({ length: 5 }).map((_, index) => (
                <SidebarMenuItem key={index}>
                    <SidebarMenuSkeleton showIcon />
                </SidebarMenuItem>
            ))}
        </SidebarMenu>
    )
}