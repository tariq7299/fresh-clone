import TableFilterInput from "@/_ui/components/custom/table-filter-input"
import { Suspense } from "react"
import { Filter } from "@/[lang]/customer/_lib/definitions"
import { Calendar, CheckCircle } from "lucide-react"
import { getAppointments } from "@/[lang]/professional/_lib/data"
import { DataTableFitlerSkeleton } from "@/[lang]/customer/_components/skeleton"


export default async function AppointmentsFilters() {

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
        <>
            {filters && appointments.length > 0 && filters.length > 0 && (
                <div className="pb-4 flex items-center gap-2">
                    {filters.map(filter => (
                        <Suspense key={filter.colName} fallback={<DataTableFitlerSkeleton />}>
                            <TableFilterInput key={filter.colName} filter={filter} />
                        </Suspense>
                    ))}
                </div>
            )}
        </>
    )
}
