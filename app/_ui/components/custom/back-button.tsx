"use client";

import { ArrowLeftIcon } from '@heroicons/react/20/solid'
import { Button } from './button'
import { useRouter } from 'next/navigation'

export default function BackButton({ backTo = "" }: { backTo?: string }) {
    const router = useRouter()

    return (
        <Button variant={"ghost"} size="icon" onClick={() => backTo ? router.push(backTo) : router.back()} className="size-10"> <ArrowLeftIcon className="size-5" /> </Button>
    )
}