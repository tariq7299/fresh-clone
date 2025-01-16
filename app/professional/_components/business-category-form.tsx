
"use client"

import BusinessCategoryCard from "@/ui/components/custom/business-category-card";
import { useActionState, useEffect } from "react";
import { useBusinessFormContext } from "./business-form-provider";
import { handleSubmitBusinessCategory } from "../_lib/form-actions";

export default function BusinessCategoryForm({ storedStepCategory, categories }: { storedStepCategory: any, categories: any }) {

    const { setIsLoading } = useBusinessFormContext()

    const initialState = {
        success: false,
        clientFieldsErrors: null,
        apiDataResponse: null,
        apiMsgs: "",
        formData: {
            category_id: storedStepCategory?.category_id || "",
        }
    }

    const [formState, formAction, isPending] = useActionState(handleSubmitBusinessCategory, initialState)

    console.log("formStateCLIENT", formState)
    console.log("storedStepCategory", storedStepCategory)

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

            {formState.clientFieldsErrors?.category_id && <p className="text-destructive text-sm py-2">You must select a category</p>}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-stretch md:grid-cols-3 ">
                {categories.map((category: any) => (
                    <BusinessCategoryCard key={category.id} categoryName={category.name} categoryIconUrl={"/categories/hair.png"} categoryId={category.id} isPending={isPending} defaultChecked={storedStepCategory?.category_id === category.id} />
                ))}
            </div>

        </div>
    </form>

}