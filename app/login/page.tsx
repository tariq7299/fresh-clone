
import { Button } from "@/ui/components/custom/button";
import { ArrowLeftIcon, GlobeAsiaAustraliaIcon } from "@heroicons/react/24/outline";
import { Label } from "@/ui/components/label";
import { Input } from "@/ui/components/input";

export default function LoginPage() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2  min-h-dvh" >
            <div className=" col-span-1 relative">
                <div className="w-full absolute top-0 z-50 p-4">
                    <Button variant={"ghost"} size="icon" className=""> <ArrowLeftIcon className="size-5" /> </Button>
                </div>


                <div className="flex flex-col gap-2 max-w-md m-auto h-full pt-20 p-5">


                    <h1 className="text-center text-lg font-bold">Log in to <span className="font-lora">Lumière</span>
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

                    <div className="flex h-full items-end justify-center">

                        <p className=" flex items-center gap-1 text-accent-600 font-semibold "><GlobeAsiaAustraliaIcon className="h-6 w-5" /> English</p>

                    </div>

                </div>


            </div>

            <div className=" col-span-1 hidden md:block">
            </div>

        </div>
    )
}
