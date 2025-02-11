

import Appointments from "@/[lang]/customer/_components/appointments"
import { Appointment } from "@/[lang]/customer/_lib/definitions"
import { AppointmentPageQueries } from "@/[lang]/customer/_lib/definitions"
import { Suspense } from "react"
import { DataTableFitlersSkeleton, DataTableSkeletonWithPagination } from "@/[lang]/customer/_components/skeleton"
import AppointmentsTableWrapper from "../../_components/appointments-table-wrapper"
import AppointmentsFilters from "../../_components/appointments-filters"
// export enum filterNames {
//     Status = "status"
// }


export default async function AppointmentsPage(props: {
    searchParams: Promise<AppointmentPageQueries>
}) {

    const params = await props?.searchParams

    return (
        <div className="size-full ">
            <h1 className="text-2xl md:text-3xl font-bold text-accent pb-4">Appointments</h1>

            <Suspense fallback={<DataTableFitlersSkeleton />}>
                <AppointmentsFilters />
            </Suspense>

            <Suspense key={params?.page + params?.status + params?.booking_date} fallback={<DataTableSkeletonWithPagination />}>
                <AppointmentsTableWrapper params={params} />
            </Suspense>
        </div>
    )


}
