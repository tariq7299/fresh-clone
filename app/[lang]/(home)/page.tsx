
import NavBar from "../../_ui/components/custom/nav-bar";
import { Button } from "../../_ui/components/custom/button";
import HeroSection from "./_components/hero-section";
import ShopsCarousel from "../../_ui/components/custom/shops-carousel";
import FeaturesSection from "./_components/features-section";
import ChangingAvatar from "./_components/changing-avatar";
import { Badge } from "@/_ui/components/badge";
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
import Footer from "../../_ui/components/custom/footer";
import Link from "next/link";
import { getDictionary } from "@/_lib/dictionaries";
export default async function Home({ params }: { params: Promise<{ lang: 'en' | 'ar' }> }) {

  const lang = (await params)?.lang
  const dict = await getDictionary(lang)

  return (
    <>
      <div className="overflow-x-hidden">

        {/* Nav bar */}
        <Suspense fallback={<NavBarSkeleton />}>
          <NavBar dict={dict} />
        </Suspense>

        <section className="px-5 md:px-7 py-36 lg:py-52 grid justify-center  relative items-center">
          <HeroSection dict={dict} lang={lang} />
        </section>


        <div className="space-y-36">

          {/* Gray section under hero section */}
          <section className="px-5 mb-10 md:mb-16 md:px-7 bg-secondary-100 h-20 md:h-24 flex items-center text-center justify-center text-xs md:text-base">
            <p className=" ">{dict.home.hero.gray_area_text}</p>

          </section>

          {/* Apply you business now section */}
          <section className="px-5 md:px-7  text-center text-xl md:text-3xl">
            <p className=" ">{dict.home.apply_now_text} <span className="font-cinzel font-bold">Lumière</span>? <Link href="/register?type=professional" className="font-bold underline decoration-2 text-nowrap">{dict.home.apply_now_action}</Link></p>
          </section>

          {/*Shops Carousels  */}
          <section className="px-5 md:px-7  space-y-12 md:space-y-16">

            {/* Recently viewed section */}
            {/* <ShopsCarousel sectionTitle={(<h1 className="font-semibold font-source-sans text-left text-3xl  ">Recently viewed</h1>)} /> */}

            {/* Recommended section */}
            <Suspense fallback={<ShopsCarouselSkeleton />}>
              <RecommendedBusinesses dict={dict} lang={lang} />
            </Suspense>

            {/* New to Lumière section */}
            <Suspense fallback={<ShopsCarouselSkeleton />}>
              <NewBusinesses dict={dict} lang={lang} />
            </Suspense>

            {/* Trending section */}
            <Suspense fallback={<ShopsCarouselSkeleton />}>
              <TrendingBusinesses dict={dict} lang={lang} />
            </Suspense>


          </section>

          <section className=" px-5 md:px-7   text-center ">
            <div className="bg-background  max-w-[1440px] m-auto  rounded-xl   flex flex-col justify-center items-center gap-2">

              <h1 className="font-libre-bodoni lg:text-5xl font-bold text-primary text-center text-4xl">{dict.home.looking_good_section.title}</h1>

              <h2 className="text-primary pb-5">{dict.home.looking_good_section.description}</h2>

              <Button size="lg" variant="accent" className="">{dict.home.looking_good_section.button}</Button>
              <p className="text-xs  text-muted-foreground pb-6 md:pb-10">{dict.home.looking_good_section.no_credit_required}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-24 ">
                <ChangingAvatar className="" />
                <ChangingAvatar className="hidden md:block" />
                <ChangingAvatar className="hidden md:block" />
              </div>

            </div>
          </section>


          <section className="px-5 md:px-7 ">
            {/* Features/benefits section */}
            <FeaturesSection dict={dict} />
          </section>

          <Footer dict={dict} />
        </div>


      </div >


    </>
  );
}
