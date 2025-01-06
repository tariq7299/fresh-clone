import { Label } from "@/ui/components/label";
import { Input } from "@/ui/components/input";
import { Textarea } from "@/ui/components/textarea";
import { Button } from "@/ui/components/custom/button";
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function ProfessionalOnboardingPage() {
    return <div className=" ">

        <div className="fixed top-0 left-0 bg-background w-full pt-3 px-5 flex flex-col">
            <div className="flex gap-2 w-full justify-center items-center max-w-3xl m-auto">
                <div className="rounded-full bg-accent-400 flex-auto h-1"></div>
                <div className="rounded-full bg-muted flex-auto h-1"></div>
                <div className="rounded-full bg-muted flex-auto h-1"></div>
                <div className="rounded-full bg-muted flex-auto h-1"></div>
                <div className="rounded-full bg-muted flex-auto h-1"></div>
            </div>
            <div className="self-end py-3">
                <Button variant={"ghost"} className="font-bold px-0 py-0">Log out</Button>

            </div>
        </div>

        <div className="flex flex-col gap-2 w-full max-w-lg p-5 py-24 h-dvh  items-center m-auto">



            <div className="text-start space-y-1">

                <p className="text-sm text-muted-foreground text-start"> Account setup</p>

                {/* Change this to more descriptive title */}
                <h1 className="text-3xl font-bold font-source-sans"> What's your business info?</h1>

                <p className="text-sm text-muted-foreground "> This the brand name your clients will see. Your billing and legal name can be added later.</p>
            </div>

            <form action="" className="flex flex-col gap-4 pt-5 h-full w-full">

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

                <div className=" fixed bottom-0 left-0 w-full bg-background p-5 flex justify-center items-center border-t-1">

                    <Button className="w-full font-bold flex gap-2 justify-center items-center">
                        Continue  <ArrowRightIcon className="size-4" />
                    </Button>
                </div>


            </form>


        </div>
    </div>
}