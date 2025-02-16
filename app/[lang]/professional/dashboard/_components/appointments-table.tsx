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
import ReservedServicesDialog from "@/_ui/components/custom/reserved-services-dialog"



// Define your possible status options
const STATUS_OPTIONS = ["completed", "cancelled"]

async function updateStatusInBackend(id: string, status: string) {

    try {
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
                const total_price = row.getValue("total_price") as number
                const formattedTotalDuration = getTotalDuration(row.getValue("total_duration") as number, lang)

                return <ReservedServicesDialog services={services} total_duration={formattedTotalDuration} total_price={total_price} dict={dict} lang={lang} />
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