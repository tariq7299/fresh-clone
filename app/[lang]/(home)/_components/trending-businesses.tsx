import ShopsCarousel from "@/_ui/components/custom/shops-carousel"
import { getTrendingBusinesses } from "../_lib/data"

export default async function TrendingBusinesses({ dict, lang }: { dict: any, lang: 'en' | 'ar' }) {

    const trendingBusinesses = await getTrendingBusinesses(lang)

    return <ShopsCarousel lang={lang} data={trendingBusinesses} sectionTitle={<h1 className="font-semibold font-source-sans rtl:font-cairo rtl:font-bold text-start  text-3xl ">{dict.home.trending}</h1>} />
}