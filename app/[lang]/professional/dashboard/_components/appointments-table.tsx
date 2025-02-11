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
import { CreditCard, Settings, User } from "lucide-react"
import { fetchApi } from "@/_lib/utils/api/fetch-utils-client"
import { useState } from "react"

type Service = {
    service_id: number
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
    // business_name: string
    // business_address: string
    total_duration: number
    total_price: number
}

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



const UpdateStatusCell = <TData,>({ row, table }) => {
    const [isUpdating, setIsUpdating] = useState(false)
    const currentStatus = row.getValue("status") as string

    const handleStatusUpdate = async (newStatus: string) => {
        setIsUpdating(true)
        try {
            // Make your API call here
            await updateStatusInBackend(row.original.id, newStatus)

            // Update the table data
            table.options.meta?.updateData(row.index, "status", newStatus)
        } catch (error) {
            console.error("Failed to update status:", error)
            // Handle error (show toast, etc.)
        } finally {
            setIsUpdating(false)
        }
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    disabled={isUpdating}
                >
                    {isUpdating ? "Updating..." : "Update Status"}
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




export default function AppointmentsTable({ appointments }: { appointments: Appointment[] }) {

    const columns: ColumnDef<Appointment>[] = [
        {
            accessorKey: "id",
            header: "ID"
        },
        // {
        //     accessorKey: "business_name",
        //     header: "Business Name"
        // },
        // {
        //     accessorKey: "business_address",
        //     header: "Business Address"
        // },
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
                return <Badge variant={status === "completed" ? "success" : status === "cancelled" ? "destructive" : "outline"}>{status}</Badge>
            }

        },
        {
            accessorKey: "update_status",
            header: "Update Status",
            cell: ({ row, table }) => <UpdateStatusCell row={row} table={table} />

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

                return <div>{services.map(service => service.name).join(", ")}</div>
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
        <DataTable columns={columns} data={appointments} />
    )
}