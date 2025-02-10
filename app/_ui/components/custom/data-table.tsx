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
import { Filter } from "@/[lang]/customer/_lib/definitions"
import Empty from "@/_ui/icons/empty";
import TableFilterInput from "./table-filter-input"
import { usePathname, useSearchParams } from "next/navigation"
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/_ui/components/pagination"
import { Pagination as PaginationType } from "@/_lib/definitions/definitions"
import { cn } from "@/_lib/utils/utils"

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
    filters?: Filter[]

}



export function DataTable<TData, TValue>({
    columns,
    data,
    filters,

}: DataTableProps<TData, TValue>) {


    const [tableData, setTableData] = useState(data)


    useEffect(() => {
        setTableData(data)
    }, [data])

    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

    const searchParams = useSearchParams()


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

        </>
    )
}
