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
import { Filter } from "@/[lang]/customer/_components/appointments"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/_ui/components/popover"
import { Button } from "../button"
import { Input } from "../input"
import { Label } from "../label"
import { Store, ChevronDown } from 'lucide-react';
import Empty from "@/_ui/icons/empty";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/_ui/components/select"
import TableFilterInput from "./table-filter-input"

const STATUS_OPTIONS = [
    { id: "completed", label: "Completed" },
    { id: "cancelled", label: "Cancelled" },
    { id: "confirmed", label: "Confirmed" }
]

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
    filters?: Filter[]
}



export function DataTable<TData, TValue>({
    columns,
    data,
    filters
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


    if (tableData.length === 0) {
        return (
            <div className="flex items-center justify-center h-full flex-col text-muted-foreground">
                <Empty className="md:size-3/5 mx-auto" />

                <p className="">Your schedule is looking a little empty.</p>
            </div>


        )
    }

    console.log("table.getAllColumns()", table.getAllColumns())
    console.log("table.getHeaderGroups()", table.getHeaderGroups())
    console.log("table.getColumn()", table.getColumn("business_name"))




    return (
        <>


            {filters && filters.length > 0 && (
                <div className="pb-4 flex items-center gap-2">

                    {filters.map(filter => (
                        <TableFilterInput key={filter.colName} filter={filter} filterLabel={table.getColumn(filter.colName)?.columnDef.header as string} />
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
