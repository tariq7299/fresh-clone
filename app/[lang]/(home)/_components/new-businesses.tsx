import ShopsCarousel from "@/_ui/components/custom/shops-carousel"
import { getNewBusinesses } from "../_lib/data"

export default async function NewBusinesses() {

    const newBusinesses = await getNewBusinesses()

    return <ShopsCarousel data={newBusinesses} sectionTitle={<h1 className="font-semibold font-source-sans text-left  text-3xl ">New to <span className="font-cinzel text-3xl  font-bold">Lumière</span></h1>} />
}