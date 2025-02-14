import Image from "next/image";
import barberShop from "@/../public/barber-shop-2.jpg"
import Link from "next/link";

interface DesktopCartHeaderProps {
    businessId: string;
    businessCoverPhoto: string;
    businessName: string;
    businessAddress: string;
    dict: {
        business_page: {
            cart: {
                business_details: {
                    alt_text: string;
                }
            }
        }
    }
}

export default function DesktopCartHeader({
    businessId,
    businessCoverPhoto,
    businessName,
    businessAddress,
    dict
}: DesktopCartHeaderProps) {
    return (
        <Link href={`/business/${businessId}`} className="flex justify-center items-start gap-4 cursor-pointer">
            <div className="rounded-lg overflow-hidden basis-[100px] cursor-pointer">
                <Image
                    src={businessCoverPhoto || barberShop}
                    alt={dict.business_page.cart.business_details.alt_text}
                    className="object-cover"
                />
            </div>
            <div className="grow cursor-pointer">
                <p className="font-bold rtl:font-cairo">{businessName}</p>
                <p className="text-sm text-muted-foreground">{businessAddress}</p>
            </div>
        </Link>
    )
}