"use server"


import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export const handleLanguageChange = async (formData: FormData, pathname: string) => {
    const cookieStore = await cookies()
    const newLocale = formData.get('language') as string || 'en'
    cookieStore.set('NEXT_LOCALE', newLocale, { maxAge: 60 * 60 * 24 * 30 }) // 30 days

    console.log("newLocale", newLocale)
    console.log("pathname", pathname)

    // Try to integrate params and use also new URL
    // Get the current path without the locale
    const newPath = pathname.replace(/^\/[a-z]{2}/, `/${newLocale}`)
    // router.push(newPath)
    redirect(newPath)
}
