import { Nullable } from "@/_lib/utils/utils";
import { Appointment as CustomerAppointment } from "@/[lang]/customer/_lib/definitions";

// Coming from api like that (before mapping and changing its keys)

export enum GenderOfCustomers {
    Male = "male",
    Female = "female",
    Both = "both"
}


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
    gender_of_customers: GenderOfCustomers
}

export type BusinessOnboarding = {
    name_ar: string;
    name_en: string;
    description_ar: string;
    description_en: string;
    website_url: string;
    capacity: number;
    category_id: number;
    location: {
        country: string;
        city: string;
        address: string;
        longitude: number;
        latitude: number;
        street: string;
        building: string;
        floor: string;
        apartment: string;
        district: string;
        direction: string;
        place_id: string;
    };
    gender_of_customers: GenderOfCustomers;
    services: {
        service_id: number;
        duration: number;
        price: number;
    }[];
}

export type Appointment = Omit<CustomerAppointment, "business_name" | "business_address">

