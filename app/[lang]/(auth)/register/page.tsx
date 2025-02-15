import { Suspense } from "react";
import RegisterForm from "../_components/register-form";
import { UserRole } from "../_lib/definitions";
import Loading from "../loading";
import { getDictionary } from "@/_lib/dictionaries";

interface RegisterPageProps {
    params: Promise<{
        lang: "en" | "ar";
    }>;
    searchParams?: Promise<{
        type?: string;
    }>;
}

export default async function RegisterPage({ params, searchParams }: RegisterPageProps) {

    const lang = (await params)?.lang;
    const dict = await getDictionary(lang);
    const type = (await searchParams)?.type || "";

    if (!type) throw new Error("No user type provided for register page!");

    return (
        <div className="mt-auto flex flex-col gap-2 w-full max-w-md p-5 pt-20">
            <h1 className="text-center text-2xl font-bold font-source-sans rtl:font-cairo">
                {dict.auth.register.title}
            </h1>
            <p className="text-muted-foreground text-sm text-center pb-4 rtl:font-cairo">
                {type === UserRole.Professional
                    ? dict.auth.register.description.professional
                    : dict.auth.register.description.customer}
            </p>

            <Suspense fallback={<Loading />}>
                <RegisterForm userRole={type} dict={dict} />
            </Suspense>
        </div>
    );
}
