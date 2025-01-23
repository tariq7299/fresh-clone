"use client"

import { useScrollspy } from "@/lib/hooks/use-scroll-spy";
import { cn } from "@/lib/utils/utils";
import { Button } from "@/ui/components/custom/button";
import { ScrollArea, ScrollBar } from "@/ui/components/scroll-area"
import { useState, useEffect } from "react"
import ScrollSpy from 'react-scrollspy-navigation';
import { Plus } from 'lucide-react';
import { Separator } from "@/ui/components/separator";
import Image from "next/image";
import barberShop from "@/../public/barber-shop-2.jpg"

export default function BookingPage() {

    const tabTitles = ["Featured", "Hair", "Beard", "Facial", "Massage", "Manicure", "Pedicure", "Waxing", "Threading", "Body Treatment", "Spa Package", "Makeup", "Tanning", "Color Treatment", "Hair Treatment"]


    return <div className="w-full max-w-7xl p-5 py-24 min-h-dvh  mx-auto space-y-8 pb-20" >
        <div className=" grid grid-cols-1 md:grid-cols-3  gap-6">

            <div className="col-span-3 lg:col-span-2" >

                <h1 className="text-4xl md:text-5xl font-bold font-source-sans">Select services</h1>

                {/* Services categories tabs */}
                <nav className="w-full bg-background sticky top-16 left-0">
                    <ScrollSpy activeClass="nav-active" activeAttr={true} offsetTop={0} offsetLeft={0} >
                        <ScrollArea className="w-full whitespace-nowrap relative">
                            <div className="flex gap-2 py-4 w-full">
                                {tabTitles.map((title, index) => (
                                    <a href={`#${title}`} className={cn(" px-4 py-2 rounded-full font-bold  text-foreground", "data-[active=true]:bg-foreground data-[active=true]:text-background hover:bg-muted ")} key={title}>{title}</a>
                                ))}
                            </div>
                            <div className="absolute bottom-0 right-0 w-20 h-full  bg-gradient-to-l from-background to-transparent"></div>
                            <ScrollBar orientation="horizontal" />
                        </ScrollArea>

                    </ScrollSpy>
                </nav>

                <div className="grid grid-cols-1 justify-items-stretch gap-8 md:gap-3 w-full py-6 space-y-8">

                    <div id="Featured" className="flex flex-col gap-4">
                        {/* Featured */}
                        <h2 className="text-2xl md:text-3xl font-bold font-source-sans pb-3">Featured</h2>


                        <div className="flex justify-between items-center w-full md:border border-gray-200 md:rounded-lg md:p-4 border-b pb-4" >
                            <div>
                                <p className="font-semibold text-lg">Featured</p>
                                <p className="text-sm text-muted-foreground pb-3">10min</p>
                                <p className="font-semibold text-sm">EGP 100</p>
                            </div>
                            <Button size={"icon"} className="font-semibold h-7 w-7 p-1 bg-muted rounded-lg shadow-none text-primary">
                                <Plus />
                            </Button>
                        </div>
                        <div className="flex justify-between items-center w-full md:border border-gray-200 md:rounded-lg md:p-4 border-b pb-4" >
                            <div>
                                <p className="font-semibold text-lg">Featured</p>
                                <p className="text-sm text-muted-foreground pb-3">10min</p>
                                <p className="font-semibold text-sm">EGP 100</p>
                            </div>
                            <Button size={"icon"} className="font-semibold h-7 w-7 p-1 bg-muted rounded-lg shadow-none text-primary">
                                <Plus />
                            </Button>
                        </div>
                        <div className="flex justify-between items-center w-full md:border border-gray-200 md:rounded-lg md:p-4 border-b pb-4" >
                            <div>
                                <p className="font-semibold text-lg">Featured</p>
                                <p className="text-sm text-muted-foreground pb-3">10min</p>
                                <p className="font-semibold text-sm">EGP 100</p>
                            </div>
                            <Button size={"icon"} className="font-semibold h-7 w-7 p-1 bg-muted rounded-lg shadow-none text-primary">
                                <Plus />
                            </Button>
                        </div>
                        <div className="flex justify-between items-center w-full md:border border-gray-200 md:rounded-lg md:p-4 border-b pb-4" >
                            <div>
                                <p className="font-semibold text-lg">Featured</p>
                                <p className="text-sm text-muted-foreground pb-3">10min</p>
                                <p className="font-semibold text-sm">EGP 100</p>
                            </div>
                            <Button size={"icon"} className="font-semibold h-7 w-7 p-1 bg-muted rounded-lg shadow-none text-primary">
                                <Plus />
                            </Button>
                        </div>
                        <div className="flex justify-between items-center w-full md:border border-gray-200 md:rounded-lg md:p-4 border-b pb-4" >
                            <div>
                                <p className="font-semibold text-lg">Featured</p>
                                <p className="text-sm text-muted-foreground pb-3">10min</p>
                                <p className="font-semibold text-sm">EGP 100</p>
                            </div>
                            <Button size={"icon"} className="font-semibold h-7 w-7 p-1 bg-muted rounded-lg shadow-none text-primary">
                                <Plus />
                            </Button>
                        </div>
                        <div className="flex justify-between items-center w-full md:border border-gray-200 md:rounded-lg md:p-4 border-b pb-4" >
                            <div>
                                <p className="font-semibold text-lg">Featured</p>
                                <p className="text-sm text-muted-foreground pb-3">10min</p>
                                <p className="font-semibold text-sm">EGP 100</p>
                            </div>
                            <Button size={"icon"} className="font-semibold h-7 w-7 p-1 bg-muted rounded-lg shadow-none text-primary">
                                <Plus />
                            </Button>
                        </div>
                        <div className="flex justify-between items-center w-full md:border border-gray-200 md:rounded-lg md:p-4 border-b pb-4" >
                            <div>
                                <p className="font-semibold text-lg">Featured</p>
                                <p className="text-sm text-muted-foreground pb-3">10min</p>
                                <p className="font-semibold text-sm">EGP 100</p>
                            </div>
                            <Button size={"icon"} className="font-semibold h-7 w-7 p-1 bg-muted rounded-lg shadow-none text-primary">
                                <Plus />
                            </Button>
                        </div>
                        <div className="flex justify-between items-center w-full md:border border-gray-200 md:rounded-lg md:p-4 border-b pb-4" >
                            <div>
                                <p className="font-semibold text-lg">Featured</p>
                                <p className="text-sm text-muted-foreground pb-3">10min</p>
                                <p className="font-semibold text-sm">EGP 100</p>
                            </div>
                            <Button size={"icon"} className="font-semibold h-7 w-7 p-1 bg-muted rounded-lg shadow-none text-primary">
                                <Plus />
                            </Button>
                        </div>
                        <div className="flex justify-between items-center w-full md:border border-gray-200 md:rounded-lg md:p-4 border-b pb-4" >
                            <div>
                                <p className="font-semibold text-lg">Featured</p>
                                <p className="text-sm text-muted-foreground pb-3">10min</p>
                                <p className="font-semibold text-sm">EGP 100</p>
                            </div>
                            <Button size={"icon"} className="font-semibold h-7 w-7 p-1 bg-muted rounded-lg shadow-none text-primary">
                                <Plus />
                            </Button>
                        </div>

                    </div>
                    <div id="Featured" className="flex flex-col gap-4">
                        {/* Featured */}
                        <h2 className="text-2xl md:text-3xl font-bold font-source-sans pb-3">Featured</h2>


                        <div className="flex justify-between items-center w-full md:border border-gray-200 md:rounded-lg md:p-4 border-b pb-4" >
                            <div>
                                <p className="font-semibold text-lg">Featured</p>
                                <p className="text-sm text-muted-foreground pb-3">10min</p>
                                <p className="font-semibold text-sm">EGP 100</p>
                            </div>
                            <Button size={"icon"} className="font-semibold h-7 w-7 p-1 bg-muted rounded-lg shadow-none text-primary">
                                <Plus />
                            </Button>
                        </div>

                    </div>
                    <div id="Featured" className="flex flex-col gap-4">
                        {/* Featured */}
                        <h2 className="text-2xl md:text-3xl font-bold font-source-sans pb-3">Featured</h2>


                        <div className="flex justify-between items-center w-full md:border border-gray-200 md:rounded-lg md:p-4 border-b pb-4" >
                            <div>
                                <p className="font-semibold text-lg">Featured</p>
                                <p className="text-sm text-muted-foreground pb-3">10min</p>
                                <p className="font-semibold text-sm">EGP 100</p>
                            </div>
                            <Button size={"icon"} className="font-semibold h-7 w-7 p-1 bg-muted rounded-lg shadow-none text-primary">
                                <Plus />
                            </Button>
                        </div>

                    </div>
                    <div id="Featured" className="flex flex-col gap-4">
                        {/* Featured */}
                        <h2 className="text-2xl md:text-3xl font-bold font-source-sans pb-3">Featured</h2>


                        <div className="flex justify-between items-center w-full md:border border-gray-200 md:rounded-lg md:p-4 border-b pb-4" >
                            <div>
                                <p className="font-semibold text-lg">Featured</p>
                                <p className="text-sm text-muted-foreground pb-3">10min</p>
                                <p className="font-semibold text-sm">EGP 100</p>
                            </div>
                            <Button size={"icon"} className="font-semibold h-7 w-7 p-1 bg-muted rounded-lg shadow-none text-primary">
                                <Plus />
                            </Button>
                        </div>

                    </div>
                    <div id="Featured" className="flex flex-col gap-4">
                        {/* Featured */}
                        <h2 className="text-2xl md:text-3xl font-bold font-source-sans pb-3">Featured</h2>


                        <div className="flex justify-between items-center w-full md:border border-gray-200 md:rounded-lg md:p-4 border-b pb-4" >
                            <div>
                                <p className="font-semibold text-lg">Featured</p>
                                <p className="text-sm text-muted-foreground pb-3">10min</p>
                                <p className="font-semibold text-sm">EGP 100</p>
                            </div>
                            <Button size={"icon"} className="font-semibold h-7 w-7 p-1 bg-muted rounded-lg shadow-none text-primary">
                                <Plus />
                            </Button>
                        </div>

                    </div>
                    <div id="Featured" className="flex flex-col gap-4">
                        {/* Featured */}
                        <h2 className="text-2xl md:text-3xl font-bold font-source-sans pb-3">Featured</h2>


                        <div className="flex justify-between items-center w-full md:border border-gray-200 md:rounded-lg md:p-4 border-b pb-4" >
                            <div>
                                <p className="font-semibold text-lg">Featured</p>
                                <p className="text-sm text-muted-foreground pb-3">10min</p>
                                <p className="font-semibold text-sm">EGP 100</p>
                            </div>
                            <Button size={"icon"} className="font-semibold h-7 w-7 p-1 bg-muted rounded-lg shadow-none text-primary">
                                <Plus />
                            </Button>
                        </div>

                    </div>
                    <div id="Featured" className="flex flex-col gap-4">
                        {/* Featured */}
                        <h2 className="text-2xl md:text-3xl font-bold font-source-sans pb-3">Featured</h2>


                        <div className="flex justify-between items-center w-full md:border border-gray-200 md:rounded-lg md:p-4 border-b pb-4" >
                            <div>
                                <p className="font-semibold text-lg">Featured</p>
                                <p className="text-sm text-muted-foreground pb-3">10min</p>
                                <p className="font-semibold text-sm">EGP 100</p>
                            </div>
                            <Button size={"icon"} className="font-semibold h-7 w-7 p-1 bg-muted rounded-lg shadow-none text-primary">
                                <Plus />
                            </Button>
                        </div>

                    </div>
                    <div id="Featured" className="flex flex-col gap-4">
                        {/* Featured */}
                        <h2 className="text-2xl md:text-3xl font-bold font-source-sans pb-3">Featured</h2>


                        <div className="flex justify-between items-center w-full md:border border-gray-200 md:rounded-lg md:p-4 border-b pb-4" >
                            <div>
                                <p className="font-semibold text-lg">Featured</p>
                                <p className="text-sm text-muted-foreground pb-3">10min</p>
                                <p className="font-semibold text-sm">EGP 100</p>
                            </div>
                            <Button size={"icon"} className="font-semibold h-7 w-7 p-1 bg-muted rounded-lg shadow-none text-primary">
                                <Plus />
                            </Button>
                        </div>

                    </div>
                    <div id="Featured" className="flex flex-col gap-4">
                        {/* Featured */}
                        <h2 className="text-2xl md:text-3xl font-bold font-source-sans pb-3">Featured</h2>


                        <div className="flex justify-between items-center w-full md:border border-gray-200 md:rounded-lg md:p-4 border-b pb-4" >
                            <div>
                                <p className="font-semibold text-lg">Featured</p>
                                <p className="text-sm text-muted-foreground pb-3">10min</p>
                                <p className="font-semibold text-sm">EGP 100</p>
                            </div>
                            <Button size={"icon"} className="font-semibold h-7 w-7 p-1 bg-muted rounded-lg shadow-none text-primary">
                                <Plus />
                            </Button>
                        </div>

                    </div>
                    <div id="Featured" className="flex flex-col gap-4">
                        {/* Featured */}
                        <h2 className="text-2xl md:text-3xl font-bold font-source-sans pb-3">Featured</h2>


                        <div className="flex justify-between items-center w-full md:border border-gray-200 md:rounded-lg md:p-4 border-b pb-4" >
                            <div>
                                <p className="font-semibold text-lg">Featured</p>
                                <p className="text-sm text-muted-foreground pb-3">10min</p>
                                <p className="font-semibold text-sm">EGP 100</p>
                            </div>
                            <Button size={"icon"} className="font-semibold h-7 w-7 p-1 bg-muted rounded-lg shadow-none text-primary">
                                <Plus />
                            </Button>
                        </div>

                    </div>
                    {/* <Separator className="md:hidden" /> */}

                    <div id="Hair" className="flex justify-between items-center w-full md:border border-gray-200 md:rounded-lg md:p-4" >
                        <div>
                            <p className="font-semibold">Hair Cut</p>
                            <p className="text-sm text-muted-foreground pb-3">30min</p>
                            <p className="font-semibold text-sm">EGP 150</p>
                        </div>

                        <Button size={"icon"} variant={"outline"} className="font-semibold">
                            <Plus size={6} />
                        </Button>
                    </div>

                    <div id="Beard" className="flex justify-between items-center w-full md:border border-gray-200 md:rounded-lg md:p-4" >
                        <div>
                            <p className="font-semibold">Beard Trim</p>
                            <p className="text-sm text-muted-foreground pb-3">20min</p>
                            <p className="font-semibold text-sm">EGP 80</p>
                        </div>

                        <Button size={"icon"} variant={"outline"} className="font-semibold">
                            <Plus size={6} />
                        </Button>
                    </div>

                    <div id="Facial" className="flex justify-between items-center w-full md:border border-gray-200 md:rounded-lg md:p-4" >
                        <div>
                            <p className="font-semibold">Basic Facial</p>
                            <p className="text-sm text-muted-foreground pb-3">45min</p>
                            <p className="font-semibold text-sm">EGP 200</p>
                        </div>

                        <Button size={"icon"} variant={"outline"} className="font-semibold">
                            <Plus size={6} />
                        </Button>
                    </div>
                </div>


            </div>

            <div className="col-span-1  relative hidden lg:block">
                <div className="sticky top-16 left-0 p-5 ">

                    <div className="border border-gray-200 rounded-lg p-5 space-y-4">

                        <div className=" sticky  bg-background  ">

                            <div className="flex justify-center items-start gap-4">

                                <div className="rounded-lg overflow-hidden basis-[100px]">
                                    <Image src={barberShop} alt="barber shop" className="object-cover " />
                                </div>
                                <div className="grow">
                                    <p className="font-semibold">Business Name</p>
                                    <p className="text-sm text-muted-foreground">Business Address</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 max-h-[500px] overflow-y-auto py-3">


                            <div className="flex justify-between items-start w-full  " >
                                <div>
                                    <p className="font-semibold text-lg">Featured</p>
                                    <p className="text-sm text-muted-foreground pb-3">10min</p>

                                </div>
                                <p className="font-semibold text-sm">EGP 100</p>
                            </div>
                            <div className="flex justify-between items-start w-full  " >
                                <div>
                                    <p className="font-semibold text-lg">Featured</p>
                                    <p className="text-sm text-muted-foreground pb-3">10min</p>

                                </div>
                                <p className="font-semibold text-sm">EGP 100</p>
                            </div>




                        </div>

                        <div className="sticky bottom-0 left-0 w-full bg-background py-3.5  flex flex-col  items-center border-t-1 ">

                            <div className="flex justify-between items-center w-full  " >
                                <p className="font-bold text-lg">Total</p>
                                <p className="font-semibold text-sm">EGP 100</p>
                            </div>

                            <div className="w-full">

                                <Button className="w-full mt-10">
                                    Continue
                                </Button>
                            </div>

                        </div>



                    </div>
                </div>
            </div>
        </div>
    </div>;
}