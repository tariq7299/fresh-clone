"use client"

import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/_ui/components/pagination"
import { Pagination as PaginationType } from "@/_lib/definitions/definitions"
import { cn } from "@/_lib/utils/utils"
import { usePathname, useSearchParams } from "next/navigation"


export default function TablePagination({ pagination, lang }: { pagination: PaginationType, lang: "en" | "ar" }) {

    const searchParams = useSearchParams()
    const pathname = usePathname()

    const returnPageUrl = (pageNo: string) => {
        const newParams = new URLSearchParams(searchParams)
        newParams.set("page", pageNo.toString())
        return `${pathname}?${newParams.toString()}`
    }


    return (
        <Pagination className="py-4 ">
            <PaginationContent className="flex justify-center items-center flex-wrap gap-2">

                {pagination?.links.map((link, index) => {
                    if (link.label === "&laquo; Previous" || link.label === "pagination.previous") {
                        return (
                            <PaginationItem key={index} className={cn(link.url ? "visible" : "invisible")}>
                                <PaginationPrevious href={returnPageUrl(String(Number(pagination?.current_page) - 1))} lang={lang} />
                            </PaginationItem>



                        );
                    } else if (link.label === "Next &raquo;" || link.label === "pagination.next") {
                        return (
                            <PaginationItem key={index} className={cn(link.url ? "visible" : "invisible")}>
                                <PaginationNext href={returnPageUrl(String(Number(pagination?.current_page) + 1))} lang={lang} />
                            </PaginationItem>

                        );
                    } else {
                        return (
                            <PaginationItem key={index}>

                                {link.active ? <PaginationLink href={returnPageUrl(link.label)} isActive>
                                    {link.label}
                                </PaginationLink> :
                                    <PaginationLink href={returnPageUrl(link.label)}>
                                        {link.label}
                                    </PaginationLink>}

                            </PaginationItem>
                        );
                    }
                })}
            </PaginationContent>
        </Pagination>
    )
}
