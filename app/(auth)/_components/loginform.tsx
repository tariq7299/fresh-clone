"use client"

import { Button } from "@/ui/components/custom/button";
import { Label } from "@/ui/components/label";
import { Input } from "@/ui/components/input";
import Link from "next/link";
import { useActionState, useEffect } from 'react'
import { loginServerAction } from "@/(auth)/_lib/actions";
import { LoginFormState } from "../_lib/definitions";


export default function LoginForm() {

    const initialState: LoginFormState = { message: "", errors: {}, token: '' };

    const [formState, formAction, isPending] = useActionState(login, initialState);

    useEffect(() => {
        // Here we want to 


    }, [formState])



    console.log("formState", formState);


    return <form action={formAction} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input type="email" name="email" id="email" placeholder="Enter your email" />

            {formState?.errors?.email && <p className="text-red-500 text-sm">{formState.errors.email[0]}</p>}

        </div>
        <div className="flex flex-col gap-2">
            <Label className="flex justify-between" htmlFor="password">Password <a href="#">Forgot your password?</a></Label>
            <Input type="password" name="password" id="password" placeholder="Enter your password" />

            {formState?.errors?.password && <p className="text-red-500 text-sm">{formState.errors.password[0]}</p>}
        </div>

        <Button variant="default" className="w-full font-bold">Continue</Button>

        <div className="flex flex-col justify-center items-center">
            <p className="font-bold text-center">First time?</p>
            <Link href="/for-who" className=" text-center text-accent text-sm">Sign up</Link>
        </div>

        {formState?.message &&
            <p className="mt-2 text-sm text-red-500" key={formState?.message}>
                {formState?.message}
            </p>
        }

    </form>

}