'use client'

import { Combobox } from "@/_ui/components/custom/combo-box";
import { Separator } from "@/_ui/components/separator";
import { Button } from "@/_ui/components/custom/button";
import { MagnifyingGlassIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { MapPin } from 'lucide-react';

import { useGeolocation } from "@/_lib/hooks/use-geo-location";
import { Category } from "@/[lang]/business/_lib/definitions";
import { useEffect, useState } from "react";
import SearchLocation from "@/[lang]/professional/_components/search-location";
import { Map as MapComponent, Marker, MapCameraChangedEvent, useMapsLibrary, useMap } from "@vis.gl/react-google-maps";
import { useDebouncedCallback } from "use-debounce";
import SearchLocation2 from "@/[lang]/(home)/_components/search-location-2";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { createPageURL } from "@/[lang]/business/_lib/utils";

export default function HeroFilterForm({ categories }: { categories: Category[] }) {
    const formattedCategories = categories.length > 0 ? categories.map((category) => ({
        id: category.id,
        name: category.name,
        icon: ["💅", "💇", "👁️", "💆", "💈", "🪮", "💄"][Math.floor(Math.random() * 7)] // Random beauty-related emoji
    })) : []

    const { defaultLng, defaultLat, loading, error } = useGeolocation();
    // State for controlling search results dropdown
    const [open, setOpen] = useState(false)

    const [isSearching, setIsSearching] = useState(false)
    const router = useRouter()
    const pathname = usePathname()


    const map = useMap();
    // Load required Google Maps libraries
    const placesLibrary = useMapsLibrary('places');

    // Initialize Places and Geocoding services
    const [placesService, setPlacesService] = useState<google.maps.places.PlacesService | null>(null);

    // State for storing search results from Places API
    const [result, setResult] = useState<
        {
            formatted_address: string | undefined,
            geometry: { location?: { lat: () => number; lng: () => number; } | undefined } | undefined,
            place_id: string | undefined
        }[] | null>(null)


    // Initialize Places service when library and map are loaded
    useEffect(() => {
        if (!placesLibrary || !map) return;
        setPlacesService(new placesLibrary.PlacesService(map));
    }, [placesLibrary, map]);


    const [location, setLocation] = useState<{
        lat: number,
        lng: number,
        formatted_address: string
    }>({
        lat: defaultLat,
        lng: defaultLng,
        formatted_address: ""
    })

    // Debounced function to handle location search
    const handleSearch = useDebouncedCallback((query: string) => {

        if (!placesService) return;

        setIsSearching(true)

        // Configure search request with specific place types
        const request = {
            query,
            bounds: map?.getBounds() ?? undefined,
            types: ["beauty_salon", "store", "shopping_mall", "establishment", "point_of_interest"]
        };


        // Perform text search and update results
        placesService.textSearch(
            request,
            (
                results: google.maps.places.PlaceResult[] | null,
                status: google.maps.places.PlacesServiceStatus
            ) => {
                if (status === google.maps.places.PlacesServiceStatus.OK && results) {
                    setResult(results.length > 0 ? results.slice(0, 5).map(({ formatted_address, geometry, place_id }) => ({ formatted_address, geometry, place_id })) : [])
                    setIsSearching(false)
                    setOpen(true)
                }
            }
        )
    }, 300);


    const handleSettingLocation = (place: { formatted_address: string | undefined, geometry: { location?: { lat: () => number; lng: () => number; } | undefined } | undefined, place_id: string | undefined }) => {
        setOpen(false)
        setLocation({
            formatted_address: place.formatted_address,
            lat: place.geometry?.location?.lat() ?? 0,
            lng: place.geometry?.location?.lng() ?? 0
        })
    }

    const [categoryId, setCategoryId] = useState<number>(0)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const params = new URLSearchParams()
        params.set("longitude", String(location.lng))
        params.set("latitude", String(location.lat))
        categoryId > 0 && params.set("categoryId", String(categoryId))
        const url = createPageURL(`${pathname}search`, params)
        router.push(url)
    }


    return (
        <form onSubmit={handleSubmit}>

            {/* Map component */}
            <MapComponent
                className="hidden"
                defaultCenter={location}
                center={location}
                defaultZoom={15}
                zoom={15}
            >http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbarber-shop-1.6ec3914b.jpg&w=3840&q=75
            </MapComponent>


            {/* Write types */}
            <div className="flex gap-3 lg:gap-2 border rounded-lg justify-between mt-8 lg:mt-16 items-center bg-white flex-col lg:flex-row  p-3 lg:p-1.5">

                {/* Pass in the categories */}
                {/* Pass in the default category */}
                {/* Make the search field a combobox */}

                <Combobox
                    inputPlaceholder="All categories"
                    values={formattedCategories}
                    field={{ value: categoryId, onChange: (value: number) => setCategoryId(value) }}
                    triggerIconOnLeft={true}
                    triggerIcon={<MagnifyingGlassIcon className="size-5" />}
                    triggerClassName={" w-full z-10 font-normal flex items-center justify-start gap-3 shadow-none hover:cursor-text hover:bg-background px-4 py-6 lg:p-2 active:scale-100 text-sm border-1 border-gray-200 lg:border-none font-semibold"}
                    popoverClassName={"w-[200px] sm:w-[400px] "} />

                <div className="self-stretch h-6 my-auto hidden lg:block">
                    <Separator className=" me-1 " orientation="vertical" />
                </div>


                {/* Location search component */}
                <SearchLocation2
                    // address={location.formatted_address}
                    popoverClassName="w-[200px] sm:w-[400px] lg:w-[500px]"
                    triggerIcon={<MapPinIcon className="size-5 text-foreground" />}
                    triggerIconWrapperClassName="left-4 lg:left-0"
                    className="grow w-full border-none"
                    setOpen={setOpen} open={open}
                    handleSearch={handleSearch}
                    handleSettingLocation={handleSettingLocation}
                    result={result}
                    isSearching={isSearching}
                    inputPlaceholder="Current location"
                    inputClassName=" placeholder:text-foreground placeholder:text-sm sm:placeholder:text-sm md:placeholder:text-sm placeholder:font-semibold focus-visible:ring-0  border-1 border-gray-200 lg:border-none px-4 py-6 ps-12 lg:p-2 lg:ps-8 font-semibold"
                />

                {/* <Combobox triggerIcon={<MapPinIcon className="size-6" />} triggerClassName={"border-0 w-full z-10 "} labelClassName={"font-semibold"} popoverClassName={"w-[200px] sm:w-[400px]"} /> */}



                <Button variant="default" className="inline-flex gap-2 items-center h-8 rounded-md px-3 2xs:h-10 2xs:px-8 text-lg w-full lg:w-auto font-bold">  Search </Button>

            </div>
        </form>
    )
}