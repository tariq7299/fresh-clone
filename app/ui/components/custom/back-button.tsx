"use client";

import { ArrowLeftIcon } from '@heroicons/react/20/solid'
import { Button } from './button'

export default function BackButton() {
    return (
        <Button variant={"ghost"} size="icon" onClick={() => window.history.back()} className=""> <ArrowLeftIcon className="size-5" /> </Button>
    )
}