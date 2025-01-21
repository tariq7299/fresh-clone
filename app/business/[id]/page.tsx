import { ApiServicesWithCategory } from "@/professional/_lib/definitions";
import { getBusinessData } from "../_lib/data";
import Image from "next/image";
import barberShop from "@/../public/barber-shop-2.jpg"
import { Dot } from 'lucide-react';
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/ui/components/tabs"
import { ScrollArea, ScrollBar } from "@/ui/components/scroll-area"
import { Button } from "@/ui/components/custom/button";
import { Badge } from "@/ui/components/badge";

interface BusinessHour {
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


// Main business type
interface Business {
    id: number;
    name: string;
    description: string;
    website_url: string;
    business_hours: BusinessHour[];
    is_active: boolean;
    capacity: number;
    address: string | null;
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

    return <div className="">

        <div className="pt-0 md:pt-28 max-w-[1440px] m-auto">



            {/* This will be the image carousal in mobile view only */}
            {/* Add the image carousal component here */}
            <div className="md:hidden">
                <Image src={barberShop} alt="barber shop" className="w-full h-full object-cover " />
            </div>

            <div className="p-5 ">

                <div className="flex items-center gap-2"><h1 className="text-3xl md:text-5xl   font-bold font-source-sans pb-1 md:pb-0">{businessData.name} </h1> <Badge variant="outline" className="text-md md:text-lg">Nails</Badge></div>

                <div className="flex flex-col md:flex-row items-start md:items-start  ">
                    <p className=" text-muted-foreground">Open until 10:00 PM</p>
                    <div className="hidden md:block">
                        <Dot className="size-full" />
                    </div>
                    <p className=" text-muted-foreground">123 Business Street, Suite 456, Dubai, UAE</p>
                    <p className=" text-accent "> Get Directions</p>

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

                        <Tabs defaultValue="featured">
                            <TabsList className="w-full bg-transparent">
                                <ScrollArea className="w-full whitespace-nowrap ">

                                    <div className="flex gap-2 py-4">
                                        <TabsTrigger className="data-[state=active]:bg-foreground data-[state=active]:text-background rounded-full font-bold text-foreground" value="featured">Feastured</TabsTrigger>
                                        <TabsTrigger className="data-[state=active]:bg-foreground data-[state=active]:text-background rounded-full font-bold text-foreground" value="body-care">Body care</TabsTrigger>
                                        <TabsTrigger className="data-[state=active]:bg-foreground data-[state=active]:text-background rounded-full font-bold text-foreground" value="hair-care">Hair care</TabsTrigger>
                                        <TabsTrigger className="data-[state=active]:bg-foreground data-[state=active]:text-background rounded-full font-bold text-foreground" value="skin-care">Skin care</TabsTrigger>
                                        <TabsTrigger className="data-[state=active]:bg-foreground data-[state=active]:text-background rounded-full font-bold text-foreground" value="makeup">Makeup</TabsTrigger>
                                        <TabsTrigger className="data-[state=active]:bg-foreground data-[state=active]:text-background rounded-full font-bold text-foreground" value="nail-care">Nail care</TabsTrigger>
                                        <TabsTrigger className="data-[state=active]:bg-foreground data-[state=active]:text-background rounded-full font-bold text-foreground" value="hair-care">Hair care</TabsTrigger>
                                        <TabsTrigger className="data-[state=active]:bg-foreground data-[state=active]:text-background rounded-full font-bold text-foreground" value="skin-care">Skin care</TabsTrigger>
                                        <TabsTrigger className="data-[state=active]:bg-foreground data-[state=active]:text-background rounded-full font-bold text-foreground" value="makeup">Makeup</TabsTrigger>
                                        <TabsTrigger className="data-[state=active]:bg-foreground data-[state=active]:text-background rounded-full font-bold text-foreground" value="nail-care">Nail care</TabsTrigger>
                                        <TabsTrigger className="data-[state=active]:bg-foreground data-[state=active]:text-background rounded-full font-bold text-foreground" value="other">Other</TabsTrigger>
                                    </div>


                                    <ScrollBar orientation="horizontal" />
                                </ScrollArea>
                            </TabsList>

                            <TabsContent value="featured" className="grid grid-cols-1 justify-items-stretch gap-8 md:gap-3 w-full py-6">

                                <div className="flex justify-between items-center w-full md:border border-gray-200 md:rounded-lg md:p-4">
                                    <div>
                                        <p className="font-semibold">Eyebrow</p>
                                        <p className="text-sm text-muted-foreground pb-3">15min</p>
                                        <p className="font-semibold text-sm">EGP 100</p>
                                    </div>

                                    <Button borderType="fullRounded" variant={"outline"} className="font-semibold">Book</Button>
                                </div>
                                <div className="flex justify-between items-center w-full md:border border-gray-200 md:rounded-lg md:p-4">
                                    <div>
                                        <p className="font-semibold">Eyebrow</p>
                                        <p className="text-sm text-muted-foreground pb-3">15min</p>
                                        <p className="font-semibold text-sm">EGP 100</p>
                                    </div>

                                    <Button borderType="fullRounded" variant={"outline"} className="font-semibold">Book</Button>
                                </div>
                                <div className="flex justify-between items-center w-full md:border border-gray-200 md:rounded-lg md:p-4">
                                    <div>
                                        <p className="font-semibold">Eyebrow</p>
                                        <p className="text-sm text-muted-foreground pb-3">15min</p>
                                        <p className="font-semibold text-sm">EGP 100</p>
                                    </div>

                                    <Button borderType="fullRounded" variant={"outline"} className="font-semibold">Book</Button>
                                </div>
                                <div className="flex justify-between items-center w-full md:border border-gray-200 md:rounded-lg md:p-4">
                                    <div>
                                        <p className="font-semibold">Eyebrow</p>
                                        <p className="text-sm text-muted-foreground pb-3">15min</p>
                                        <p className="font-semibold text-sm">EGP 100</p>
                                    </div>

                                    <Button borderType="fullRounded" variant={"outline"} className="font-semibold">Book</Button>
                                </div>

                            </TabsContent>
                            <TabsContent value="body-care">
                                <p>Reviews</p>
                            </TabsContent>
                            <TabsContent value="hair-care">
                                <p>Hair care</p>
                            </TabsContent>
                            <TabsContent value="skin-care">
                                <p>Skin care</p>
                            </TabsContent>

                        </Tabs>
                        <Button variant={"outline"} className="w-full md:w-auto  md:p-5">See all</Button>
                    </div>


                    <div>
                        <div className="pb-6">

                            <h2 className="text-2xl md:text-4xl font-bold font-source-sans pb-1">About</h2>
                            <p className=" ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos quos quos quosquosquosquosquos quos quosquosquosquos  quosquos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos quos quos quosquosquosquosquos quos quosquosquosquos  quosq</p>
                        </div>
                        <div className="rounded-lg overflow-hidden">
                            <img
                                className=""
                                src="https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/pin-s+555555(30.042617388660606,31.23340646299468)/30.042617388660606,31.23340646299468,9.26,0/884x472@2x?access_token=pk.eyJ1IjoidGFyaXE3Mjk5IiwiYSI6ImNtNjZ5NDYydTA1NGMycXIyN3YwMDdya28ifQ.PLTA5eR2eDKUFwM8IiOjEQ"
                                alt="Salon location on map"
                                loading="lazy"
                            />

                        </div>
                        <p className=" text-muted-foreground pt-4">123 Business Street, Suite 456, Dubai, UAE Get Directions</p>
                    </div>

                    <div className="pb-6">
                        <h2 className="text-xl md:text-2xl font-semibold font-source-sans pb-2">Opening times</h2>

                        <div className="space-y-2 md:w-1/2">

                            <div className="flex justify-between">
                                <div className="flex items-center gap-2"><div className="size-3 rounded-full bg-success" />Monday</div>
                                <p>10:00 AM - 10:00 PM</p>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex items-center gap-2"><div className="size-3 rounded-full bg-success" />Monday</div>
                                <p>10:00 AM - 10:00 PM</p>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex items-center gap-2"><div className="size-3 rounded-full bg-success" />Monday</div>
                                <p>10:00 AM - 10:00 PM</p>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex items-center gap-2"><div className="size-3 rounded-full bg-success" />Monday</div>
                                <p>10:00 AM - 10:00 PM</p>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex items-center gap-2"><div className="size-3 rounded-full bg-success" />Monday</div>
                                <p>10:00 AM - 10:00 PM</p>
                            </div>

                        </div>
                    </div>


                </div>


            </div>


        </div>

        <div className="sticky bottom-0 left-0 bg-white w-full border-t border-gray-200 ">



            <div className="flex justify-between w-full max-w-[1440px] m-auto items-center p-5">
                <h1 className="hidden md:block text-lg md:text-2xl font-semibold">{businessData.name}</h1>
                <p className="text-muted-foreground md:hidden">91 services available</p>

                <div className="flex items-center gap-4">
                    <p className=" hidden md:block ">91 services available</p>
                    <Button size={"lg"} variant={"default"} className="text-md md:text-lg font-semibold ">Book now</Button>
                </div>
            </div>
        </div>

    </div>
}