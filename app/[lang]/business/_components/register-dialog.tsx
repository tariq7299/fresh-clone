"use client";

import RegisterForm from "@/[lang]/(auth)/_components/register-form";
import { UserRole } from "@/[lang]/(auth)/_lib/definitions";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/_ui/components/dialog";
import { useRouter, useSearchParams } from "next/navigation";

interface RegisterDialogProps {
    dict: {
        auth: {
            register: {
                title: string;
                description: {
                    customer: string;
                    professional: string;
                };
                first_name: {
                    label: string;
                    placeholder: string;
                };
                last_name: {
                    label: string;
                    placeholder: string;
                };
                email: {
                    label: string;
                    placeholder: string;
                };
                phone: {
                    label: string;
                    placeholder: string;
                };
                password: {
                    label: string;
                    placeholder: string;
                };
                confirm_password: {
                    label: string;
                    placeholder: string;
                };
                continue: string;
                checking: string;
                have_account: {
                    customer: string;
                    professional: string;
                };
                sign_in: {
                    customer: string;
                    professional: string;
                };
            };
        };
    };
}

export default function RegisterDialog({ dict }: RegisterDialogProps) {

    const router = useRouter();
    const searchParams = useSearchParams();
    const loginRequiredForBooking = searchParams.get("loginRequiredForBooking") === "true";
    const type = searchParams.get("type");

    return (
        <Dialog open={true} onOpenChange={() => router.back()}>
            <DialogContent className="sm:max-w-[525px] p-8">
                <DialogHeader>
                    <DialogTitle className="text-3xl font-bold rtl:font-cairo">
                        {dict.auth.register.title}
                    </DialogTitle>
                    <DialogDescription className="rtl:font-cairo">
                        {type === "customer" ? dict.auth.register.description.customer : dict.auth.register.description.professional}
                    </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                    <RegisterForm
                        userRole={type as UserRole}
                        loginRequiredForBooking={loginRequiredForBooking}
                        dict={dict}
                    />
                </div>
            </DialogContent>
        </Dialog>
    );
} 