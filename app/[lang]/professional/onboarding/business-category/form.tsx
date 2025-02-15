
"use client"

import CategoryCard from "@/_ui/components/custom/business-category-card";
import { useActionState, useEffect } from "react";
import { useBusinessFormContext } from "../../../../_lib/providers/business-form-provider";
import { BusinessCategoryFormData, handleSubmitBusinessCategory } from "../../_lib/form-actions";
import { ErrorFormState } from "@/_lib/definitions/definitions";


export type Category = {
    id: number,
    name: string,
    description: string,
}

export type StoredTempCategory = {
    id: number | null,
}

export default function Form({ storedTempCategory, categories, dict }: { storedTempCategory: StoredTempCategory | null, categories: Category[], dict: any }) {

    const { setIsLoading } = useBusinessFormContext()

    const initialState: ErrorFormState<{ categoryId?: string } | null, BusinessCategoryFormData> = {
        success: false,
        clientFieldsErrors: null,
        apiDataResponse: null,
        apiMsgs: "",
        formData: {
            categoryId: storedTempCategory?.id ? String(storedTempCategory?.id) : "4",
        }
    }

    console.log("initialState", initialState)

    const [formState, formAction, isPending] = useActionState(handleSubmitBusinessCategory, initialState)


    useEffect(() => {
        setIsLoading(isPending)
    }, [isPending])

    console.log("formState.clientFieldsErrors", formState.clientFieldsErrors)

    return <form action={formAction} id="business-onboarding-form" className="flex flex-col gap-2 w-full  items-stretch m-auto  ">


        <p className="text-destructive text-sm py-2">{dict.onboarding.business_category.form.category_id[formState.clientFieldsErrors?.categoryId?.[0] as keyof typeof dict.onboarding.business_category.form.category_id]}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-stretch md:grid-cols-3 ">
            {categories.map((category: any) => (
                <CategoryCard key={category.id} categoryName={category.name} categoryIconUrl={"/categories/hair.png"} isPending={isPending} defaultChecked={storedTempCategory?.id === category.id} inputName="categoryId" inputValue={String(category.id)} />
            ))}
        </div>

    </form>

}