import { Button } from "@/ui/components/custom/button"
import Link from "next/link"
import { CircleCheck } from 'lucide-react';

export default function Done() {
    return <div className="flex flex-col items-start justify-start h-screen  py-24 ">

        <div className="mx-auto space-y-4 max-w-screen-sm w-full">

            <h1 className="text-6xl font-bold font-lora text-start">Done And Done!</h1>

            <div className="flex flex-col gap-4">


                <div className="flex justify-start items-center gap-4  bg-success-100 p-4 rounded-md">

                    <div className="flex-none">
                        <CircleCheck className="size-8 text-primary" />
                    </div>

                    <div className="flex flex-col space-y-2 rounded-lg grow">
                        <p className="text-xl font-bold font-source-sans text-primary">Success</p>
                        <p className="text- ">Your appointment has been scheduled successfully.</p>
                        <p className="text- ">We look forward to seeing you!</p>
                    </div>

                </div>

                <div className="">
                    <p className="text-lg font-medium">
                        We've sent a confirmation email to <span className="font-semibold">user@example.com</span> with all the details of your appointment.
                    </p>
                    <p className="text-sm">Please check your inbox (and spam folder) for the confirmation.</p>
                </div>


            </div>


            <div className="flex gap-4">
                <Button variant={"outline"}>
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

    </div>
}
