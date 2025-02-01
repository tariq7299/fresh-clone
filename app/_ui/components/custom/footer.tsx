import { GlobeAsiaAustraliaIcon } from "@heroicons/react/24/outline";
import { Badge } from "../badge";
import appleLogo from "@/../public/apple-logo.svg.png";
import googleLogo from "@/../public/google-logo.png";
import Image from "next/image";
import { LanguageSwitcherDialog } from "./language-switcher-dialog";

export default function Footer({ className }: { className?: string }) {
    return <footer className={className}>
        <div className=" bg-secondary-100">

            <div className="max-w-[1440px] py-6 m-auto px-5">
                <div className="flex  items-center flex-col lg:flex-row  gap-5 justify-between">

                    <p className="text-3xl font-extrabold font-lora ">Lumière</p>

                    <div className="flex justify-center gap-4 mlg:gap-11 flex-wrap text-sm lg:text-base font-semibold">
                        <p>Privacy policy</p>
                        <p>Terms of service</p>
                        <p>Terms of use</p>
                        <p>Terms of use</p>
                        <p>Terms of use</p>
                    </div>

                    <div>
                        <Badge className="hover:bg-background/80 bg-background text-foreground border border-secondary-200 p-3 px-5 text-sm lg:text-base font-semibold font-source-sans m-auto min-w-[178px]">Coming soon<Image src={appleLogo} alt="apple logo" className="ms-3 me-1.5 h-4.5 w-4 md:h-5.5 md:w-5" /> <Image src={googleLogo} alt="apple logo" className="h-4.5 w-5 md:h-5.5 md:w-5" /></Badge>

                    </div>

                </div>
            </div>

        </div>
        <div className=" ">

            <div className="max-w-[1440px]  py-3 m-auto px-5">
                <div className="flex  items-center flex-row  gap-5 justify-evenly md:justify-between md:pe-12">

                    <p className="text-sm text-muted-foreground ">@2025 <span className="font-lora"></span>Lumière Inc.</p>

                    <LanguageSwitcherDialog />

                    {/* <p className=" flex  items-center gap-1 text-accent-600 pe-0 md:pe-16 font-semibold"><GlobeAsiaAustraliaIcon className="h-6 w-5" /> English</p> */}



                </div>
            </div>

        </div>

    </footer>
}   