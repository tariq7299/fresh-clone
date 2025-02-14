import { addDays, format } from "date-fns"
import Link from "next/link"
import Form from "@/[lang]/business/_components/select-time-form"
import { getAvailableSlots } from "@/[lang]/business/_lib/data"
import { getItemsFromSearchParams } from "@/[lang]/business/_lib/utils"
import { useBusinessFormContext } from "@/_lib/providers/business-form-provider"
import { getDictionary } from "@/_lib/dictionaries"

export default async function TimePage(props: {
    searchParams: Promise<{ items: string }>,
    params: Promise<{ id: string, lang: "en" | "ar" }>
}) {
    const { id, lang } = await props.params
    const businessId = Number(id)
    const searchParams = await props.searchParams
    const dict = await getDictionary(lang)
    const items = searchParams.items

    const serviceIds = items?.split(",")
        .map(item => item.trim())
        .filter(item => item !== "")
        .map(item => {
            const number = Number(item)
            return isNaN(number) ? null : number
        })
        .filter(item => item !== null) || []

    if (serviceIds.length === 0) {
        return (
            <div className="w-full">
                <p className="text-sm text-muted-foreground">
                    {dict.business_page.select_time.no_services}
                </p>
            </div>
        )
    }

    const minDateToBook = new Date();
    const maxDateToBook = addDays(minDateToBook, 60);
    const formattedDate = format(minDateToBook, "yyyy-MM-dd")
    const defaultSlots = await getAvailableSlots(businessId, formattedDate, serviceIds)
        .then(slots => slots.map(slot => slot.start_time))

    return <>
        <h1 className="text-4xl md:text-5xl font-bold font-source-sans rtl:font-cairo rtl:font-bold pb-6">
            {dict.business_page.select_time.title}
        </h1>

        <Form
            lang={lang}
            businessId={businessId}
            minDateToBook={minDateToBook}
            maxDateToBook={maxDateToBook}
            defaultSlots={defaultSlots}
            serviceIds={serviceIds}
            dict={dict}
        />
    </>
}