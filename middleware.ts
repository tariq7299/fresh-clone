import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/[lang]/(auth)/_lib/sessions'
import { UserRole } from '@/[lang]/(auth)/_lib/definitions'
import { localization } from './middleware/localization'
import { auth } from "./middleware/auth"


export default async function middleware(req: NextRequest) {

    // Always check localization first
    const localeResponse = localization(req)

    // If localization requires a redirect, return immediately
    if (localeResponse.status !== 200) {
        return localeResponse
    }

    // Then check authentication
    return await auth(req)

}

// Routes Middleware should not run on
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}