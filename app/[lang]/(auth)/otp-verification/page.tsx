import OtpForm from "../_components/otp-form"
import { Alert, AlertDescription, AlertTitle } from "@/_ui/components/alert";
import { AlertCircle } from "lucide-react"
import { UserRole } from "../_lib/definitions";
import { Skeleton } from "@/_ui/components/skeleton";
import { Suspense } from "react";
import Loading from "../loading";
import { getDictionary } from "@/_lib/dictionaries";

interface OtpVerificationPageProps {
    params: {
        lang: "en" | "ar"
    };
    searchParams?: Promise<{
        notVerified?: string;
        email?: string;
        userRole?: UserRole.Professional | UserRole.Customer;
    }>;
}

export default async function OtpVerificationPage({ params: { lang }, searchParams }: OtpVerificationPageProps) {

    const dict = await getDictionary(lang);
    const params = await searchParams;
    const notVerified = params?.notVerified || "";
    const email = params?.email || "";
    const userRole = params?.userRole || UserRole.Customer;

    if (!email || !userRole) throw new Error("No email or user role provided for otp verfication!")

    return (
        <>
            {notVerified && (
                <div className="absolute top-0 left-0 w-full pt-20 p-5">
                    <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle className="rtl:font-cairo">{dict.auth.otp.email_verification.title}</AlertTitle>
                        <AlertDescription className="rtl:font-cairo">
                            {dict.auth.otp.email_verification.description}
                        </AlertDescription>
                    </Alert>
                </div>
            )}

            <div className="mt-auto flex flex-col gap-2 w-full max-w-md p-5">
                <h1 className="text-center text-2xl font-bold font-source-sans rtl:font-cairo">
                    {dict.auth.otp.title}
                </h1>

                <p className="text-muted-foreground text-sm text-center pb-4 rtl:font-cairo">
                    {dict.auth.otp.description}
                </p>

                <Suspense fallback={<Loading />}>
                    <OtpForm email={email} userRole={userRole} dict={dict} />
                </Suspense>
            </div>
        </>
    )
}
