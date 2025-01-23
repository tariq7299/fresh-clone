"use client"

import { useScrollspy } from "@/lib/hooks/use-scroll-spy";
import { cn } from "@/lib/utils/utils";
import { Button } from "@/ui/components/custom/button";
import { ScrollArea, ScrollBar } from "@/ui/components/scroll-area"
import { useState, useEffect } from "react"
import ScrollSpy from 'react-scrollspy-navigation';
import { Plus } from 'lucide-react';
import { Separator } from "@/ui/components/separator";


export default function BookingPage() {

    const tabTitles = ["Featured", "Hair", "Beard", "Facial", "Massage", "Manicure", "Pedicure", "Waxing", "Threading", "Body Treatment", "Spa Package", "Makeup", "Tanning", "Color Treatment", "Hair Treatment"]


    return <div className="w-full max-w-6xl p-5 py-24 min-h-dvh  mx-auto space-y-8 pb-20" >
        <div className=" grid grid-cols-1 md:grid-cols-3 md:grid-rows-2  gap-6">
            <div className="col-span-2 row-span-2" >

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

                <div className="grid grid-cols-1 justify-items-stretch gap-8 md:gap-3 w-full py-6" >

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
        </div>
    </div>;
}