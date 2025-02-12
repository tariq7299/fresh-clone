import { Filter } from "@/[lang]/customer/_lib/definitions";
import TableFilterInput from "./table-filter-input";
import { Suspense } from "react";
import { DataTableFitlerSkeleton } from "@/[lang]/customer/_components/skeleton";

export default function TableFilters({ filters, data }: { filters: Filter[], data: any }) {
    return (
        <>
            {filters && data.length > 0 && filters.length > 0 && (
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
