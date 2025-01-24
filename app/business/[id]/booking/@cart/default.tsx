import Cart from "@/business/_components/cart";
import { getBusinessData } from "@/business/_lib/data";
import { Business } from "@/business/[id]/(business-overview)/page";

export default async function CartDefaultPage(props: { params: Promise<{ id: string }>, searchParams: Promise<{ items: string }> }) {



    const params = await props.params
    const searchParams = await props.searchParams
    const businessId = params?.id
    const businessData = await getBusinessData(businessId) as Business
    const services = businessData?.services_with_categories
    const items = searchParams.items

    // const businessCoverPhoto = ""
    const businessName = businessData?.name
    const businessAddress = businessData?.location?.address

    console.log("items", items)
    console.log("businessData", businessData)

    return <Cart services={services} businessId={businessId} businessCoverPhoto={""} businessName={businessName} businessAddress={businessAddress} />

}