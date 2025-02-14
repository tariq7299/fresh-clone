
import { GlobeAsiaAustraliaIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import barberShop from "@/../public/barber-shop-4.jpg";
import { cn } from "@/_lib/utils/utils";
import BackButton from "@/_ui/components/custom/back-button";
import Link from "next/link";
import React, { Suspense } from "react";
import { LanguageSwitcherDialog } from "@/_ui/components/custom/language-switcher-dialog";
import Loading from "./loading";
import { getDictionary } from "@/_lib/dictionaries";

export default async function Layout({ params, children }: { params: Promise<{ lang: "en" | "ar" }>, children: React.ReactNode }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2  min-h-dvh " >


            <div className=" col-span-1 relative flex flex-col justify-center items-center ">

                <div className="w-full sticky top-0 z-50 p-4 flex items-center gap-2 justify-between bg-background ">
                    <BackButton />
                    <Link href="/" className={cn("text-2xl font-cinzel font-bold")}>Lumière</Link>
                </div>

                {/* Here is the content */}

                <Suspense fallback={<Loading />}>
                    {children}
                </Suspense>

                <div className="p-5 mt-auto">
                    <LanguageSwitcherDialog dict={dict} />
                </div>

            </div>

            <div className="col-span-1 hidden md:block relative w-full h-full">
                <Image
                    src={barberShop}
                    alt="Barber shop"
                    fill={true}
                    className="object-bottom object-cover"
                />
            </div>



        </div>
    )
}
