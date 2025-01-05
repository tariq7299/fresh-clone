
import { Button } from "@/ui/components/custom/button";
import { ArrowLeftIcon, GlobeAsiaAustraliaIcon } from "@heroicons/react/24/outline";
import { Label } from "@/ui/components/label";
import { Input } from "@/ui/components/input";
import Image from "next/image";
import barberShop from "@/../public/barber-shop-4.jpg";
import { cn } from "@/lib/utils";
import BackButton from "@/ui/components/custom/back-button";
import Link from "next/link";

export default function SignupPage() {
    return (

        <div className="mt-auto flex flex-col gap-2 w-full max-w-md p-5 pt-20">


            <h1 className="text-center text-2xl font-bold font-source-sans">Sign up
            </h1>
            <p className="text-muted-foreground text-sm text-center pb-4">Create your account and streamline your salon management today.</p>

            <form action="" className="flex flex-col gap-4">
                <div className="flex gap-2 w-full">

                    <div className="flex flex-col gap-2 w-full">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input type="text" name="firstName" id="firstName" placeholder="Enter your first name" className="w-full" />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input type="text" name="lastName" id="lastName" placeholder="Enter your last name" className="w-full" />
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" name="email" id="email" placeholder="Enter your email" />
                </div>
                <div className="flex flex-col gap-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input type="text" name="phone" id="phone" placeholder="Enter your phone" />
                </div>
                <div className="flex flex-col gap-2">
                    <Label className="flex justify-between" htmlFor="password">Password</Label>
                    <Input type="password" name="password" id="password" placeholder="Enter your password" />
                </div>
                <div className="flex flex-col gap-2">
                    <Label className="flex justify-between" htmlFor="confirmPassword">Confirm Password</Label>
                    <Input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm your password" />
                </div>
                <Button variant="default" className="w-full font-bold">Continue</Button>
                <div className="flex justify-between items-center">
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p className="font-bold text-center">Have a business account?</p>
                    <Link href="/login " className=" text-center text-accent text-sm">Sign in as a professional</Link>

                </div>

            </form>


        </div>

    )
}
