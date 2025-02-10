import { SidebarMenuSkeleton } from "@/_ui/components/sidebar";

import { SidebarMenuItem } from "@/_ui/components/sidebar";

import { SidebarMenu } from "@/_ui/components/sidebar";
import { Skeleton } from "@/_ui/components/skeleton";
import { getCoreRowModel, getFilteredRowModel } from "@tanstack/react-table";
import { Filter } from "../_lib/definitions";

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

export function DataTableSkeletonWithPagination() {
    return (
        <div className="space-y-4">
            <div className="flex items-center gap-2">
                {[...Array(3)].map((_, i) => (
                    <Skeleton key={i} className="h-10 w-[200px]" />
                ))}
            </div>

            <div className="rounded-lg border">
                <div className="p-4 space-y-4">
                    {[...Array(5)].map((_, i) => (
                        <Skeleton key={i} className="h-12 w-full" />
                    ))}
                </div>
            </div>
        </div>
    )
}
export function DataTableSkeleton() {
    return (
        <div className="space-y-4">
            <div className="flex items-center gap-2">
                {[...Array(3)].map((_, i) => (
                    <Skeleton key={i} className="h-10 w-[200px]" />
                ))}
            </div>

            <div className="rounded-lg border">
                <div className="p-4 space-y-4">
                    {[...Array(5)].map((_, i) => (
                        <Skeleton key={i} className="h-12 w-full" />
                    ))}
                </div>
            </div>
        </div>
    )
}


export function TablePaginationSkeleton() {
    return (
        <div className="rounded-lg border">
            <div className="p-4 space-y-4">
                {[...Array(5)].map((_, i) => (
                    <Skeleton key={i} className="h-12 w-full" />
                ))}
            </div>
        </div>
    )
}
