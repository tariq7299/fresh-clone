
import { Badge } from "@/_ui/components/badge"
import { cn } from "@/_lib/utils/utils"
import { Status } from "@/[lang]/customer/_components/appointments-table"
import { Clock, CheckCircle, HeartHandshake, Ban, CircleCheck } from 'lucide-react';




export default function AppointmentStatus({ type }: { type: Status }) {

    return <Badge className={cn("text-xs capitalize transition-colors",
        type === "cancelled" ? "bg-destructive-100 text-destructive-600 hover:bg-destructive-200" :
            type === "completed" ? "bg-success-100 text-success-600 hover:bg-success-200" :
                "bg-accent2-100 text-accent2 hover:bg-accent2-500/20")}>

        <div className="flex items-center gap-1">

            {type === "completed" ? <HeartHandshake className="w-3.5 h-3.5" /> :
                type === "cancelled" ? <Ban className="w-3.5 h-3.5" /> :
                    <CircleCheck className="w-3.5 h-3.5" />}
            {type}
        </div>


    </Badge>



}

