import { SidebarMenuSkeleton } from "@/_ui/components/sidebar";

import { SidebarMenuItem } from "@/_ui/components/sidebar";

import { SidebarMenu } from "@/_ui/components/sidebar";

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