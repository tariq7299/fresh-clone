import MobileCartForm from "@/business/_components/mobile-cart-form"
import { getBusinessData } from "@/business/_lib/data"
import { Business } from "@/business/[id]/(business-overview)/page"

export default async function MobileCartDefaultPage(props: { params: Promise<{ id: string }>, searchParams: Promise<{ items: string }> }) {
    const params = await props.params
    const businessId = params?.id
    const businessData = await getBusinessData(businessId) as Business
    const services = businessData?.services_with_categories


    return <MobileCartForm servicesWithCategories={services} />
}


