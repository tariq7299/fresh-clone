import { addDays, format } from "date-fns"
import Link from "next/link"
import Form from "@/business/_components/select-time-form"
import { getAvailableSlots } from "@/business/_lib/data"
import { getItemsFromSearchParams } from "@/business/_lib/utils"

export default async function TimePage(props: { searchParams: Promise<{ items: string }>, params: Promise<{ id: string }> }) {

    const { id } = await props.params
    const businessId = Number(id)
    const searchParams = await props.searchParams
    const items = searchParams.items
    const serviceIds = items?.split(",").map(item => Number(item.trim())) || []
    console.log("items", typeof items)
    console.log("id", id)

    const minDateToBook = new Date();
    const maxDateToBook = addDays(minDateToBook, 60);
    const formattedDate = format(minDateToBook, "yyyy-MM-dd")

    const defaultSlots = await getAvailableSlots(businessId, formattedDate, serviceIds).then(slots => slots.map(slot => slot.start_time))
    console.log("defaultSlots", defaultSlots)


    return <>

        <h1 className="text-4xl md:text-5xl font-bold font-source-sans pb-6">Select time</h1>
        <Form businessId={businessId} minDateToBook={minDateToBook} maxDateToBook={maxDateToBook} defaultSlots={defaultSlots} serviceIds={serviceIds} />


        <Link href="/login?loginRequiredForBooking=true" scroll={false} >
            {/* <Button onClick={() => window.location.href = '/login'}   > */}
            {/* <Button onClick={() => router.push("/login")}   > */}
            test
            {/* </Button> */}
        </Link>
        {/* <Link href="/register" scroll={false} >
            <Button>
                test
            </Button>
        </Link>
        <Link href="/otp-verification" scroll={false}>
            <Button>
                test
            </Button>
        </Link> */}

    </>
}