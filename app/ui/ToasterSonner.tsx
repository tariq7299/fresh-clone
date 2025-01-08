"use client"

import { Toaster } from 'sonner'
// import { useTheme } from '../theme-provider'
import { useMediaQuery } from '@uidotdev/usehooks'

export default function SonnerToaster() {
    // const { theme } = useTheme()
    const isDesktop = useMediaQuery("(min-width: 768px)")

    return (
        <>
            {isDesktop ?
                // (<Toaster theme={theme} closeButton expand={true} richColors={true} />)
                (<Toaster closeButton expand={true} richColors={true} />)
                :
                // (<Toaster theme={theme} closeButton richColors={true} position="top-center" />)}
                (<Toaster closeButton richColors={true} position="top-center" />)}
        </>
    )
}