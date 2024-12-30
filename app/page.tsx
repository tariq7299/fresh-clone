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

        <section className=" p-5 pb-14 md:pb-48 grid justify-center relative ">

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


          <div className="max-w-xl lg:max-w-2xl mt-24 lg:mt-36 relative ">
            <h1 className="text-4xl  lg:text-6xl font-black text-start sm:text-start tracking-tight font-libre-bodoni scale-y-110 text-white">
              Schedule local salon and wellness appointments
            </h1>

            <div>

              {/* Write types */}
              <div className="flex gap-2 p-1.5 border rounded-lg justify-between mt-8 lg:mt-16 items-center bg-white  ">

                {/* Repace this compnent with "./ui/components/custom/combo-box" */}
                <Combobox triggerClassName={"border-0 w-full z-10"} triggerIcon={null} labelClassName={"font-semibold"} popoverClassName={"w-[200px] sm:w-[400px]"} />

                <div className="self-stretch">
                  <Separator className=" me-1 h-full" orientation="vertical" />
                </div>


                <Button variant="default" className="inline-flex gap-2 items-center h-8 rounded-md px-3 2xs:h-10 2xs:px-8"> <MagnifyingGlassIcon className="size-6" /> Search </Button>

              </div>
            </div>

          </div>
        </section>


        <section className="p-5 bg-gray-100 h-20 md:h-24 flex items-center text-center justify-center text-xs md:text-base">
          <p className=" ">Beauty on your schedule. Explore local salons and spas with ease.</p>

        </section>

        <section className="p-5 py-14 text-center text-lg md:text-2xl">
          <p className=" ">Want you business on Lumière? <span className="font-bold underline decoration-2 text-nowrap">Apply now</span></p>
        </section>


        {/* <section className="p-4 py-14 space-y-2">
          <h1 className="font-bold font-montserrat text-left ">Recently Viewed</h1>
          <div className="grid grid-flow-col auto-cols-max gap-4 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory">
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

          </div>


        </section> */}

        <section className="p-5 px-7 py-14 space-y-2">
          <h1 className="font-bold font-montserrat text-left ">Recently Viewed</h1>
          <div className="">

            <Carousel className="w-full ">

              <CarouselContent>
                <CarouselItem className=" md:basis-1/3 lg:basis-1/4">
                  <ShopCard />
                </CarouselItem>
                <CarouselItem className=" md:basis-1/3 lg:basis-1/4">
                  <ShopCard />
                </CarouselItem>
                <CarouselItem className=" md:basis-1/3 lg:basis-1/4">
                  <ShopCard />
                </CarouselItem>
                <CarouselItem className=" md:basis-1/3 lg:basis-1/4">
                  <ShopCard />
                </CarouselItem>
                <CarouselItem className=" md:basis-1/3 lg:basis-1/4">
                  <ShopCard />
                </CarouselItem>
                <CarouselItem className=" md:basis-1/3 lg:basis-1/4">
                  <ShopCard />
                </CarouselItem>
                <CarouselItem className=" md:basis-1/3 lg:basis-1/4">
                  <ShopCard />
                </CarouselItem>




              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>

          </div>


        </section>
        <div className="px-12">

          <Carousel className="w-full max-w-xs ">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-4xl font-semibold">{index + 1}</span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

        </div>


      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </>
  );
}
