import { CheckCircle, Store } from "lucide-react";
import { getAppointments } from "../_lib/data";
import AppointmentsTable from "./appointments-table";
import { Appointment } from "../_lib/definitions";
import { AppointmentPageQueries } from "@/[lang]/customer/_lib/definitions"
export interface Filter {
    type: "string" | "number" | "date" | "boolean" | "select"
    colName: string
    icon?: React.ReactNode
    options?: { id: string, label: string }[]
}



interface Service {
    id: number,
    name: string,
    price: number,
    duration: number,
}

interface ApiAppointment {
    user: any,
    business: {
        id: number,
        name: string,
        address: string,
    },
    id: string,
    booking_date: string,
    start_time: string,
    end_time: string,
    status: string,
    payment_method: string,
    booking_data: {
        services: Service[]
        total_duration: number
        total_price: number
    }
}


export default async function Appointments({ params }: { params: AppointmentPageQueries }) {

    console.log("paramsBEFOREFETCHING", params)

    const appointments = await getAppointments(params).then(appointments => appointments.map((row: ApiAppointment) => {
        const { user, business, booking_data, ...rest } = row
        return {
            ...rest,
            services: row.booking_data.services,
            business_name: business.name,
            business_address: business.address,
            total_duration: row.booking_data.total_duration,
            total_price: row.booking_data.total_price
        }
    }
    ))

    console.log("appointments", appointments)

    const filters: Filter[] = [
        {
            type: "string",
            colName: "business_name",
            icon: <Store className="size-6" />
        },


        {
            type: "select",
            colName: "status",
            options: [
                { id: "completed", label: "Completed" },
                { id: "cancelled", label: "Cancelled" },
                { id: "confirmed", label: "Confirmed" }
            ],
            icon: <CheckCircle className="size-6" />
        }
    ]




    return (
        <div className="p-5 ps-14 pt-8 md:pt-24 size-full overflow-y-hidden">
            <h1 className="text-2xl md:text-3xl font-bold text-accent pb-3 ">Appointments</h1>
            <AppointmentsTable filters={filters} appointments={appointments} />
        </div>
    )
}