import Image from "next/image";
import NavBar from "./ui/components/custom/nav-bar";
import { Combobox } from "./ui/components/combo-box";
import { Button } from "./ui/components/custom/button";
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { Separator } from "./ui/components/separator";
import barberShop1 from "@/../public/barber-shop-1.jpg";

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
            className="brightness-50 blur-sm object-cover"
          />


          <div className="max-w-xl lg:max-w-2xl mt-24 lg:mt-36 relative ">
            <h1 className="text-4xl  lg:text-6xl font-black text-start sm:text-start tracking-tight font-libre-bodoni scale-y-110 text-white">
              Schedule local salon and wellness appointments
            </h1>

            {/* Repace this compnent with "./ui/components/custom/combo-box" */}
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
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </>
  );
}
