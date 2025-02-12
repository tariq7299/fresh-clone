import { Filter } from "@/[lang]/customer/_lib/definitions"
import { AppointmentPageQueries } from "@/[lang]/customer/_lib/definitions"
import { Suspense } from "react"
import { DataTableSkeletonWithPagination } from "@/_ui/components/custom/skeletons"
import AppointmentsTableWrapper from "../../_components/appointments-table-wrapper"
import TableFilters from "@/_ui/components/custom/table-filters"
import { getAppointments } from "@/[lang]/customer/_lib/data"
import { Calendar, CheckCircle } from "lucide-react"

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
        <div className="size-full">
            <h1 className="text-2xl md:text-3xl font-bold text-accent pb-4">Appointments</h1>
            <TableFilters filters={filters} data={appointments} />
            <Suspense key={params?.page + params?.status + params?.booking_date} fallback={<DataTableSkeletonWithPagination />}>
                <AppointmentsTableWrapper params={params} />
            </Suspense>
        </div>
    )
}
