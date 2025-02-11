import AppointmentsTable from "./appointments-table";
import { ApiAppointment, Appointment, AppointmentPageQueries, Filter } from "@/[lang]/customer/_lib/definitions"
import { Suspense } from "react";
import { DataTableSkeleton, DataTableSkeletonWithPagination } from "./skeleton";
import { ColumnDef } from "@tanstack/react-table";
import { getAppointments } from "../_lib/data";
import AppointmentsDataFetcher from "./appointments-data-fetcher";
import { CheckCircle } from "lucide-react";
import { Calendar } from "lucide-react";
import TableFilterInput from "@/_ui/components/custom/table-filter-input";
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
                <AppointmentsDataFetcher params={params} />
            </Suspense>
        </div>


    )
}