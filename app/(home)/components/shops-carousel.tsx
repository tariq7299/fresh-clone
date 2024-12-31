"use client"

import { ShopCard } from "@/ui/components/shop-card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/ui/components/carousel"
import { useId } from "react";


export default function ShopsCarousel({ sectionTitle = (<h1 className="font-semibold font-montserrat text-left text-2xl md:text-3xl "></h1>) }) {

    const id = useId()

    return (
        <section className="  ">

            <div className="max-w-[1440px] m-auto space-y-4">

                {/* <h1 className="font-semibold font-montserrat text-left text-2xl md:text-3xl ">{sectionTitle}</h1> */}
                {sectionTitle}

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
                            {Array.from({ length: 12 }, (_, i) =>
                                <CarouselItem key={`${id}+${i}`} className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                                    <ShopCard />
                                </CarouselItem>
                            )}


                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>

                </div>

            </div>


        </section>
    )
}