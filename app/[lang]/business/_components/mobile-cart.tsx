"use client"

import { ApiServicesWithCategory } from "@/[lang]/professional/_lib/definitions";
import MobileCartForm from "./mobile-cart-form";
import { Suspense } from "react";
import { MobileCartSkeleton } from "./skeletons";



export default function MobileCart({ servicesWithCategories }: { servicesWithCategories: ApiServicesWithCategory[] }) {


    return <div className="flex justify-between items-center">

        <Suspense fallback={<MobileCartSkeleton />}>
            <MobileCartForm servicesWithCategories={servicesWithCategories} />
        </Suspense>


        {/* <SubmitButton hasIcon={false} className="" /> */}


    </div>
}