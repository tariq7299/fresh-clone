"use client"

import { Button } from "@/ui/components/custom/button";
import { Label } from "@/ui/components/label";
import { Input } from "@/ui/components/input";
import Link from "next/link";
import { useActionState, useEffect } from 'react'
import { login, logout } from "@/(auth)/_lib/actions";
import { LoginFormState } from "../_lib/definitions";
import SecureLS from "secure-ls";
import { toastApiMsgs } from "@/lib/utils/api/toastApiMsgs";
import { useSearchParams } from 'next/navigation'
import { Alert, AlertCircle, AlertDescription, AlertTitle } from "@/ui/components/alert";

// Constants
const INITIAL_STATE: LoginFormState = {
    messageType: "client",
    message: "",
    errors: {},
    token: null,
    success: false
};

export default function LoginForm() {

    const ls = new SecureLS();
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

        if (formState.success && formState.token) {
            ls.set('token', formState.token);
            toastApiMsgs(formState.message, "success");

            // Use localstorage to 

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