

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
import { Appointment, AppointmentPageQueries, Service } from "../_lib/definitions"
import { Filter } from "../_lib/definitions"
import AppointmentStatus from "@/_ui/components/custom/appoitment-status"
import { Suspense } from "react"
import { Pagination } from "@/_lib/definitions/definitions"
import { Calendar, CheckCircle, Store } from "lucide-react";
import { getAppointments } from "../_lib/data"
import { ApiAppointment } from "../_lib/definitions"
import TablePagination from "@/_ui/components/custom/table-pagination"
import { DataTableSkeleton, TablePaginationSkeleton } from "./skeleton"




export type Status = "cancelled" | "completed" | "confirmed"

export default async function AppointmentsTable({ params }: { params: AppointmentPageQueries }) {


    const data = await getAppointments(params)

    const appointments = data.appointments.map((row: ApiAppointment) => {
        const { user, business, booking_data, ...rest } = row
        return {

            ...rest,

            services: row.booking_data.services,
            business_name: business.name,
            business_address: business.address,
            total_duration: row.booking_data.total_duration,
            total_price: row.booking_data.total_price
        }
    })

    const pagination = data.pagination


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

    const filters: Filter[] = [
        {
            type: "date",
            colName: "booking_date",
            icon: <Calendar className="size-6" />
        },
        {
            type: "select",
            colName: "status",
            options: [
                { id: "completed", label: "Completed" },
                { id: "cancelled", label: "Cancelled" },
                { id: "confirmed", label: "Confirmed" }
            ],
            icon: <CheckCircle className="size-6" />
        }
    ]

    return (
        <>
            {/* <Suspense fallback={<DataTableSkeleton />}> */}
            <DataTable filters={filters} columns={columns} data={appointments} />
            {/* </Suspense> */}
            {/* <Suspense fallback={<TablePaginationSkeleton />}> */}
            <TablePagination pagination={pagination} />
            {/* </Suspense> */}
        </>


    )




}