"use client"

import { Button } from "@/ui/components/custom/button";
import { Label } from "@/ui/components/label";
import { Input } from "@/ui/components/input";
import Link from "next/link";
import { useActionState, useEffect } from 'react'
import { login, logout } from "@/(auth)/_lib/actions";
import { LoginFormState, SessionData } from "../_lib/definitions";
import SecureLS from "secure-ls";
import { toastApiMsgs } from "@/lib/utils/api/toastApiMsgs";
import { useSearchParams } from 'next/navigation'
import { Alert, AlertDescription, AlertTitle } from "@/ui/components/alert";
import { AlertCircle } from "lucide-react"
import useLocalStorage from "@/lib/hooks/use-local-storage";
import { useRouter } from 'next/navigation'
import { redirectToOtpIfNotVerified } from "@/lib/utils/api/redirect-otp-if-not-verified";


// Constants
const INITIAL_STATE: LoginFormState = {
    messageType: "client",
    message: "",
    errors: {},
    sessionData: null,
    success: false
};

export default function LoginForm() {

    const ls = new SecureLS();

    const router = useRouter()

    const [sessionData, setSessionData] = useLocalStorage<SessionData | null>({ key: "user", defaultValue: null })

    const [formState, formAction, isPending] = useActionState(login, INITIAL_STATE);

    // Get the sessionEnded query
    // THis query will be add to the url of login, when 
    const searchParams = useSearchParams();
    const sessionEnded = searchParams.get("sessionEnded") === "true";
    console.log("formState", formState)

    // Move session cleanup to useEffect to avoid side effects during render
    useEffect(() => {
        if (sessionEnded) {
            endUserSession();
        }
    }, [sessionEnded]);

    const endUserSession = async () => {
        try {
            await logout();
            ls.remove('token');
        } catch (error) {
            console.error('Error ending session:', error);
            toastApiMsgs('Error ending session', "destructive");
        }
    };

    console.log("formState", formState)

    // Write commnets
    useEffect(() => {

        if (!formState) return;

        if (formState.success && formState.sessionData) {
            ls.set('token', formState.sessionData.token);
            toastApiMsgs(formState.message, "success");

            // Use localstorage to store user info
            // Then redirect user to his dashboard/home depending on his role
            setSessionData(formState.sessionData)
            redirectToOtpIfNotVerified(formState.sessionData.status, formState.sessionData.responseCode)
            console.log("sessionData", sessionData)

            if (formState.sessionData.role === "stakeholder") {
                router.push("/professional/dashboard")
            } else if (formState.sessionData.role === "admin") {
                router.push("/admin/dashboard")
            } else if (formState.sessionData.role === "customer") {
                router.push("/")
            }

        }

        if (!formState.success && formState.messageType === "server") {
            console.log("formState.message", formState.message)
            toastApiMsgs(formState.message, "destructive");
        }

    }, [formState]);

    return (
        <>
            {/* If the session ended, show the alert */}
            {sessionEnded && (
                <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>
                        Your session has expired. Please log in again.
                    </AlertDescription>
                </Alert>
            )}

            <form action={formAction} className="flex flex-col gap-4">
                <FormField
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    error={formState?.errors?.email?.[0]}
                />

                <FormField
                    label={
                        <div className="flex justify-between w-full">
                            <span>Password</span>
                            <Link href="/forgot-password" className="text-accent text-sm">
                                Forgot your password?
                            </Link>
                        </div>
                    }
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    error={formState?.errors?.password?.[0]}
                />

                <Button
                    variant="default"
                    className="w-full font-bold"
                    disabled={isPending}
                >
                    {isPending ? 'Loading...' : 'Continue'}
                </Button>

                <div className="flex flex-col justify-center items-center">
                    <p className="font-bold text-center">First time?</p>
                    <Link href="/for-who" className="text-center text-accent text-sm">
                        Sign up
                    </Link>
                </div>
                {/* 
            {formState?.message && (
                <p className="mt-2 text-sm text-red-500">
                    {formState.message}
                </p>
            )} */}
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
}

function FormField({ label, name, type, placeholder, error }: FormFieldProps) {
    return (
        <div className="flex flex-col gap-2">
            <Label htmlFor={name}>{label}</Label>
            <Input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    );
}