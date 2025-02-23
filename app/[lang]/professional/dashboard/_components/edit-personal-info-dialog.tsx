"use client"

import { Button } from "@/_ui/components/custom/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/_ui/components/dialog"
import { Input } from "@/_ui/components/input"
import { Label } from "@/_ui/components/label"
import { Mail, UserRound } from "lucide-react"

export default function EditPersonalInfoDialog() {
    return (
        <Dialog >
            <DialogTrigger asChild>
                <Button className="">
                    Edit
                </Button>
            </DialogTrigger>
            <DialogContent className=" ">
                <DialogHeader className="">
                    <DialogTitle className="">
                        Personal information
                    </DialogTitle>
                    <DialogDescription>
                        Edit your personal information
                    </DialogDescription>
                </DialogHeader>
                <div className='grid grid-cols-2 gap-4 w-full  overflow-y-auto p-1'>
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
                <DialogFooter className="">
                    <Button type="button" >
                        Save changes
                    </Button>
                    <Button type="button" variant="outline">
                        Cancel
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>)
}
