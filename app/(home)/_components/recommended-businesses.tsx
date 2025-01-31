import ShopsCarousel from "@/_ui/components/custom/shops-carousel"
import { getRecommendedBusinesses } from "../_lib/data"

export async function RecommendedBusinesses() {

    const recommendedBusinesses = await getRecommendedBusinesses()

    return <ShopsCarousel data={recommendedBusinesses} sectionTitle={<h1 className="font-semibold font-source-sans text-left  text-3xl ">Recommended</h1>} />
}