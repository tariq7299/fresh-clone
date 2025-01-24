import { Button } from "@/ui/components/custom/button";
import Image from "next/image";
import barberShop from "@/../public/barber-shop-2.jpg"
import CartHeader from "./cart-header";
import CartForm from "./cart-form";
import { getBusinessData } from "../_lib/data";
import { Business } from "@/business/[id]/(business-overview)/page";
import { ApiServicesWithCategory } from "@/professional/_lib/definitions";


export default async function Cart({ services, businessCoverPhoto, businessName, businessAddress }: { services: ApiServicesWithCategory[], businessCoverPhoto: string, businessName: string, businessAddress: string }) {

    // const params = await props.params
    // const searchParams = await props.searchParams
    // const businessId = params?.id
    // const items = searchParams.items

    // console.log("items", items)

    // const businessData = await getBusinessData(businessId) as Business
    // const services = businessData?.services_with_categories


    return <div className="border border-gray-200 rounded-lg p-5 space-y-4 shadow-sm">

        <div className=" sticky  bg-background  ">

            <CartHeader businessCoverPhoto={businessCoverPhoto} businessName={businessName} businessAddress={businessAddress} />

        </div>

        <CartForm servicesWithCategories={services} />


    </div>
}