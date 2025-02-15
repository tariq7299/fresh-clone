import { Suspense } from "react"
import SonnerToaster from "@/_ui/ToasterSonner"
import DirectionProviderForRadixUI from "@/_lib/providers/direction-provider"

export default async function Layout({ children, params }: { children: React.ReactNode, params: Promise<{ lang: 'en' | 'ar' }> }) {

    const locale = await params

    return <div id="main-layout" dir={locale.lang === 'ar' ? 'rtl' : 'ltr'}
    >
        {/* This provider is used to provide the direction to the radix ui (shadcn/ui) components */}
        <SonnerToaster />
        <DirectionProviderForRadixUI locale={locale.lang}>
            <Suspense >
                {children}
            </Suspense>
        </DirectionProviderForRadixUI>
    </div>
}

