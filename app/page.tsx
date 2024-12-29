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
        <section className="mt-32 p-5">
          <h1 className="text-4xl font-black text-start tracking-tight font-libre-bodoni scale-y-110">Schedule local salon and wellness appointments</h1>

          {/* Repace this compnent with "./ui/components/custom/combo-box" */}
          <div>

            {/* Write types */}
            <div className="flex gap-2 p-2 border rounded-lg justify-between mt-12">

              <Combobox triggerClassName={"border-0 w-full"} triggerIcon={null} labelClassName={"font-semibold"} />

              <div>
                <Separator className=" me-1 h-full" orientation="vertical" />

              </div>


              <Button size="lg" variant="default" className="inline-flex gap-2 items-center"> <MagnifyingGlassIcon className="size-6" /> Search </Button>

            </div>
          </div>
        </section>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </>
  );
}
