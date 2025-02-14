import ShopsCarousel from "@/_ui/components/custom/shops-carousel"
import { getRecommendedBusinesses } from "../_lib/data"

export async function RecommendedBusinesses({ dict, lang }: { dict: any, lang: 'en' | 'ar' }) {

    const recommendedBusinesses = await getRecommendedBusinesses(lang)

    return <ShopsCarousel lang={lang} data={recommendedBusinesses} sectionTitle={<h1 className="font-semibold font-source-sans rtl:font-cairo rtl:font-bold text-start  text-3xl ">{dict.home.recommended}</h1>} />
}