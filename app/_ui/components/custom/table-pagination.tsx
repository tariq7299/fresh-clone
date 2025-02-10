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


export default function TablePagination({ pagination }: { pagination: PaginationType }) {

    const searchParams = useSearchParams()
    const pathname = usePathname()



    const returnPageUrl = (pageNo: string) => {
        const newParams = new URLSearchParams(searchParams)
        newParams.set("page", pageNo.toString())
        return `${pathname}?${newParams.toString()}`
    }


    return (
        <Pagination className="py-4">
            <PaginationContent>

                {/* <PaginationItem>

                        {pagination?.prev_page_url && <PaginationPrevious href={pagination?.prev_page_url} />}
                    </PaginationItem> */}

                {pagination?.links.map((link, index) => {
                    if (link.label === "&laquo; Previous") {
                        return (
                            <PaginationItem key={index} className={cn(link.url ? "visible" : "invisible")}>
                                <PaginationPrevious href={returnPageUrl(String(Number(pagination?.current_page) - 1))} />
                            </PaginationItem>



                        );
                    } else if (link.label === "Next &raquo;") {
                        return (
                            <PaginationItem key={index} className={cn(link.url ? "visible" : "invisible")}>
                                <PaginationNext href={returnPageUrl(String(Number(pagination?.current_page) + 1))} />
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

                {/* 
                    <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>


                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" isActive>
                            2
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="#" />
                    </PaginationItem> */}
            </PaginationContent>
        </Pagination>
    )
}
