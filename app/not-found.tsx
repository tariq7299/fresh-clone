"use client";

import { Button } from '@/_ui/components/custom/button';
import { Undo2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import "@/_ui/globals.css";
import RootWrapper from '@/_ui/components/custom/root-wrapper';


export default function NotFound() {

    const router = useRouter()



    return (
        // <RootWrapper>
        <main className="flex h-dvh flex-col items-center justify-center gap-1 p-5">

            <h1 className="text-center font-bold  text-8xl font-cinzel">404</h1>
            <h1 className="text-center font-cinzel text-4xl">Oops! Page Not Found!
            </h1>

            <p className='text-center text-muted-foreground'>It seems like the page you're looking for
                does not exist or might have been removed.</p>

            <div className="flex gap-2 pt-5">
                <Button
                    variant={"default"}
                    className="flex items-center gap-2 "
                    onClick={() => router.push('/')}
                >
                    Go Home
                </Button>
                <Button
                    variant={"outline"}
                    className="flex items-center gap-2"
                    onClick={() => router.back()}
                >
                    Go Back <Undo2 className='size-4' />
                </Button>
            </div>
        </main>
        // </RootWrapper>
    );
}