import Image from "next/image";
import NavBar from "../ui/components/custom/nav-bar";
import { Combobox } from "../ui/components/combo-box";
import { Button } from "../ui/components/custom/button";
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { Separator } from "../ui/components/separator";
import barberShop1 from "@/../public/barber-shop-1.jpg";
import { ShopCard } from "../ui/components/shop-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/ui/components/carousel"
import { Award, HandPlatter, CalendarCheck2, ShieldCheck, Sparkles, Star } from 'lucide-react';
import HeroSection from "./components/hero-section";

import { Card, CardContent } from "@/ui/components/card"

export default function Home() {
  return (
    <>
      <main className="overflow-x-hidden">

        {/* Nav bar */}
        <NavBar />

        <HeroSection />

        {/* Gray section under hero section */}
        <section className="px-5 mb-10 md:mb-16 md:px-7 bg-gray-100 h-20 md:h-24 flex items-center text-center justify-center text-xs md:text-base">
          <p className=" ">Beauty on your schedule. Explore local salons and spas with ease.</p>

        </section>

        {/* Apply you business now section */}
        <section className="px-5 md:px-7 mb-16 md:mb-20 py-6 text-center text-lg md:text-2xl">
          <p className=" ">Want you business on <span className="font-lora font-bold">Lumière</span>? <span className="font-bold underline decoration-2 text-nowrap">Apply now</span></p>
        </section>

        <section className="px-5 md:px-7 mb-20 md:mb-24 space-y-12 md:space-y-16">

          {/* Recently viewed section */}
          <section className="  ">

            <div className="max-w-[1440px] m-auto space-y-4">

              <h1 className="font-semibold font-montserrat text-left text-2xl md:text-3xl ">Recently viewed</h1>
              <div className=" ">

                {/* <div className="grid grid-flow-col auto-cols-max gap-4 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory md:hidden">
                <ShopCard className="scroll-ml-6 snap-start" />
                <ShopCard className="scroll-ml-6 snap-start" />
                <ShopCard className="scroll-ml-6 snap-start" />
                <ShopCard className="scroll-ml-6 snap-start" />
                <ShopCard className="scroll-ml-6 snap-start" />
                <ShopCard className="scroll-ml-6 snap-start" />
                <ShopCard className="scroll-ml-6 snap-start" />
                <ShopCard className="scroll-ml-6 snap-start" />
                <ShopCard className="scroll-ml-6 snap-start" />
                <ShopCard className="scroll-ml-6 snap-start" />
                <ShopCard className="scroll-ml-6 snap-start" />
                <ShopCard className="scroll-ml-6 snap-start" />
                <ShopCard className="scroll-ml-6 snap-start" />

              </div> */}


                <Carousel className="w-full " opts={{ breakpoints: { '(min-width: 768px)': { slidesToScroll: 3 }, '(min-width: 1024px)': { slidesToScroll: 4 } } }}>
                  <CarouselContent >
                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>
                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>
                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>
                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>
                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>
                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>
                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>

              </div>

            </div>


          </section>

          {/* Recommended section */}
          <section className="  ">

            <div className="max-w-[1440px] m-auto space-y-4">

              <h1 className="font-semibold font-montserrat text-left text-2xl md:text-3xl ">Recommended</h1>
              <div className=" ">

                {/* <div className="grid grid-flow-col auto-cols-max gap-4 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory md:hidden">
                <ShopCard className="scroll-ml-6 snap-start" />
                <ShopCard className="scroll-ml-6 snap-start" />
                <ShopCard className="scroll-ml-6 snap-start" />
                <ShopCard className="scroll-ml-6 snap-start" />
                <ShopCard className="scroll-ml-6 snap-start" />
                <ShopCard className="scroll-ml-6 snap-start" />
                <ShopCard className="scroll-ml-6 snap-start" />
                <ShopCard className="scroll-ml-6 snap-start" />
                <ShopCard className="scroll-ml-6 snap-start" />
                <ShopCard className="scroll-ml-6 snap-start" />
                <ShopCard className="scroll-ml-6 snap-start" />
                <ShopCard className="scroll-ml-6 snap-start" />
                <ShopCard className="scroll-ml-6 snap-start" />

              </div> */}


                <Carousel className="w-full " opts={{ breakpoints: { '(min-width: 768px)': { slidesToScroll: 3 }, '(min-width: 1024px)': { slidesToScroll: 4 } } }}>
                  <CarouselContent >
                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>
                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>
                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>
                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>
                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>
                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>
                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>

              </div>

            </div>


          </section>

          {/* New to Lumière section */}
          <section className="  ">

            <div className="max-w-[1440px] m-auto space-y-4">

              <h1 className="font-semibold font-montserrat text-left text-2xl md:text-3xl ">New to <span className="font-lora text-3xl md:text-4xl font-bold">Lumière</span></h1>
              <div className=" ">

                {/* <div className="grid grid-flow-col auto-cols-max gap-4 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory md:hidden">
                <ShopCard className="scroll-ml-6 snap-start" />
                <ShopCard className="scroll-ml-6 snap-start" />
                <ShopCard className="scroll-ml-6 snap-start" />
                <ShopCard className="scroll-ml-6 snap-start" />
                <ShopCard className="scroll-ml-6 snap-start" />
                <ShopCard className="scroll-ml-6 snap-start" />
                <ShopCard className="scroll-ml-6 snap-start" />
                <ShopCard className="scroll-ml-6 snap-start" />
                <ShopCard className="scroll-ml-6 snap-start" />
                <ShopCard className="scroll-ml-6 snap-start" />
                <ShopCard className="scroll-ml-6 snap-start" />
                <ShopCard className="scroll-ml-6 snap-start" />
                <ShopCard className="scroll-ml-6 snap-start" />

              </div> */}


                <Carousel className="w-full " opts={{ breakpoints: { '(min-width: 768px)': { slidesToScroll: 3 }, '(min-width: 1024px)': { slidesToScroll: 4 } } }}>
                  <CarouselContent >
                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>
                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>
                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>
                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>
                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>
                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>
                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>

              </div>

            </div>


          </section>

          {/* Trending section */}
          <section className="  ">

            <div className="max-w-[1440px] m-auto space-y-4">

              <h1 className="font-semibold font-montserrat text-left text-2xl md:text-3xl ">Trending</h1>
              <div className=" ">

                {/* <div className="grid grid-flow-col auto-cols-max gap-4 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory md:hidden">
                <ShopCard className="scroll-ml-6 snap-start" />
                <ShopCard className="scroll-ml-6 snap-start" />
                <ShopCard className="scroll-ml-6 snap-start" />
                <ShopCard className="scroll-ml-6 snap-start" />
                <ShopCard className="scroll-ml-6 snap-start" />
                <ShopCard className="scroll-ml-6 snap-start" />
                <ShopCard className="scroll-ml-6 snap-start" />
                <ShopCard className="scroll-ml-6 snap-start" />
                <ShopCard className="scroll-ml-6 snap-start" />
                <ShopCard className="scroll-ml-6 snap-start" />
                <ShopCard className="scroll-ml-6 snap-start" />
                <ShopCard className="scroll-ml-6 snap-start" />
                <ShopCard className="scroll-ml-6 snap-start" />

              </div> */}


                <Carousel className="w-full " opts={{ breakpoints: { '(min-width: 768px)': { slidesToScroll: 3 }, '(min-width: 1024px)': { slidesToScroll: 4 } } }}>
                  <CarouselContent >
                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>
                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>
                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>
                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>
                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>
                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>
                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                    <CarouselItem className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                      <ShopCard />
                    </CarouselItem>

                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>

              </div>

            </div>


          </section>

        </section>

        {/* Features/benefits section */}
        <section className="px-5 md:px-7  mb-16">
          <div className="max-w-[1440px] m-auto ">

            <h1 className="font-semibold font-montserrat text-left text-2xl md:text-3xl pb-16">
              The <span className="font-lora text-3xl md:text-4xl font-bold">Lumière</span> difference
            </h1>

            <h2 className="font-montserrat font-bold text-xl pb-11 lg:pb-7">For business owners</h2>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">

              <div className="flex flex-col gap-1 items-start justify-center">
                <Award className="size-9 mb-3" />
                <h3 className="font-bold text-lg">Advanced Booking Management</h3>
                <p className="leading-tight">Effortlessly track and manage appointments, cancellations, and client details.</p>
              </div>
              <div className="flex flex-col gap-1 items-start justify-center">
                <HandPlatter className="size-9 mb-3" />
                <h3 className="font-bold text-lg">Free Slot Optimization</h3>
                <p className="leading-tight">Maximize bookings by efficiently displaying open slots to customers.</p>
              </div>
              <div className="flex flex-col gap-1 items-start justify-center">
                <CalendarCheck2 className="size-9 mb-3" />
                <h3 className="font-bold text-lg">Service Management</h3>
                <p className="leading-tight">Add, edit, and organize your offerings to ensure clients see exactly what you provide.</p>
              </div>

            </div>
            <Separator className="w-[50vw] max-w-[370px] m-auto my-16 lg:my-10"></Separator>

            <h2 className="font-montserrat font-bold text-xl pb-11 lg:pb-7">For customers</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-16">

              <div className="flex flex-col gap-1 items-start justify-center">
                <ShieldCheck className="size-9 mb-3" />
                <h3 className="font-bold text-lg">Simple Booking Interface</h3>
                <p className="leading-tight">Find and book beauty and wellness services in just a few clicks.</p>
              </div>
              <div className="flex flex-col gap-1 items-start justify-center">
                <Sparkles className="size-9 mb-3" />
                <h3 className="font-bold text-lg">Real-Time Availability</h3>
                <p className="leading-tight">View updated schedules and available slots instantly.</p>
              </div>
              <div className="flex flex-col gap-1 items-start justify-center">
                <Star className="size-9 mb-3" />
                <h3 className="font-bold text-lg">Personalized Experience</h3>
                <p className="leading-tight">Discover services tailored to your preferences and needs.</p>
              </div>

            </div>

          </div>
        </section>

      </main >

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </>
  );
}
