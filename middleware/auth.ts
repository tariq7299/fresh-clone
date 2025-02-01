import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/[lang]/(auth)/_lib/sessions'
import { UserRole } from '@/[lang]/(auth)/_lib/definitions'
import { getLocale } from './localization'

// 1. Specify protected and public routes
// const protectedRoutes = ['/professional', '/admin/dashboard', '/customer', '/professional/onboarding/*',]

// These routes that the user can't access it while authenticated
// So if he tries to access these then he will be directed to /dashboard
// const publicRoutes = ['/register', '/for-who', "/otp-verification"]
const publicRoutes = [""]
// const publicRoutes = ['/login', '/register', '/for-who', "/professional/onboarding"] 




export async function auth(req: NextRequest) {

    const locale = getLocale(req)

    // 2. Check if the current route is protected or public
    const path = req.nextUrl.pathname
    // const isProtectedRoute = protectedRoutes.includes(path)
    const isPublicRoute = publicRoutes.includes(path)

    // 3. Decrypt the session from the cookie
    const session = await
        getSession()


    // Remove this after you finish setting localization
    // return NextResponse.next()

    // 4. Redirect to /login if the user is not authenticated
    if ((req.nextUrl.pathname.startsWith(`/${locale}/professional`) || req.nextUrl.pathname.startsWith(`/${locale}/admin`) || req.nextUrl.pathname.startsWith(`/${locale}/customer`)) && !session?.token) {
        return NextResponse.redirect(new URL(`/${locale}/login`, req.nextUrl))
    }

    // if (isProtectedRoute && !session?.token) {
    //     return NextResponse.redirect(new URL('/login', req.nextUrl))
    // }

    if (session?.token) {

        if (session?.role === UserRole.Professional) {

            if (
                isPublicRoute &&
                (!req.nextUrl.pathname.startsWith(`/${locale}/professional/dashboard`))
            ) return NextResponse.redirect(new URL(`/${locale}/professional/dashboard`, req.nextUrl))

            if (
                ((req.nextUrl.pathname.startsWith(`/${locale}/admin`)) || (req.nextUrl.pathname.startsWith(`/${locale}/customer`))) &&
                !req.nextUrl.pathname.startsWith(`/${locale}/professional/onboarding`)
            ) return NextResponse.redirect(new URL(`/${locale}/professional/dashboard`, req.nextUrl))

            if (!session?.has_business && !req.nextUrl.pathname.startsWith(`/${locale}/professional/onboarding`)) {
                return NextResponse.redirect(new URL(`/${locale}/professional/onboarding/business-name`, req.nextUrl))
            }

            return NextResponse.next()

        } else if (session?.role === UserRole.Admin) {
            if (
                isPublicRoute &&
                !req.nextUrl.pathname.startsWith(`/${locale}/admin/dashboard`)
            ) return NextResponse.redirect(new URL(`/${locale}/admin/dashboard`, req.nextUrl))

            if ((req.nextUrl.pathname.startsWith(`/${locale}/professional`)) || (req.nextUrl.pathname.startsWith(`/${locale}/customer`))) return NextResponse.redirect(new URL(`/${locale}/admin/dashboard`, req.nextUrl))

            return NextResponse.next()

        } else {

            if (isPublicRoute) return NextResponse.redirect(new URL(`/${locale}/`, req.nextUrl))

            if ((req.nextUrl.pathname.startsWith(`/${locale}/professional`)) || (req.nextUrl.pathname.startsWith(`/${locale}/admin`))) return NextResponse.redirect(new URL(`/${locale}/`, req.nextUrl))

            return NextResponse.next()
        }
    }
}

// // Routes Middleware should not run on
// export const config = {
//     matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
// }