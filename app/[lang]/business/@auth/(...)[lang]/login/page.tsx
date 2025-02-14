import { getDictionary } from "@/_lib/dictionaries";
import LoginDialog from "@/[lang]/business/_components/login-dialog";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/_ui/components/dialog";

interface LoginPageProps {
    params: Promise<{
        lang: "en" | "ar";
    }>;
}

export default async function Page({ params }: LoginPageProps) {

    const { lang } = await params;

    const dict = await getDictionary(lang);

    return <LoginDialog dict={dict} />
}