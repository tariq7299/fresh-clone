import type { Metadata } from "next";
import { Cairo, Almarai, Source_Sans_3, Libre_Bodoni, Lora, Quicksand, Cinzel } from "next/font/google";
import "@/_ui/globals.css";
import SonnerToaster from "@/_ui/ToasterSonner"

// This is the provider for the nextui library
// I am using this lib to be able to use the "date-input" component from the nextui library
import { NextUIProvider } from "@nextui-org/system";
import { Suspense } from "react";
import DirectionProviderForRadixUI from "@/_lib/providers/direction-provider";
const LibreBodoniSerif = Libre_Bodoni({
    variable: "--font-libre-bodoni-serif",
    subsets: ["latin"],
});
const CinzelSerif = Cinzel({
    variable: "--font-cinzel-serif",
    subsets: ["latin"],
});
// const LoraSerif = Lora({
//     variable: "--font-cinzel-serif",
//     subsets: ["latin"],
// });
const SourceSans3Sans = Source_Sans_3({
    variable: "--font-source-sans-3-sans",
    subsets: ["latin"],
});

const QuicksandSans = Quicksand({
    variable: "--font-Quicksand-sans",
    subsets: ["latin"],
});
const AlmaraiSans = Almarai({
    variable: "--font-Almarai-sans",
    subsets: ["latin"],
    weight: ["300", "400", "700", "800"],
});

const CairoSans = Cairo({
    variable: "--font-Cairo-sans",
    subsets: ["latin"],
});

export default async function Layout({ children, params }: { children: React.ReactNode, params: Promise<{ lang: 'en' | 'ar' }> }) {

    const locale = await params

    return <div id="main-layout" dir={locale.lang === 'ar' ? 'rtl' : 'ltr'}
    >
        {/* This provider is used to provide the direction to the radix ui (shadcn/ui) components */}
        <DirectionProviderForRadixUI locale={locale.lang}>
            <Suspense >
                {children}
            </Suspense>
        </DirectionProviderForRadixUI>
        <SonnerToaster />
    </div>
}

