import Image from "next/image"
import barberShop1 from "@/../public/barber-shop-1.jpg";
import HeroFilterField from "./hero-filter-field";

export default function HeroSection() {
    return (
        <section className=" px-5 md:px-7 py-36  lg:py-52 grid justify-center  relative items-center">

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
                <h1 className="text-4xl  lg:text-7xl font-black text-start sm:text-start tracking-tight font-libre-bodoni scale-y-110 text-white">
                    Schedule local salon and wellness services
                </h1>

                <HeroFilterField />

            </div>
        </section>
    )
}