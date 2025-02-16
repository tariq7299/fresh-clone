"use client"

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/_ui/components/table"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/_ui/components/dropdown-menu"

import { DataTable } from "@/_ui/components/custom/data-table"

import { ColumnDef } from "@tanstack/react-table"
import { Badge } from "@/_ui/components/badge"
import { Button } from "@/_ui/components/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/_ui/components/dialog"
import { cn, getTotalDuration } from "@/_lib/utils/utils"
import { fetchApi } from "@/_lib/utils/api/fetch-utils-client"
import { Suspense, useState, useContext } from "react"
import TablePagination from "@/_ui/components/custom/table-pagination"
import { TablePaginationSkeleton, DataTableSkeleton } from "@/_ui/components/custom/skeletons"
import { Pagination } from "@/_lib/definitions/definitions"
import { Appointment, Service } from "@/_lib/definitions/appointments"
import AppointmentStatus from "@/_ui/components/custom/appoitment-status"
import { Dictionary } from "@/_lib/dictionaries/types"
// import { DictionaryContext } from "@/_contexts/DictionaryContext"

// type Service = {
//     service_id: number
//     name: string
//     price: number
//     duration: number
// }

// type Appointment = {
//     id: string
//     booking_date: string
//     start_time: string
//     end_time: string
//     status: string
//     payment_method: string
//     services: Service[]
//     // business_name: string
//     // business_address: string
//     total_duration: number
//     total_price: number
// }

// Define your possible status options
const STATUS_OPTIONS = ["completed", "cancelled"]

// interface UpdateCellProps<TData> {
//     row: Row<TData>
//     table: Table<TData>
// }

async function updateStatusInBackend(id: string, status: string) {

    try {
        // const response = await fetchApi(`/businesses/1/bookings/${id}/status?status=${status}`,
        const response = await fetchApi(`/businesses/1/bookings/${id}/status?status=${status}`,
            {
                method: "POST",

            }
        )

    } catch (error) {
    }
}

type UpdateStatusCellProps = {
    row: Row<Appointment>;
    table: Table<Appointment>;
}

const UpdateStatusCell = ({ row, table, dict }: UpdateStatusCellProps) => {
    const [isUpdating, setIsUpdating] = useState(false)
    const currentStatus = row.getValue("status") as string
    // const dict = useContext(DictionaryContext)

    const handleStatusUpdate = async (newStatus: string) => {
        setIsUpdating(true)
        try {
            await updateStatusInBackend(row.original.id, newStatus)
            table.options.meta?.updateData(row.index, "status", newStatus)
        } catch (error) {
            console.error("Failed to update status:", error)
        } finally {
            setIsUpdating(false)
        }
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" disabled={isUpdating}>
                    {isUpdating
                        ? dict.dashboard.appointments.table.actions.updating
                        : dict.dashboard.appointments.table.actions.update_status}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="space-y-1 ">
                {STATUS_OPTIONS.map((status) => (
                    <DropdownMenuItem
                        key={status}
                        onClick={() => handleStatusUpdate(status)}
                        disabled={status === currentStatus}
                        className={cn("cursor-pointer font-semibold", status === "completed" ? " " : status === "cancelled" ? " " : "")}
                    >
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default function AppointmentsTable({
    appointments,
    pagination,
    dict,
    lang
}: {
    appointments: Appointment[];
    pagination: Pagination;
    dict: Dictionary;
    lang: "en" | "ar";
}) {

    const columns: ColumnDef<Appointment>[] = [
        {
            accessorKey: "id",
            header: dict.dashboard.appointments.table.columns.id,
        },
        {
            accessorKey: "total_duration",
            header: dict.dashboard.appointments.table.columns.total_duration
        },
        {
            accessorKey: "total_price",
            header: dict.dashboard.appointments.table.columns.total_price
        },
        {
            accessorKey: "status",
            header: dict.dashboard.appointments.table.columns.status,
            cell: ({ row }) => {
                const status = row.getValue("status") as string
                return <AppointmentStatus type={status} />
            }
        },
        {
            accessorKey: "update_status",
            header: dict.dashboard.appointments.table.columns.update_status,
            cell: ({ row, table }) => <UpdateStatusCell row={row} table={table} dict={dict} />
        },
        {
            accessorKey: "payment_method",
            header: dict.dashboard.appointments.table.columns.payment_method
        },
        {
            accessorKey: "services",
            header: dict.dashboard.appointments.table.columns.services,
            cell: ({ row }) => {
                const services = row.getValue("services") as Service[]
                const total_duration = row.getValue("total_duration") as number
                const total_price = row.getValue("total_price") as number
                const formattedTotalDuration = getTotalDuration(total_duration, lang)

                return (
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button size="sm" variant="outline" className="font-semibold">
                                {dict.dashboard.appointments.table.actions.show_services}
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-full sm:max-w-[40vw]">
                            <DialogHeader>
                                <DialogTitle className="pt-2">
                                    {dict.dashboard.appointments.table.services_dialog.title}
                                </DialogTitle>
                            </DialogHeader>
                            <Table>
                                <TableCaption>
                                    {dict.dashboard.appointments.table.services_dialog.caption}
                                </TableCaption>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>{dict.dashboard.appointments.table.columns.services}</TableHead>
                                        <TableHead>
                                            {dict.dashboard.appointments.table.columns.total_price} ({dict.dashboard.appointments.table.services_dialog.currency})
                                        </TableHead>
                                        <TableHead>
                                            {dict.dashboard.appointments.table.columns.total_duration}
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {services.map((service) => (
                                        <TableRow key={service.service_id}>
                                            <TableCell className="font-medium">{service.name}</TableCell>
                                            <TableCell>{service.price}</TableCell>
                                            <TableCell>{service.duration}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                                <TableFooter>
                                    <TableRow>
                                        <TableCell>
                                            {dict.dashboard.appointments.table.services_dialog.total}
                                        </TableCell>
                                        <TableCell>{total_price}</TableCell>
                                        <TableCell>{formattedTotalDuration}</TableCell>
                                    </TableRow>
                                </TableFooter>
                            </Table>
                        </DialogContent>
                    </Dialog>
                )
            }
        },
        {
            accessorKey: "booking_date",
            header: dict.dashboard.appointments.table.columns.booking_date
        },
        {
            accessorKey: "start_time",
            header: dict.dashboard.appointments.table.columns.start_time
        },
        {
            accessorKey: "end_time",
            header: dict.dashboard.appointments.table.columns.end_time
        }
    ]

    return (
        <>
            <Suspense fallback={<DataTableSkeleton />}>
                <DataTable columns={columns} data={appointments} dict={dict} />
            </Suspense>
            <Suspense fallback={<TablePaginationSkeleton />}>
                <TablePagination pagination={pagination} lang={lang} />
            </Suspense>
        </>
    )
}