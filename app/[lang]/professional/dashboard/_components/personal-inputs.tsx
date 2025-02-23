"use client"


import { Mail, UserRound } from "lucide-react"
import { Input } from "@/_ui/components/input"
import { Label } from "@/_ui/components/label"
import { cn } from "@/_lib/utils/utils"
import { useEffect, useState } from "react"
export default function PersonalInputs({ errors, data, isPending = false, className }: { errors?: any, data: any, isPending?: boolean, className?: string }) {



    const [formData, setFormData] = useState(data)

    useEffect(() => {
        setFormData(data)
    }, [data])

    return <div className={cn('grid grid-cols-1 md:grid-cols-2 gap-4 w-full overflow-y-auto p-1', className)}>


        <div className='flex flex-col space-y-2'>
            <Label className='text-sm font-semibold'>First name</Label>
            <div className="relative rounded-lg col-span-3">
                <Input
                    type="text"
                    name="first_name"
                    id="first_name"
                    value={formData.first_name}
                    onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                    className="ps-10"
                    placeholder="First name"
                    disabled={isPending}
                />
                <p className="absolute rtl:right-2 left-2 rtl:left-auto top-1/2 -translate-y-1/2 text-muted-foreground text-xs italic p-2">
                    <UserRound className="w-4 h-4" />
                </p>
            </div>
            <p className="text-destructive text-sm">
                {errors?.first_name?.[0]}
            </p>
        </div>
        <div className='flex flex-col space-y-2'>
            <Label className='text-sm font-semibold'>Last name</Label>
            <div className="relative rounded-lg col-span-3">
                <Input
                    type="text"
                    name="last_name"
                    id="last_name"
                    className="ps-10"
                    placeholder="Last name"
                    value={formData.last_name}
                    disabled={isPending}
                    onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                />
                <p className="absolute rtl:right-2 left-2 rtl:left-auto top-1/2 -translate-y-1/2 text-muted-foreground text-xs italic p-2">
                    <UserRound className="w-4 h-4" />
                </p>
            </div>
            <p className="text-destructive text-sm">
                {errors?.last_name?.[0]}
            </p>
        </div>
        <div className='flex flex-col space-y-2'>
            <Label className='text-sm font-semibold'>Email</Label>
            <div className="relative rounded-lg col-span-3">
                <Input
                    type="text"
                    name="email"
                    id="email"
                    className="ps-10"
                    placeholder="email@example.com"
                    value={formData.email}
                    disabled={isPending}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <p className="absolute rtl:right-2 left-2 rtl:left-auto top-1/2 -translate-y-1/2 text-muted-foreground text-xs italic p-2">
                    <Mail className="w-4 h-4" />
                </p>
            </div>
            <p className="text-destructive text-sm">
                {errors?.email?.[0]}
            </p>
        </div>
        <div className='flex flex-col space-y-2'>
            <Label className='text-sm font-semibold'>Phone number</Label>
            <div className="relative rounded-lg col-span-3">
                <Input
                    type="text"
                    name="phone_number"
                    id="phone_number"
                    className="ps-12"
                    placeholder="Phone number"
                    value={formData.phone_number}
                    disabled={isPending}
                    onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
                />
                <p className="absolute rtl:right-2 left-2 rtl:left-auto top-1/2 -translate-y-1/2 text-muted-foreground text-sm ps-1 py-2">
                    +966
                </p>
            </div>
            <p className="text-destructive text-sm">
                {errors?.phone_number?.[0]}
            </p>
        </div>

    </div>
}