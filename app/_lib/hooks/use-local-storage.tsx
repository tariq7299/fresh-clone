"use client"

import { useEffect, useState } from 'react'

interface LocalStorageProps<T> {
    key: string
    defaultValue: T
}

export default function useLocalStorage<T>({
    key,
    defaultValue,
}: LocalStorageProps<T>) {
    const [value, setValue] = useState<T>(() => {
        // Check if window is defined to ensure we're in the browser
        if (typeof window !== 'undefined') {
            const storedValue = localStorage.getItem(key)
            return storedValue !== null ? (JSON.parse(storedValue) as T) : defaultValue
        }
        return defaultValue; // Return defaultValue if not in browser
    })

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem(key, JSON.stringify(value))
        }
    }, [value, key])

    return [value, setValue] as const
}