"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/_ui/components/dialog";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/_ui/components/select"
import { Button } from "../button";
import { GlobeAsiaAustraliaIcon } from "@heroicons/react/24/outline";
import { handleLanguageChange } from "@/_lib/actions";
import { useState } from "react";
import { Label } from "../label";
import { cn } from "@/_lib/utils/utils";
import { setLanguageCookie } from "@/_lib/actions";

const LANGUAGES = [
    { code: 'en', name: 'English' },
    { code: 'ar', name: 'العربية' },
]

export function LanguageSwitcherTrigger({ className }: { className?: string }) {
    const params = useParams()
    const currentLang = params.lang as string
    return <p className={cn(" flex  items-center gap-2  font-semibold ", className)}><GlobeAsiaAustraliaIcon className="h-6 w-5" /> {LANGUAGES.find(lang => lang.code === currentLang)?.name}</p>
}

export function LanguageSwitcherDialog({ hasTrigger = true, open, setOpen, className }: { hasTrigger?: boolean, open?: boolean, setOpen?: (open: boolean) => void, className?: string }) {

    const pathname = usePathname()
    const params = useParams()
    const router = useRouter()
    const currentLang = params.lang as string
    const currentSearchParams = useSearchParams()

    const [value, setValue] = useState(currentLang)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        const newLocale = formData.get("language") as "en" | "ar" || "en"
        await setLanguageCookie(newLocale)

        const newPath = pathname.replace(/^\/[a-z]{2}/, `/${newLocale}`)
        const currentSearchParamsObject = new URLSearchParams(currentSearchParams)
        router.replace(`${newPath}?${currentSearchParamsObject.toString()}`, {
            scroll: false
        })


        // handleLanguageChange(new FormData(e.target as HTMLFormElement), pathname)
    }

    return (
        <>

            {
                hasTrigger ?
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="ghost" className={cn("text-accent-600 h-auto flex justify-start  items-center gap-2  font-semibold  ", className)}>
                                <GlobeAsiaAustraliaIcon className="h-6 w-5" />
                                <p className="  ">{LANGUAGES.find(lang => lang.code === currentLang)?.name}</p>
                            </Button>
                        </DialogTrigger>

                        <DialogContent className="sm:max-w-[425px] p-8">
                            <DialogHeader className="pb-2">
                                <DialogTitle className="text-3xl font-bold p">Change language</DialogTitle>
                                <DialogDescription>
                                    Please select the language you want to use.
                                </DialogDescription>
                            </DialogHeader>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-1">

                                    <Label className=" font-bold">Language</Label>
                                    <Select defaultValue={currentLang} name="language"
                                        value={value}
                                        onValueChange={(e) => setValue(e)}
                                    >
                                        <SelectTrigger className="w-full    " >
                                            <SelectValue placeholder="Select a language" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Languages</SelectLabel>
                                                {LANGUAGES.map((lang) => (
                                                    <SelectItem key={lang.code} value={lang.code}>
                                                        {lang.name}
                                                    </SelectItem>
                                                ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <Button disabled={currentLang === value} type="submit" className="w-full font-bold">Change language</Button>
                            </form>
                        </DialogContent>
                    </Dialog>
                    :
                    <Dialog open={open} onOpenChange={setOpen}>

                        <DialogContent className="sm:max-w-[425px] p-8">
                            <DialogHeader className="pb-2">
                                <DialogTitle className="text-3xl font-bold p">Change language</DialogTitle>
                                <DialogDescription>
                                    Please select the language you want to use.
                                </DialogDescription>
                            </DialogHeader>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-1">

                                    <Label className=" font-bold">Language</Label>
                                    <Select defaultValue={currentLang} name="language"
                                        value={value}
                                        onValueChange={(e) => setValue(e)}
                                    >
                                        <SelectTrigger className="w-full    " >
                                            <SelectValue placeholder="Select a language" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Languages</SelectLabel>
                                                {LANGUAGES.map((lang) => (
                                                    <SelectItem key={lang.code} value={lang.code}>
                                                        {lang.name}
                                                    </SelectItem>
                                                ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <Button disabled={currentLang === value} type="submit" className="w-full font-bold">Change language</Button>
                            </form>
                        </DialogContent>
                    </Dialog>
            }
        </>

    )
}