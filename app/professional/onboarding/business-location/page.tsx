import { MapComponent } from "@/ui/components/custom/map";

export default function BusinessLocationPage() {
    return <div>
        <h1 className="text-2xl font-bold">Select your business location</h1>
        <div className="w-[500px] h-[500px]">
            <MapComponent />
        </div>
    </div>
}