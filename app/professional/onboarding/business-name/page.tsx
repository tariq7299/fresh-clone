"use client"

// import { useState } from 'react';
import { ApiError } from '@/lib/definitions/api';
import { Button } from "@/ui/components/custom/button";
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { Label } from "@/ui/components/label";
import { Input } from "@/ui/components/input";
import { Textarea } from "@/ui/components/textarea";
// import { prisma } from '@/lib/prisma';
import prisma from '@/lib/prisma';
// import useLocalStorage from '@/lib/hooks/use-local-storage';
import { SessionData } from '@/(auth)/_lib/definitions';
import { useActionState } from 'react';
import { handleSubmit } from '@/professional/_lib/form-actions';
// import { useActionState } from 'react';

export default function ProfessionalOnboardingPage() {


    // try {
    //     const newBusiness = await prisma.business.create({
    //         data: {
    //             userId: 1,
    //             name_ar: "صالون تجميل",
    //             name_en: "Beauty Salon",
    //             description_ar: "this is desc to buisness arabic",
    //             description_en: "this is desc to buisness english",
    //             website_url: "https://beautysalon.com",
    //             capacity: 20,
    //             category_id: 1,
    //             address: "456 Beauty Street",
    //             gender: "female",
    //         },
    //     })
    //     console.log("newBusiness", newBusiness)
    // } catch (error) {
    //     console.error("Error details:", error)
    // }

    // // Find many
    // const users = await prisma.business.findMany({
    //     where: {
    //         userId: 1
    //     }
    // })

    // console.log("usersss", users)

    const initialState = {
        success: false,
        clientFieldsErrors: null,
        apiDataResponse: null,
        apiMsgs: "",
        formData: {
            nameEn: "",
            nameAr: "",
            descriptionEn: "",
            descriptionAr: "",
            websiteUrl: "",
        }
    }

    const [formState, formAction, pending] = useActionState(handleSubmit, initialState)

    console.log("formState", formState)


    return (
        <form action={formAction} id="business-onboarding-form">
            <div className="flex flex-col gap-2 w-full max-w-lg p-5 py-24 min-h-dvh  items-center m-auto space-y-5">

                <div className="text-start space-y-1">

                    <p className="text-sm text-muted-foreground text-start"> Account setup</p>

                    {/* Change this to more descriptive title */}
                    <h1 className="text-3xl lg:text-4xl font-bold font-source-sans"> What's your business info?</h1>

                    <p className="text-sm text-muted-foreground "> This the brand name your clients will see. Your billing and legal name can be added later.</p>
                </div>

                <div className="flex flex-col gap-5  h-full w-full pb-20">

                    <div className="flex flex-col gap-2">
                        <Label className="font-bold" htmlFor="nameEn">Business name (En)</Label>
                        <Input type="text" name="nameEn" id="nameEn" placeholder="Bekky Barber" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label className="font-bold" htmlFor="nameAr">Business name (Ar)</Label>
                        <Input type="text" name="nameAr" id="nameAr" placeholder="بيكي باربر" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label className="font-bold" htmlFor="descriptionEn">Description (En)</Label>
                        <Textarea name="descriptionEn" id="descriptionEn" placeholder="Bekky Barber is a barber shop that..." />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label className="font-bold" htmlFor="descriptionAr">Description (Ar)</Label>
                        <Textarea name="descriptionAr" id="descriptionAr" placeholder="بيكي باربر هو محل حلاقة أنيق يقدم خدمات متنوعة، بما في ذلك الحلاقة وتهذيب الذقن ." />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label className="font-bold" htmlFor="websiteUrl">Website (Optional)</Label>
                        <Input type="text" name="websiteUrl" id="websiteUrl" placeholder="https://www.bekkybarber.com" />
                    </div>


                </div>

            </div>
        </form>
    );
}