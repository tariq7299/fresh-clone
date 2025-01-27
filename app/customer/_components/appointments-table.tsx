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
} from "@/ui/components/table"
import { DataTable } from "@/ui/components/custom/data-table"

import { ColumnDef } from "@tanstack/react-table"

type Service = {
    service_id: string
    name: string
    price: number
    duration: number
}

type Appointment = {
    id: string
    booking_date: string
    start_time: string
    end_time: string
    status: string
    payment_method: string
    services: Service[]
    business_name: string
    business_address: string
    total_duration: number
    total_price: number
}

export default function AppointmentsTable({ appointments }: { appointments: Appointment[] }) {

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
            header: "Status"
        },
        {
            accessorKey: "payment_method",
            header: "Payment Method"
        },
        // {
        //     accessorKey: "services",
        //     header: "Services"
        // },
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
        <DataTable columns={columns} data={appointments} />


    )
}