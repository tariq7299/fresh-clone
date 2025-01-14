"use client"
import { Label } from '@/ui/components/label';
import { Input } from '@/ui/components/input';
import { Textarea } from '@/ui/components/textarea';
import { useActionState } from 'react';
import { handleSubmitBusinessName, BusinessNameFormState, BusinessNameFormData } from '@/professional/_lib/form-actions';
import { handleFormResponse } from '@/lib/utils/utils';
import { useEffect, useState } from 'react';

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
            nameEn: storedStepBusinessInfo?.name_en || "",
            nameAr: storedStepBusinessInfo?.name_ar || "",
            descriptionEn: storedStepBusinessInfo?.description_en || "",
            descriptionAr: storedStepBusinessInfo?.description_ar || "",
            websiteUrl: storedStepBusinessInfo?.website_url || "",
        }
    }

    const [formState, formAction, isPending] = useActionState(handleSubmitBusinessName, initialState)

    const [formValues, setFormValues] = useState<BusinessNameFormData>(initialState.formData)

    // useEffect(() => {
    //     console.log("formState", formState)
    //     handleFormResponse({
    //         formState,
    //         showSuccessToast: false,
    //         showErrorToast: true
    //     })
    // }, [formState])


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
                    <Input value={formValues.nameEn} onChange={(e) => setFormValues({ ...formValues, nameEn: e.target.value })} type="text" name="nameEn" id="nameEn" placeholder="Bekky Barber" />
                    <p className="text-sm text-destructive ">{formState.clientFieldsErrors?.nameEn?.[0]}</p>
                </div>
                <div className="flex flex-col gap-2">
                    <Label className="font-bold" htmlFor="nameAr">Business name (Ar)</Label>
                    <Input value={formValues.nameAr} onChange={(e) => setFormValues({ ...formValues, nameAr: e.target.value })} type="text" name="nameAr" id="nameAr" placeholder="بيكي باربر" />
                    <p className="text-sm text-destructive ">{formState.clientFieldsErrors?.nameAr?.[0]}</p>
                </div>
                <div className="flex flex-col gap-2">
                    <Label className="font-bold" htmlFor="descriptionEn">Description (En)</Label>
                    <Textarea value={formValues.descriptionEn} onChange={(e) => setFormValues({ ...formValues, descriptionEn: e.target.value })} name="descriptionEn" id="descriptionEn" placeholder="Bekky Barber is a barber shop that..." />
                    <p className="text-sm text-destructive ">{formState.clientFieldsErrors?.descriptionEn?.[0]}</p>
                </div>
                <div className="flex flex-col gap-2">
                    <Label className="font-bold" htmlFor="descriptionAr">Description (Ar)</Label>
                    <Textarea value={formValues.descriptionAr} onChange={(e) => setFormValues({ ...formValues, descriptionAr: e.target.value })} name="descriptionAr" id="descriptionAr" placeholder="بيكي باربر هو محل حلاقة أنيق يقدم خدمات متنوعة، بما في ذلك الحلاقة وتهذيب الذقن ." />
                    <p className="text-sm text-destructive ">{formState.clientFieldsErrors?.descriptionAr?.[0]}</p>
                </div>
                <div className="flex flex-col gap-2">
                    <Label className="font-bold" htmlFor="websiteUrl">Website (Optional)</Label>
                    <Input value={formValues.websiteUrl} onChange={(e) => setFormValues({ ...formValues, websiteUrl: e.target.value })} type="text" name="websiteUrl" id="websiteUrl" placeholder="https://www.bekkybarber.com" />
                    <p className="text-sm text-destructive ">{formState.clientFieldsErrors?.websiteUrl?.[0]}</p>
                </div>


            </div>

        </div>
    </form>
}