import { getAppointments } from "@/[lang]/professional/_lib/data";
import AppointmentsTable from "@/[lang]/professional/dashboard/_components/appointments-table";
// import { getAppointments } from "@/professional/dashboard/_lib/data";


interface Service {
    service_id: number,
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


export default async function Appointments() {

    const appointments = await getAppointments().then(appointments => appointments.map((row: ApiAppointment) => {
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

    return (
        <div className="p-5 ps-7 pt-8 md:pt-14 size-full over">
            <h1 className="text-2xl md:text-3xl font-bold font-source-sans pb-4">Appointments</h1>
            <AppointmentsTable appointments={appointments} />
        </div>
    )
}