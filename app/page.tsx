import Image from "next/image";
import NavBar from "./ui/components/custom/nav-bar";
import { Combobox } from "./ui/components/combo-box";
import { Button } from "./ui/components/custom/button";
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { Separator } from "./ui/components/separator";
import barberShop1 from "@/../public/barber-shop-1.jpg";
import { ShopCard } from "./ui/components/shop-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/ui/components/carousel"

import { Card, CardContent } from "@/ui/components/card"

export default function Home() {
  return (
    <>
      <main className="">
        <NavBar />

        <section className=" px-5 md:px-7 pb-14 md:pb-48 grid justify-center relative ">

          {/* To make nextJs understand that this image is a local image you need to import it (at the top of the file) */}
          <Image
            src={barberShop1}
            alt="Picture of the author"
            // With local images you don't need to provide the width and height
            // width={1920}
            // height={1200}
            fill={true}
            className="brightness-50  object-cover"
          />


          <div className="max-w-xl lg:max-w-2xl mt-28 lg:mt-36 relative ">
            <h1 className="text-4xl  lg:text-6xl font-black text-start sm:text-start tracking-tight font-libre-bodoni scale-y-110 text-white">
              Schedule local salon and wellness appointments
            </h1>

            <div>

              {/* Write types */}
              <div className="flex gap-2 p-1.5 border rounded-lg justify-between mt-8 lg:mt-16 items-center bg-white  ">

                <Combobox triggerClassName={"border-0 w-full z-10"} triggerIcon={null} labelClassName={"font-semibold"} popoverClassName={"w-[200px] sm:w-[400px]"} />

                <div className="self-stretch">
                  <Separator className=" me-1 h-full" orientation="vertical" />
                </div>


                <Button variant="default" className="inline-flex gap-2 items-center h-8 rounded-md px-3 2xs:h-10 2xs:px-8"> <MagnifyingGlassIcon className="size-6" /> Search </Button>

              </div>
            </div>

          </div>
        </section>


        <section className="px-5 mb-10 md:mb-12 md:px-7 bg-gray-100 h-20 md:h-24 flex items-center text-center justify-center text-xs md:text-base">
          <p className=" ">Beauty on your schedule. Explore local salons and spas with ease.</p>

        </section>

        <section className="px-5 md:px-7 mb-16 md:mb-20 py-6 text-center text-lg md:text-2xl">
          <p className=" ">Want you business on <span className="font-lora font-bold">Lumière</span>? <span className="font-bold underline decoration-2 text-nowrap">Apply now</span></p>
        </section>


        <section className="px-5 md:px-7  mb-16">

          <div className="max-w-[1440px] m-auto space-y-3">

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

        <section className="px-5 md:px-7  mb-16">

          <div className="max-w-[1440px] m-auto space-y-3">

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

        <section className="px-5 md:px-7  mb-16">

          <div className="max-w-[1440px] m-auto space-y-3">

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
        <section className="px-5 md:px-7  mb-16">

          <div className="max-w-[1440px] m-auto space-y-3">

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
                <CarouselPrevious size={"lg"} />
                <CarouselNext size={"lg"} />
              </Carousel>

            </div>

          </div>


        </section>

      </main >
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </>
  );
}
