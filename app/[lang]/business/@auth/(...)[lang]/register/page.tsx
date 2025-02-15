import { getDictionary } from "@/_lib/dictionaries";
import RegisterDialog from "@/[lang]/business/_components/register-dialog";
import Loading from "@/[lang]/(auth)/loading";
import { Suspense } from "react";

interface RegisterPageProps {
    params: Promise<{
        lang: "en" | "ar";
    }>;
}

export default async function Page({ params }: RegisterPageProps) {

    const lang = (await params)?.lang;
    const validLang = lang === "en" || lang === "ar" ? lang : "en";
    const dict = await getDictionary(validLang);

    return <Suspense fallback={<Loading />}>
        <RegisterDialog dict={dict} />
    </Suspense>

}