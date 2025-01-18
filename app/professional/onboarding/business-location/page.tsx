import BusinessLocationForm from "@/professional/_components/business-location-form";
import { MapProvider } from "@/lib/providers/map-providers";

export default function BusinessLocationPage() {
    return <form id="business-onboarding-form">
        <div className="flex flex-col gap-2 w-full max-w-2xl p-5 py-24 min-h-dvh  items-stretch m-auto space-y-5 text-start">

            <div className="text-start space-y-1">

                <p className="text-sm text-muted-foreground text-start"> Account setup</p>

                {/* Change this to more descriptive title */}
                <h1 className="text-3xl lg:text-4xl font-bold font-source-sans text-start"> Where is your business located?</h1>

                <p className="text-sm text-muted-foreground text-start "> This is where your business is located. Your billing and legal name can be added later.</p>
            </div>

            <MapProvider>
                <BusinessLocationForm />
            </MapProvider>

        </div>
    </form>
}

