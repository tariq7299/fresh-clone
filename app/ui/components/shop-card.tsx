import barberShop from "@/../public/barber-shop-2.jpg"
import Image from "next/image"
import { Badge } from "./badge"

function ShopCard() {
    return (
        <div className="border border-gray-300 rounded-lg shadow-sm bg-white w-[210px] flex flex-col ">

            <div className="grow-[2] w-full">

                <Image
                    src={barberShop}
                    alt="Shop image"
                    className="object-cover rounded-t-lg "
                />


            </div>


            <div className="space-y-1 p-2.5  self-center grow-[1] text-left w-full">
                <p className="font-bold text-lg text-nowrap truncate ">Gedo Salon - NasrCity</p>
                {/* truncate this text */}
                <p className="text-muted-foreground text-nowrap text-xs md:text-base truncate">Al Manteqa el tasaa, Nasr City</p>
                <Badge variant="outline">Barbershop</Badge>
            </div>
        </div>

        // <div className="border border-gray-300 rounded-lg shadow-sm bg-white w-[240px]  grid grid-rows-3 grid-cols-1 ">

        //     <div className="col-span-1 row-span-2">

        //         <Image
        //             src={barberShop}
        //             alt="Shop image"
        //             className="object-cover rounded-t-lg w-full h-full"
        //         />


        //     </div>


        //     <div className="space-y-1 p-2.5  col-span-1 self-center row-span-1">
        //         <p className="font-bold text-lg truncate">Gedo Salon - NasrCity</p>
        //         {/* truncate this text */}
        //         <p className="text-muted-foreground text-nowrap text-xs md:text-base truncate">Al Manteqa el tasaa, Nasr City</p>
        //         <Badge variant="outline">Barbershop</Badge>
        //     </div>
        // </div>
    )
}

export { ShopCard }