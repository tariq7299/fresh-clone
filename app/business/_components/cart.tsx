import { Button } from "@/ui/components/custom/button";
import Image from "next/image";
import barberShop from "@/../public/barber-shop-2.jpg"
import DesktopCartHeader from "./cart-header";
import DesktopCartForm from "./cart-form";
import { getBusinessData } from "../_lib/data";
import { Business } from "@/business/[id]/(business-overview)/page";
import { ApiServicesWithCategory } from "@/professional/_lib/definitions";


export default function DesktopCart({ services, businessId, businessCoverPhoto, businessName, businessAddress }: { services: ApiServicesWithCategory[], businessId: string, businessCoverPhoto: string, businessName: string, businessAddress: string }) {

    return <div className="border border-gray-200 rounded-lg p-5 space-y-4 shadow-sm">

        <div className=" sticky  bg-background  ">

            <DesktopCartHeader businessId={businessId} businessCoverPhoto={businessCoverPhoto} businessName={businessName} businessAddress={businessAddress} />

        </div>

        <DesktopCartForm servicesWithCategories={services} />


    </div>
}