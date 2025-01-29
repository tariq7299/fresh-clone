import DesktopCartHeader from "./cart-header";
import DesktopCartForm from "./cart-form";
import { ApiServicesWithCategory } from "@/professional/_lib/definitions";
import { Suspense } from "react";
import { DesktopCartSkeleton } from "./skeletons";

export default function DesktopCart({ services, businessId, businessCoverPhoto, businessName, businessAddress }: { services: ApiServicesWithCategory[], businessId: string, businessCoverPhoto: string, businessName: string, businessAddress: string }) {

    return <div className="border border-gray-200 rounded-lg p-5 space-y-4 shadow-sm">



        <div className=" sticky  bg-background  ">
            <DesktopCartHeader businessId={businessId} businessCoverPhoto={businessCoverPhoto} businessName={businessName} businessAddress={businessAddress} />
        </div>

        <Suspense fallback={<DesktopCartSkeleton />}>
            <DesktopCartForm servicesWithCategories={services} />
        </Suspense>

    </div>
}