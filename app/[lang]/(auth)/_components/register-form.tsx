"use client"

import { Label } from "@/_ui/components/label";
import { Input } from "@/_ui/components/input";
import { Button } from "@/_ui/components/custom/button";
import Link from "next/link";
import { SuccessRegisterFormState, ErrorRegisterFormState, SessionData, UserRole } from "../_lib/definitions";
import { useActionState, useEffect } from "react";
import { register } from "../_lib/form-actions";
import { handleFormResponse } from "@/_lib/utils/utils";
import { navigateToOtp } from "../_lib/auth-client-services";
import useLocalStorage from "@/_lib/hooks/use-local-storage";
import { logoutUserServerSide } from "../_lib/auth-server-services";
import { logoutUserClientSide } from "../_lib/auth-client-services";
import { PhoneInput } from "@/_ui/components/custom/phone-input";

interface RegisterFormProps {
    userRole: string;
    loginRequiredForBooking?: boolean;
    dict: {
        auth: {
            register: {
                first_name: {
                    label: string;
                    placeholder: string;
                };
                last_name: {
                    label: string;
                    placeholder: string;
                };
                email: {
                    label: string;
                    placeholder: string;
                };
                phone: {
                    label: string;
                    placeholder: string;
                };
                password: {
                    label: string;
                    placeholder: string;
                };
                confirm_password: {
                    label: string;
                    placeholder: string;
                };
                continue: string;
                checking: string;
                have_account: {
                    customer: string;
                    professional: string;
                };
                sign_in: {
                    customer: string;
                    professional: string;
                };
            };
        };
    };
}

export default function RegisterForm({ userRole, loginRequiredForBooking = false, dict }: RegisterFormProps) {
    if (!userRole) throw new Error("No user role provided for register form!");

    const INITIAL_STATE: SuccessRegisterFormState | ErrorRegisterFormState = {
        success: false,
        clientFieldsErrors: null,
        apiDataResponse: null,
        apiMsgs: "",
        formData: {
            userRole: userRole as UserRole.Professional | UserRole.Customer,
            email: "",
            password: "",
            password_confirmation: "",
            first_name: "",
            last_name: "",
            phone_number: "",
        }
    };

    const [formState, formAction, isPending] = useActionState(register, INITIAL_STATE);
    const [_, setSessionData] = useLocalStorage<SessionData | null>({ key: "user", defaultValue: null });

    useEffect(() => {
        handleFormResponse({
            formState,
            successCallback: async () => {
                await logoutUserServerSide();
                logoutUserClientSide(setSessionData);

                loginRequiredForBooking
                    ? navigateToOtp(formState.apiDataResponse?.email as string, userRole as UserRole.Professional | UserRole.Customer, loginRequiredForBooking)
                    : navigateToOtp(formState.apiDataResponse?.email as string, userRole as UserRole.Professional | UserRole.Customer);
            }
        });
    }, [formState]);

    return (
        <form action={formAction} className="flex flex-col gap-4">
            <div className="flex gap-2 w-full">
                <div className="flex flex-col gap-2 w-full">
                    <Label htmlFor="firstName" className="rtl:font-cairo">
                        {dict.auth.register.first_name.label}
                    </Label>
                    <Input
                        defaultValue={formState?.formData?.first_name}
                        type="text"
                        name="first_name"
                        id="first_name"
                        placeholder={dict.auth.register.first_name.placeholder}
                        className="w-full rtl:font-cairo"
                    />
                    {formState.clientFieldsErrors?.first_name && (
                        <p className="text-red-500 text-sm rtl:font-cairo">
                            {formState.clientFieldsErrors.first_name?.[0]}
                        </p>
                    )}
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <Label htmlFor="lastName" className="rtl:font-cairo">
                        {dict.auth.register.last_name.label}
                    </Label>
                    <Input
                        defaultValue={formState?.formData?.last_name}
                        type="text"
                        name="last_name"
                        id="last_name"
                        placeholder={dict.auth.register.last_name.placeholder}
                        className="w-full rtl:font-cairo"
                    />
                    {formState.clientFieldsErrors?.last_name && (
                        <p className="text-red-500 text-sm rtl:font-cairo">
                            {formState.clientFieldsErrors.last_name?.[0]}
                        </p>
                    )}
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <Label htmlFor="email" className="rtl:font-cairo">
                    {dict.auth.register.email.label}
                </Label>
                <Input
                    defaultValue={formState?.formData?.email}
                    type="email"
                    name="email"
                    id="email"
                    placeholder={dict.auth.register.email.placeholder}
                    className="rtl:font-cairo"
                />
                {formState.clientFieldsErrors?.email && (
                    <p className="text-red-500 text-sm rtl:font-cairo">
                        {formState.clientFieldsErrors.email?.[0]}
                    </p>
                )}
            </div>
            <div className="flex flex-col gap-2">
                <Label htmlFor="phone_number" className="rtl:font-cairo">
                    {dict.auth.register.phone.label}
                </Label>
                <PhoneInput
                    name="phone_number"
                    countries={['EG', 'SA']}
                    defaultCountry='SA'
                    placeholder={dict.auth.register.phone.placeholder}
                />
                {formState.clientFieldsErrors?.phone_number && (
                    <p className="text-red-500 text-sm rtl:font-cairo">
                        {formState.clientFieldsErrors.phone_number?.[0]}
                    </p>
                )}
            </div>
            <div className="flex flex-col gap-2">
                <Label htmlFor="password" className="rtl:font-cairo">
                    {dict.auth.register.password.label}
                </Label>
                <Input
                    defaultValue={formState?.formData?.password}
                    type="password"
                    name="password"
                    id="password"
                    placeholder={dict.auth.register.password.placeholder}
                    className="rtl:font-cairo"
                />
                {formState.clientFieldsErrors?.password && (
                    <p className="text-red-500 text-sm rtl:font-cairo">
                        {formState.clientFieldsErrors.password?.[0]}
                    </p>
                )}
            </div>
            <div className="flex flex-col gap-2">
                <Label htmlFor="password_confirmation" className="rtl:font-cairo">
                    {dict.auth.register.confirm_password.label}
                </Label>
                <Input
                    defaultValue={formState?.formData?.password_confirmation}
                    type="password"
                    name="password_confirmation"
                    id="password_confirmation"
                    placeholder={dict.auth.register.confirm_password.placeholder}
                    className="rtl:font-cairo"
                />
                {formState.clientFieldsErrors?.password_confirmation && (
                    <p className="text-red-500 text-sm rtl:font-cairo">
                        {formState.clientFieldsErrors.password_confirmation?.[0]}
                    </p>
                )}
            </div>

            <Button
                type="submit"
                loading={isPending}
                variant="default"
                className="w-full font-bold rtl:font-cairo"
                disabled={isPending}
            >
                {isPending ? dict.auth.register.checking : dict.auth.register.continue}
            </Button>

            <div className="flex flex-col justify-center items-center">
                <p className="font-bold text-center rtl:font-cairo">
                    {userRole === UserRole.Professional
                        ? dict.auth.register.have_account.professional
                        : dict.auth.register.have_account.customer}
                </p>

                {loginRequiredForBooking ? (
                    <Link
                        href={`/login?${new URLSearchParams({
                            type: userRole,
                            loginRequiredForBooking: 'true'
                        }).toString()}`}
                        className="text-center text-accent text-sm rtl:font-cairo"
                        replace={true}
                    >
                        {userRole === UserRole.Professional
                            ? dict.auth.register.sign_in.professional
                            : dict.auth.register.sign_in.customer}
                    </Link>
                ) : (
                    <Link
                        href="/login"
                        className="text-center text-accent text-sm rtl:font-cairo"
                        replace
                    >
                        {userRole === UserRole.Professional
                            ? dict.auth.register.sign_in.professional
                            : dict.auth.register.sign_in.customer}
                    </Link>
                )}
            </div>
        </form>
    );
}