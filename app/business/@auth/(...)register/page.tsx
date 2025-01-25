"use client"

import RegisterForm from "@/(auth)/_components/register-form";
import { UserRole } from "@/(auth)/_lib/definitions";
import { Button } from "@/ui/components/button";
import { Dialog, DialogFooter, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/ui/components/dialog";
import { useRouter, useSearchParams } from "next/navigation";

export default function RegisterModal() {

    const searchParams = useSearchParams();

    const loginRequiredForBooking = searchParams.get("loginRequiredForBooking") === "true";
    const type = searchParams.get("type") || "";

    console.log("loginRequiredForBookingIN REGISTER", loginRequiredForBooking)
    console.log("typeIN REGISTER", type)


    const router = useRouter();
    return <Dialog open={true} onOpenChange={() => router.back()}   >
        <DialogContent className="sm:max-w-[525px] p-8">
            <DialogHeader>
                <DialogTitle className="text-3xl font-bold">Register</DialogTitle>
                <DialogDescription>
                    Please create an account to book appointments.
                </DialogDescription>
            </DialogHeader>
            <div className="py-4">
                <RegisterForm userRole={UserRole.Customer} loginRequiredForBooking={loginRequiredForBooking} />
            </div>
        </DialogContent>
    </Dialog>

}