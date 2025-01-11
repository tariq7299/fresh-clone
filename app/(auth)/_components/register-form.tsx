"use client"

import { Label } from "@/ui/components/label";
import { Input } from "@/ui/components/input";
import { Button } from "@/ui/components/custom/button";
import Link from "next/link";
import { SuccessRegisterFormState, ErrorRegisterFormState, SessionData } from "../_lib/definitions";
import { useActionState, useEffect } from "react";
import { register } from "../_lib/form-actions";
import { handleFormResponse } from "@/lib/utils/utils";
import { navigateToOtp } from "../_lib/auth-client-services";
import useLocalStorage from "@/lib/hooks/use-local-storage";
import { logoutUserServerSide } from "../_lib/auth-server-services";
import { logoutUserClientSide } from "../_lib/auth-client-services";
import { useRouter, usePathname } from "next/navigation";
import { PhoneInput } from "@/ui/components/custom/phone-input";
export default function RegisterForm({ userType }: { userType: string }) {


    const INITIAL_STATE: SuccessRegisterFormState | ErrorRegisterFormState = {
        success: false,
        clientFieldsErrors: null,
        apiDataResponse: null,
        apiMsgs: "",
        formData: {
            userType: userType as "customer" | "professional",
            email: "",
            password: "",
            password_confirmation: "",
            firstName: "",
            lastName: "",
            phone_number: "",
        }
    };
    const [formState, formAction, isPending] = useActionState(register, INITIAL_STATE);

    const router = useRouter()
    const pathname = usePathname()

    const [_, setSessionData] = useLocalStorage<SessionData | null>({ key: "user", defaultValue: null })

    // Write commnets
    useEffect(() => {

        // Write types
        // if (!formState) return;

        handleFormResponse(
            formState,
            // This is a successCallback function that will be called only when the form is submitted and retured response is a success
            async () => {
                console.log("formState.apiDataResponse", formState.apiDataResponse)

                await logoutUserServerSide()
                logoutUserClientSide(router, setSessionData, pathname)

                navigateToOtp(formState.apiDataResponse?.email as string)
            }
        )


    }, [formState]);

    useEffect(() => {

        // Write types
        // if (!formState) return;

        handleFormResponse(
            formState,
            // This is a successCallback function that will be called only when the form is submitted and retured response is a success
            async () => {
                console.log("formState.apiDataResponse", formState.apiDataResponse)
                await logoutUserServerSide()
                logoutUserClientSide(router, setSessionData, pathname)
                navigateToOtp(formState.apiDataResponse?.email as string)
            }
        )


    }, []);




    return <form action={formAction} className="flex flex-col gap-4">
        <div className="flex gap-2 w-full">

            <div className="flex flex-col gap-2 w-full">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                    defaultValue={formState?.formData?.firstName}
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="Enter your first name"
                    className="w-full"
                />
                {formState.clientFieldsErrors?.firstName && <p className="text-red-500 text-sm">{formState.clientFieldsErrors.firstName?.[0]}</p>}
            </div>
            <div className="flex flex-col gap-2 w-full">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                    defaultValue={formState?.formData?.lastName}
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Enter your last name"
                    className="w-full"
                />
                {formState.clientFieldsErrors?.lastName && <p className="text-red-500 text-sm">{formState.clientFieldsErrors.lastName?.[0]}</p>}
            </div>
        </div>
        <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
                defaultValue={formState?.formData?.email}
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
            />
            {formState.clientFieldsErrors?.email && <p className="text-red-500 text-sm">{formState.clientFieldsErrors.email?.[0]}</p>}
        </div>
        <div className="flex flex-col gap-2">
            <Label htmlFor="phone_number">Phone number</Label>
            <PhoneInput name="phone_number" countries={['EG', 'SA']} defaultCountry='SA' placeholder='0501234567' />
            {/* <Input
                defaultValue={formState?.formData?.phone_number}
                type="text"
                name="phone_number"
                id="phone_number"
                placeholder="Enter your phone number"
            /> */}
            {formState.clientFieldsErrors?.phone_number && <p className="text-red-500 text-sm">{formState.clientFieldsErrors.phone_number?.[0]}</p>}
        </div>
        <div className="flex flex-col gap-2">
            <Label className="flex justify-between" htmlFor="password">Password</Label>
            <Input
                defaultValue={formState?.formData?.password}
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
            />
            {formState.clientFieldsErrors?.password && <p className="text-red-500 text-sm">{formState.clientFieldsErrors.password?.[0]}</p>}
        </div>
        <div className="flex flex-col gap-2">
            <Label className="flex justify-between" htmlFor="password_confirmation">Confirm Password</Label>
            <Input
                defaultValue={formState?.formData?.password_confirmation}
                type="password"
                name="password_confirmation"
                id="password_confirmation"
                placeholder="Confirm your password"
            />
            {formState.clientFieldsErrors?.password_confirmation && <p className="text-red-500 text-sm">{formState.clientFieldsErrors.password_confirmation?.[0]}</p>}
        </div>

        <Button
            type="submit"
            loading={isPending}
            variant="default"
            className="w-full font-bold"
            disabled={isPending}
        >
            {isPending ? 'Checking...' : 'Continue'}
        </Button>

        <div className="flex justify-between items-center">
        </div>
        <div className="flex flex-col justify-center items-center">
            <p className="font-bold text-center">{userType === "professional" ? "Have a business account?" : "Have a customer account?"}</p>
            <Link href="/login " className=" text-center text-accent text-sm">{userType === "professional" ? "Sign in as a professional" : "Sign in as a customer"}</Link>

        </div>

    </form>

}