"use client"

import { useActionState, useEffect, useState } from 'react';
import { useBusinessFormContext } from '../../../lib/providers/business-form-provider';
import { ErrorFormState } from '@/lib/definitions/definitions';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup, SelectLabel } from '@/ui/components/select';
import { handleSubmitBusinessCapacity } from '@/professional/_lib/form-actions';
import { handleFormResponse } from '@/lib/utils/utils';
import { SessionData } from '@/(auth)/_lib/definitions';
import useLocalStorage from '@/lib/hooks/use-local-storage';
import { useRouter } from 'next/navigation';
import SecureLS from 'secure-ls';
import { navigateToDashboard } from '@/(auth)/_lib/auth-client-services';

export type BusinessCapacityFormData = {
    capacity?: number | string
}

export type BusinessCapacityFieldErrors = {
    capacity?: string | string[]
}

// TODO: Create correect BusinessCapacityFOrmState
export type BusinessCapacityFormState = ErrorFormState<BusinessCapacityFieldErrors | null, BusinessCapacityFormData>

// TODO: Write types
export default function Form({ storedTempCapacity }: { storedTempCapacity: number | null }) {


    const [_, setSessionData] = useLocalStorage<SessionData | null>({ key: "user", defaultValue: null })
    const router = useRouter()

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

    const [formValues, setFormValues] = useState<BusinessCapacityFormData>(initialState.formData)

    const [formState, formAction, isPending] = useActionState<BusinessCapacityFormState | void>(handleSubmitBusinessCapacity, initialState)


    useEffect(() => {
        setIsLoading(isPending)
    }, [isPending])

    useEffect(() => {
        if (formState) {
            handleFormResponse({
                formState,
                successCallback: async () => {

                    if (formState.apiDataResponse) {

                        const sessionData = formState.apiDataResponse as SessionData

                        const ls = new SecureLS()
                        ls.set('token', sessionData.token)
                        setSessionData({ ...sessionData, has_business: true })

                        // Redirect to professional dashboard
                        navigateToDashboard(sessionData.role)


                    }
                },
            })
        }
    }, [formState])

    return <form action={formAction} id="business-onboarding-form" className="flex flex-col gap-2 w-full">





        <div className="flex flex-col gap-2 ">
            {/* <Label className="font-bold" htmlFor="capacity">Business capacity</Label> */}
            <Select disabled={isPending} name="capacity" value={formValues.capacity?.toString() || ""} onValueChange={(value) => setFormValues({ capacity: Number(value) })}>
                <SelectTrigger className="w-full p-6 text-md">
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


    </form>
}