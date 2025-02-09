// "use client";

import { Button } from '@/_ui/components/custom/button';
import { Source_Sans_3, Libre_Bodoni, Lora, Quicksand } from "next/font/google";
import "@/_ui/globals.css";

// This is the provider for the nextui library
// I am using this lib to be able to use the "date-input" component from the nextui library

const LibreBodoniSerif = Libre_Bodoni({
    variable: "--font-libre-bodoni-serif",
    subsets: ["latin"],
});
const LoraSerif = Lora({
    variable: "--font-cinzel-serif",
    subsets: ["latin"],
});
const SourceSans3Sans = Source_Sans_3({
    variable: "--font-source-sans-3-sans",
    subsets: ["latin"],
});

const QuicksandSans = Quicksand({
    variable: "--font-Quicksand-sans",
    subsets: ["latin"],
});


export default function RootWrapper({ children, }: { children: React.ReactNode }) {

    // const locale = (await params)?.lang
    // const router = useRouter()



    return (
        <html lang="en">
            <body
                className={`${LibreBodoniSerif.variable} ${LoraSerif.variable} ${SourceSans3Sans.variable} ${QuicksandSans.variable} antialiased `}
            >
                {children}
            </body>
        </html>
    );
}   