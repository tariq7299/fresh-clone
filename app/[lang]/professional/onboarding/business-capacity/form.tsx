"use client"

import { useActionState, useEffect, useState } from 'react';
import { useBusinessFormContext } from '../../../../_lib/providers/business-form-provider';
import { ErrorFormState } from '@/_lib/definitions/definitions';
import { handleSubmitBusinessCapacity } from '@/[lang]/professional/_lib/form-actions';
import { handleFormResponse } from '@/_lib/utils/utils';
import { SessionData } from '@/[lang]/(auth)/_lib/definitions';
import useLocalStorage from '@/_lib/hooks/use-local-storage';
import { useRouter } from 'next/navigation';
import SecureLS from 'secure-ls';
import { navigateToDashboard } from '@/[lang]/(auth)/_lib/auth-client-services';
import { redirectToLoginIfNotAuthenticated } from '@/[lang]/(auth)/_lib/redirect-to-login-if-not-authenticated';
import { Dictionary } from '@/dictionaries/types';

export type BusinessCapacityFormData = {
    capacity?: number | string
}

export type BusinessCapacityFieldErrors = {
    capacity?: string | string[]
}

// TODO: Create correect BusinessCapacityFOrmState
export type BusinessCapacityFormState = ErrorFormState<BusinessCapacityFieldErrors | null, BusinessCapacityFormData>

// TODO: Write types
export default function Form({
    storedTempCapacity,
    dict
}: {
    storedTempCapacity: number | null,
    dict: Dictionary
}) {
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
                        navigateToDashboard(sessionData.role)
                    }
                },
                errorCallback: () => {
                    redirectToLoginIfNotAuthenticated(formState.apiMsgs, ["sessionEnded=true"])
                }
            })
        }
    }, [formState])

    return (
        <form action={formAction} id="business-onboarding-form" className="flex flex-col gap-2 w-full">
            <div className="flex flex-col gap-2">
                <label htmlFor="capacity" className="font-bold sr-only">
                    {dict.onboarding.business_capacity.form.select.label}
                </label>
                <select
                    id="capacity"
                    name="capacity"
                    disabled={isPending}
                    value={String(formValues?.capacity)}
                    onChange={(e) => setFormValues({ capacity: e.target.value })}
                    className="w-full p-3 text-md border rounded-lg"
                >
                    <option value="" disabled className="hover:bg-accent-100">
                        {dict.onboarding.business_capacity.form.select.placeholder}
                    </option>
                    {Array.from({ length: 10 }, (_, i) => i + 1).map(num => (
                        <option key={num} value={num.toString()}>
                            {num} {num === 1
                                ? dict.onboarding.business_capacity.form.select.person
                                : dict.onboarding.business_capacity.form.select.people}
                        </option>
                    ))}
                </select>

                <p className="text-destructive">
                    {dict.onboarding.business_capacity.form.validation[formState?.clientFieldsErrors?.capacity as keyof typeof dict.onboarding.business_capacity.form.validation]}
                </p>
            </div>
        </form>
    )
}