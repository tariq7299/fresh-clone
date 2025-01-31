'use client'

// Import necessary components and hooks from external libraries
import { Map as MapComponent, Marker, MapCameraChangedEvent, useMapsLibrary, useMap } from "@vis.gl/react-google-maps";
import { useCallback, useEffect, useState, useTransition } from "react";
import { useGeolocation } from "@/_lib/hooks/use-geo-location";
import { useDebouncedCallback } from "use-debounce";
import { Checkbox } from "../../../_ui/components/checkbox";
import SearchLocation from "@/professional/_components/search-location";
import LocationDetails from "@/professional/_components/location-details";
import { cn } from "@/_lib/utils/utils";
import { handleSubmitBusinessLocation } from "../../_lib/form-actions";
import { ErrorFormState } from "@/_lib/definitions/definitions";
import { z } from "zod";
import { useBusinessFormContext } from "../../../_lib/providers/business-form-provider";
import { StoredTempLocation } from "../../_lib/definitions";
import { OnboardingBusinessLocationSkeleton } from "@/professional/_components/skeletons";

export const businessLocationSchema = z.discriminatedUnion('online_business', [
    // When online_business is true, don't allow any other fields
    z.object({
        online_business: z.literal(true)
    }),
    // When online_business is false, require location fields
    z.object({
        online_business: z.literal(false),
        lat: z.number(),
        lng: z.number(),
        place_id: z.string().trim().min(1, { message: "Please provide a location" }),
        address: z.string().trim().min(1, { message: "Please provide a location" }),
        district: z.string().optional(),
        city: z.string().optional(),
        country: z.string().trim().min(1, { message: "Please provide a location" }),
        directions: z.string().optional(),
        street: z.string().optional(),
        apartment: z.string().optional(),
        building: z.string().optional(),
    })
])


export type BusinessLocationErrors = {
    lat?: string | string[]
    lng?: string | string[]
    place_id?: string | string[]
    address?: string | string[]
    district?: string | string[]
    city?: string | string[]
    country?: string | string[]
    directions?: string | string[]
    street?: string | string[]
    apartment?: string | string[]
    building?: string | string[]
    online_business?: string | string[]
}

// TODO: Create the BusinessLocationFormData type
export type BusinessLocationFormData = z.infer<typeof businessLocationSchema>

// TODO: Remove most of that code, and put it in didcated hook or provider, maybe use
export default function Form({ storedTempLocation }: { storedTempLocation: StoredTempLocation | null }) {

    // State for handling loading states and transitions
    const [_, startTransition] = useTransition()
    const { setIsLoading } = useBusinessFormContext()
    const [isPending, setIsPending] = useState(false)
    const [isSearching, setIsSearching] = useState(false)

    // TODO: Add loading JSX when getting user's geolocation, and if error, show error message, or the user didn't allow location access then show error message that they need to allow location access
    // Get user's current geolocation coordinates
    const { defaultLng, defaultLat, loading, error } = useGeolocation();
    // const DEFAULT_CENTER = { lat: defaultLat, lng: defaultLng }


    // State for tracking map center coordinates
    const [center, setCenter] = useState<{
        lat: number,
        lng: number
    }>({
        lat: storedTempLocation?.lat ?? defaultLat,
        lng: storedTempLocation?.lng ?? defaultLng
    })

    // State for storing complete address details
    const [location, setLocation] = useState<BusinessLocationFormData>({
        lat: storedTempLocation?.lat ?? defaultLat,
        lng: storedTempLocation?.lng ?? defaultLng,
        place_id: storedTempLocation?.place_id ?? "",
        address: storedTempLocation?.address ?? "",
        building: storedTempLocation?.building ?? "",
        apartment: storedTempLocation?.apartment ?? "",
        street: storedTempLocation?.street ?? "",
        district: storedTempLocation?.district ?? "",
        city: storedTempLocation?.city ?? "",
        country: storedTempLocation?.country ?? "",
        directions: storedTempLocation?.directions ?? "",
        online_business: storedTempLocation?.online_business ?? false
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

        if (location.online_business) return
        if (!geocodingService || !place.place_id) return;

        setOpen(false);

        geocodingService.geocode(
            { placeId: place.place_id },
            (results, status) => {
                if (status === 'OK' && results) {
                    // Update address and map center with selected location details
                    startTransition(() => {
                        setLocation({
                            ...location,
                            lat: place.geometry?.location?.lat() ?? defaultLat,
                            lng: place.geometry?.location?.lng() ?? defaultLng,
                            place_id: place.place_id || "",
                            address: results?.[0]?.formatted_address || "",
                            district: place.formatted_address?.split(",")?.[0] || "",
                            city: place.formatted_address?.split(",")?.[1] || "",
                            country: results?.[0]?.formatted_address?.split(",")?.[results?.[0]?.formatted_address?.split(",")?.length - 1] || "",
                        });

                        setCenter({
                            lat: place.geometry?.location?.lat() ?? defaultLat,
                            lng: place.geometry?.location?.lng() ?? defaultLng
                        });
                    });
                } else {
                    throw new Error("Failed to get location details")
                }
            }
        );
    };

    // Debounced function to handle location search
    const handleSearch = useDebouncedCallback((query: string) => {
        if (!placesService) return;
        if (location.online_business) return

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

    // Handle map camera position changes
    const handleCameraChange = (ev: MapCameraChangedEvent) => {
        if (location.online_business) return
        setCenter(ev.detail.center)
        setLocation({
            ...location,
            lat: ev.detail.center.lat,
            lng: ev.detail.center.lng
        })
    };

    // Configure custom marker icon
    const customIcon = coreLibrary ? {
        url: '/pin.png',
        scaledSize: new coreLibrary.Size(30, 30),
        size: new coreLibrary.Size(65, 65)
    } : undefined;

    // State for controlling search results dropdown
    const [open, setOpen] = useState(false)

    const INITIAL_FORM_STATE: ErrorFormState<BusinessLocationErrors | null, BusinessLocationFormData> = {
        success: false,
        clientFieldsErrors: null,
        apiDataResponse: null,
        apiMsgs: "",
        formData: {
            lat: 0,
            lng: 0,
            place_id: "",
            address: "",
            district: "",
            city: "",
            country: "",
            directions: "",
            street: "",
            apartment: "",
            building: "",
            online_business: false
        }
    }

    const [formState, setFormState] = useState<ErrorFormState<BusinessLocationErrors | null, BusinessLocationFormData>>(INITIAL_FORM_STATE)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsPending(true)
        const result = await handleSubmitBusinessLocation({ ...location })
        result && setFormState(result)
        setIsPending(false)
    }
    useEffect(() => {
        setIsLoading(isPending)
    }, [isPending])

    if (loading) return <OnboardingBusinessLocationSkeleton />


    return (
        <form id="business-onboarding-form" onSubmit={handleSubmit} className="flex flex-col gap-2 w-full space-y-2 ">


            {/* Location search component */}
            <SearchLocation online_business={location.online_business} className={cn(location.online_business ? "pointer-events-none" : location.place_id && location.lat && location.lng ? "hidden" : "block")} setOpen={setOpen} open={open} handleSearch={handleSearch} handleSettingLocation={handleSettingLocation} result={result} isSearching={isSearching} clientFieldsErrors={formState.clientFieldsErrors} />

            {/* Display selected location details */}
            <LocationDetails setLocation={setLocation} location={location} className={cn(
                "pb-4",
                location.online_business ? "hidden" : location.place_id && location.lat && location.lng ? "flex" : "hidden")} />

            <div className={cn(
                "space-y-4",
                location.online_business ? "hidden" : location.place_id && location.lat && location.lng ? "block" : "hidden")}>
                <div>

                    <h2 className="text-lg font-bold">Is the pin in the right place?</h2>
                    <p className="text-sm text-muted-foreground ">If not, you can drag it to the correct location</p>
                </div>

                {/* Map component with marker */}
                <MapComponent
                    className={cn("rounded-lg w-full h-[320px] overflow-hidden", location.online_business ? "hidden" : location.place_id && location.lat && location.lng ? "block" : "hidden")}
                    defaultCenter={center}
                    center={center}
                    defaultZoom={15}
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


            {/* Mobile/online services checkbox */}
            <div className="flex items-center space-x-2">
                <Checkbox checked={location.online_business} onCheckedChange={() => setLocation({ ...location, online_business: !location.online_business })} variant="accent" id="terms" className="size-6 border-gray-300 " />
                <label
                    htmlFor="terms"
                    className=" cursor-pointer font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    I don't have a business address (mobile and online services only)
                </label>
            </div>
        </form>

    );
};
