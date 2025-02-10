"use client"

import {
    ColumnDef,
    ColumnFiltersState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    useReactTable,
} from "@tanstack/react-table"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/_ui/components/table"
import { Suspense, useEffect, useState } from "react"
import { Filter } from "@/[lang]/customer/_components/appointments"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/_ui/components/popover"
import { Button } from "../button"
import { Input } from "../input"
import { Label } from "../label"
import { Store, ChevronDown, Loader2 } from 'lucide-react';
import Empty from "@/_ui/icons/empty";

import TableFilterInput from "./table-filter-input"
import { usePathname, useSearchParams } from "next/navigation"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/_ui/components/pagination"
import { Pagination as PaginationType } from "@/_lib/definitions/definitions"
import { cn } from "@/_lib/utils/utils"

const STATUS_OPTIONS = [
    { id: "completed", label: "Completed" },
    { id: "cancelled", label: "Cancelled" },
    { id: "confirmed", label: "Confirmed" }
]

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
    filters?: Filter[]
    pagination?: PaginationType
}



export function DataTable<TData, TValue>({
    columns,
    data,
    filters,
    pagination
}: DataTableProps<TData, TValue>) {


    const [tableData, setTableData] = useState(data)


    useEffect(() => {
        setTableData(data)
    }, [data])

    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

    const searchParams = useSearchParams()

    const pathname = usePathname()

    const table = useReactTable({
        data: tableData,
        columns,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        meta: {
            updateData: (rowIndex: number, columnId: string, value: string) => {
                setTableData((prev) =>
                    prev.map((row, index) =>
                        index === rowIndex ? { ...row, [columnId]: value } : row
                    )
                );
            },
        },
        state: {
            columnFilters,
        }
    })



    if (tableData.length === 0 && searchParams.size < 2) {
        return (
            <div className="flex items-center justify-center h-full flex-col text-muted-foreground">
                <Empty className="md:size-3/5 mx-auto" />

                <p className="">Your schedule is looking a little empty.</p>
            </div>


        )
    }

    const returnPageUrl = (pageNo: string) => {
        const newParams = new URLSearchParams(searchParams)
        newParams.set("page", pageNo.toString())
        return `${pathname}?${newParams.toString()}`
    }



    return (

        <>



            {filters && filters.length > 0 && (
                <div className="pb-4 flex items-center gap-2">
                    {filters.map(filter => (
                        <Suspense key={filter.colName} fallback={<div>Loading...</div>}>
                            <TableFilterInput key={filter.colName} filter={filter} filterLabel={table.getColumn(filter.colName)?.columnDef.header as string} />
                        </Suspense>
                    ))}
                </div>


            )}



            <div className="rounded-lg border">
                <Table>
                    <TableHeader className="bg-accent-100 text-gray-700">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    <p className="text-sm">No results.</p>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>

            </div>

            <Pagination className="py-4">
                <PaginationContent>
                    {/* <PaginationItem>

                        {pagination?.prev_page_url && <PaginationPrevious href={pagination?.prev_page_url} />}
                    </PaginationItem> */}

                    {pagination?.links.map((link, index) => {
                        if (link.label === "&laquo; Previous") {
                            return (
                                <PaginationItem key={index} className={cn(link.url ? "visible" : "invisible")}>
                                    <PaginationPrevious href={returnPageUrl(String(Number(pagination?.current_page) - 1))} />
                                </PaginationItem>



                            );
                        } else if (link.label === "Next &raquo;") {
                            return (
                                <PaginationItem key={index} className={cn(link.url ? "visible" : "invisible")}>
                                    <PaginationNext href={returnPageUrl(String(Number(pagination?.current_page) + 1))} />
                                </PaginationItem>

                            );
                        } else {
                            return (
                                <PaginationItem key={index}>

                                    {link.active ? <PaginationLink href={returnPageUrl(link.label)} isActive>
                                        {link.label}
                                    </PaginationLink> :
                                        <PaginationLink href={returnPageUrl(link.label)}>
                                            {link.label}
                                        </PaginationLink>}

                                </PaginationItem>
                            );
                        }
                    })}

                    {/* 
                    <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>


                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" isActive>
                            2
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="#" />
                    </PaginationItem> */}
                </PaginationContent>
            </Pagination>
        </>
    )
}
