'use client'

// Import necessary components and hooks from external libraries
import { Map as MapComponent, Marker, MapCameraChangedEvent, useMapsLibrary, useMap } from "@vis.gl/react-google-maps";
import { useCallback, useEffect, useState, useTransition } from "react";
import { useGeolocation } from "@/lib/hooks/use-geo-location";
import { useDebouncedCallback } from "use-debounce";
import { Checkbox } from "../../ui/components/checkbox";
import SearchLocation from "@/professional/_components/search-location";
import LocationDetails from "@/professional/_components/location-details";
import { cn } from "@/lib/utils/utils";

// TODO: Remove most of that code, and put it in didcated hook or provider, maybe use
export default function BusinessLocationForm() {
    // State for handling loading states and transitions
    const [isPending, startTransition] = useTransition()
    const [isSearching, setIsSearching] = useState(false)

    // TODO: Add loading JSX when getting user's geolocation, and if error, show error message, or the user didn't allow location access then show error message that they need to allow location access
    // Get user's current geolocation coordinates
    const { lng, lat, loading, error } = useGeolocation();
    const DEFAULT_CENTER = { lat, lng }


    // State for tracking map center coordinates
    const [center, setCenter] = useState<{
        lat: number,
        lng: number
    }>(DEFAULT_CENTER)

    // State for storing complete address details
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
        country: "",
        directions: ""
    })

    // State for storing search results from Places API
    const [result, setResult] = useState<
        {
            formatted_address: string | undefined,
            geometry: { location?: { lat: () => number; lng: () => number; } | undefined } | undefined,
            place_id: string | undefined
        }[] | null>(null)

    // Load required Google Maps libraries
    const placesLibrary = useMapsLibrary('places');
    const geoLibrary = useMapsLibrary('geocoding');
    // Load core library for custom marker icon
    const coreLibrary = useMapsLibrary('core');

    // Initialize Places and Geocoding services
    const [placesService, setPlacesService] = useState<google.maps.places.PlacesService | null>(null);
    const [geocodingService, setGeocodingService] = useState<google.maps.Geocoder | null>(null);

    const map = useMap();

    // Initialize Places service when library and map are loaded
    useEffect(() => {
        if (!placesLibrary || !map) return;
        setPlacesService(new placesLibrary.PlacesService(map));
    }, [placesLibrary, map]);

    // Initialize Geocoding service when library and map are loaded
    useEffect(() => {
        if (!geoLibrary || !map) return;
        setGeocodingService(new geoLibrary.Geocoder());
    }, [geoLibrary, map]);

    // Handle setting location when user selects a place from search results
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

        setOpen(false);

        geocodingService.geocode(
            { placeId: place.place_id },
            (results, status) => {
                if (status === 'OK' && results) {
                    // Update address and map center with selected location details
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
                        });

                        setCenter({
                            lat: place.geometry?.location?.lat() ?? lat,
                            lng: place.geometry?.location?.lng() ?? lng
                        });
                    });
                } else {
                    throw new Error("Failed to get location details")
                }
            }
        );
    };

    // Debounced function to handle location search
    const handleSearch = useDebouncedCallback((query) => {
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
                    setResult(results.length > 0 ? results.slice(0, 3).map(({ formatted_address, geometry, place_id }) => ({ formatted_address, geometry, place_id })) : [])
                    setIsSearching(false)
                    setOpen(true)
                }
            }
        )
    }, 300);

    // Handle map camera position changes
    const handleCameraChange = useCallback((ev: MapCameraChangedEvent) => {
        setCenter(ev.detail.center)
        setAddress({
            ...address,
            positionOnMap: ev.detail.center
        })
    }, [center.lat]);

    // Configure custom marker icon
    const customIcon = coreLibrary ? {
        url: '/pin.png',
        scaledSize: new coreLibrary.Size(30, 30),
        size: new coreLibrary.Size(65, 65)
    } : undefined;

    // State for controlling search results dropdown
    const [open, setOpen] = useState(false)

    return (
        <>
            {/* Display selected location details */}
            <LocationDetails address={address} className={cn(address.place_id && address.positionOnMap.lat && address.positionOnMap.lng ? "flex" : "hidden")} />

            <div className={cn(address.place_id && address.positionOnMap.lat && address.positionOnMap.lng ? "block" : "hidden")}>

                <h2 className="text-lg font-bold">Is the pin in the right place?</h2>
                <p className="text-sm text-muted-foreground pb-4">If not, you can drag it to the correct location</p>

                {/* Map component with marker */}
                <MapComponent
                    className={cn("rounded-lg w-full h-[320px] overflow-hidden", address.place_id && address.positionOnMap.lat && address.positionOnMap.lng ? "block" : "hidden")}
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

            </div>

            {/* Location search component */}
            <SearchLocation className={cn(address.place_id && address.positionOnMap.lat && address.positionOnMap.lng ? "hidden" : "block")} setOpen={setOpen} open={open} handleSearch={handleSearch} handleSettingLocation={handleSettingLocation} result={result} isSearching={isSearching} />

            {/* Mobile/online services checkbox */}
            <div className="flex items-center space-x-2">
                <Checkbox variant="accent" id="terms" className="size-6 border-gray-300 " />
                <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    I don't have a business address (mobile and online services only)
                </label>
            </div>
        </>
    );
};
