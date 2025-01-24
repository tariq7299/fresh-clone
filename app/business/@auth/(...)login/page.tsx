"use client";

import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/ui/components/dialog";
import { useRouter } from "next/navigation";
import LoginForm from "@/(auth)/_components/login-form";
import { Button } from "@/ui/components/button";

export default function LoginPage() {
    const router = useRouter();

    return (
        <Dialog open={true} onOpenChange={() => router.back()}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Login</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <LoginForm />
                </div>
                <DialogFooter>
                    <Button onClick={() => router.back()}>
                        Cancel
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}