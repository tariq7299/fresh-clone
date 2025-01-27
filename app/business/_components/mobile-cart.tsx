"use client"

import { Button } from "@/ui/components/custom/button";
import { ApiService, ApiServicesWithCategory } from "@/professional/_lib/definitions";
import { useState, useEffect } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { getItemsFromSearchParams } from "../_lib/utils";
import { createPageURL } from "@/business/_lib/utils";
import { useBusinessFormContext } from "@/lib/providers/business-form-provider";

import SubmitButton from "@/ui/components/custom/submit-button";
import useBookingCart from "../_lib/hooks/use-booking-cart";
import MobileCartForm from "./mobile-cart-form";


export default function MobileCart({ servicesWithCategories }: { servicesWithCategories: ApiServicesWithCategory[] }) {


    return <div className="flex justify-between items-center">

        <MobileCartForm servicesWithCategories={servicesWithCategories} />


        {/* <SubmitButton hasIcon={false} className="" /> */}


    </div>
}