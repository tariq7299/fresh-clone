import MobileCartForm from "@/[lang]/business/_components/mobile-cart-form"
import { getBusinessData } from "@/[lang]/business/_lib/data"
import { Business } from "@/[lang]/business/[id]/(business-overview)/page"
import { getDictionary } from "@/_lib/dictionaries";

export default async function MobileCartDefaultPage(props: { params: Promise<{ lang: "en" | "ar", id: string }>, searchParams: Promise<{ items: string }> }) {

    const params = await props.params
    const businessId = params?.id
    const lang = params?.lang
    const businessData = await getBusinessData(businessId, lang) as Business
    const services = businessData?.services_with_categories

    const dict = await getDictionary(lang)
    console.log("langGGG", lang)
    console.log("dictGGG", dict)
    return <MobileCartForm servicesWithCategories={services} dict={dict} />
}


