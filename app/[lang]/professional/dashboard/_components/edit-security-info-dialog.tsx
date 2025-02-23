"use client"

import { Button } from "@/_ui/components/custom/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/_ui/components/dialog"
import { Label } from "@/_ui/components/label"
import { Lock } from "lucide-react"
import { PasswordInput } from "@/_ui/components/custom/password-input"

export default function EditSecurityInfoDialog() {
    return <Dialog >
        <DialogTrigger asChild>
            <Button className="">
                Edit
            </Button>
        </DialogTrigger>
        <DialogContent className=" ">
            <DialogHeader className="">
                <DialogTitle className="">
                    Security
                </DialogTitle>
                <DialogDescription>
                    Edit your security information
                </DialogDescription>
            </DialogHeader>
            <div className='grid grid-cols-2 gap-4 w-full  overflow-y-auto p-1'>

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
            <DialogFooter className="">
                <Button type="button" >
                    Save changes
                </Button>
                <Button type="button" variant="outline">
                    Cancel
                </Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
}


