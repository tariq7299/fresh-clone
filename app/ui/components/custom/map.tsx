/*Since the map was loaded on client side, 
we need to make this component client rendered as well*/
'use client'

import { Map as MapComponent, Marker, MapCameraChangedEvent, useMapsLibrary, useMap } from "@vis.gl/react-google-maps";
import { useCallback, useEffect, useState, useTransition } from "react";
import { Input } from "../input";
import { useGeolocation } from "@/lib/hooks/use-geo-location";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
    PopoverAnchor,
    PopoverPortal
} from "@/ui/components/popover"
import { useDebouncedCallback } from "use-debounce";
import { MapPin } from "lucide-react";
import { Checkbox } from "../checkbox";
import { Button } from "../button";
import SearchLocation from "@/professional/_components/search-location";
import LocationDetails from "@/professional/_components/location-details";
import MapTest from "@/professional/_components/map";
import { cn } from "@/lib/utils/utils";

// Set the marker at the center of the map when user drags the map  
// Solution 1

// Provide the current location 




function Map() {
    const [isPending, startTransition] = useTransition()
    const [isSearching, setIsSearching] = useState(false)
    const { lng, lat, loading, error } = useGeolocation();
    const DEFAULT_CENTER = { lat, lng }

    // console.log("longitude", lng)
    // console.log("latitude", lat)
    // console.log("loading", loading)
    // console.log("error", error)

    useEffect(() => {
        setCenter({ lat, lng })
    }, [lng, lat])

    const [center, setCenter] = useState<{
        lat: number,
        lng: number
    }>(DEFAULT_CENTER)

    const [value, setValue] = useState("")
    const [query, setQuery] = useState("")
    const [address, setAddress] = useState({
        positionOnMap: {
            lat: 0,
            lng: 0
        },
        place_id: "",
        address: "",
        apt: "",
        district: "",
        city: "",
        // postcode: "",
        country: "",
        directions: ""
    })

    const [result, setResult] = useState<
        {
            formatted_address: string | undefined,
            geometry: { location?: { lat: () => number; lng: () => number; } | undefined } | undefined,
            place_id: string | undefined
        }[] | null>(null)

    const placesLibrary = useMapsLibrary('places');
    const geoLibrary = useMapsLibrary('geocoding');

    // const [positionOnMap, setPositionOnMap] = useState<{
    //     lat: number,
    //     lng: number
    // }>(DEFAULT_CENTER)

    const [placesService, setPlacesService] = useState<google.maps.places.PlacesService | null>(null);
    const [geocodingService, setGeocodingService] = useState<google.maps.Geocoder | null>(null);

    const map = useMap();

    useEffect(() => {
        console.log("map", map)
    }, [map])


    // triggers loading the places library and returns the API Object once complete (the
    // component calling the hook gets automatically re-rendered when this is
    // the case)


    useEffect(() => {
        console.log("placesLibrary", placesLibrary)
        console.log("mapINPLACES", map)
        if (!placesLibrary || !map) return;

        // when placesLibrary is loaded, the library can be accessed via the
        // placesLibrary API object
        setPlacesService(new placesLibrary.PlacesService(map));
    }, [placesLibrary, map]);

    useEffect(() => {
        if (!geoLibrary || !map) return;

        // when placesLibrary is loaded, the library can be accessed via the
        // placesLibrary API object
        setGeocodingService(new geoLibrary.Geocoder());
    }, [geoLibrary, map]);

    // useEffect(() => {
    //     if (!geocodingService) return;

    //     geocodingService.geocode({ placeId: address.place_id }, (results, status) => {
    //         console.log('results?.[0]?.formatted_address?.split(",")', results?.[0]?.formatted_address?.split(","))
    //         console.log('results?.[0]?.formatted_address?.split(",")[-1]', results?.[0]?.formatted_address?.split(",")?.[-1])
    //         setAddress({
    //             ...address,
    //             country: results?.[0]?.formatted_address?.split(",")?.[results?.[0]?.formatted_address?.split(",")?.length - 1] || "",
    //         })
    //         console.log("Geocoding results", results)
    //         console.log("Geocoding status", status)
    //     });

    // }, [geocodingService, positionOnMap, address.place_id]);

    const handleSettingLocation = async (place: {



        formatted_address: string | undefined,
        geometry: {
            location?: {
                lat: () => number,
                lng: () => number
            } | undefined
        } | undefined,
        place_id: string | undefined
    }) => {
        if (!geocodingService || !place.place_id) return;

        setOpen(false)

        startTransition(async () => {

            await geocodingService.geocode({ placeId: place.place_id }, (results, status) => {


                startTransition(() => {
                    setAddress({
                        ...address,
                        positionOnMap: {
                            lat: place.geometry?.location?.lat() ?? lat,
                            lng: place.geometry?.location?.lng() ?? lng
                        },
                        place_id: place.place_id || "",
                        address: results?.[0]?.formatted_address || "",
                        district: place.formatted_address?.split(",")?.[0] || "",
                        city: place.formatted_address?.split(",")?.[1] || "",
                        country: results?.[0]?.formatted_address?.split(",")?.[results?.[0]?.formatted_address?.split(",")?.length - 1] || "",
                    })
                    setCenter({
                        lat: place.geometry?.location?.lat() ?? lat,
                        lng: place.geometry?.location?.lng() ?? lng
                    })
                });


            });
        });





    }




    const handleSearch = useDebouncedCallback((query) => {

        console.log("query", query)
        console.log("placesService", placesService)

        if (!placesService) return;

        setIsSearching(true)

        // Set types to limit and provide better performance and resutelss
        // limit resultes to 3 only
        const request = {
            query,
            bounds: map?.getBounds() ?? undefined,
            types: ["beauty_salon", "store", "shopping_mall", "establishment", "point_of_interest"]
        };

        console.log("request", request)

        placesService.textSearch(
            request,
            (
                results: google.maps.places.PlaceResult[] | null,
                status: google.maps.places.PlacesServiceStatus
            ) => {
                if (status === google.maps.places.PlacesServiceStatus.OK && results) {

                    console.log("results", results)

                    setResult(results.length > 0 ? results.slice(0, 3).map(({ formatted_address, geometry, place_id }) => ({ formatted_address, geometry, place_id })) : [])
                    setIsSearching(false)
                    // setCenter({
                    //     lat: results[0].geometry?.location?.lat() ?? lat,
                    //     lng: results[0].geometry?.location?.lng() ?? lng
                    // })
                    setOpen(true)

                }
            }
        )

        console.log("result", result)


    }, 300);



    const handleCameraChange = useCallback((ev: MapCameraChangedEvent) => {
        // setCenter(ev.detail.center)
        // setAddress({
        //     ...address,
        //     positionOnMap: ev.detail.center
        // })
    }, []);

    // Get the core library
    const coreLibrary = useMapsLibrary('core');

    // Only create the icon when the library is loaded
    const customIcon = coreLibrary ? {
        url: '/pin.png',
        scaledSize: new coreLibrary.Size(30, 30),
        size: new coreLibrary.Size(60, 60)
    } : undefined;

    const [open, setOpen] = useState(false)

    return (

        <>
            <LocationDetails address={address} className={cn(address.place_id && address.positionOnMap.lat && address.positionOnMap.lng ? "block" : "hidden")} />

            {/* <MapTest MapComponent={MapComponent} Marker={Marker} address={address} center={center} handleCameraChange={handleCameraChange} customIcon={customIcon} DEFAULT_CENTER={DEFAULT_CENTER} /> */}

            <MapComponent
                className={cn("rounded-lg w-full h-[320px] overflow-hidden", address.place_id && address.positionOnMap.lat && address.positionOnMap.lng ? "block" : "hidden")}
                // style={{ width: '100%', height: '100%' }}
                defaultCenter={DEFAULT_CENTER}
                center={center}
                defaultZoom={12}
                gestureHandling={'greedy'}
                disableDefaultUI={true}
                onCameraChanged={handleCameraChange}
            >
                <Marker
                    icon={customIcon}
                    position={center}
                    draggable={false}
                />
            </MapComponent>

            {/* {(address.place_id && address.positionOnMap.lat && address.positionOnMap.lng) && ( */}
            {/* <> */}
            {/* </> */}


            {/* )} */}

            <SearchLocation className={cn(address.place_id && address.positionOnMap.lat && address.positionOnMap.lng ? "hidden" : "block")} setOpen={setOpen} open={open} handleSearch={handleSearch} handleSettingLocation={handleSettingLocation} result={result} isSearching={isSearching} />


        </>


    );
};

export { Map };
