import Cart from "@/business/_components/cart";
import { getBusinessData } from "@/business/_lib/data";
import { Business } from "@/business/[id]/(business-overview)/page";

export default async function CartDefaultPage(props: { params: Promise<{ id: string }>, searchParams: Promise<{ items: string }> }) {
    const params = await props.params
    const businessId = params?.id
    const businessData = await getBusinessData(businessId) as Business
    const services = businessData?.services_with_categories
    const businessName = businessData?.name
    const businessAddress = businessData?.location?.address


    return <Cart services={services} businessId={businessId} businessCoverPhoto={""} businessName={businessName} businessAddress={businessAddress} />

}