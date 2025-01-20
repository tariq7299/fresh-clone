
"use client"

import CategoryCard from "@/ui/components/custom/business-category-card";
import { useActionState, useEffect } from "react";
import { useBusinessFormContext } from "../../_components/business-form-provider";
import { BusinessCategoryFormData, handleSubmitBusinessCategory } from "../../_lib/form-actions";
import { ErrorFormState } from "@/lib/definitions/definitions";


export type Category = {
    id: number,
    name: string,
    description: string,
}

export type StoredTempCategory = {
    id: number | null,
}

export default function Form({ storedTempCategory, categories }: { storedTempCategory: StoredTempCategory | null, categories: Category[] }) {

    const { setIsLoading } = useBusinessFormContext()

    const initialState: ErrorFormState<{ categoryId?: string } | null, BusinessCategoryFormData> = {
        success: false,
        clientFieldsErrors: null,
        apiDataResponse: null,
        apiMsgs: "",
        formData: {
            categoryId: storedTempCategory?.id ? String(storedTempCategory?.id) : "",
        }
    }

    const [formState, formAction, isPending] = useActionState(handleSubmitBusinessCategory, initialState)


    useEffect(() => {
        setIsLoading(isPending)
    }, [isPending])

    return <form action={formAction} id="business-onboarding-form" className="flex flex-col gap-2 w-full  items-stretch m-auto  ">


        {formState.clientFieldsErrors?.categoryId && <p className="text-destructive text-sm py-2">You must select a category</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-stretch md:grid-cols-3 ">
            {categories.map((category: any) => (
                <CategoryCard key={category.id} categoryName={category.name} categoryIconUrl={"/categories/hair.png"} isPending={isPending} defaultChecked={storedTempCategory?.id === category.id} inputName="categoryId" inputValue={String(category.id)} />
            ))}
        </div>

    </form>

}