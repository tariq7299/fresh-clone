import { Button } from "@/ui/components/custom/button"
import Link from "next/link"
import { CircleCheck } from 'lucide-react';

export default function FullPageDone({
    title = "Done And Done!",
    messageElement1 = (<p className="">Your request has been processed successfully.</p>),
    messageElement2 = (null),
    link1 = "/",
    link2 = "",
    button1Text = "Go to Home",
    button2Text = ""
}: {
    title: string,
    messageElement1: React.ReactNode,
    messageElement2?: React.ReactNode,
    link1?: string,
    link2?: string,
    button1Text?: string,
    button2Text?: string
}) {
    return <div className="flex flex-col items-start justify-start h-screen py-24 p-5">

        <div className="mx-auto space-y-4 max-w-screen-sm w-full">

            <h1 className="text-5xl md:text-6xl font-bold font-lora text-start">{title}</h1>

            <div className="flex flex-col gap-4">

                <div className="flex justify-start items-center gap-4 bg-success-100 p-4 rounded-md">
                    <div className="flex-none">
                        <CircleCheck className="size-8 text-primary" />
                    </div>

                    <div className="flex flex-col space-y-1 rounded-lg grow">
                        <p className="text-xl font-bold font-source-sans text-primary">Success</p>

                        {messageElement1}

                    </div>
                </div>

                <div>
                    {messageElement2 && messageElement2}
                </div>




            </div>

            <div className="flex gap-4">
                {link1 && (
                    <Button isLink href={link1} variant={"outline"}>
                        {button1Text}
                    </Button>
                )}
                {link2 && (
                    <Button isLink href={link2}>
                        {button2Text}
                    </Button>
                )}
            </div>
        </div>

    </div>
}
