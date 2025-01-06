"use client";
import Link from 'next/link';
import { FaceFrownIcon } from '@heroicons/react/24/outline';
import { Button } from '@/ui/components/custom/button';
import { RefreshCcw, Undo2 } from 'lucide-react';

export default function NotFound() {

    return (
        <main className="flex h-dvh flex-col items-center justify-center gap-1 p-5">

            <h1 className="text-center font-bold  text-8xl font-lora">404</h1>
            <h1 className="text-center font-lora text-4xl">Oops! Page Not Found!
            </h1>

            <p className='text-center text-muted-foreground'>It seems like the page you're looking for
                does not exist or might have been removed.</p>

            <div className="flex gap-2 pt-5">
                <Button
                    variant={"default"}
                    className="flex items-center gap-2 "
                    onClick={() => window.location.href = '/'}
                >
                    Go Home
                </Button>
                <Button
                    variant={"outline"}
                    className="flex items-center gap-2"
                    onClick={() => window.history.back()}
                >
                    Go Back <Undo2 className='size-4' />
                </Button>
            </div>
        </main>
    );
}