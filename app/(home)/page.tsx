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
import ShopsCarousel from "./components/shops-carousel";
import { Card, CardContent } from "@/ui/components/card"
import FeaturesSection from "./components/features-section";
import avatar1 from "@/../public/avatar1.png";
import ChangingAvatar from "./components/changing-avatar";

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
        <section className="px-5 md:px-7 mb-16 md:mb-20 py-6 text-center text-xl md:text-2xl">
          <p className=" ">Want you business on <span className="font-lora font-bold">Lumière</span>? <span className="font-bold underline decoration-2 text-nowrap">Apply now</span></p>
        </section>

        {/*Shops Carousels  */}
        <section className="px-5 md:px-7 mb-20 md:mb-24 space-y-12 md:space-y-16">

          {/* Recently viewed section */}
          <ShopsCarousel sectionTitle={(<h1 className="font-semibold font-montserrat text-left text-2xl md:text-3xl ">Recently viewed</h1>)} />

          {/* Recommended section */}
          <ShopsCarousel sectionTitle={(<h1 className="font-semibold font-montserrat text-left text-2xl md:text-3xl ">Recommended</h1>)} />

          {/* New to Lumière section */}
          <ShopsCarousel sectionTitle={(<h1 className="font-semibold font-montserrat text-left text-2xl md:text-3xl ">New to <span className="font-lora text-3xl md:text-4xl font-bold">Lumière</span></h1>)} />

          {/* Trending section */}
          <ShopsCarousel sectionTitle={(<h1 className="font-semibold font-montserrat text-left text-2xl md:text-3xl ">Trending</h1>)} />

        </section>

        {/* Features/benefits section */}
        <FeaturesSection />

        {/*  */}
        <section className="px-5 md:px-7 mb-16 md:mb-20 py-6 text-center text-lg md:text-2xl">
          <div className="max-w-[1440px] m-auto ">


            <h1 className="text-center text-3xl font-montserrat font-semibold pb-16">Express Yourself with a Fresh Look!</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 ">
              <ChangingAvatar />
              <ChangingAvatar />
              <ChangingAvatar />
              <ChangingAvatar className="hidden md:block" />
              <ChangingAvatar className="hidden md:block" />
              <ChangingAvatar className="hidden md:block" />
            </div>
          </div>

        </section>


      </main >

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </>
  );
}
