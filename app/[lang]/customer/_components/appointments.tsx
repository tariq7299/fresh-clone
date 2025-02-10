import AppointmentsTable from "./appointments-table";
import { ApiAppointment, Appointment, AppointmentPageQueries } from "@/[lang]/customer/_lib/definitions"
import { Suspense } from "react";
import { DataTableSkeleton, DataTableSkeletonWithPagination } from "./skeleton";
import { ColumnDef } from "@tanstack/react-table";
import { getAppointments } from "../_lib/data";



export default async function Appointments({ params }: { params: AppointmentPageQueries }) {

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



    return (
        <div className="p-5 ps-14 pt-8 md:pt-24 size-full">
            <h1 className="text-2xl md:text-3xl font-bold text-accent pb-3 ">Appointments</h1>
            <AppointmentsTable params={params} appointments={appointments} pagination={pagination} />
        </div>




    )
}