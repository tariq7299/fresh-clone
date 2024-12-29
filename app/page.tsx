import Image from "next/image";
import NavBar from "./ui/components/custom/nav-bar";
import { Combobox } from "./ui/components/combo-box";
import { Button } from "./ui/components/custom/button";
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { Separator } from "./ui/components/separator";

export default function Home() {
  return (
    <>
      <main className="">
        <NavBar />

        <section className=" p-5  grid justify-center relative">
          {/* <div className=" bg-center"> */}
          <Image
            src="/barber-shop-1.jpg"
            alt="Picture of the author"
            width={1920}
            height={1200}
            className="absolute top-0 left-0 z-0 brightness-50 blur-sm bg-cover"
          ></Image>


          {/* </div> */}

          <div className="max-w-xl mt-24">
            <h1 className="text-4xl font-black text-start sm:text-center tracking-tight font-libre-bodoni scale-y-110 text-white">Schedule local salon and wellness appointments</h1>

            {/* Repace this compnent with "./ui/components/custom/combo-box" */}
            <div>

              {/* Write types */}
              <div className="flex gap-2 p-2 border rounded-lg justify-between mt-8 items-center ">

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
