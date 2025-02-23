
import { Mail, UserRound } from "lucide-react"
import { Input } from "@/_ui/components/input"
import { Label } from "@/_ui/components/label"
import { cn } from "@/_lib/utils/utils"
export default function PersonalInputs({ data, isPending = false, className }: { data: any, isPending?: boolean, className?: string }) {

    return <div className={cn('grid grid-cols-1 md:grid-cols-2 gap-4 w-full overflow-y-auto p-1', className)}>

        <div className='flex flex-col space-y-2'>
            <Label className='text-sm font-semibold'>First name</Label>
            <div className="relative rounded-lg col-span-3">
                <Input
                    type="text"
                    name="first_name"
                    id="first_name"

                    className="ps-10"
                    placeholder="First name"
                    defaultValue={data.first_name}
                    disabled={isPending}
                />
                <p className="absolute rtl:right-2 left-2 rtl:left-auto top-1/2 -translate-y-1/2 text-muted-foreground text-xs italic p-2">
                    <UserRound className="w-4 h-4" />
                </p>
            </div>


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
                    defaultValue={data.last_name}
                    disabled={isPending}
                />
                <p className="absolute rtl:right-2 left-2 rtl:left-auto top-1/2 -translate-y-1/2 text-muted-foreground text-xs italic p-2">
                    <UserRound className="w-4 h-4" />
                </p>
            </div>
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
                    defaultValue={data.email}
                    disabled={isPending}
                />
                <p className="absolute rtl:right-2 left-2 rtl:left-auto top-1/2 -translate-y-1/2 text-muted-foreground text-xs italic p-2">
                    <Mail className="w-4 h-4" />
                </p>
            </div>
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
                    defaultValue={data.phone_number}
                    disabled={isPending}
                />
                <p className="absolute rtl:right-2 left-2 rtl:left-auto top-1/2 -translate-y-1/2 text-muted-foreground text-sm ps-1 py-2">
                    +966
                </p>
            </div>
        </div>

    </div>
}