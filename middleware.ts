import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/[lang]/(auth)/_lib/sessions'
import { UserRole } from '@/[lang]/(auth)/_lib/definitions'
import { localization } from './middleware/localization'
import { auth } from "./middleware/auth"



export default async function middleware(req: NextRequest) {


    // let response = await auth(req)
    // let response = localization(req)
    // return response

    // Always check localization first
    const localeResponse = localization(req)

    // If localization requires a redirect, return immediately
    if (localeResponse.status !== 200) {
        return localeResponse
    }

    // Then check authentication
    return await auth(req)

    // Remove this after you finish setting localization
    // return NextResponse.next()

    // 4. Redirect to /login if the user is not authenticated
    // if ((req.nextUrl.pathname.startsWith('/professional') || req.nextUrl.pathname.startsWith('/admin') || req.nextUrl.pathname.startsWith('/customer')) && !session?.token) {
    //     return NextResponse.redirect(new URL('/login', req.nextUrl))
    // }
    // if (isProtectedRoute && !session?.token) {
    //     return NextResponse.redirect(new URL('/login', req.nextUrl))
    // }

    // if (session?.token) {

    //     if (session?.role === UserRole.Professional) {

    //         if (
    //             isPublicRoute &&
    //             (!req.nextUrl.pathname.startsWith('/professional/dashboard'))
    //         ) return NextResponse.redirect(new URL('/professional/dashboard', req.nextUrl))

    //         if (
    //             ((req.nextUrl.pathname.startsWith('/admin')) || (req.nextUrl.pathname.startsWith('/customer'))) &&
    //             !req.nextUrl.pathname.startsWith('/professional/onboarding')
    //         ) return NextResponse.redirect(new URL('/professional/dashboard', req.nextUrl))

    //         if (!session?.has_business && !req.nextUrl.pathname.startsWith('/professional/onboarding')) {
    //             return NextResponse.redirect(new URL('/professional/onboarding/business-name', req.nextUrl))
    //         }

    //         return NextResponse.next()

    //     } else if (session?.role === UserRole.Admin) {
    //         if (
    //             isPublicRoute &&
    //             !req.nextUrl.pathname.startsWith('/admin/dashboard')
    //         ) return NextResponse.redirect(new URL('/admin/dashboard', req.nextUrl))

    //         if ((req.nextUrl.pathname.startsWith('/professional')) || (req.nextUrl.pathname.startsWith('/customer'))) return NextResponse.redirect(new URL('/admin/dashboard', req.nextUrl))

    //         return NextResponse.next()

    //     } else {

    //         if (isPublicRoute) return NextResponse.redirect(new URL('/', req.nextUrl))

    //         if ((req.nextUrl.pathname.startsWith('/professional')) || (req.nextUrl.pathname.startsWith('/admin'))) return NextResponse.redirect(new URL('/', req.nextUrl))

    //         return NextResponse.next()
    //     }
    // }
}

// Routes Middleware should not run on
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}