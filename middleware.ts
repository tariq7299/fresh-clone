import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/(auth)/_lib/sessions'
import { UserRole } from '@/(auth)/_lib/definitions'

// 1. Specify protected and public routes
// const protectedRoutes = ['/professional', '/admin/dashboard', '/customer', '/professional/onboarding/*',]

// These routes that the user can't access it while authenticated
// So if he tries to access these then he will be directed to /dashboard
// const publicRoutes = ['/register', '/for-who', "/otp-verification"]
const publicRoutes = [""]
// const publicRoutes = ['/login', '/register', '/for-who', "/professional/onboarding"]  




export default async function middleware(req: NextRequest) {

    // 2. Check if the current route is protected or public
    const path = req.nextUrl.pathname
    // const isProtectedRoute = protectedRoutes.includes(path)
    const isPublicRoute = publicRoutes.includes(path)

    // 3. Decrypt the session from the cookie
    const session = await
        getSession()

    console.log("session", session)

    // 4. Redirect to /login if the user is not authenticated
    if ((req.nextUrl.pathname.startsWith('/professional') || req.nextUrl.pathname.startsWith('/admin') || req.nextUrl.pathname.startsWith('/customer')) && !session?.token) {
        return NextResponse.redirect(new URL('/login', req.nextUrl))
    }
    // if (isProtectedRoute && !session?.token) {
    //     return NextResponse.redirect(new URL('/login', req.nextUrl))
    // }

    if (session?.token) {

        if (session?.role === UserRole.Professional) {

            if (
                isPublicRoute &&
                (!req.nextUrl.pathname.startsWith('/professional/dashboard'))
            ) return NextResponse.redirect(new URL('/professional/dashboard', req.nextUrl))

            if (
                ((req.nextUrl.pathname.startsWith('/admin')) || (req.nextUrl.pathname.startsWith('/customer'))) &&
                !req.nextUrl.pathname.startsWith('/professional/onboarding')
            ) return NextResponse.redirect(new URL('/professional/dashboard', req.nextUrl))

            if (!session?.has_business && !req.nextUrl.pathname.startsWith('/professional/onboarding')) {
                return NextResponse.redirect(new URL('/professional/onboarding/business-name', req.nextUrl))
            }

            return NextResponse.next()

        } else if (session?.role === UserRole.Admin) {
            if (
                isPublicRoute &&
                !req.nextUrl.pathname.startsWith('/admin/dashboard')
            ) return NextResponse.redirect(new URL('/admin/dashboard', req.nextUrl))

            if ((req.nextUrl.pathname.startsWith('/professional')) || (req.nextUrl.pathname.startsWith('/customer'))) return NextResponse.redirect(new URL('/admin/dashboard', req.nextUrl))

            return NextResponse.next()

        } else {

            if (isPublicRoute) return NextResponse.redirect(new URL('/', req.nextUrl))

            if ((req.nextUrl.pathname.startsWith('/professional')) || (req.nextUrl.pathname.startsWith('/admin'))) return NextResponse.redirect(new URL('/', req.nextUrl))

            return NextResponse.next()
        }
    }
}

// Routes Middleware should not run on
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}