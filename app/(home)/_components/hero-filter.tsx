import { Combobox } from "@/ui/components/combo-box";
import { Separator } from "@/ui/components/separator";
import { Button } from "@/ui/components/custom/button";
import { MagnifyingGlassIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { useGeolocation } from "@/lib/hooks/use-geo-location";
import { getAllCategories } from "@/lib/data";
import HeroFilterForm from "./hero-filter-form";
import { Category } from "@/business/_lib/definitions";
import { MapProvider } from "@/lib/providers/map-providers";


export default async function HeroFilter() {

    const categories = (await getAllCategories()) as Category[]

    console.log("categories", categories)


    return <MapProvider>
        <HeroFilterForm categories={categories} />
    </MapProvider>
}