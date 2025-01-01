"use client"
import { useEffect, useState, useMemo } from "react"
import { cn } from "@/lib/utils"
import { getRandomIntInclusive } from "@/lib/utils"
import Image from "next/image"


export default function ChangingAvatar({ className = '' }) {

    const [visibleAvatarIndex, setVisibleAvatarIndex] = useState(1)

    const avatarImagesNames = useMemo(() => Array.from({ length: 27 }, (_, i) => `avatar${i + 1}.png`), [])

    useEffect(() => {
        const intervalId = setInterval(() =>
            // avatarImagesNames.length)
            setVisibleAvatarIndex(getRandomIntInclusive(1, avatarImagesNames.length))
            , 2500)
        return () => clearInterval(intervalId)
    }, [avatarImagesNames?.length > 0])


    return (

        <div className={
            cn("m-auto rounded-full bg-muted p-8 w-max",
                className
            )}>
            {avatarImagesNames.map((avatarImageName, index) => (
                <Image
                    key={avatarImageName}
                    src={`/avatars/${avatarImageName}`}
                    alt="Avatar"
                    width={"300"}
                    height={"300"}
                    className={cn("w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[220px] lg:h-[220px]",
                        index + 1 === visibleAvatarIndex ? "block" : "hidden"
                    )}
                />
            ))}

        </div>
    )
}