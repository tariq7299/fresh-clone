
"use client"

import CategoryCard from "@/ui/components/custom/business-category-card";
import { useActionState, useEffect } from "react";
import { useBusinessFormContext } from "./business-form-provider";
import { BusinessCategoryFormData, handleSubmitBusinessCategory } from "../_lib/form-actions";
import { ErrorFormState } from "@/lib/definitions/definitions";


export type Category = {
    id: number,
    name: string,
    description: string,
}

export type StoredTempCategory = {
    id: number | null,
}

export default function BusinessCategoryForm({ storedTempCategory, categories }: { storedTempCategory: StoredTempCategory | null, categories: Category[] }) {

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




    return <form action={formAction} id="business-onboarding-form">
        <div className="flex flex-col gap-2 w-full max-w-4xl p-5 py-24 min-h-dvh items-stretch m-auto space-y-5 ">

            <div className="text-start space-y-1">

                <p className="text-sm text-muted-foreground text-start"> Account setup</p>

                <h1 className="text-3xl lg:text-4xl font-bold font-source-sans"> What's your speciality?</h1>

                <p className="text-sm text-muted-foreground ">Choose a category that best describes your business.</p>
            </div>

            {formState.clientFieldsErrors?.categoryId && <p className="text-destructive text-sm py-2">You must select a category</p>}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-stretch md:grid-cols-3 ">
                {categories.map((category: any) => (
                    <CategoryCard key={category.id} categoryName={category.name} categoryIconUrl={"/categories/hair.png"} isPending={isPending} defaultChecked={storedTempCategory?.id === category.id} inputName="categoryId" inputValue={String(category.id)} />
                ))}
            </div>

        </div>
    </form>

}