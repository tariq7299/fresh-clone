"use client"
import { Label } from '@/ui/components/label';
import { Input } from '@/ui/components/input';
import { Textarea } from '@/ui/components/textarea';
import { useActionState } from 'react';
import { handleSubmit } from '@/professional/_lib/form-actions';
// TODO: Add this type
// import { StepBusinessInfo } from '@/types/business-info';

// TODO: Add this type
export default function BusinessNameForm({ storedStepBusinessInfo }: { storedStepBusinessInfo: any }) {

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

    return <form action={formAction} id="business-onboarding-form">
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
                    <Input defaultValue={storedStepBusinessInfo?.name_en || ""} type="text" name="nameEn" id="nameEn" placeholder="Bekky Barber" />
                </div>
                <div className="flex flex-col gap-2">
                    <Label className="font-bold" htmlFor="nameAr">Business name (Ar)</Label>
                    <Input defaultValue={storedStepBusinessInfo?.name_ar || ""} type="text" name="nameAr" id="nameAr" placeholder="بيكي باربر" />
                </div>
                <div className="flex flex-col gap-2">
                    <Label className="font-bold" htmlFor="descriptionEn">Description (En)</Label>
                    <Textarea defaultValue={storedStepBusinessInfo?.description_en || ""} name="descriptionEn" id="descriptionEn" placeholder="Bekky Barber is a barber shop that..." />
                </div>
                <div className="flex flex-col gap-2">
                    <Label className="font-bold" htmlFor="descriptionAr">Description (Ar)</Label>
                    <Textarea defaultValue={storedStepBusinessInfo?.description_ar || ""} name="descriptionAr" id="descriptionAr" placeholder="بيكي باربر هو محل حلاقة أنيق يقدم خدمات متنوعة، بما في ذلك الحلاقة وتهذيب الذقن ." />
                </div>
                <div className="flex flex-col gap-2">
                    <Label className="font-bold" htmlFor="websiteUrl">Website (Optional)</Label>
                    <Input defaultValue={storedStepBusinessInfo?.website_url || ""} type="text" name="websiteUrl" id="websiteUrl" placeholder="https://www.bekkybarber.com" />
                </div>


            </div>

        </div>
    </form>
}