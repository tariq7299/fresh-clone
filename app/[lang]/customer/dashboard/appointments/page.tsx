

import Appointments from "@/[lang]/customer/_components/appointments"
import { Appointment } from "@/[lang]/customer/_lib/definitions"
import { AppointmentPageQueries } from "@/[lang]/customer/_lib/definitions"
import { Suspense } from "react"
import { DataTableSkeletonWithPagination } from "@/[lang]/customer/_components/skeleton"
// export enum filterNames {
//     Status = "status"
// }


export default async function AppointmentsPage(props: {
    searchParams: Promise<AppointmentPageQueries>
}) {

    const params = await props?.searchParams

    return (
        <Suspense key={params.page + params?.status} fallback={<DataTableSkeletonWithPagination />}>
            <Appointments params={params} />
        </Suspense>
    )


}
