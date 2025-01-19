import BusinessLocationForm from "@/professional/_components/business-location-form";
import { MapProvider } from "@/lib/providers/map-providers";
import { getBusinessStepFormData } from "@/professional/_lib/data";
import { StoredTempLocation } from "@/professional/_lib/definitions";

export default async function BusinessLocationPage() {


    const storedTempLocation = await getBusinessStepFormData("locationStep") as StoredTempLocation | null

    return <MapProvider>
        <BusinessLocationForm storedTempLocation={storedTempLocation} />
    </MapProvider>

}

