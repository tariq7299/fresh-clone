import { getDictionary } from "@/_lib/dictionaries";
import ForWhoDialog from "@/[lang]/(home)/_components/for-who-dialog";
import { Suspense } from "react";
import Loading from "@/[lang]/(auth)/loading";

interface ForWhoPageProps {
    params: {
        lang: "en" | "ar"
    }
}

export default async function ForWhoPage({ params: { lang } }: ForWhoPageProps) {

    const dict = await getDictionary(lang === "ar" ? "ar" : "en");

    return (
        <Suspense fallback={<Loading />}>
            <ForWhoDialog dict={dict} />
        </Suspense>
    );
}