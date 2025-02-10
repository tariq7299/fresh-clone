

import Appointments from "@/[lang]/customer/_components/appointments"
import { Appointment } from "@/[lang]/customer/_lib/definitions"
import { AppointmentPageQueries } from "@/[lang]/customer/_lib/definitions"
import { Suspense } from "react"
// export enum filterNames {
//     Status = "status"
// }

export default async function AppointmentsPage(props: {
    searchParams: Promise<AppointmentPageQueries>
}) {

    const params = await props?.searchParams

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Appointments params={params} />
        </Suspense>
    )

}
