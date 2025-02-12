import AppointmentsTable from "./appointments-table";
import { ApiAppointment, AppointmentPageQueries } from "@/_lib/definitions/appointments"
import { getAppointments } from "@/[lang]/professional/_lib/data";
import Empty from "@/_ui/icons/empty";



export default async function AppointmentsTableWrapper({ params }: { params: AppointmentPageQueries }) {

    const formattedParams = { ...params, page: params.page ?? "1" }

    const data = await getAppointments(formattedParams)
    const appointments = data.appointments.map((row: ApiAppointment) => {
        const { user, business, booking_data, ...rest } = row

        return {

            ...rest,

            services: row.booking_data.services,
            business_name: business.name,
            business_address: business.address,
            total_duration: row.booking_data.total_duration,
            total_price: row.booking_data.total_price
        }
    })
    const pagination = data.pagination

    if (appointments.length === 0 && Object.keys(params).length < 2) {
        return (
            <div className="flex items-center justify-center flex-col text-muted-foreground size-full h-[80vh]">
                <div className="md:size-2/5 mx-auto">
                    <Empty className="" />
                    <p className="text-center">Your schedule is looking a little empty.</p>
                </div>
            </div>
        )
    }

    return <AppointmentsTable appointments={appointments} pagination={pagination} />

}