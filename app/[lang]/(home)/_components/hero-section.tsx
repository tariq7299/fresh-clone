import Image from "next/image"
import barberShop1 from "@/../public/barber-shop-1.jpg";
import HeroFilterField from "./hero-filter-field";
import HeroFilter from "./hero-filter";
import { Suspense } from "react";
import { getDictionary } from "@/_lib/dictionaries";

export default async function HeroSection({
    lang
}: {
    lang: 'en' | 'ar'
}) {

    const dict = await getDictionary(lang)

    return (
        <>

            {/* To make nextJs understand that this image is a local image you need to import it (at the top of the file) */}
            <Image
                src={barberShop1}
                alt="Barber shop picture"

                // With local images you don't need to provide the width and height
                // width={1920}
                // height={1200}

                // This will ensure that the images are prioritized for loading, which can help improve the Largest Contentful Paint (LCP) metric.
                priority={true} // Add this line
                fill={true}
                className="brightness-50  object-cover"
            />


            <div className="max-w-xl lg:max-w-2xl relative ">
                <h1 className={`text-4xl  lg:text-7xl font-black text-start sm:text-start tracking-tight font-libre-bodoni scale-y-110 text-white ${lang === 'ar' ? 'font-arabic' : ''}`}>
                    {/* Schedule local salon and wellness services */}
                    {dict.home.hero.title}
                </h1>

                {/* <HeroFilterField /> */}

                <Suspense fallback={
                    <div className="flex gap-3 lg:gap-2 border rounded-lg justify-between mt-8 lg:mt-16 items-center bg-white flex-col lg:flex-row p-3 lg:p-1.5">
                        <div className="w-full lg:w-1/3 h-12 bg-gray-200 animate-pulse rounded-md"></div>
                        <div className="hidden lg:block h-6 w-px bg-gray-200"></div>
                        <div className="w-full lg:w-1/2 h-12 bg-gray-200 animate-pulse rounded-md"></div>
                        <div className="w-full lg:w-auto h-12 bg-gray-200 animate-pulse rounded-md px-8"></div>
                    </div>
                }>
                    <HeroFilter lang={lang} />
                </Suspense>

            </div>
        </>
    )
}