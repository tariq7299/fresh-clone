import ShopsCarousel from "@/ui/components/custom/shops-carousel"
import { getTrendingBusinesses } from "../_lib/data"

export default async function TrendingBusinesses() {

    const trendingBusinesses = await getTrendingBusinesses()

    return <ShopsCarousel data={trendingBusinesses} sectionTitle={<h1 className="font-semibold font-source-sans text-left  text-3xl ">Trending</h1>} />
}