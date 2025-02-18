import { ApiServicesWithCategory } from "@/[lang]/professional/_lib/definitions";
import { getBusinessData } from "../../_lib/data";
import Image from "next/image";
import barberShop from "@/../public/barber-shop-2.jpg"
import { Dot } from 'lucide-react';
import { Button } from "@/_ui/components/custom/button";
import { Badge } from "@/_ui/components/badge";
import { ServicesOverview } from "../../_components/services-overview";
import { BusinessHours } from "../../_components/business-hours";
import { Suspense } from "react";
import { ServicesOverviewSkeleton } from "../../_components/skeletons";
import { notFound } from "next/navigation";
import { getDictionary } from "@/_lib/dictionaries";

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


export default async function Page(props: { params: Promise<{ id: string, lang: "en" | "ar" }> }) {
    const params = await props.params;
    const id = params.id;
    const lang = params.lang;

    const businessData = await getBusinessData(id, lang) as Business
    const dict = await getDictionary(lang)

    if (!businessData) {
        notFound()
    }

    const servicesCount = businessData.services_with_categories.reduce((acc, curr) => acc + curr.services.length, 0);

    return <div className="">

        <div className="pt-0 md:pt-28 max-w-[1440px] m-auto">



            {/* This will be the image carousal in mobile view only */}
            {/* Add the image carousal component here */}
            <div className="md:hidden">
                <Image src={barberShop} alt="barber shop" className="w-full h-full object-cover " />
            </div>

            <div className="p-5 ">

                <div className="flex items-center gap-2 flex-wrap">
                    <h1 className="text-3xl md:text-5xl   font-bold font-source-sans  rtl:font-bold pb-1 md:pb-0 rtl:font-cairo rtl:pb-3">{businessData.name} </h1>
                    <Badge variant="outline" className="text-sm md:text-md">{businessData.category.name}</Badge>
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-start  md:gap-1">
                    <p className=" text-muted-foreground">{dict.business_page.open_until} 10:00 PM</p>
                    <Dot className="hidden md:block" />
                    <p className=" text-muted-foreground">{businessData.location.address} </p>

                    <a href={`https://www.google.com/maps/dir/?api=1&destination=${businessData.location.coordinates.latitude},${businessData.location.coordinates.longitude}`} className=" text-accent font-bold ">   {dict.business_page.get_directions}</a>

                </div>

                {/* This will be the images in desktop view */}
                <div className="hidden md:grid grid-cols-3 grid-rows-2 pt-4 gap-6">
                    <Image src={barberShop} alt="barber shop" className="w-full h-full object-cover rounded-lg col-span-2 row-span-2" />

                    <Image src={barberShop} alt="barber shop" className="w-full h-full object-cover rounded-lg col-start-3 col-span-1 row-start-1 row-span-1" />

                    <Image src={barberShop} alt="barber shop" className="w-full h-full object-cover rounded-lg col-start-3 col-span-1 row-start-2 row-span-1" />
                </div>

                <div className="grid grid-cols-1 space-y-14 pt-14 max-w-screen-md ">

                    <div className="">
                        <h2 className="text-2xl md:text-4xl font-bold font-source-sans rtl:font-cairo rtl:font-bold pb-3">{dict.business_page.services.title}</h2>
                        <Suspense fallback={<ServicesOverviewSkeleton />}>
                            <ServicesOverview
                                services={businessData.services_with_categories}
                                dict={dict}
                            />
                        </Suspense>

                        <Button isLink={true} href={`/business/${businessData.id}/booking/select-services`} variant={"outline"} className="w-full md:w-auto  md:p-5">
                            {dict.business_page.services.see_all}
                        </Button>
                    </div>

                    <div>
                        <div className="pb-6">

                            <h2 className="text-2xl md:text-4xl font-bold font-source-sans rtl:font-cairo rtl:font-bold pb-1">{dict.business_page.about.title}</h2>
                            <p className=" ">{businessData.description}</p>
                        </div>
                        <div className="rounded-lg overflow-hidden">
                            <img
                                className=""
                                src={`https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/pin-s+555555(${businessData.location.coordinates.latitude},${businessData.location.coordinates.longitude})/${businessData.location.coordinates.latitude},${businessData.location.coordinates.longitude},9.26,0/884x472@2x?access_token=pk.eyJ1IjoidGFyaXE3Mjk5IiwiYSI6ImNtNjZ5NDYydTA1NGMycXIyN3YwMDdya28ifQ.PLTA5eR2eDKUFwM8IiOjEQ`}
                                alt={dict.business_page.about.map_alt}
                                loading="lazy"
                            />


                        </div>
                        <p className=" text-muted-foreground pt-4">{businessData.location.address} <a href={`https://www.google.com/maps/dir/?api=1&destination=${businessData.location.coordinates.latitude},${businessData.location.coordinates.longitude}`} className=" text-accent font-bold ">{dict.business_page.get_directions}</a></p>
                    </div>

                    <BusinessHours
                        business_hours={businessData.business_hours}
                        className="pb-6"
                        dict={dict}
                    />

                </div>

            </div>


        </div>

        <div className="sticky bottom-0 left-0 bg-white w-full border-t border-gray-200 ">



            <div className="flex justify-between w-full max-w-[1440px] m-auto items-center p-5">
                <h1 className="hidden md:block text-lg md:text-2xl font-semibold">{businessData.name}</h1>
                <p className="text-muted-foreground md:hidden">{servicesCount} {dict.business_page.services.services_available}</p>

                <div className="flex items-center gap-4">
                    <p className=" hidden md:block ">{servicesCount} {dict.business_page.services.services_available}</p>
                    <Button href={`/business/${businessData.id}/booking/select-services`} size={"lg"} isLink={true} className="text-md md:text-lg font-semibold ">{dict.business_page.booking.book_now}</Button>
                </div>
            </div>
        </div>

    </div>
}