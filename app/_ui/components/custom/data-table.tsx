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
import { useEffect, useState } from "react"
import { Filter } from "@/[lang]/customer/_lib/definitions"

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
    filters?: Filter[]
}


export function DataTable<TData, TValue>({
    columns,
    data,
}: DataTableProps<TData, TValue>) {


    const [tableData, setTableData] = useState(data)
    useEffect(() => {
        setTableData(data)

    }, [data])

    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
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


    return (

        <>

            <div className="rounded-lg border ">
                <Table>
                    <TableHeader className="bg-accent-100 text-gray-700">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id} className="text-start">
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
