import { AppointmentPageQueries } from "@/[lang]/customer/_lib/definitions"
import { Suspense } from "react";
import { DataTableSkeletonWithPagination } from "./skeleton";
import AppointmentsTableWrapper from "./appointments-table-wrapper";
import AppointmentsFilters from "./appointments-filters";
import { DataTableFitlersSkeleton } from "./skeleton";

export default async function Appointments({ params, }: { params: AppointmentPageQueries }) {

    return (
        <div className="p-5  pt-8 md:pt-24 md:ps-14 size-full">
            <h1 className="text-2xl md:text-3xl font-bold text-accent pb-3 ">Appointments</h1>

            <Suspense fallback={<DataTableFitlersSkeleton />}>
                <AppointmentsFilters />
            </Suspense>

            <Suspense key={params?.page + params?.status + params?.booking_date} fallback={<DataTableSkeletonWithPagination />}>
                <AppointmentsTableWrapper params={params} />
            </Suspense>
        </div>
    )
}