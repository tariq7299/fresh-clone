import Image from "next/image";
import barberShop from "@/../public/barber-shop-2.jpg"
import Link from "next/link";

export default function CartHeader({ businessId, businessCoverPhoto, businessName, businessAddress }: { businessId: string, businessCoverPhoto: string, businessName: string, businessAddress: string }) {

    return <Link href={`/business/${businessId}`} className="flex justify-center items-start gap-4 cursor-pointer">



        <div className="rounded-lg overflow-hidden basis-[100px] cursor-pointer">
            <Image src={businessCoverPhoto || barberShop} alt="barber shop" className="object-cover " />
        </div>
        <div className="grow cursor-pointer">
            <p className="font-bold">{businessName}</p>
            <p className="text-sm text-muted-foreground">{businessAddress}</p>
        </div>
    </Link>

}