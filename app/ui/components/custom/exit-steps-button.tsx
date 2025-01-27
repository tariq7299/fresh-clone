"use client"

import { Button } from "@/ui/components/custom/button";
import { X } from "lucide-react";
import { useSearchParams, usePathname } from "next/navigation";

export default function ExitStepsButton({ href }: { href: string }) {



    return <Button isLink href={href} variant={"ghost"} size="icon" className="size-10"> <X className="size-5" /> </Button>
}