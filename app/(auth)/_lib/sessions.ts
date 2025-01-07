import 'server-only'
import { cookies } from 'next/headers'

export async function createSession(token: string) {
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    const cookieStore = await cookies()

    cookieStore.set('session', token, {
        httpOnly: true,
        secure: true,
        expires: expiresAt,
        sameSite: 'lax',
        path: '/',
    })
}

export async function getSession() {
    const cookie = (await cookies()).get('session')?.value
    console.log("cookie", cookie)
    return cookie
}