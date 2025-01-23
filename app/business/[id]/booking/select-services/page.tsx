"use client"

import { cn } from "@/lib/utils/utils";
import { Button } from "@/ui/components/custom/button";
import { RefObject } from "react"
import ScrollSpy from 'react-scrollspy-navigation';
import { Plus, Check } from 'lucide-react';
import Image from "next/image";
import barberShop from "@/../public/barber-shop-2.jpg"
import { useRef, createRef } from "react";

export default function BookingPage() {

    const tabTitles = ["Featured", "Hair", "Beard", "Facial", "Massage", "Manicure", "Pedicure", "Waxing", "Threading", "Body Treatment", "Spa Package", "Makeup", "Tanning", "Color Treatment", "Hair Treatment"]

    const tabsRefs = useRef<RefObject<HTMLAnchorElement | null>[]>(Array.from({ length: tabTitles.length }, () => createRef()));

    const onChangeActiveId = (current: string, prev: string) => {
        const element = tabsRefs.current.find(ref => ref.current?.innerText === current)?.current
        const container = element?.parentElement;
        const offsetLeft = element?.offsetLeft; // Element's position within the container
        console.log("offsetLeft", offsetLeft)
        container?.scrollTo({
            left: offsetLeft,
            behavior: "smooth",
        });
    }

    return <>


        <h1 className="text-4xl md:text-5xl font-bold font-source-sans">Select services</h1>

        {/* Services categories tabs */}
        <nav className="w-full bg-background sticky top-16 left-0">
            <ScrollSpy onChangeActiveId={onChangeActiveId} activeClass="nav-active" activeAttr={true} offsetTop={0} offsetLeft={0} >
                <div className="flex gap-2 py-4 w-full whitespace-nowrap relative overflow-x-auto">
                    {tabTitles.map((title, index) => (
                        <a href={`#${title}`} className={cn(" px-4 py-2 rounded-full font-bold  text-foreground", "data-[active=true]:bg-foreground data-[active=true]:text-background hover:bg-muted  ")} key={title} ref={tabsRefs.current[index]}>{title}</a>
                    ))}
                </div>
                <div className="absolute bottom-0 right-0 w-20 h-full  bg-gradient-to-l from-background to-transparent"></div>
            </ScrollSpy>
        </nav>

        <div className="grid grid-cols-1 justify-items-stretch gap-8 md:gap-3 w-full py-6 space-y-8">

            <div id="Featured" className="flex flex-col gap-4">
                {/* Featured */}
                <h2 className="text-2xl md:text-3xl font-bold font-source-sans pb-3">Featured</h2>


                <div className="flex justify-between items-center w-full md:border border-gray-200 md:rounded-lg md:p-5 border-b pb-4 ring-2 ring-accent bg-accent/5 text-accent-700 transition-colors duration-200 cursor-pointer hover:bg-accent/10" >
                    <div>
                        <p className="font-semibold text-lg">Featured</p>
                        <p className="text-sm text-muted-foreground pb-3">10min</p>
                        <p className="font-semibold text-sm">EGP 100</p>
                    </div>
                    <Button size={"icon"} className="font-semibold h-7 w-7 p-1  rounded-lg shadow-none text-background bg-accent transition-colors duration-200">
                        <Check />
                    </Button>
                </div>
                <div className="flex justify-between items-center w-full md:border border-gray-200 md:rounded-lg md:p-5 border-b pb-4 cursor-pointer hover:bg-accent/10 group" >
                    <div>
                        <p className="font-semibold text-lg">Featured</p>
                        <p className="text-sm text-muted-foreground pb-3">10min</p>
                        <p className="font-semibold text-sm">EGP 100</p>
                    </div>
                    <Button size={"icon"} className="font-semibold h-7 w-7 p-1 bg-muted rounded-lg shadow-none text-primary  group-hover:bg-accent/10">
                        <Plus />
                    </Button>
                </div>
                <div className="flex justify-between items-center w-full md:border border-gray-200 md:rounded-lg md:p-5 border-b pb-4" >
                    <div>
                        <p className="font-semibold text-lg">Featured</p>
                        <p className="text-sm text-muted-foreground pb-3">10min</p>
                        <p className="font-semibold text-sm">EGP 100</p>
                    </div>
                    <Button size={"icon"} className="font-semibold h-7 w-7 p-1 bg-muted rounded-lg shadow-none text-primary">
                        <Plus />
                    </Button>
                </div>
                <div className="flex justify-between items-center w-full md:border border-gray-200 md:rounded-lg md:p-5 border-b pb-4" >
                    <div>
                        <p className="font-semibold text-lg">Featured</p>
                        <p className="text-sm text-muted-foreground pb-3">10min</p>
                        <p className="font-semibold text-sm">EGP 100</p>
                    </div>
                    <Button size={"icon"} className="font-semibold h-7 w-7 p-1 bg-muted rounded-lg shadow-none text-primary">
                        <Plus />
                    </Button>
                </div>
                <div className="flex justify-between items-center w-full md:border border-gray-200 md:rounded-lg md:p-5 border-b pb-4" >
                    <div>
                        <p className="font-semibold text-lg">Featured</p>
                        <p className="text-sm text-muted-foreground pb-3">10min</p>
                        <p className="font-semibold text-sm">EGP 100</p>
                    </div>
                    <Button size={"icon"} className="font-semibold h-7 w-7 p-1 bg-muted rounded-lg shadow-none text-primary">
                        <Plus />
                    </Button>
                </div>
                <div className="flex justify-between items-center w-full md:border border-gray-200 md:rounded-lg md:p-5 border-b pb-4" >
                    <div>
                        <p className="font-semibold text-lg">Featured</p>
                        <p className="text-sm text-muted-foreground pb-3">10min</p>
                        <p className="font-semibold text-sm">EGP 100</p>
                    </div>
                    <Button size={"icon"} className="font-semibold h-7 w-7 p-1 bg-muted rounded-lg shadow-none text-primary">
                        <Plus />
                    </Button>
                </div>
                <div className="flex justify-between items-center w-full md:border border-gray-200 md:rounded-lg md:p-5 border-b pb-4" >
                    <div>
                        <p className="font-semibold text-lg">Featured</p>
                        <p className="text-sm text-muted-foreground pb-3">10min</p>
                        <p className="font-semibold text-sm">EGP 100</p>
                    </div>
                    <Button size={"icon"} className="font-semibold h-7 w-7 p-1 bg-muted rounded-lg shadow-none text-primary">
                        <Plus />
                    </Button>
                </div>
                <div className="flex justify-between items-center w-full md:border border-gray-200 md:rounded-lg md:p-5 border-b pb-4" >
                    <div>
                        <p className="font-semibold text-lg">Featured</p>
                        <p className="text-sm text-muted-foreground pb-3">10min</p>
                        <p className="font-semibold text-sm">EGP 100</p>
                    </div>
                    <Button size={"icon"} className="font-semibold h-7 w-7 p-1 bg-muted rounded-lg shadow-none text-primary">
                        <Plus />
                    </Button>
                </div>
                <div className="flex justify-between items-center w-full md:border border-gray-200 md:rounded-lg md:p-5 border-b pb-4" >
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
            <div id="Hair" className="flex flex-col gap-4">
                {/* Hair */}
                <h2 className="text-2xl md:text-3xl font-bold font-source-sans pb-3">Hair</h2>


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
            <div id="Beard" className="flex flex-col gap-4">
                {/* Beard */}
                <h2 className="text-2xl md:text-3xl font-bold font-source-sans pb-3">Beard</h2>


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
            <div id="Facial" className="flex flex-col gap-4">
                {/* Facial */}
                <h2 className="text-2xl md:text-3xl font-bold font-source-sans pb-3">Facial</h2>


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
            <div id="Massage" className="flex flex-col gap-4">
                {/* Massage */}
                <h2 className="text-2xl md:text-3xl font-bold font-source-sans pb-3">Massage</h2>


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






        </div>



    </>;
}