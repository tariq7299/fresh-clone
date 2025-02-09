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
import { useState } from "react"
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
import { Separator } from "../separator"


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
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
        []

    )

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


    // if (table.getRowModel().rows.length === 0) {
    //     return (
    //         <div className="flex items-center justify-center h-full flex-col text-muted-foreground">
    //             <Empty className="md:size-3/5 mx-auto" />
    //             <p className="">Your schedule is looking a little empty.</p>
    //         </div>


    //     )
    // }

    console.log("table.getAllColumns()", table.getAllColumns())
    console.log("table.getHeaderGroups()", table.getHeaderGroups())
    console.log("table.getColumn()", table.getColumn("business_name"))




    return (
        <>


            {filters && filters.length > 0 && (
                <div className="pb-4 flex items-center gap-2">

                    {filters.map(filter => (


                        <Popover key={filter.colName}>
                            <PopoverTrigger asChild>
                                <Button variant="ghost" className="bg-transparent border border-gray-300 rounded-lg flex items-center gap-2" >
                                    {filter.icon}
                                    <p className="text-sm"> {table.getColumn(filter.colName)?.columnDef.header as React.ReactNode || filter.colName}</p>
                                    <ChevronDown className="w-4 h-4" />
                                </Button>


                            </PopoverTrigger>
                            <PopoverContent className="md:min-w-[300px]">


                                <div className="flex items-start gap-2 flex-col">


                                    {filter.type === "string" ? (
                                        <>
                                            <div className="flex gap-2 items-center">
                                                {filter.icon}
                                                <Label className="text-md">{table.getColumn(filter.colName)?.columnDef.header as React.ReactNode || filter.colName}</Label>


                                            </div>

                                            <Input
                                                placeholder="Filter business name..." type="text"
                                                value={table.getColumn(filter.colName)?.getFilterValue() as string ?? ""}
                                                onChange={(e) => {
                                                    table.getColumn(filter.colName)?.setFilterValue(e.target.value)
                                                }}
                                            />
                                        </>


                                    ) : (
                                        <>
                                            <div className="flex gap-2 items-center">
                                                {filter.icon}
                                                <Label className="text-md">{table.getColumn(filter.colName)?.columnDef.header as React.ReactNode || filter.colName}</Label>



                                            </div>
                                            <Select>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select value" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>

                                                        <div className='flex justify-between w-full items-center'>
                                                            <SelectLabel className="p-2">{table.getColumn(filter.colName)?.columnDef.header as React.ReactNode || filter.colName}</SelectLabel>
                                                            <Button
                                                                // disabled={!field?.value}
                                                                variant="outline"
                                                                size="sm"
                                                                // TODO: clear the filter




                                                                onClick={(e) => {
                                                                    e.stopPropagation()
                                                                    // setValue(`${filter?.filter_name}.fieldValue`, "")
                                                                    console.log("clear")
                                                                }}
                                                            >
                                                                Clear
                                                            </Button>
                                                        </div>
                                                        {filter.options?.map((option) => (
                                                            <SelectItem key={option.id} value={option.id}>
                                                                {option.label}
                                                            </SelectItem>
                                                        ))}


                                                    </SelectGroup>

                                                </SelectContent>
                                            </Select>
                                        </>
                                    )}





                                </div>

                            </PopoverContent>
                        </Popover>
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
