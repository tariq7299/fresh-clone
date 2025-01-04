
import { Button } from "@/ui/components/custom/button";
import { ArrowLeftIcon, GlobeAsiaAustraliaIcon } from "@heroicons/react/24/outline";
import { Label } from "@/ui/components/label";
import { Input } from "@/ui/components/input";
import Image from "next/image";
import techLife from "@/../public/tech-life-illustration.png";
import { cn } from "@/lib/utils";

export default function LoginPage() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2  min-h-dvh " >


            <div className=" col-span-1 relative flex flex-col justify-center items-center ">

                <div className="w-full absolute top-0 z-50 p-4 flex items-center gap-2 justify-between ">
                    <Button variant={"ghost"} size="icon" className=""> <ArrowLeftIcon className="size-5" /> </Button>
                    <p className={cn("text-2xl font-extrabold font-lora")}>Lumière</p>
                </div>

                <div className="mt-auto flex flex-col gap-2 max-w-md p-5 pt-20">


                    <h1 className="text-center text-xl font-bold">Log in
                    </h1>
                    <p className="text-muted-foreground text-sm text-center pb-4">Welcome back! Enter your details to access your account.</p>

                    <form action="" className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input type="email" name="email" id="email" placeholder="Enter your email" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label className="flex justify-between" htmlFor="password">Password <a href="#">Forgot your password?</a></Label>
                            <Input type="password" name="password" id="password" placeholder="Enter your password" />
                        </div>
                        <Button variant="default" className="w-full font-semibold">Continue</Button>
                        <div className="flex justify-between items-center">
                            {/* <div>
                            <Input type="checkbox" name="remember" id="remember" />
                            <Label htmlFor="remember" className="text-sm">Remember me</Label>
                        </div> */}

                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <p className="font-bold text-center">First time?</p>
                            <a className="underline text-center text-accent text-sm">Sign up</a>

                        </div>

                    </form>


                </div>

                <div className="p-5 mt-auto">
                    <p className=" flex items-center  gap-1 text-accent-600 font-semibold "><GlobeAsiaAustraliaIcon className="h-6 w-5" /> English</p>
                </div>

            </div>

            <div className=" col-span-1 hidden md:block justify-self-center self-center">
                <Image
                    src={techLife}
                    alt="Tech life illustration image"
                    className="object-cover w-[500px]"
                />
            </div>



        </div>
    )
}
