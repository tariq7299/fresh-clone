import AppointmentsTable from "./appointments-table";


export default async function Appointments() {

    const appointments = await getAppointments()

    return (
        <div className="p-5 ps-7 mt-6 md:mt-24 size-full">
            <h1 className="text-2xl md:text-3xl font-semibold font-source-sans pb-3">Appointments</h1>
            <AppointmentsTable />
        </div>
    )
}