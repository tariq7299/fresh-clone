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

interface FormProps {
    storedTempBusinessInfo: StoredTempBusinessInfo | null;
    dict: {
        onboarding: {
            business_name: {
                form: {
                    name_en: {
                        label: string;
                        placeholder: string;
                    };
                    name_ar: {
                        label: string;
                        placeholder: string;
                    };
                    description_en: {
                        label: string;
                        placeholder: string;
                    };
                    description_ar: {
                        label: string;
                        placeholder: string;
                    };
                    website: {
                        label: string;
                        placeholder: string;
                    };
                    gender: {
                        label: string;
                        men: string;
                        women: string;
                        both: string;
                    };
                };
            };
        };
    };
}

export default function Form({ storedTempBusinessInfo, dict }: FormProps) {

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
            <Label className="font-bold rtl:font-cairo" htmlFor="nameEn">
                {dict.onboarding.business_name.form.name_en.label}
            </Label>
            <Input
                dir="ltr"
                disabled={isPending}
                value={formValues.nameEn}
                onChange={(e) => setFormValues({ ...formValues, nameEn: e.target.value })}
                type="text"
                name="nameEn"
                id="nameEn"
                placeholder={dict.onboarding.business_name.form.name_en.placeholder}
            />
            <p className="text-sm text-destructive rtl:font-cairo">{formState.clientFieldsErrors?.nameEn?.[0]}</p>
        </div>
        <div className="flex flex-col gap-2">
            <Label className="font-bold rtl:font-cairo" htmlFor="nameAr">
                {dict.onboarding.business_name.form.name_ar.label}
            </Label>
            <Input disabled={isPending} value={formValues.nameAr} onChange={(e) => setFormValues({ ...formValues, nameAr: e.target.value })} type="text" name="nameAr" id="nameAr" placeholder={dict.onboarding.business_name.form.name_ar.placeholder} />
            <p className="text-sm text-destructive rtl:font-cairo">{formState.clientFieldsErrors?.nameAr?.[0]}</p>
        </div>
        <div className="flex flex-col gap-2">
            <Label className="font-bold rtl:font-cairo" htmlFor="descriptionEn">
                {dict.onboarding.business_name.form.description_en.label}
            </Label>
            <Textarea dir="ltr" disabled={isPending} value={formValues.descriptionEn} onChange={(e) => setFormValues({ ...formValues, descriptionEn: e.target.value })} name="descriptionEn" id="descriptionEn" placeholder={dict.onboarding.business_name.form.description_en.placeholder} />
            <p className="text-sm text-destructive rtl:font-cairo">{formState.clientFieldsErrors?.descriptionEn?.[0]}</p>
        </div>
        <div className="flex flex-col gap-2">
            <Label className="font-bold rtl:font-cairo" htmlFor="descriptionAr">
                {dict.onboarding.business_name.form.description_ar.label}
            </Label>
            <Textarea disabled={isPending} value={formValues.descriptionAr} onChange={(e) => setFormValues({ ...formValues, descriptionAr: e.target.value })} name="descriptionAr" id="descriptionAr" placeholder={dict.onboarding.business_name.form.description_ar.placeholder} />
            <p className="text-sm text-destructive rtl:font-cairo">{formState.clientFieldsErrors?.descriptionAr?.[0]}</p>
        </div>
        <div className="flex flex-col gap-2">
            <Label className="font-bold rtl:font-cairo" htmlFor="websiteUrl">
                {dict.onboarding.business_name.form.website.label}
            </Label>
            <Input dir="ltr" type="url" disabled={isPending} value={formValues.websiteUrl} onChange={(e) => setFormValues({ ...formValues, websiteUrl: e.target.value })} name="websiteUrl" id="websiteUrl" placeholder={dict.onboarding.business_name.form.website.placeholder} />
            <p className="text-sm text-destructive rtl:font-cairo">{formState.clientFieldsErrors?.websiteUrl?.[0]}</p>
        </div>
        <div className="flex flex-col gap-2">
            <Label className="font-bold rtl:font-cairo" htmlFor="genderOfCustomers">
                {dict.onboarding.business_name.form.gender.label}
            </Label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-stretch">
                <CategoryCard
                    defaultChecked={formValues.genderOfCustomers === GenderOfCustomers.Male}
                    inputName="genderOfCustomers"
                    inputValue="male"
                    categoryName={dict.onboarding.business_name.form.gender.men}
                    categoryIconUrl="/man-avatar.png"
                    isPending={isPending}
                    categoryIconWidth={48}
                    categoryIconHeight={48}
                />
                <CategoryCard
                    defaultChecked={formValues.genderOfCustomers === GenderOfCustomers.Female}
                    inputName="genderOfCustomers"
                    inputValue="female"
                    categoryName={dict.onboarding.business_name.form.gender.women}
                    categoryIconUrl="/man-avatar.png"
                    isPending={isPending}
                    categoryIconWidth={48}
                    categoryIconHeight={48}
                />
                <CategoryCard
                    defaultChecked={formValues.genderOfCustomers === GenderOfCustomers.Both}
                    inputName="genderOfCustomers"
                    inputValue="both"
                    categoryName={dict.onboarding.business_name.form.gender.both}
                    categoryIconUrl="/man-avatar.png"
                    isPending={isPending}
                    categoryIconWidth={48}
                    categoryIconHeight={48}
                />
            </div>
            <p className="text-sm text-destructive rtl:font-cairo">{formState.clientFieldsErrors?.genderOfCustomers?.[0]}</p>
        </div>

    </form>
}