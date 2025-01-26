import { Button } from "@/ui/components/custom/button"
import Link from "next/link"
import { CircleCheckBig } from 'lucide-react';

export default function Done() {
    return <div className="flex flex-col items-center justify-start h-screen w-full py-10">

        <h1 className="text-4xl font-bold font-lora">Done And Done!</h1>

        <div className="flex justify-start items-center gap-4">

            <div className="flex-none">
                <CircleCheckBig className="size-10 text-success-600" />
            </div>
            <div className="flex flex-col gap-2 bg-success-400 p-4 rounded-lg grow">
                <p>Success</p>
                <p className="text-lg font-medium">Your appointment has been scheduled successfully.</p>
                <p className="text-lg font-medium">We look forward to seeing you!</p>
            </div>
            <div className="flex flex-col gap-2 bg-success-400 p-4 rounded-lg grow mt-4">
                <p className="text-lg font-medium">
                    We've sent a confirmation email to <span className="font-semibold">user@example.com</span> with all the details of your appointment.
                </p>
                <p>Please check your inbox (and spam folder) for the confirmation.</p>
            </div>
        </div>

        <div className="flex gap-4">
            <Button>
                {/* <Link href="/"> */}
                Go to Home
                {/* </Link> */}
            </Button>
            <Button>
                {/* <Link href="/business/reservations"> */}
                Go to Reservations
                {/* </Link> */}
            </Button>
        </div>

    </div>
}
