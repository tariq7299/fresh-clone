import DesktopCart from "@/[lang]/business/_components/cart";
import { getBusinessData } from "@/[lang]/business/_lib/data";
import { Business } from "@/[lang]/business/[id]/(business-overview)/page";
import { getDictionary } from "@/_lib/dictionaries";

export default async function DesktopCartDefaultPage(props: { params: Promise<{ id: string, lang: "en" | "ar" }>, searchParams: Promise<{ items: string }> }) {

    const params = await props.params
    const businessId = params?.id
    const lang = params.lang
    const dict = await getDictionary(lang)
    const businessData = await getBusinessData(businessId, lang) as Business
    const services = businessData?.services_with_categories
    const businessName = businessData?.name
    const businessAddress = businessData?.location?.address


    return <DesktopCart services={services} businessId={businessId} businessCoverPhoto={""} businessName={businessName} businessAddress={businessAddress} dict={dict} />

}