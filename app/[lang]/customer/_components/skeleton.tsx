import { SidebarMenuSkeleton } from "@/_ui/components/sidebar";

import { SidebarMenuItem } from "@/_ui/components/sidebar";

import { SidebarMenu } from "@/_ui/components/sidebar";
import { Skeleton } from "@/_ui/components/skeleton";
import { getCoreRowModel, getFilteredRowModel } from "@tanstack/react-table";
import { Filter } from "../_lib/definitions";
import { Pagination, PaginationContent, PaginationItem } from "@/_ui/components/pagination";

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
            <div className="rounded-lg border">
                <div className="p-4 space-y-4">
                    {[...Array(10)].map((_, i) => (
                        <Skeleton key={i} className="h-12 w-full bg-gray-300" />
                    ))}
                </div>
            </div>

            <Pagination className="py-4">
                <PaginationContent>
                    <PaginationItem>
                        <Skeleton className="h-10 w-24 bg-gray-300" />
                    </PaginationItem>
                    <PaginationItem>
                        <Skeleton className="h-10 w-10 rounded-md bg-gray-300" />
                    </PaginationItem>
                    <PaginationItem>
                        <Skeleton className="h-10 w-10 rounded-md bg-gray-300" />
                    </PaginationItem>
                    <PaginationItem>
                        <Skeleton className="h-10 w-10 rounded-md bg-gray-300" />
                    </PaginationItem>
                    <PaginationItem>
                        <Skeleton className="h-10 w-24 bg-gray-300" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    )
}

export function DataTableFitlersSkeleton() {
    return (
        <div className="space-y-4 pb-4 flex items-center gap-2">
            <div className="flex items-center gap-2">
                {[...Array(3)].map((_, i) => (
                    <Skeleton key={i} className="h-10 w-[150px] bg-gray-300" />
                ))}
            </div>

        </div>
    )
}

export function DataTableFitlerSkeleton() {
    return (
        <div className="space-y-4">
            <div className="flex items-center gap-2">
                <Skeleton className="h-10 w-[150px] bg-gray-300" />
            </div>

        </div>
    )
}

export function DataTableSkeleton() {
    return (
        <div className="space-y-4 ">
            <div className="flex items-center gap-2">
                {[...Array(3)].map((_, i) => (
                    <Skeleton key={i} className="h-10 w-[200px] bg-gray-300" />
                ))}
            </div>

            <div className="rounded-lg border">
                <div className="p-4 space-y-4">
                    {[...Array(5)].map((_, i) => (
                        <Skeleton key={i} className="h-12 w-full bg-gray-300" />
                    ))}
                </div>
            </div>
        </div>
    )
}



export function TablePaginationSkeleton() {
    return (
        <Pagination className="py-4">
            <PaginationContent>
                <PaginationItem>
                    <Skeleton className="h-10 w-24" />
                </PaginationItem>
                <PaginationItem>
                    <Skeleton className="h-10 w-10 rounded-md" />
                </PaginationItem>
                <PaginationItem>
                    <Skeleton className="h-10 w-10 rounded-md" />
                </PaginationItem>
                <PaginationItem>
                    <Skeleton className="h-10 w-10 rounded-md" />
                </PaginationItem>
                <PaginationItem>
                    <Skeleton className="h-10 w-24" />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}