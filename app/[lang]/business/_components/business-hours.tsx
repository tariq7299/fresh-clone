import { cn } from "@/_lib/utils/utils"
import { BusinessHour } from "@/[lang]/business/[id]/(business-overview)/page"

interface BusinessHoursProps {
    business_hours: BusinessHour[];
    className?: string;
    dict: {
        business_page: {
            business_hours: {
                title: string;
                closed: string;
            }
        }
    }
}

export const BusinessHours = ({ business_hours, className, dict }: BusinessHoursProps) => {
    return (
        <div className={cn("", className)}>
            <h2 className="text-xl md:text-2xl font-semibold font-source-sans rtl:font-cairo rtl:font-bold pb-2">
                {dict.business_page.business_hours.title}
            </h2>

            <div className="space-y-2 md:w-1/2">
                {business_hours.map((hour) => (
                    <div key={hour.day} className="flex justify-between">
                        <div className="flex items-center gap-2">
                            <div className={cn("size-3 rounded-full",
                                hour.is_closed ? "bg-warning" : "bg-success")}
                            />
                            <span className="capitalize">
                                {hour.day}
                            </span>
                        </div>
                        {hour.is_closed ? (
                            <p className="text-muted-foreground">
                                {dict.business_page.business_hours.closed}
                            </p>
                        ) : (
                            <p>{hour.open} - {hour.close}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}