"use client"
import { Label } from '@/_ui/components/label';
import { Input } from '@/_ui/components/input';
import { Textarea } from '@/_ui/components/textarea';
import { useActionState } from 'react';
import { handleSubmitBusinessName, BusinessNameFormData, BusinessNameFieldErrors } from '@/[lang]/professional/_lib/form-actions';
import { useEffect, useState } from 'react';
import { useBusinessFormContext } from '../../../../_lib/providers/business-form-provider';
import { ErrorFormState } from '@/_lib/definitions/definitions';
import { GenderOfCustomers, StoredTempBusinessInfo } from '../../_lib/definitions';
import CategoryCard from '@/_ui/components/custom/business-category-card';

export default function Form({ storedTempBusinessInfo }: { storedTempBusinessInfo: StoredTempBusinessInfo | null }) {

    const { setIsLoading } = useBusinessFormContext()

    const initialState: ErrorFormState<BusinessNameFieldErrors |
        null, BusinessNameFormData> = {
        success: false,
        clientFieldsErrors: null,
        apiDataResponse: null,
        apiMsgs: "",
        formData: {
            nameEn: storedTempBusinessInfo?.name_en || "",
            nameAr: storedTempBusinessInfo?.name_ar || "",
            descriptionEn: storedTempBusinessInfo?.description_en || "",
            descriptionAr: storedTempBusinessInfo?.description_ar || "",
            websiteUrl: storedTempBusinessInfo?.website_url || "",
            genderOfCustomers: storedTempBusinessInfo?.gender_of_customers || "",
        }
    }

    const [formState, formAction, isPending] = useActionState(handleSubmitBusinessName, initialState)

    const [formValues, setFormValues] = useState<BusinessNameFormData>(initialState.formData)

    useEffect(() => {
        setIsLoading(isPending)
    }, [isPending])

    return <form action={formAction} id="business-onboarding-form" className='flex flex-col gap-5 h-full w-full '>

        <div className="flex flex-col gap-2">
            <Label className="font-bold" htmlFor="nameEn">Business name (En)</Label>
            <Input disabled={isPending} value={formValues.nameEn} onChange={(e) => setFormValues({ ...formValues, nameEn: e.target.value })} type="text" name="nameEn" id="nameEn" placeholder="Bekky Barber" />
            <p className="text-sm text-destructive ">{formState.clientFieldsErrors?.nameEn?.[0]}</p>
        </div>
        <div className="flex flex-col gap-2">
            <Label className="font-bold" htmlFor="nameAr">Business name (Ar)</Label>
            <Input disabled={isPending} value={formValues.nameAr} onChange={(e) => setFormValues({ ...formValues, nameAr: e.target.value })} type="text" name="nameAr" id="nameAr" placeholder="بيكي باربر" />
            <p className="text-sm text-destructive ">{formState.clientFieldsErrors?.nameAr?.[0]}</p>
        </div>
        <div className="flex flex-col gap-2">
            <Label className="font-bold" htmlFor="descriptionEn">Description (En)</Label>
            <Textarea disabled={isPending} value={formValues.descriptionEn} onChange={(e) => setFormValues({ ...formValues, descriptionEn: e.target.value })} name="descriptionEn" id="descriptionEn" placeholder="Bekky Barber is a barber shop that..." />
            <p className="text-sm text-destructive ">{formState.clientFieldsErrors?.descriptionEn?.[0]}</p>
        </div>
        <div className="flex flex-col gap-2">
            <Label className="font-bold" htmlFor="descriptionAr">Description (Ar)</Label>
            <Textarea disabled={isPending} value={formValues.descriptionAr} onChange={(e) => setFormValues({ ...formValues, descriptionAr: e.target.value })} name="descriptionAr" id="descriptionAr" placeholder="بيكي باربر هو محل حلاقة أنيق يقدم خدمات متنوعة، بما في ذلك الحلاقة وتهذيب الذقن ." />
            <p className="text-sm text-destructive ">{formState.clientFieldsErrors?.descriptionAr?.[0]}</p>
        </div>
        <div className="flex flex-col gap-2">
            <Label className="font-bold" htmlFor="websiteUrl">Website (Optional)</Label>
            <Input disabled={isPending} value={formValues.websiteUrl} onChange={(e) => setFormValues({ ...formValues, websiteUrl: e.target.value })} type="text" name="websiteUrl" id="websiteUrl" placeholder="https://www.bekkybarber.com" />
            <p className="text-sm text-destructive ">{formState.clientFieldsErrors?.websiteUrl?.[0]}</p>
        </div>
        <div className="flex flex-col gap-2">
            <Label className="font-bold" htmlFor="genderOfCustomers">Who is your business for?</Label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-stretch  ">
                <CategoryCard defaultChecked={formValues.genderOfCustomers === GenderOfCustomers.Male} inputName="genderOfCustomers" inputValue="male" categoryName="Men" categoryIconUrl="/man-avatar.png" isPending={isPending} categoryIconWidth={48} categoryIconHeight={48} />
                <CategoryCard defaultChecked={formValues.genderOfCustomers === GenderOfCustomers.Female} inputName="genderOfCustomers" inputValue="female" categoryName="Women" categoryIconUrl="/man-avatar.png" isPending={isPending} categoryIconWidth={48} categoryIconHeight={48} />
                <CategoryCard defaultChecked={formValues.genderOfCustomers === GenderOfCustomers.Both} inputName="genderOfCustomers" inputValue="both" categoryName="Both" categoryIconUrl="/man-avatar.png" categoryIconWidth={48} categoryIconHeight={48} isPending={isPending} />
            </div>


            <p className="text-sm text-destructive ">{formState.clientFieldsErrors?.genderOfCustomers?.[0]}</p>
        </div>



    </form>
}