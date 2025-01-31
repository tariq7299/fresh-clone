import { cn } from "@/_lib/utils/utils"
import { BusinessHour } from "@/business/[id]/(business-details)/page"
export const BusinessHours = ({ business_hours, className }: { business_hours: BusinessHour[], className?: string }) => {
    return <div className={cn("", className)}>
        <h2 className="text-xl md:text-2xl font-semibold font-source-sans pb-2">Opening times</h2>

        <div className="space-y-2 md:w-1/2">
            {business_hours.map((hour, index) => (
                <div key={hour.day} className="flex justify-between">
                    <div className="flex items-center gap-2"><div className={cn("size-3 rounded-full bg-success", hour.is_closed ? "bg-warning" : "bg-success")} /><span className="capitalize">{hour.day}</span></div>
                    {hour.is_closed ? <p className="text-muted-foreground">Closed</p> : <p>{hour.open} - {hour.close}</p>}
                </div>
            ))}


        </div>
    </div>

}