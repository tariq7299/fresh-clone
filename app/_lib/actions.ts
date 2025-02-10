"use server"


import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export const handleLanguageChange = async (formData: FormData, pathname: string) => {

    // Try to integrate params and use also new URL
    // Get the current path without the locale
    const newPath = pathname.replace(/^\/[a-z]{2}/, `/${newLocale}`)
    // router.push(newPath)
    redirect(newPath)
}


export const setLanguageCookie = async (language: "en" | "ar") => {
    const cookieStore = await cookies()
    const newLocale = language
    cookieStore.set('NEXT_LOCALE', newLocale, { maxAge: 60 * 60 * 24 * 30 }) // 30 days
}
