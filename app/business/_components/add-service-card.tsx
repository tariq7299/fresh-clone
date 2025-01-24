import { ApiService } from "@/professional/_lib/definitions";
import { Button } from "@/ui/components/custom/button";
import { Plus } from "lucide-react";

export function AddServiceCard({ service }: { service: ApiService }) {



    return <div className="flex justify-between items-center w-full md:border border-gray-200 md:rounded-lg md:p-5 border-b pb-4 cursor-pointer hover:bg-accent/10 group transition-colors duration-150" >
        <div>
            <p className="font-semibold text-lg">{service.name}</p>
            <p className="text-sm text-muted-foreground pb-3">{service.duration}min</p>
            <p className="font-semibold text-sm">{service.price} EGP</p>
        </div>
        <Button size={"icon"} className="font-semibold h-7 w-7 p-1 bg-muted rounded-lg shadow-none text-primary  group-hover:bg-accent/10 transition-colors duration-150 ">
            <Plus />
        </Button>
    </div>
}