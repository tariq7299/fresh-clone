'use client';

import { useState, useEffect, useActionState } from 'react';
import { ApiError } from '@/lib/definitions/api';
import { Button } from "@/ui/components/custom/button";
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { Label } from "@/ui/components/label";
import { Input } from "@/ui/components/input";
import { Textarea } from "@/ui/components/textarea";
import Image from 'next/image';
import { CheckIcon } from '@heroicons/react/24/outline';
import BusinessCategoryCard from '@/ui/components/custom/business-category-card';
import { cn } from '@/lib/utils/utils';
import { useBusinessFormContext } from '@/professional/_components/business-form-provider';

export default function ProfessionalOnboardingPage() {

    const { setIsLoading } = useBusinessFormContext()

    // const [formState, formAction, isPending] = useActionState(handleSubmitBusinessName, initialState)       

    // useEffect(() => {
    //     setIsLoading(false)
    // }, [isPending])

    return (
        <form>
            <div className="flex flex-col gap-2 w-full max-w-4xl p-5 py-24 min-h-dvh items-stretch m-auto space-y-5 ">

                <div className="text-start space-y-1">

                    <p className="text-sm text-muted-foreground text-start"> Account setup</p>

                    {/* Change this to more descriptive title */}
                    <h1 className="text-3xl lg:text-4xl font-bold font-source-sans"> What's your speciality?</h1>

                    <p className="text-sm text-muted-foreground ">Choose a category that best describes your business.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-stretch md:grid-cols-3 ">
                    <BusinessCategoryCard categoryName="Haircuts & Styling" categoryIconUrl="/categories/hair.png" categoryId="haircuts-and-styling" />

                    <BusinessCategoryCard categoryName="Nail Care" categoryIconUrl="/categories/hair.png" categoryId="nail-care" />

                    <BusinessCategoryCard categoryName="Massage Therapy" categoryIconUrl="/categories/hair.png" categoryId="massage" />

                    <BusinessCategoryCard categoryName="Skincare & Facials" categoryIconUrl="/categories/hair.png" categoryId="skincare" />

                    <BusinessCategoryCard categoryName="Makeup & Beauty" categoryIconUrl="/categories/hair.png" categoryId="makeup" />

                    <BusinessCategoryCard categoryName="Barbering" categoryIconUrl="/categories/hair.png" categoryId="barbering" />

                    <BusinessCategoryCard categoryName="Spa Services" categoryIconUrl="/categories/hair.png" categoryId="spa" />

                    <BusinessCategoryCard categoryName="Lash & Brow" categoryIconUrl="/categories/hair.png" categoryId="lash-brow" />

                    <BusinessCategoryCard categoryName="Waxing & Hair Removal" categoryIconUrl="/categories/hair.png" categoryId="waxing" />

                    <BusinessCategoryCard categoryName="Tanning" categoryIconUrl="/categories/hair.png" categoryId="tanning" />

                </div>


            </div>
        </form>
    );
}