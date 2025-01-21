"use client"

import { ShopCard } from "@/ui/components/custom/shop-card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/ui/components/carousel"
import { useId } from "react";


export default function ShopsCarousel({ data, sectionTitle = (<h1 className="font-semibold font-source-sans text-left text-2xl md:text-3xl "></h1>) }: { data: any, sectionTitle?: React.ReactNode }) {

    const id = useId()

    console.log("data", data)

    if (!data || data.length === 0) return null

    return (
        <section className="  ">

            <div className="max-w-[1440px] m-auto space-y-3">

                {/* <h1 className="font-semibold font-source-sans text-left text-2xl md:text-3xl ">{sectionTitle}</h1> */}
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
                            {data.map((item: any, i: number) =>
                                <CarouselItem key={`${id}+${i}`} className="xs:basis-1/2   md:basis-1/4 lg:basis-1/4 xl:base-1/5">
                                    <ShopCard item={item} />
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