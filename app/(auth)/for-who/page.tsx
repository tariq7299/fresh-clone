
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Link from "next/link"

export default async function ForWho() {

    return (
        <div className=" flex flex-col gap-2 w-full max-w-md p-5 pt-5">


            <h1 className="text-center text-2xl font-bold font-source-sans">Get Started with the Right Experience
            </h1>
            <p className="text-muted-foreground text-sm text-center pb-4">How would you like to use <span className="font-extrabold font-lora">Lumière</span>?</p>

            <div className="flex flex-col gap-3">
                <Link href="/signup?type=customer" className="flex  justify-between items-center p-4 border rounded-lg hover:bg-muted">
                    <div>
                        <p><span className="font-extrabold font-lora">Lumière</span> for customers</p>
                        <p>Book salons and spas near you</p>
                    </div>
                    <ArrowRightIcon className="size-5" />
                </Link>
                <Link href="/signup?type=professional" className="flex  justify-between items-center p-4 border rounded-lg hover:bg-muted">
                    <div>
                        <p><span className="font-extrabold font-lora">Lumière</span> for professionals</p>
                        <p>Manage and grow your business</p>
                    </div>
                    <ArrowRightIcon className="size-5" />
                </Link>
            </div>



        </div>
    )
}