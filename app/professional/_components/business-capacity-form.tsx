"use client"
import { Label } from '@/ui/components/label';
import { Input } from '@/ui/components/input';
import { Textarea } from '@/ui/components/textarea';
import { useActionState } from 'react';
import { handleSubmitBusinessName, BusinessNameFormData, BusinessNameFieldErrors, handleSubmitBusinessCapacity } from '@/professional/_lib/form-actions';
import { useEffect, useState } from 'react';
import { useBusinessFormContext } from './business-form-provider';
import { ErrorFormState, SuccessFormState } from '@/lib/definitions/definitions';
import { StoredTempBusinessInfo } from '../_lib/definitions';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup, SelectLabel } from '@/ui/components/select';
import { z } from 'zod';

export type BusinessCapacityFormData = {
    capacity?: number | string
}

export type BusinessCapacityFieldErrors = {
    capacity?: string | string[]
}

// TODO: Create correect BusinessCapacityFOrmState
export type BusinessCapacityFormState = ErrorFormState<BusinessCapacityFieldErrors | null, BusinessCapacityFormData>




export default function BusinessCapacityForm({ storedTempCapacity }: { storedTempCapacity: number | null }) {

    const { setIsLoading } = useBusinessFormContext()

    const initialState: BusinessCapacityFormState = {
        success: false,
        clientFieldsErrors: null,
        apiDataResponse: null,
        apiMsgs: "",
        formData: {
            capacity: storedTempCapacity || ""
        }
    }

    // const initialState: ErrorFormState<BusinessCapacityFieldErrors |
    //     null, BusinessCapacityFormData> = {
    //     success: false,
    //     clientFieldsErrors: null,
    //     apiDataResponse: null,
    //     apiMsgs: "",
    //     formData: {
    //         nameEn: storedTempBusinessInfo?.name_en || "",
    //         nameAr: storedTempBusinessInfo?.name_ar || "",
    //         descriptionEn: storedTempBusinessInfo?.description_en || "",
    //         descriptionAr: storedTempBusinessInfo?.description_ar || "",
    //         websiteUrl: storedTempBusinessInfo?.website_url || "",
    //     }
    // }

    const [formValues, setFormValues] = useState<BusinessCapacityFormData>(initialState.formData)

    const [formState, formAction, isPending] = useActionState<BusinessCapacityFormState | void>(handleSubmitBusinessCapacity, initialState)


    useEffect(() => {
        setIsLoading(isPending)
    }, [isPending])

    return <form action={formAction} id="business-onboarding-form">
        <div className="flex flex-col gap-2 w-full max-w-lg p-5 py-24 min-h-dvh  items-center m-auto space-y-5">

            <div className="text-start space-y-1">

                <p className="text-sm text-muted-foreground text-start"> Account setup</p>

                <h1 className="text-3xl lg:text-4xl font-bold font-source-sans">How many clients can you serve at once?</h1>

                <p className="text-sm text-muted-foreground">This helps us understand your business capacity and optimize your booking schedule</p>
            </div>

            <div className="flex flex-col gap-5  h-full w-full pb-20">

                <div className="flex flex-col gap-2">
                    {/* <Label className="font-bold" htmlFor="capacity">Business capacity</Label> */}
                    <Select name="capacity" value={formValues.capacity?.toString() || ""} onValueChange={(value) => setFormValues({ capacity: Number(value) })}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a your business capacity" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Business capacity</SelectLabel>
                                {Array.from({ length: 10 }, (_, i) => i + 1).map(num => (
                                    <SelectItem key={num} value={num.toString()}>{num} {num === 1 ? "person" : "people"}</SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    {formState?.clientFieldsErrors?.capacity && <p className="text-destructive">{formState.clientFieldsErrors?.capacity}</p>}
                </div>



            </div>

        </div>
    </form>
}