"use client"
import { useEffect, useState, useMemo } from "react"
import { cn } from "@/_lib/utils/utils"
import { getRandomIntInclusive } from "@/_lib/utils/utils"
import Image from "next/image"


export default function ChangingAvatar({ className = '' }) {

    const [visibleAvatarIndex, setVisibleAvatarIndex] = useState(1)

    const avatarImagesNames = useMemo(() => Array.from({ length: 27 }, (_, i) => `avatar${i + 1}.png`), [])

    useEffect(() => {
        const intervalId = setInterval(() =>
            setVisibleAvatarIndex(getRandomIntInclusive(1, avatarImagesNames.length))
            , 2500)
        return () => clearInterval(intervalId)
    }, [avatarImagesNames?.length > 0])


    return (

        <div className={
            cn("m-auto rounded-full bg-primary-100 p-8 w-max",
                className
            )}>
            {avatarImagesNames.map((avatarImageName, index) => (
                <Image
                    key={avatarImageName}
                    src={`/avatars/${avatarImageName}`}
                    alt="Avatar"
                    width={"300"}
                    height={"300"}
                    className={cn("w-[150px] h-[150px] md:w-[110px] md:h-[110px] lg:w-[190px] lg:h-[190px]",
                        index + 1 === visibleAvatarIndex ? "block" : "hidden"
                    )}
                />

                //     <Image
                //     key={avatarImageName}
                //     src={`/avatars/${avatarImageName}`}
                //     alt="Avatar"
                //     width={"300"}
                //     height={"300"}
                //     className={cn("w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[190px] lg:h-[190px] transition-all duration-300 ease-in-out delay-150",
                //         index + 1 === visibleAvatarIndex ? "opacity-100" : "opacity-0"
                //     )}
                // />
            ))}

        </div>
    )
}