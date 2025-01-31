//Since the map will be laoded and displayed on client side
'use client';

import { ReactNode } from 'react';
import { APIProvider } from '@vis.gl/react-google-maps';


// Define a function component called MapProvider that takes a children prop
export function MapProvider({ children }: { children: ReactNode }) {

    console.log("process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY", process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY)
    return <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
        {children}
    </APIProvider>
}