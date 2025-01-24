import { ApiServicesWithCategory } from "@/professional/_lib/definitions";
import { getBusinessData } from "../../_lib/data";
import Image from "next/image";
import barberShop from "@/../public/barber-shop-2.jpg"
import { Dot, Link } from 'lucide-react';
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/ui/components/tabs"
import { ScrollArea, ScrollBar } from "@/ui/components/scroll-area"
import { Button } from "@/ui/components/custom/button";
import { Badge } from "@/ui/components/badge";
import { ServicesTabs } from "../../_components/services-tabs-1";
import { cn } from "@/lib/utils/utils";
import { BusinessHours } from "../../_components/business-hours";

export interface BusinessHour {
    day: 'sunday' | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday';
    open: string | null;
    close: string | null;
    is_closed: boolean;
}

// Category type
interface Category {
    id: number;
    name: string;
}

interface Coordinates {
    longitude: number;
    latitude: number;
};

interface AddressDetails {
    apartment: string;
    floor: string;
    building: string;
    district: string;
    direction: string;
};

interface Address {
    country: string;
    city: string;
    street: string;
    address: string;
    coordinates: Coordinates;
    details: AddressDetails;
    place_id: string;
}

// Main business type
export interface Business {
    id: number;
    name: string;
    description: string;
    website_url: string;
    business_hours: BusinessHour[];
    is_active: boolean;
    capacity: number;
    location: Address;
    gender: string;
    category: Category;
    services_with_categories: ApiServicesWithCategory[];
    images: any[]; // You can specify a more specific type if needed
    created_at: string;
    updated_at: string;
}


export default async function Page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = params.id;

    const businessData = await getBusinessData(id) as Business

    console.log("businessData", businessData)

    const servicesCount = businessData.services_with_categories.reduce((acc, curr) => acc + curr.services.length, 0);

    return <div className="">

        <div className="pt-0 md:pt-28 max-w-[1440px] m-auto">



            {/* This will be the image carousal in mobile view only */}
            {/* Add the image carousal component here */}
            <div className="md:hidden">
                <Image src={barberShop} alt="barber shop" className="w-full h-full object-cover " />
            </div>

            <div className="p-5 ">

                <div className="flex items-center gap-2"><h1 className="text-3xl md:text-5xl   font-bold font-source-sans pb-1 md:pb-0">{businessData.name} </h1> <Badge variant="outline" className="text-md md:text-lg">{businessData.category.name}</Badge></div>

                <div className="flex flex-col md:flex-row items-start md:items-start  ">
                    <p className=" text-muted-foreground">Open until 10:00 PM</p>
                    <div className="hidden md:block">
                        <Dot className="size-full" />
                    </div>
                    <p className=" text-muted-foreground">{businessData.location.address}</p>
                    <a href={`https://www.google.com/maps/dir/?api=1&destination=${businessData.location.coordinates.latitude},${businessData.location.coordinates.longitude}`} className=" text-accent ">Get Directions</a>

                </div>

                {/* This will be the images in desktop view */}
                <div className="hidden md:grid grid-cols-3 grid-rows-2 pt-4 gap-6">
                    <Image src={barberShop} alt="barber shop" className="w-full h-full object-cover rounded-lg col-span-2 row-span-2" />

                    <Image src={barberShop} alt="barber shop" className="w-full h-full object-cover rounded-lg col-start-3 col-span-1 row-start-1 row-span-1" />

                    <Image src={barberShop} alt="barber shop" className="w-full h-full object-cover rounded-lg col-start-3 col-span-1 row-start-2 row-span-1" />
                </div>

                <div className="grid grid-cols-1 space-y-14 pt-14 max-w-screen-md ">

                    <div className="">
                        <h2 className="text-2xl md:text-4xl font-bold font-source-sans pb-3">Services</h2>

                        <ServicesTabs services={businessData.services_with_categories} />

                        <Button variant={"outline"} className="w-full md:w-auto  md:p-5">See all</Button>
                    </div>

                    <div>
                        <div className="pb-6">

                            <h2 className="text-2xl md:text-4xl font-bold font-source-sans pb-1">About</h2>
                            <p className=" ">{businessData.description}</p>
                        </div>
                        <div className="rounded-lg overflow-hidden">
                            <img
                                className=""
                                src={`https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/pin-s+555555(${businessData.location.coordinates.latitude},${businessData.location.coordinates.longitude})/${businessData.location.coordinates.latitude},${businessData.location.coordinates.longitude},9.26,0/884x472@2x?access_token=pk.eyJ1IjoidGFyaXE3Mjk5IiwiYSI6ImNtNjZ5NDYydTA1NGMycXIyN3YwMDdya28ifQ.PLTA5eR2eDKUFwM8IiOjEQ`}
                                alt="Salon location on map"
                                loading="lazy"
                            />


                        </div>
                        <p className=" text-muted-foreground pt-4">{businessData.location.address} <a href={`https://www.google.com/maps/dir/?api=1&destination=${businessData.location.coordinates.latitude},${businessData.location.coordinates.longitude}`} className=" text-accent ">Get Directions</a></p>
                    </div>

                    <BusinessHours business_hours={businessData.business_hours} className="pb-6" />

                </div>

            </div>


        </div>

        <div className="sticky bottom-0 left-0 bg-white w-full border-t border-gray-200 ">



            <div className="flex justify-between w-full max-w-[1440px] m-auto items-center p-5">
                <h1 className="hidden md:block text-lg md:text-2xl font-semibold">{businessData.name}</h1>
                <p className="text-muted-foreground md:hidden">{servicesCount} services available</p>

                <div className="flex items-center gap-4">
                    <p className=" hidden md:block ">{servicesCount} services available</p>
                    <Button size={"lg"} variant={"default"} className="text-md md:text-lg font-semibold ">Book now</Button>
                </div>
            </div>
        </div>

    </div>
}