import 'server-only'
import { cookies } from 'next/headers'
import { SessionData } from './definitions'

export async function createSession(sessionData: SessionData) {
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    const cookieStore = await cookies()

    // Convert session data to a JSON string
    const sessionString = JSON.stringify(sessionData)

    cookieStore.set('session', sessionString, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        // secure: true,
        expires: expiresAt,
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

    console.log("session", session)

    if (!session?.value) return null

    try {
        return JSON.parse(session.value) as SessionData
    } catch {
        return null
    }

}