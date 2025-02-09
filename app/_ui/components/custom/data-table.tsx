"use client"

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
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


const STATUS_OPTIONS = ["completed", "cancelled", "confirmed"]

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

    const table = useReactTable({
        data: tableData,
        columns,
        getCoreRowModel: getCoreRowModel(),
        meta: {
            updateData: (rowIndex: number, columnId: string, value: string) => {
                setTableData((prev) =>
                    prev.map((row, index) =>
                        index === rowIndex ? { ...row, [columnId]: value } : row
                    )
                );
            },
        }
    })

    if (table.getRowModel().rows.length === 0) {
        return (
            <div className="flex items-center justify-center h-full flex-col text-muted-foreground">
                <Empty className="md:size-3/5 mx-auto" />
                <p className="">Your schedule is looking a little empty.</p>
            </div>


        )
    }


    return (
        <>


            <div className="pb-4 flex items-center gap-2">

                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="ghost" className="bg-transparent border border-gray-300 rounded-lg flex items-center gap-2" >
                            <Store className="w-10 h-10 " />
                            <p className="text-sm">Status</p>
                            <ChevronDown className="w-4 h-4" />
                        </Button>
                    </PopoverTrigger>

                    <PopoverContent className="md:min-w-[300px]">
                        <div className="flex items-start gap-2 flex-col">
                            <div className="flex gap-2 items-center">
                                <Store className="size-6" />
                                <Label className="text-md">Status</Label>
                            </div>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>

                                        <div className='flex justify-between w-full items-center'>
                                            <SelectLabel className="p-2">Status</SelectLabel>
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
                                        <Separator className="h-1 w-full" />
                                        {STATUS_OPTIONS.map((status) => (
                                            <SelectItem key={status} value={status}>
                                                {status}
                                            </SelectItem>
                                        ))}


                                    </SelectGroup>

                                </SelectContent>
                            </Select>
                        </div>


                    </PopoverContent>
                </Popover>

                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="ghost" className="bg-transparent border border-gray-300 rounded-lg flex items-center gap-2" >
                            <Store className="w-10 h-10 " />
                            <p className="text-sm">Business Name</p>
                            <ChevronDown className="w-4 h-4" />
                        </Button>
                    </PopoverTrigger>

                    <PopoverContent className="md:min-w-[300px]">
                        <div className="flex items-start gap-2 flex-col">
                            <div className="flex gap-2 items-center">
                                <Store className="size-6" />
                                <Label className="text-md">Business Name</Label>
                            </div>
                            <Input placeholder="Filter business name..." type="text" />
                        </div>

                    </PopoverContent>
                </Popover>
            </div>

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
