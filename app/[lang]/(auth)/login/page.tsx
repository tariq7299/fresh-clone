import { Suspense } from "react";
import LoginForm from "../_components/login-form";
import Loading from "../loading";
import { getDictionary } from "@/_lib/dictionaries";

interface LoginPageProps {
    params: Promise<{
        lang: "en" | "ar";
    }>;
}

export default async function LoginPage({ params }: LoginPageProps) {
    const lang = (await params)?.lang
    const dict = await getDictionary(lang)

    return (
        <div className="mt-auto flex flex-col gap-2 w-full max-w-md p-5 pt-20">
            <h1 className="text-center text-2xl font-bold font-source-sans rtl:font-cairo">
                {dict.auth.login.title}
            </h1>
            <p className="text-muted-foreground text-sm text-center pb-4 rtl:font-cairo">
                {dict.auth.login.description}
            </p>

            <Suspense fallback={<Loading />}>
                <LoginForm dict={dict} />
            </Suspense>
        </div>
    );
}