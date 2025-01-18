import { Map } from "@/ui/components/custom/map";

export default function BusinessLocationPage() {
    return <div className="min-w-[200px] w-full min-h-[200px] h-full">
        <div className=" grid grid-cols-1 gap-y-4 w-full">
            <h1 className="text-2xl font-bold">Select your business location</h1>
            <Map />
        </div>
    </div>
}