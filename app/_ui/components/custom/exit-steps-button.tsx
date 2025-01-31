"use client"

import { Button } from "@/_ui/components/custom/button";
import { X } from "lucide-react";

export default function ExitStepsButton({ href }: { href: string }) {



    return <Button isLink href={href} variant={"ghost"} size="icon" className="size-10"> <X className="size-5" /> </Button>
}