
import NavBar from "../ui/components/custom/nav-bar";
import { Button } from "../ui/components/custom/button";
import HeroSection from "./_components/hero-section";
import ShopsCarousel from "../ui/components/custom/shops-carousel";
import FeaturesSection from "./_components/features-section";
import ChangingAvatar from "./_components/changing-avatar";
import { Badge } from "@/ui/components/badge";
import Image from "next/image";
import appleLogo from "@/../public/apple-logo.svg.png";
import googleLogo from "@/../public/google-logo.png";
import { GlobeAsiaAustraliaIcon } from "@heroicons/react/24/outline";
import { RecommendedBusinesses } from "./_components/recommended-businesses";
import NewBusinesses from "./_components/new-businesses";
import TrendingBusinesses from "./_components/trending-businesses";
import { ShopsCarouselSkeleton } from "./_components/skeletons";
import { Suspense } from "react";
import { NavBarSkeleton } from "./_components/skeletons";
import Footer from "../ui/components/custom/footer";

export default function Home() {
  return (
    <>
      <div className="overflow-x-hidden">

        {/* Nav bar */}
        <Suspense fallback={<NavBarSkeleton />}>
          <NavBar />
        </Suspense>

        <section className="px-5 md:px-7 py-36 lg:py-52 grid justify-center  relative items-center">
          <HeroSection />
        </section>

        {/* Gray section under hero section */}
        <section className="px-5 mb-10 md:mb-16 md:px-7 bg-secondary-100 h-20 md:h-24 flex items-center text-center justify-center text-xs md:text-base">
          <p className=" ">Beauty on your schedule. Explore local salons and spas with ease.</p>

        </section>

        {/* Apply you business now section */}
        <section className="px-5 md:px-7 mb-16 md:my-32 text-center text-xl md:text-2xl">
          <p className=" ">Want your business on <span className="font-lora font-bold">Lumière</span>? <span className="font-bold underline decoration-2 text-nowrap">Apply now</span></p>
        </section>

        {/*Shops Carousels  */}
        <section className="px-5 md:px-7 mb-20 md:mb-36 space-y-12 md:space-y-16">

          {/* Recently viewed section */}
          {/* <ShopsCarousel sectionTitle={(<h1 className="font-semibold font-source-sans text-left text-3xl  ">Recently viewed</h1>)} /> */}

          <Suspense fallback={<ShopsCarouselSkeleton />}>
            {/* Recommended section */}
            <RecommendedBusinesses />
          </Suspense>

          {/* New to Lumière section */}
          <Suspense fallback={<ShopsCarouselSkeleton />}>
            <NewBusinesses />
          </Suspense>

          {/* Trending section */}
          <Suspense fallback={<ShopsCarouselSkeleton />}>
            <TrendingBusinesses />
          </Suspense>


        </section>


        <section className=" px-5 md:px-7 mb-16 md:mb-36 text-center ">
          <div className="bg-background  max-w-[1440px] m-auto  rounded-xl   flex flex-col justify-center items-center gap-2">

            <h1 className="font-libre-bodoni lg:text-5xl font-bold text-primary text-center text-4xl">Looking good has never been this convenient!</h1>

            <h2 className="text-primary pb-5">Your next appointment is waiting. Tap to book now!</h2>


            <Button size="lg" variant="accent" className="">Book a service</Button>
            <p className="text-xs  text-muted-foreground pb-6 md:pb-10">No credit card required</p>

            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-24 ">
              <ChangingAvatar className="" />
              <ChangingAvatar className="hidden md:block" />
              <ChangingAvatar className="hidden md:block" />
            </div>

          </div>
        </section>


        <section className="px-5 md:px-7  mb-36">
          {/* Features/benefits section */}
          <FeaturesSection />
        </section>


      </div >

      <Footer />

    </>
  );
}
