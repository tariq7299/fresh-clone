import { Combobox } from "@/ui/components/combo-box";
import { Separator } from "@/ui/components/separator";
import { Button } from "@/ui/components/custom/button";
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export default function HeroFilterField() {
    return (
        <div>

            {/* Write types */}
            <div className="flex gap-2 p-1.5 border rounded-lg justify-between mt-8 lg:mt-16 items-center bg-white  ">

                <Combobox triggerClassName={"border-0 w-full z-10 "} triggerIcon={null} labelClassName={"font-semibold"} popoverClassName={"w-[200px] sm:w-[400px]"} />

                <div className="self-stretch">
                    <Separator className=" me-1 h-full" orientation="vertical" />
                </div>


                <Button variant="default" className="inline-flex gap-2 items-center h-8 rounded-md px-3 2xs:h-10 2xs:px-8"> <MagnifyingGlassIcon className="size-6" /> Search </Button>

            </div>
        </div>
    )
}