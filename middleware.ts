import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { getSession } from '@/(auth)/_lib/sessions'

// 1. Specify protected and public routes
const protectedRoutes = ['/professional/dashboard']
// These routes that the user can't access it while authenticated
// So if he tries to access these then he will be directed to /dashboard
const publicRoutes = ['/signup', '/for-who', "/professional/onboarding"]
// const publicRoutes = ['/login', '/signup', '/for-who', "/professional/onboarding"]

export default async function middleware(req: NextRequest) {

    // 2. Check if the current route is protected or public
    const path = req.nextUrl.pathname
    const isProtectedRoute = protectedRoutes.includes(path)
    const isPublicRoute = publicRoutes.includes(path)

    // 3. Decrypt the session from the cookie
    const session = await getSession()
    // const session = (await cookies()).get('session')?.value


    //   const session = await decrypt(cookie)

    // 4. Redirect to /login if the user is not authenticated
    if (isProtectedRoute && !session?.token) {
        return NextResponse.redirect(new URL('/login', req.nextUrl))
    }

    // 5. Redirect to /dashboard if the user is authenticated
    if (
        isPublicRoute &&
        session?.token &&
        (!req.nextUrl.pathname.startsWith('/professional/dashboard') || !req.nextUrl.pathname.startsWith('/admin/dashboard'))
    ) {

        if (session.role === "stakeholder") {
            return NextResponse.redirect(new URL('/professional/dashboard', req.nextUrl))
        } else if (session.role === "admin") {
            return NextResponse.redirect(new URL('/admin/dashboard', req.nextUrl))
        } else {
            return NextResponse.redirect(new URL('/', req.nextUrl))
        }
    }

    return NextResponse.next()
}

// Routes Middleware should not run on
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}