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
import { Badge } from "@/_ui/components/badge"
import { Button } from "@/_ui/components/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/_ui/components/dialog"
import { getTotalDuration } from "@/_lib/utils/utils"
import { Appointment, Service } from "../_lib/definitions"
import { Filter } from "./appointments"



interface AppointmentsTableProps {
    appointments: Appointment[]
    filters?: Filter[]
}




export default function AppointmentsTable({ appointments, filters }: AppointmentsTableProps) {


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
                const status = row.getValue("status") as string
                return <Badge color={status === "pending" ? "warning" : status === "confirmed" ? "success" : "error"}>{status}</Badge>
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
                const formattedTotalDuration = getTotalDuration(total_duration)

                return <Dialog >
                    <DialogTrigger asChild>
                        <Button size={"sm"} variant="outline" className="font-semibold">Show Services</Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-full sm:max-w-[40vw]">
                        <DialogHeader>
                            <DialogTitle>Services</DialogTitle>
                        </DialogHeader>
                        <Table className="">
                            <TableCaption>A list of services included in this appointment.</TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="">Name</TableHead>
                                    <TableHead>Price (EGP)</TableHead>
                                    <TableHead>Duration (min)</TableHead>

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
                                    <TableCell >Total</TableCell>
                                    <TableCell className="">{total_price}</TableCell>
                                    <TableCell className="">{formattedTotalDuration}</TableCell>
                                    {/* <TableCell className="text-right"></TableCell> */}
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </DialogContent>
                </Dialog>

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
        <DataTable filters={filters} columns={columns} data={appointments} />
    )

}