import { NextRequest, NextResponse } from "next/server"
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

const LOCALES = ['en', 'ar']
const DEFAULT_LOCALE = 'en'

export const getLocale = (request: NextRequest) => {
    // Get the Accept-Language header from the request
    const acceptLanguage = request.headers.get('accept-language')

    // Create headers object for Negotiator
    const headers = { 'accept-language': acceptLanguage || DEFAULT_LOCALE }

    const languages = new Negotiator({ headers }).languages()

    const browserLocale = match(languages, LOCALES, DEFAULT_LOCALE)

    const storedLocale = request.cookies.get('NEXT_LOCALE')?.value
    const finalLocale = storedLocale || browserLocale || DEFAULT_LOCALE

    return finalLocale
}

export const localization = (request: NextRequest) => {
    // Check if there is any supported locale in the pathname
    const { pathname } = request.nextUrl
    const pathnameHasLocale = LOCALES.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    // Return early if pathname already has locale
    if (pathnameHasLocale) return NextResponse.next()

    // Get locale from accept-language header or stored preference
    const locale = getLocale(request)
    // const storedLocale = request.cookies.get('NEXT_LOCALE')?.value
    // const finalLocale = storedLocale || locale || DEFAULT_LOCALE

    return NextResponse.redirect(
        new URL(`/${locale}${pathname}`, request.nextUrl)
    )
}