import BusinessLocationForm from "@/professional/_components/business-location-form";
import { MapProvider } from "@/lib/providers/map-providers";

export default function BusinessLocationPage() {
    return <MapProvider>
        <BusinessLocationForm />
    </MapProvider>

}

