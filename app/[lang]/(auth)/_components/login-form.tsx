"use client"

import { Button } from "@/_ui/components/custom/button";
import { Label } from "@/_ui/components/label";
import { Input } from "@/_ui/components/input";
import Link from "next/link";
import { useActionState, useEffect } from 'react'
import { endUserSession } from "@/[lang]/(auth)/_lib/auth-client-services";
import { loginUserClientSide, navigateToDashboard } from "@/[lang]/(auth)/_lib/auth-client-services";
import { SuccessLoginFormState, ErrorLoginFormState, SessionData, UserRole } from "../_lib/definitions";
import { useSearchParams } from 'next/navigation'
import { Alert, AlertDescription, AlertTitle } from "@/_ui/components/alert";
import { AlertCircle } from "lucide-react"
import useLocalStorage from "@/_lib/hooks/use-local-storage";
import { useRouter } from 'next/navigation'
import { handleFormResponse } from "@/_lib/utils/utils";
import { PasswordInput } from "@/_ui/components/custom/password-input";
import { login } from "../_lib/form-actions";
// Constants
const INITIAL_STATE: SuccessLoginFormState | ErrorLoginFormState = {
    success: false,
    clientFieldsErrors: null,
    apiDataResponse: null,
    apiMsgs: "",
    formData: {
        email: "",
        password: ""
    }
};

interface LoginFormProps {
    dict: {
        auth: {
            login: {
                email: {
                    label: string;
                    placeholder: string;
                };
                password: {
                    label: string;
                    placeholder: string;
                };
                continue: string;
                checking: string;
                first_time: string;
                sign_up: string;
                session_expired: {
                    title: string;
                    description: string;
                };
            };
        };
    };
}

export default function LoginForm({ dict }: LoginFormProps) {
    const router = useRouter()
    // const pathname = usePathname()

    const [_, setSessionData] = useLocalStorage<SessionData | null>({ key: "user", defaultValue: null })

    const [formState, formAction, isPending] = useActionState(login, INITIAL_STATE);

    // Get the sessionEnded query
    // THis query will be add to the url of login, when 
    const searchParams = useSearchParams();
    const sessionEnded = searchParams.get("sessionEnded") === "true";
    const userRole = searchParams.get("type") as UserRole;
    const loginRequiredForBooking = searchParams.get("loginRequiredForBooking") === "true";


    // Move session cleanup to useEffect to avoid side effects during render
    useEffect(() => {
        if (sessionEnded) {
            endUserSession(setSessionData);
        }
    }, [sessionEnded]);


    // Write commnets
    useEffect(() => {
        handleFormResponse({
            formState,
            successCallback: () => {
                loginUserClientSide(formState.apiDataResponse as SessionData, setSessionData)
                if (loginRequiredForBooking) {
                    if (formState.apiDataResponse?.role as UserRole === "customer") {
                        router.back()
                    } else {
                        navigateToDashboard(formState.apiDataResponse?.role as UserRole)
                    }
                } else {
                    navigateToDashboard(formState.apiDataResponse?.role as UserRole)
                }
            }
        })
    }, [formState]);

    return (
        <>
            {/* If the session ended, show the alert */}
            {sessionEnded && (
                <div className="absolute top-0 left-0 w-full pt-20 p-5">
                    <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>{dict.auth.login.session_expired.title}</AlertTitle>
                        <AlertDescription>
                            {dict.auth.login.session_expired.description}
                        </AlertDescription>
                    </Alert>
                </div>
            )}

            <form action={formAction} className="flex flex-col gap-4">
                <FormField
                    defaultValue={formState?.formData?.email}
                    disabled={isPending}
                    required={true}
                    label={dict.auth.login.email.label}
                    name="email"
                    type="email"
                    placeholder={dict.auth.login.email.placeholder}
                    error={formState?.clientFieldsErrors?.email?.[0]}
                />

                <div className="flex flex-col gap-2">
                    <Label htmlFor="password" className="rtl:font-cairo">
                        {dict.auth.login.password.label}
                    </Label>
                    <PasswordInput
                        defaultValue={formState?.formData?.password}
                        disabled={isPending}
                        required={true}
                        name="password"
                        placeholder={dict.auth.login.password.placeholder}
                    />
                    {formState?.clientFieldsErrors?.password?.[0] && (
                        <p className="text-red-500 text-sm">
                            {formState?.clientFieldsErrors?.password?.[0]}
                        </p>
                    )}
                </div>

                <Button
                    loading={isPending}
                    variant="default"
                    className="w-full font-bold rtl:font-cairo"
                    disabled={isPending}
                >
                    {isPending ? dict.auth.login.checking : dict.auth.login.continue}
                </Button>

                <div className="flex flex-col justify-center items-center">
                    <p className="font-bold text-center rtl:font-cairo">
                        {dict.auth.login.first_time}
                    </p>

                    {/* If the login is required for booking, and replace the link with the for-who page, instead of pushing, so if i go back, i will not be redirected to the login page ! and instead i will be redirected to the 'business/[id]/booking/time' page */}
                    {loginRequiredForBooking ? (
                        <Link
                            href={`/register?${new URLSearchParams({
                                type: userRole,
                                loginRequiredForBooking: 'true'
                            }).toString()}`}
                            className="text-center text-accent text-sm rtl:font-cairo"
                            replace={true}
                        >
                            {dict.auth.login.sign_up}
                        </Link>
                    ) : (
                        <Link
                            href="/for-who"
                            className="text-center text-accent text-sm rtl:font-cairo"
                            replace
                        >
                            {dict.auth.login.sign_up}
                        </Link>
                    )}


                </div>
            </form>
        </>
    );
}

// Extracted form field component for reusability
interface FormFieldProps {
    label: React.ReactNode;
    name: string;
    type: string;
    placeholder: string;
    error?: string;
    disabled?: boolean;
    defaultValue?: string;
    required?: boolean;
}

function FormField({ label, name, type, placeholder, error, disabled, defaultValue, required }: FormFieldProps) {
    return (
        <div className="flex flex-col gap-2">
            <Label htmlFor={name} className="rtl:font-cairo">{label}</Label>
            <Input
                required={required}
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                disabled={disabled}
                defaultValue={defaultValue}
                className="rtl:font-cairo"
            />
            {error && <p className="text-red-500 text-sm rtl:font-cairo">{error}</p>}
        </div>
    );
}