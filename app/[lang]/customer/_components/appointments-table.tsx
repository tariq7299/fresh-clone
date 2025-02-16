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
import { Dictionary } from "@/_lib/dictionaries/types"


export default function AppointmentsTable({ appointments, pagination, dict, lang }: { appointments: Appointment[], pagination: Pagination, dict: Dictionary, lang: "en" | "ar" }) {

    const columns: ColumnDef<Appointment>[] = [
        {

            accessorKey: "id",
            header: "ID"
        },
        {
            accessorKey: "business_name",
            header: "Business Name"
        },
        {
            accessorKey: "business_address",
            header: "Business Address"
        },
        {
            accessorKey: "total_duration",
            header: "Total Duration"
        },
        {
            accessorKey: "total_price",
            header: "Total Price"
        },
        {
            accessorKey: "status",
            header: "Status",
            cell: ({ row }) => {
                const status = row.getValue("status") as Status
                return <AppointmentStatus type={status} />
            }


        },
        {
            accessorKey: "payment_method",
            header: "Payment Method"
        },
        {
            accessorKey: "services",
            header: "Services",
            cell: ({ row }) => {
                const services = row.getValue("services") as Service[]
                const total_duration = row.getValue("total_duration") as number
                const total_price = row.getValue("total_price") as number
                const formattedTotalDuration = getTotalDuration(total_duration, lang)

                return <ReservedServicesDialog services={services} total_duration={formattedTotalDuration} total_price={total_price} dict={dict} lang={lang} />

                // return <div>{services.map(service => service.name).join(", ")}</div>
            }
        },
        {
            accessorKey: "booking_date",
            header: "Booking Date"
        },
        {
            accessorKey: "start_time",
            header: "Start Time"
        },
        {
            accessorKey: "end_time",
            header: "End Time"
        },

    ]

    return (
        <>
            <Suspense fallback={<DataTableSkeleton />}>
                <DataTable columns={columns} data={appointments} />
            </Suspense>
            <Suspense fallback={<TablePaginationSkeleton />}>
                <TablePagination pagination={pagination} lang={lang} />
            </Suspense>
        </>
    )
}