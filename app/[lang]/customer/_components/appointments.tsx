import AppointmentsTable from "./appointments-table";
import { AppointmentPageQueries } from "@/[lang]/customer/_lib/definitions"
import { Suspense } from "react";
import { DataTableSkeleton, DataTableSkeletonWithPagination } from "./skeleton";



export default function Appointments({ params }: { params: AppointmentPageQueries }) {




    return (
        <div className="p-5 ps-14 pt-8 md:pt-24 size-full">
            <h1 className="text-2xl md:text-3xl font-bold text-accent pb-3 ">Appointments</h1>
            <Suspense key={params.page + params?.status} fallback={<DataTableSkeletonWithPagination />}>
                <AppointmentsTable params={params} />
            </Suspense>
        </div>



    )
}