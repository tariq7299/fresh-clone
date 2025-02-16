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
import { DataTable } from "@/_ui/components/custom/data-table"
import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/_ui/components/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/_ui/components/dialog"
import { getTotalDuration } from "@/_lib/utils/utils"
import { Appointment, Service, Status } from "@/_lib/definitions/appointments"
import AppointmentStatus from "@/_ui/components/custom/appoitment-status"
import { Suspense } from "react"
import { Pagination } from "@/_lib/definitions/definitions"
import TablePagination from "@/_ui/components/custom/table-pagination"
import { DataTableSkeleton, TablePaginationSkeleton } from "@/_ui/components/custom/skeletons"
import ReservedServicesDialog from "@/_ui/components/custom/reserved-services-dialog"
import { Dictionary } from "@/_lib/definitions/dictionary"


export default function AppointmentsTable({ appointments, pagination, dict, lang }: { appointments: Appointment[], pagination: Pagination, dict: Dictionary, lang: "en" | "ar" }) {

    const columns: ColumnDef<Appointment>[] = [
        {
            accessorKey: "id",
            header: dict.dashboard.appointments.table.columns.id
        },
        {
            accessorKey: "business_name",
            header: dict.dashboard.appointments.table.columns.business_name
        },
        {
            accessorKey: "business_address",
            header: dict.dashboard.appointments.table.columns.business_address
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
                const status = row.getValue("status") as Status
                return <AppointmentStatus type={status} />
            }
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

                return <ReservedServicesDialog
                    services={services}
                    total_duration={formattedTotalDuration}
                    total_price={total_price}
                    dict={dict}
                    lang={lang}
                />
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