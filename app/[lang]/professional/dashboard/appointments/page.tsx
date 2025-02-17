import { getAppointments } from "@/[lang]/professional/_lib/data";
import { AppointmentPageQueries, Filter } from "@/_lib/definitions/appointments";
import { Suspense } from "react";
import { DataTableSkeletonWithPagination } from "@/_ui/components/custom/skeletons";
import AppointmentsTableWrapper from "@/[lang]/professional/dashboard/_components/appointments-table-wrapper";
import TableFilters from "@/_ui/components/custom/table-filters";
import { Calendar, CheckCircle } from "lucide-react";
import { getDictionary } from "@/_lib/dictionaries";

export default async function AppointmentsPage(props: {
    searchParams: Promise<AppointmentPageQueries>,
    params: Promise<{ lang: "en" | "ar" }>
}) {
    const searchParams = await props?.searchParams
    const lang = (await props.params).lang
    const dict = await getDictionary(lang)
    const appointments = (await getAppointments()).appointments

    const filters: Filter[] = [
        {
            type: "date",
            colName: "booking_date",
            label: dict.dashboard.appointments.table.columns.booking_date,
            icon: <Calendar className="size-6" />
        },
        {
            type: "select",
            colName: "status",
            label: dict.dashboard.appointments.table.columns.status,
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
            <h1 className="text-2xl md:text-4xl font-semibold rtl:font-cairo pb-4">
                {dict.dashboard.appointments.title}
            </h1>
            <TableFilters filters={filters} data={appointments} dict={dict} />
            <Suspense key={searchParams?.page + searchParams?.status + searchParams?.booking_date}
                fallback={<DataTableSkeletonWithPagination />}>
                <AppointmentsTableWrapper searchParams={searchParams} lang={lang} dict={dict} />
            </Suspense>
        </div>
    )
}