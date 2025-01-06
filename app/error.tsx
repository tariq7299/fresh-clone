'use client';

import { useEffect } from 'react';
import { TriangleAlert, RefreshCcw, Undo2 } from 'lucide-react';
import { Button } from '@/ui/components/custom/button';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {

    useEffect(() => {
        // Optionally log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <main className="flex h-dvh flex-col items-center justify-center gap-1 p-5">

            <TriangleAlert className='size-36 text-destructive-500' />
            <h1 className="text-center font-lora text-4xl">An error occurred</h1>

            <p className='text-center text-muted-foreground'>Looks like there was a problem loading this page. A reload will usually fix most issues.</p>

            <div className="flex gap-2 pt-5">
                <Button
                    variant={"default"}
                    className="flex items-center gap-2 "
                    onClick={
                        // Attempt to recover by trying to re-render the invoices route
                        () => reset()
                    }
                >
                    Click to reload <RefreshCcw className='size-4' />
                </Button>
                <Button
                    variant={"outline"}
                    className="flex items-center gap-2"
                    onClick={() => window.history.back()}
                >
                    Go back <Undo2 className='size-4' />
                </Button>
            </div>
        </main>
    );
}