import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Link from "next/link"
import { getDictionary } from "@/_lib/dictionaries"

interface ForWhoProps {
    params: {
        lang: "en" | "ar"
    }
}

export default async function ForWho({ params: { lang } }: ForWhoProps) {
    const dict = await getDictionary(lang)

    return (
        <div className="flex flex-col gap-2 w-full max-w-md p-5 pt-5">
            <h1 className="text-center text-2xl font-bold font-source-sans rtl:font-cairo">
                {dict.for_who.title}
            </h1>
            <p className="text-muted-foreground text-sm text-center pb-4 rtl:font-cairo">
                {dict.for_who.subtitle} <span className="font-bold font-cinzel">Lumière</span>?
            </p>

            <div className="flex flex-col gap-3">
                <Link href="/register?type=customer" className="flex justify-between items-center p-4 border rounded-lg hover:bg-muted">
                    <div>
                        <p className="rtl:font-cairo">
                            <span className="font-bold font-cinzel">Lumière</span> {dict.for_who.customer.title}
                        </p>
                        <p className="rtl:font-cairo">{dict.for_who.customer.description}</p>
                    </div>
                    <ArrowRightIcon className="size-5 rtl:rotate-180" />
                </Link>
                <Link href="/register?type=professional" className="flex justify-between items-center p-4 border rounded-lg hover:bg-muted">
                    <div>
                        <p className="rtl:font-cairo">
                            <span className="font-bold font-cinzel">Lumière</span> {dict.for_who.professional.title}
                        </p>
                        <p className="rtl:font-cairo">{dict.for_who.professional.description}</p>
                    </div>
                    <ArrowRightIcon className="size-5 rtl:rotate-180" />
                </Link>
            </div>
        </div>
    )
}