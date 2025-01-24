import { Button } from "@/ui/components/custom/button";
import Image from "next/image";
import barberShop from "@/../public/barber-shop-2.jpg"

export default function Cart() {
    return <div className="border border-gray-200 rounded-lg p-5 space-y-4">

        <div className=" sticky  bg-background  ">

            <div className="flex justify-center items-start gap-4">

                <div className="rounded-lg overflow-hidden basis-[100px]">
                    <Image src={barberShop} alt="barber shop" className="object-cover " />
                </div>
                <div className="grow">
                    <p className="font-bold">Business Name</p>
                    <p className="text-sm text-muted-foreground">Business Address</p>
                </div>
            </div>
        </div>

        <div className="flex flex-col gap-2 max-h-[500px] overflow-y-auto py-3">


            <div className="flex justify-between items-start w-full  " >
                <div>
                    <p className="font-semibold ">Featured</p>
                    <p className="text-sm text-muted-foreground pb-3">10min</p>

                </div>
                <p className="font-semibold text-sm">EGP 100</p>
            </div>
            <div className="flex justify-between items-start w-full  " >
                <div>
                    <p className="font-semibold text-lg">Featured</p>
                    <p className="text-sm text-muted-foreground pb-3">10min</p>

                </div>
                <p className="font-semibold text-sm">EGP 100</p>
            </div>




        </div>

        <div className="sticky bottom-0 left-0 w-full bg-background py-3.5  flex flex-col  items-center border-t-1 ">

            <div className="flex justify-between items-center w-full  " >
                <p className="font-bold text-lg">Total</p>
                <p className="font-semibold text-sm">EGP 100</p>
            </div>

            <div className="w-full">

                <Button className="w-full mt-10">
                    Continue
                </Button>
            </div>

        </div>



    </div>
}