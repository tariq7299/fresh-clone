import { Combobox } from "@/_ui/components/combo-box";
import { Separator } from "@/_ui/components/separator";
import { Button } from "@/_ui/components/custom/button";
import { MagnifyingGlassIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { useGeolocation } from "@/_lib/hooks/use-geo-location";
import { getAllCategories } from "@/_lib/data";
import HeroFilterForm from "./hero-filter-form";
import { Category } from "@/[lang]/business/_lib/definitions";
import { MapProvider } from "@/_lib/providers/map-providers";


export default async function HeroFilter({ dict }: { dict: any }) {

    const categories = (await getAllCategories()) as Category[]


    return <MapProvider>
        <HeroFilterForm categories={categories} dict={dict} />
    </MapProvider>
}