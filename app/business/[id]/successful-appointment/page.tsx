import { Button } from "@/ui/components/button";
import FullPageDone from "@/ui/components/custom/full-page-done";
import Link from "next/link";

export default function BookingDonePage() {
    return <FullPageDone
        title="Done And Done!"
        messageElement1={(<>
            <p className="text- ">Your appointment has been scheduled successfully.</p>
            <p className="text- ">We look forward to seeing you!</p>
        </>)}
        messageElement2={(<>
            <p className="text-lg font-medium">
                We've sent a confirmation email to <span className="font-semibold">user@example.com</span>
            </p>
            <p className="text-sm">Please check your inbox (and spam folder) for the confirmation.</p>
        </>)}
        link1="/"
        link2="/customer/dashboard/appointments"
        button1Text="Go to Home"
        button2Text="Go to Appointments" />
}