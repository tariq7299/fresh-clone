

export type Service = {
    service_id: string
    name: string
    price: number
    duration: number
}

export type Appointment = {
    id: string
    booking_date: string
    start_time: string
    end_time: string
    status: string
    payment_method: string
    services: Service[]
    business_name: string
    business_address: string
    total_duration: number
    total_price: number
}

export type CustomerAppointment = Appointment

export type ProfessionalAppointment = Omit<Appointment, "business_name" | "business_address">

export type AppointmentFilterNames = Pick<Appointment, "status" | "booking_date">

export type AppointmentPageQueries = AppointmentFilterNames & {
    page: string
    lang: "en" | "ar"
}

export interface Filter {
    type: "string" | "number" | "date" | "boolean" | "select"
    colName: string
    label: string
    icon?: React.ReactNode
    options?: { id: string, label: string }[]
}

export type Status = "cancelled" | "completed" | "confirmed"

export interface ApiAppointment {
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
        services: {
            id: string
            name: string
            price: number
            duration: number
        }[]
        total_duration: number
        total_price: number
    }
}