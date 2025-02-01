import 'server-only'
import { cookies } from 'next/headers'
import { SessionData } from './definitions'


export async function createSession(sessionData: SessionData) {
    const cookieStore = await cookies()

    // Convert session data to a JSON string
    const sessionString = JSON.stringify(sessionData)

    // Without an expiry date, this becomes a "session cookie" that will be deleted when the browser closes
    cookieStore.set('session', sessionString, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        // expires: expiresAt,
        sameSite: 'lax',
        path: '/',
    })


}

export async function deleteSession() {
    const cookieStore = await cookies()
    cookieStore.delete('session')
}

export async function getSession(): Promise<SessionData | null> {
    const session = (await cookies()).get('session')


    if (!session?.value) return null

    try {
        return JSON.parse(session.value) as SessionData
    } catch {
        return null
    }
}