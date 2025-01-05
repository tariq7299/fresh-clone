
import { Button } from "@/ui/components/custom/button";
import { ArrowLeftIcon, GlobeAsiaAustraliaIcon } from "@heroicons/react/24/outline";
import { Label } from "@/ui/components/label";
import { Input } from "@/ui/components/input";
import Image from "next/image";
import barberShop from "@/../public/barber-shop-4.jpg";
import { cn } from "@/lib/utils";
import BackButton from "@/ui/components/custom/back-button";
import Link from "next/link";

export default function LoginPage() {
    return (

        <div className="mt-auto flex flex-col gap-2 w-full max-w-md p-5 pt-20">


            <h1 className="text-center text-2xl font-bold font-source-sans">Sign in
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
                <Button variant="default" className="w-full font-bold">Continue</Button>
                <div className="flex justify-between items-center">
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p className="font-bold text-center">First time?</p>
                    <Link href="/signup" className=" text-center text-accent text-sm">Sign up</Link>

                </div>

            </form>


        </div>

    )
}
