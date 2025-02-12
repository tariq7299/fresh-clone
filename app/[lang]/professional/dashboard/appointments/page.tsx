import { getAppointments } from "@/[lang]/professional/_lib/data";
import { AppointmentPageQueries, Filter } from "@/_lib/definitions/appointments";
import { Suspense } from "react";
import { DataTableSkeletonWithPagination } from "@/_ui/components/custom/skeletons";
import AppointmentsTableWrapper from "@/[lang]/professional/dashboard/_components/appointments-table-wrapper";
import TableFilters from "@/_ui/components/custom/table-filters";
import { Calendar } from "lucide-react";
import { CheckCircle } from "lucide-react";




export default async function AppointmentsPage(props: {
    searchParams: Promise<AppointmentPageQueries>
}) {

    const params = await props?.searchParams

    const appointments = (await getAppointments()).appointments

    const filters: Filter[] = [
        {
            type: "date",
            colName: "booking_date",
            label: "Booking Date",
            icon: <Calendar className="size-6" />
        },
        {
            type: "select",
            colName: "status",
            label: "Status",
            options: [
                { id: "completed", label: "Completed" },
                { id: "cancelled", label: "Cancelled" },
                { id: "confirmed", label: "Confirmed" }
            ],
            icon: <CheckCircle className="size-6" />
        }
    ]

    return (
        <div className="p-5 ps-7 pt-8 md:pt-14 size-full over">
            <h1 className="text-2xl md:text-3xl font-bold text-accent pb-4">Appointments</h1>
            <TableFilters filters={filters} data={appointments} />
            <Suspense key={params?.page + params?.status + params?.booking_date} fallback={<DataTableSkeletonWithPagination />}>
                <AppointmentsTableWrapper params={params} />
            </Suspense>
        </div>
    )
}