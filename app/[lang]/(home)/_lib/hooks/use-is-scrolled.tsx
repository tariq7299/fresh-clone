'use client'

import { useEffect, useState } from 'react'

export default function useIsScrolled() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const options = { passive: true }; // options must match add/remove event
        const scroll = () => setIsScrolled(window?.scrollY > 0);
        document.addEventListener("scroll", scroll, options);

        // remove event on unmount to prevent a memory leak
        () => document.removeEventListener("scroll", scroll, true);
    }, []);

    return isScrolled
}
