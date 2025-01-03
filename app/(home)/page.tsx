
import NavBar from "../ui/components/custom/nav-bar";
import { Button } from "../ui/components/custom/button";
import HeroSection from "./components/hero-section";
import ShopsCarousel from "./components/shops-carousel";
import FeaturesSection from "./components/features-section";
import ChangingAvatar from "./components/changing-avatar";
import { Badge } from "@/ui/components/badge";
import Image from "next/image";
import appleLogo from "@/../public/apple-logo.svg.png";
import googleLogo from "@/../public/google-logo.png";
import { Earth } from 'lucide-react';

export default function Home() {
  return (
    <>
      <main className="overflow-x-hidden">

        {/* Nav bar */}
        <NavBar />

        <section className="px-5 md:px-7 py-36 lg:py-52 grid justify-center  relative items-center">
          <HeroSection />
        </section>

        {/* Gray section under hero section */}
        <section className="px-5 mb-10 md:mb-16 md:px-7 bg-secondary-100 h-20 md:h-24 flex items-center text-center justify-center text-xs md:text-base">
          <p className=" ">Beauty on your schedule. Explore local salons and spas with ease.</p>

        </section>

        {/* Apply you business now section */}
        <section className="px-5 md:px-7 mb-16 md:my-32 text-center text-xl md:text-2xl">
          <p className=" ">Want you business on <span className="font-lora font-bold">Lumière</span>? <span className="font-bold underline decoration-2 text-nowrap">Apply now</span></p>
        </section>

        {/*Shops Carousels  */}
        <section className="px-5 md:px-7 mb-20 md:mb-36 space-y-12 md:space-y-16">

          {/* Recently viewed section */}
          <ShopsCarousel sectionTitle={(<h1 className="font-semibold font-source-sans text-left text-2xl md:text-3xl ">Recently viewed</h1>)} />

          {/* Recommended section */}
          <ShopsCarousel sectionTitle={(<h1 className="font-semibold font-source-sans text-left text-2xl md:text-3xl ">Recommended</h1>)} />

          {/* New to Lumière section */}
          <ShopsCarousel sectionTitle={(<h1 className="font-semibold font-source-sans text-left text-2xl md:text-3xl ">New to <span className="font-lora text-3xl md:text-4xl font-bold">Lumière</span></h1>)} />

          {/* Trending section */}
          <ShopsCarousel sectionTitle={(<h1 className="font-semibold font-source-sans text-left text-2xl md:text-3xl ">Trending</h1>)} />

        </section>

        <section className="px-5 md:px-7  mb-36">
          {/* Features/benefits section */}
          <FeaturesSection />
        </section>


        <section className=" px-5 md:px-7 mb-16 md:mb-36 text-center ">
          <div className="bg-background  max-w-[1440px] m-auto  rounded-xl   flex flex-col justify-center items-center gap-2">

            <h1 className="font-libre-bodoni lg:text-5xl font-bold text-primary text-center text-3xl">Looking good has never been this convenient!</h1>

            <h2 className="text-primary pb-5">Your next appointment is waiting. Tap to book now!</h2>


            <Button size="lg" variant="accent" className="">Book a service</Button>
            <p className="text-xs  text-muted-foreground pb-6 md:pb-10">No credit card required</p>


            {/* <h1 className="text-center text-3xl font-source-sans font-semibold pb-16">Express Yourself with a Fresh Look!</h1> */}
            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-24 ">
              {/* <ChangingAvatar /> */}
              {/* <ChangingAvatar /> */}
              {/* <ChangingAvatar /> */}
              <ChangingAvatar className="" />
              <ChangingAvatar className="hidden md:block" />
              <ChangingAvatar className="hidden md:block" />
            </div>

          </div>
        </section>


      </main >

      <footer >
        <div className=" bg-secondary-100">

          <div className="max-w-[1440px] px-5 md:px-7 py-6 m-auto ">
            <div className="flex  items-center flex-col md:flex-row  gap-5 justify-between">

              <p className="text-3xl font-extrabold font-lora ">Lumière</p>

              <div className="flex justify-center gap-3 mlg:gap-11 flex-wrap text-sm lg:text-base font-semibold">
                <p>Privacy policy</p>
                <p>Terms of service</p>
                <p>Terms of use</p>
                <p>Terms of use</p>
                <p>Terms of use</p>
              </div>

              <div>
                <Badge className="bg-background text-foreground border border-secondary-200 p-3 px-5 text-sm lg:text-base font-semibold font-source-sans m-auto ">Coming soon<Image src={appleLogo} alt="apple logo" className="ms-3 me-1.5 h-4.5 w-4 md:h-5.5 md:w-5" /> <Image src={googleLogo} alt="apple logo" className="h-4.5 w-5 md:h-5.5 md:w-5" /></Badge>

              </div>

            </div>
          </div>

        </div>
        <div className=" ">

          <div className="max-w-[1440px] px-5 md:px-7 py-3 m-auto ">
            <div className="flex  items-center flex-col md:flex-row  gap-5 justify-between">

              <p className="text-sm text-muted-foreground ">@2025 <span className="font-lora"></span>Lumière Inc.</p>

              <p className=" flex items-center gap-1 text-accent-600 pe-16 font-semibold"><Earth className="h-6 w-5" /> English</p>



            </div>
          </div>

        </div>

      </footer>
    </>
  );
}
