

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

export type AppointmentFilterNames = Pick<Appointment, "status">
export type AppointmentPageQueries = AppointmentFilterNames & {
    page: string
}
