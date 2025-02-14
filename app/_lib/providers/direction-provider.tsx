"use client"

import { DirectionProvider } from "@radix-ui/react-direction";

export default function DirectionProviderForRadixUI({ locale, children }: { locale: string, children: React.ReactNode }) {

    return <DirectionProvider dir={locale === 'ar' ? 'rtl' : 'ltr'}>{children}</DirectionProvider>
}