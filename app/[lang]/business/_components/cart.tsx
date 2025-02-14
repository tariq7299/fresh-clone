import DesktopCartHeader from "./cart-header";
import DesktopCartForm from "./cart-form";
import { ApiServicesWithCategory } from "@/[lang]/professional/_lib/definitions";
import { Suspense } from "react";
import { DesktopCartSkeleton } from "./skeletons";

export default function DesktopCart({ services, businessId, businessCoverPhoto, businessName, businessAddress, dict }: { services: ApiServicesWithCategory[], businessId: string, businessCoverPhoto: string, businessName: string, businessAddress: string, dict: any }) {

    return <div className="border border-gray-200 rounded-lg p-5 space-y-4 shadow-sm">

        <div className=" sticky  bg-background  ">
            <DesktopCartHeader businessId={businessId} businessCoverPhoto={businessCoverPhoto} businessName={businessName} businessAddress={businessAddress} dict={dict} />
        </div>

        <Suspense fallback={<DesktopCartSkeleton />}>
            <DesktopCartForm servicesWithCategories={services} dict={dict} />
        </Suspense>

    </div>
}