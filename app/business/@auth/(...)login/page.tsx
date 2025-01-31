"use client";

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/_ui/components/dialog";
import { useRouter } from "next/navigation";
import LoginForm from "@/(auth)/_components/login-form";
import { Button } from "@/_ui/components/button";

export default function LoginPage() {
    const router = useRouter();

    return (
        <Dialog open={true} onOpenChange={() => router.back()}>
            <DialogContent className="sm:max-w-[425px] p-8">
                <DialogHeader className="">
                    <DialogTitle className="text-3xl font-bold p">Login</DialogTitle>
                    <DialogDescription>Please log in or create an account to book appointments.
                    </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                    <LoginForm />
                </div>
            </DialogContent>
        </Dialog>
    );
}