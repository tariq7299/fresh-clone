"use client"

export default function BgColor({ color = "#F5F5F6" }: { color?: string }) {
    return (

        <style jsx global>{`
          body {
            background: ${color};
          }
        `}</style>
    )
}

