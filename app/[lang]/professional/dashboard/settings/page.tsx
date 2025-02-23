import { Input } from "@/_ui/components/input"
import { Label } from "@/_ui/components/label"
import { UserRound, Mail, Lock } from 'lucide-react';
import { Button } from "@/_ui/components/custom/button";
import { PasswordInput } from "@/_ui/components/custom/password-input";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/_ui/components/dialog"

export default function SettingsPage() {
    return (
        <div className="p-0 md:pt-14 size-full max-w-7xl">

            <section className='pb-4 space-y-2'>
                <h1 className="text-2xl md:text-4xl font-semibold  rtl:font-cairo ">
                    Settings
                </h1>

            </section>

            <section className='space-y-2 pb-8'>

                <h2 className='text-lg font-semibold'>Personal information</h2>

                <div className='bg-muted rounded-lg p-6 flex flex-col space-y-6 md:space-y-4 justify-center items-center'>

                    <div className='grid grid-cols-2 gap-4 w-full'>

                        <div className='flex flex-col space-y-2'>
                            <Label className='text-sm font-semibold'>First name</Label>
                            <div className="relative rounded-lg col-span-3">
                                <Input
                                    type="text"
                                    id="first_name"
                                    className="ps-10"
                                    placeholder="First name"
                                // value={value.servicePrice}
                                // onChange={(e) => setValue({ ...value, servicePrice: Number(e.target.value) })}
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
                                    id="last_name"
                                    className="ps-10"
                                    placeholder="Last name"
                                // value={value.servicePrice}
                                // onChange={(e) => setValue({ ...value, servicePrice: Number(e.target.value) })}
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
                                    id="email"
                                    className="ps-10"
                                    placeholder="email@example.com"
                                // value={value.servicePrice}
                                // onChange={(e) => setValue({ ...value, servicePrice: Number(e.target.value) })}
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
                                    id="email"
                                    className="ps-12"
                                    placeholder="email@example.com"
                                // value={value.servicePrice}
                                // onChange={(e) => setValue({ ...value, servicePrice: Number(e.target.value) })}
                                />
                                <p className="absolute rtl:right-2 left-2 rtl:left-auto top-1/2 -translate-y-1/2 text-muted-foreground text-sm ps-1 py-2">
                                    +966
                                </p>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="flex justify-end items-center w-full">

                    <Dialog >
                        <DialogTrigger asChild>
                            <Button className="">
                                Edit
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[740px] sm:w-[80vw] overflow-hidden p-8 ">
                            <DialogHeader className=" w-full pb-4">
                                <DialogTitle className="text-3xl font-bold rtl:font-cairo">
                                    Personal information
                                </DialogTitle>
                                <DialogDescription>
                                    Edit your personal information
                                </DialogDescription>
                            </DialogHeader>
                            <div className='grid grid-cols-2 gap-4 w-full   md:h-auto overflow-y-auto p-1'>
                                <div className='flex flex-col space-y-2'>
                                    <Label className='text-sm font-semibold'>First name</Label>
                                    <div className="relative rounded-lg col-span-3">
                                        <Input
                                            type="text"
                                            id="first_name"
                                            className="ps-10"
                                            placeholder="First name"
                                        // value={value.servicePrice}
                                        // onChange={(e) => setValue({ ...value, servicePrice: Number(e.target.value) })}
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
                                            id="last_name"
                                            className="ps-10"
                                            placeholder="Last name"
                                        // value={value.servicePrice}
                                        // onChange={(e) => setValue({ ...value, servicePrice: Number(e.target.value) })}
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
                                            id="email"
                                            className="ps-10"
                                            placeholder="email@example.com"
                                        // value={value.servicePrice}
                                        // onChange={(e) => setValue({ ...value, servicePrice: Number(e.target.value) })}
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
                                            id="email"
                                            className="ps-12"
                                            placeholder="email@example.com"
                                        // value={value.servicePrice}
                                        // onChange={(e) => setValue({ ...value, servicePrice: Number(e.target.value) })}
                                        />
                                        <p className="absolute rtl:right-2 left-2 rtl:left-auto top-1/2 -translate-y-1/2 text-muted-foreground text-sm ps-1 py-2">
                                            +966
                                        </p>
                                    </div>
                                </div>


                            </div>
                            <DialogFooter className="flex justify-end items-center w-full">
                                <Button type="button" >
                                    Save changes
                                </Button>
                                <Button type="button" variant="outline">
                                    Cancel
                                </Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            </section>

            <section className='space-y-2 pb-4'>

                <h2 className='text-lg font-semibold'>Security</h2>
                <div className='bg-muted rounded-lg p-6 flex flex-col space-y-6 md:space-y-4 justify-center items-center'>

                    <div className='grid grid-cols-2 gap-4 w-full'>

                        <div className='flex flex-col space-y-2'>
                            <Label className='text-sm font-semibold'>Old Password</Label>
                            <div className="relative rounded-lg col-span-3">
                                <PasswordInput
                                    id="old_password"
                                    className="ps-12 bg-background"
                                    placeholder="Old password"
                                // value={value.servicePrice}
                                // onChange={(e) => setValue({ ...value, servicePrice: Number(e.target.value) })}
                                />
                                <p className="absolute rtl:right-2 left-2 rtl:left-auto top-1/2 -translate-y-1/2 text-muted-foreground text-xs italic p-2">
                                    <Lock className="w-4 h-4" />
                                </p>
                            </div>

                        </div>

                        <div className='flex flex-col space-y-2'>
                            <Label className='text-sm font-semibold'>New Password</Label>
                            <div className="relative rounded-lg col-span-3">
                                <PasswordInput
                                    id="new_password"
                                    className="ps-12 bg-background"
                                    placeholder="New password"
                                // value={value.servicePrice}
                                // onChange={(e) => setValue({ ...value, servicePrice: Number(e.target.value) })}
                                />
                                <p className="absolute rtl:right-2 left-2 rtl:left-auto top-1/2 -translate-y-1/2 text-muted-foreground text-xs italic p-2">
                                    <Lock className="w-4 h-4" />
                                </p>
                            </div>

                        </div>

                        <div className='flex flex-col space-y-2'>
                            <Label className='text-sm font-semibold'>Confirm New Password</Label>
                            <div className="relative rounded-lg col-span-3">
                                <PasswordInput
                                    id="confirm_new_password"
                                    className="ps-12 bg-background"
                                    placeholder="Confirm new password"
                                // value={value.servicePrice}
                                // onChange={(e) => setValue({ ...value, servicePrice: Number(e.target.value) })}
                                />
                                <p className="absolute rtl:right-2 left-2 rtl:left-auto top-1/2 -translate-y-1/2 text-muted-foreground text-xs italic p-2">
                                    <Lock className="w-4 h-4" />
                                </p>
                            </div>

                        </div>

                    </div>

                </div>
                <div className="flex justify-end items-center w-full">
                    <Button className="bg-primary text-white">Edit</Button>
                </div>
            </section>
        </div>
    )
}
