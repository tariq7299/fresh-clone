"use client";

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/_ui/components/dialog";
import { useRouter } from "next/navigation";
import LoginForm from "@/[lang]/(auth)/_components/login-form";
import { Suspense } from "react";
import Loading from "@/[lang]/(auth)/loading";

export default function LoginDialog({ dict }: { dict: any }) {

    const router = useRouter();

    return (
        <Dialog open={true} onOpenChange={() => router.back()}>
            <DialogContent className="sm:max-w-[425px] p-8 pt-10">
                <DialogHeader className="">
                    <DialogTitle className="text-3xl font-bold rtl:font-cairo">
                        {dict.auth.login.title}
                    </DialogTitle>
                    <DialogDescription>
                        {dict.auth.login.description}
                    </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                    <Suspense fallback={<Loading />}>
                        <LoginForm dict={dict} />
                    </Suspense>
                </div>
            </DialogContent>
        </Dialog>
    );
}