import Image from "next/image";
import barberShop from "@/../public/barber-shop-2.jpg"

export default function CartHeader({ businessCoverPhoto, businessName, businessAddress }: { businessCoverPhoto: string, businessName: string, businessAddress: string }) {

    return <div className="flex justify-center items-start gap-4">



        <div className="rounded-lg overflow-hidden basis-[100px]">
            <Image src={businessCoverPhoto || barberShop} alt="barber shop" className="object-cover " />
        </div>
        <div className="grow">
            <p className="font-bold">{businessName}</p>
            <p className="text-sm text-muted-foreground">{businessAddress}</p>
        </div>
    </div>

}