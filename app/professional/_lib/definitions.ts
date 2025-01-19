import { Nullable } from "@/lib/utils/utils";


// Coming from api like that (before mapping and changing its keys)

export type ApiService = {
    id: number,
    name: string,
    description: string,
    duration: number,
    price: number,
    // currency: string
}

export type Service = {
    serviceCategory: string,
    serviceId: number,
    serviceName: string,
    servicePrice: number,
    serviceDuration: number,
    serviceCurrency: string,
}

export type StoredService = Pick<Service, "serviceId" | "servicePrice" | "serviceDuration">

export type BusinessLocation = {
    lat: number,
    lng: number,
    place_id: string,
    address: string,
    district: string,
    city: string,
    country: string,
    directions: string,
    street: string,
    apartment: string,
    building: string,
    online_business: boolean
}

export type StoredTempLocation = Nullable<BusinessLocation>

export type ApiServicesWithCategory = {
    // The name of the category of the services
    name: string,
    services: ApiService[]
}

export type StoredTempBusinessInfo = {
    name_en: string,
    name_ar: string,
    description_en: string,
    description_ar: string,
    website_url: string,
}

