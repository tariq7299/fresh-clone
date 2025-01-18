/*Since the map was loaded on client side, 
we need to make this component client rendered as well*/
'use client'

import { Map as MapComponent, Marker, MapCameraChangedEvent, useMapsLibrary, useMap } from "@vis.gl/react-google-maps";
import { useCallback, useEffect, useState } from "react";
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

// Set the marker at the center of the map when user drags the map  
// Solution 1

// Provide the current location 




function Map() {

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
        place_id: "",
        address: "",
        apt: "",
        district: "",
        city: "",
        // postcode: "",
        country: "",
        directions: ""
    })

    const [result, setResult] = useState<google.maps.places.PlaceResult[] | null>(null)

    const placesLibrary = useMapsLibrary('places');
    const geoLibrary = useMapsLibrary('geocoding');

    const [positionOnMap, setPositionOnMap] = useState<{
        lat: number,
        lng: number
    }>(DEFAULT_CENTER)

    const [placesService, setPlacesService] = useState<google.maps.places.PlacesService | null>(null);
    const [geocodingService, setGeocodingService] = useState<google.maps.Geocoder | null>(null);

    const map = useMap();


    // triggers loading the places library and returns the API Object once complete (the
    // component calling the hook gets automatically re-rendered when this is
    // the case)


    useEffect(() => {
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

    useEffect(() => {
        if (!geocodingService) return;

        geocodingService.geocode({ placeId: address.place_id }, (results, status) => {
            console.log('results?.[0]?.formatted_address?.split(",")', results?.[0]?.formatted_address?.split(","))
            console.log('results?.[0]?.formatted_address?.split(",")[-1]', results?.[0]?.formatted_address?.split(",")?.[-1])
            setAddress({
                ...address,
                country: results?.[0]?.formatted_address?.split(",")?.[results?.[0]?.formatted_address?.split(",")?.length - 1] || "",
            })
            console.log("Geocoding results", results)
            console.log("Geocoding status", status)
        });

    }, [geocodingService, positionOnMap, address.place_id]);

    console.log("address", address)


    // useEffect(() => {

    //     if (!placesService) return;

    //     // Set types to limit and provide better performance and resutelss
    //     // limit resultes to 3 only
    //     const request = {
    //         query,
    //         bounds: map?.getBounds() ?? undefined,
    //         types: ["beauty_salon", "store", "shopping_mall", "establishment", "point_of_interest"]
    //     };

    //     console.log("request", request)

    //     placesService.textSearch(
    //         request,
    //         (
    //             results: google.maps.places.PlaceResult[] | null,
    //             status: google.maps.places.PlacesServiceStatus
    //         ) => {
    //             if (status === google.maps.places.PlacesServiceStatus.OK && results) {

    //                 setResult(results.length > 0 ? results.slice(0, 3).map(({ formatted_address, geometry }) => ({ formatted_address, geometry })) : [])
    //                 setCenter({
    //                     lat: results[0].geometry?.location?.lat() ?? lat,
    //                     lng: results[0].geometry?.location?.lng() ?? lng
    //                 })

    //                 if (results[0].formatted_address) {
    //                     setAddress({
    //                         ...address, address: results[0].formatted_address, district: results[0].formatted_address.split(",")?.[0], city: results[0].formatted_address.split(",")?.[1] || ""

    //                     })
    //                 }
    //             }
    //         }
    //     )

    //     console.log("result", result)

    //     setOpen(true)

    //     // ...use placesService...
    // }, [placesService, query]);

    const handleSearch = useDebouncedCallback((query) => {

        if (!placesService) return;

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

                    setResult(results.length > 0 ? results.slice(0, 3).map(({ formatted_address, geometry, place_id }) => ({ formatted_address, geometry, place_id })) : [])
                    setCenter({
                        lat: results[0].geometry?.location?.lat() ?? lat,
                        lng: results[0].geometry?.location?.lng() ?? lng
                    })

                    if (results[0].formatted_address) {
                        // console.log("results", results)
                        setAddress({
                            ...address, address: results[0].formatted_address, district: results[0].formatted_address.split(",")?.[0], city: results[0].formatted_address.split(",")?.[1] || "", place_id: results[0].place_id || ""

                        })
                        setOpen(true)
                    }
                }
            }
        )

        console.log("result", result)


    }, 300);



    const handleCameraChange = useCallback((ev: MapCameraChangedEvent) => {
        setCenter(ev.detail.center)
        setPositionOnMap(ev.detail.center)
    }, []);

    // console.log("center", center)
    // console.log("query", query)
    // console.log("result", result)
    // console.log("address", address)

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

            <div className="flex gap-2 w-full justify-between pb-3">
                <div className="flex flex-col text-md">
                    {address.apt && <p className="">{address.apt}</p>}
                    {address.address && <p className="">{address.address}</p>}
                    {address.district && <p className="">{address.district}</p>}
                    {address.city && <p className="">{address.city}</p>}
                    {address.country && <p className="">{address.country}</p>}
                </div>
                <div>
                    <Button size={"sm"} variant={"outline"} className="font-bold">Edit</Button>
                </div>

            </div>

            <div className="">
                <h2 className="text-xl font-bold">Is the pin in the right place?</h2>
                <p className="text-sm text-muted-foreground">If not, you can drag it to the correct location</p>
            </div>
            <MapComponent
                className="rounded-lg w-full h-[320px] overflow-hidden"
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
            {/* <Input value={query} onChange={(e) => setQuery(e.target.value)} /> */}

            <div className="">
                <Popover open={open} onOpenChange={setOpen} data-side={"bottom"}>
                    <PopoverAnchor>
                        {/* <Input value={query} onChange={(e) => setQuery(e.target.value)} className="w-full" /> */}
                        <p className=" font-bold pb-1">Where is your business located?</p>
                        <div className="relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2  text-muted-foreground/70">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <Input value={value} onChange={(e) => {
                                handleSearch(e.target.value)
                                setValue(e.target.value)
                            }} className="w-full  p-6 ps-12" />
                        </div>
                        <p className="text-sm text-destructive pt-1
                        ">Please enter a valid address</p>
                    </PopoverAnchor>

                    <PopoverContent sideOffset={8} side="bottom" className=" text-nowrap truncate  w-[340px] sm:w-[500px] md:w-[630px] grid grid-cols-1 gap-y-4 gap-x-3 font-semibold rounded-lg " onOpenAutoFocus={(e) => e.preventDefault()} onInteractOutside={(e) => {
                        // setOpen(false)
                        // setValue("")
                        // setQuery("")
                        // e.preventDefault()
                    }}>
                        {/* <div className=" text-wrap truncate"> */}
                        {result && result.map((place) => <p className="text-md  w-full text-nowrap truncate " key={place.formatted_address}>{place.formatted_address}</p>)}

                        {/* </div> */}
                    </PopoverContent>
                </Popover>

                <div className="flex items-center space-x-2 pt-4">
                    <Checkbox variant="accent" id="terms" className="size-6 border-gray-300 " />
                    <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        I don't have a business address (mobile and online services only)
                    </label>
                </div>

            </div>



        </>


    );
};

export { Map };
