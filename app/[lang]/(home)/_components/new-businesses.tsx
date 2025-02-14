import ShopsCarousel from "@/_ui/components/custom/shops-carousel"
import { getNewBusinesses } from "../_lib/data"

export default async function NewBusinesses({ dict, lang }: { dict: any, lang: 'en' | 'ar' }) {

    const newBusinesses = await getNewBusinesses(lang)

    return <ShopsCarousel lang={lang} data={newBusinesses} sectionTitle={<h1 className="font-semibold font-source-sans rtl:font-cairo rtl:font-bold text-start  text-3xl ">{dict.home.new_to_lumière}<span className="font-cinzel text-3xl  font-bold"> Lumière</span></h1>} />
}