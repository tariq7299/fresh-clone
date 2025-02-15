import { getDictionary } from "@/_lib/dictionaries";
import LoginDialog from "@/[lang]/business/_components/login-dialog";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/_ui/components/dialog";

interface LoginPageProps {
    params: {
        lang: "en" | "ar";
    };
}

export default async function Page({ params }: LoginPageProps) {

    // Firt it doesn't need await because params.lang is not a promise
    const lang = params.lang
    // Second I am here checking if lang param is equal to en or ar, because in building the lang param get passed here as "lang" (string) !!! very weird
    const validLang = lang === "en" || lang === "ar" ? lang : "en"
    const dict = await getDictionary(validLang)

    return <LoginDialog dict={dict} />
}