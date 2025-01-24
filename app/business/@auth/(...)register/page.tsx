"use client"

import RegisterForm from "@/(auth)/_components/register-form";
import { Button } from "@/ui/components/button";
import { Dialog, DialogFooter, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/ui/components/dialog";
import { useRouter } from "next/navigation";

export default function RegisterModal() {
    const router = useRouter();
    return <Dialog open={true} onOpenChange={() => router.back()}   >
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Register</DialogTitle>
                <DialogDescription>
                    Please register to continue
                </DialogDescription>
            </DialogHeader>
            <RegisterForm userRole="customer" />
            <DialogFooter>
                <Button onClick={() => router.back()}>Cancel</Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>

}