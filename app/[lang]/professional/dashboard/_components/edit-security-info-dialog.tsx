"use client"

import { Button } from "@/_ui/components/custom/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/_ui/components/dialog"
import { Label } from "@/_ui/components/label"
import { Lock } from "lucide-react"
import { PasswordInput } from "@/_ui/components/custom/password-input"
import { useState } from "react"
import { handleFormResponse } from "@/_lib/utils/utils"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { handleUpdateProfessionalSecurityInfo } from "../_lib/form-actions"
import { useActionState } from "react"
import { SecurityInfoFormState } from "../_lib/definitions"

export default function EditSecurityInfoDialog() {

    const INITIAL_STATE: SecurityInfoFormState = {
        success: false,
        clientFieldsErrors: null,
        apiDataResponse: null,
        apiMsgs: "",
        formData: {
            current_password: "",
            new_password: "",
            new_password_confirmation: ""
        }
    };

    const [formState, formAction, isPending] = useActionState(handleUpdateProfessionalSecurityInfo, INITIAL_STATE);

    const router = useRouter()

    useEffect(() => {
        handleFormResponse({
            formState, successCallback: () => {
                router.refresh()
            }
        })
    }, [formState])

    const [open, setOpen] = useState(false)



    return <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
            <Button className="">
                Edit
            </Button>
        </DialogTrigger>
        <DialogContent className=" ">

            <form action={formAction} className="  grid w-full  gap-4  ">
                <DialogHeader className="">
                    <DialogTitle className="">
                        Security
                    </DialogTitle>
                    <DialogDescription>
                        Edit your security information
                    </DialogDescription>
                </DialogHeader>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full  overflow-y-auto p-1'>

                    <div className='flex flex-col space-y-2'>
                        <Label className='text-sm font-semibold'>Old Password</Label>
                        <div className="relative rounded-lg col-span-3">
                            <PasswordInput
                                id="current_password"
                                name="current_password"
                                className="ps-12 bg-background"
                                placeholder="Old password"
                                disabled={isPending}
                            // value={value.servicePrice}
                            // onChange={(e) => setValue({ ...value, servicePrice: Number(e.target.value) })}
                            />
                            <p className="absolute rtl:right-2 left-2 rtl:left-auto top-1/2 -translate-y-1/2 text-muted-foreground text-xs italic p-2">
                                <Lock className="w-4 h-4" />
                            </p>
                        </div>
                        <p className="text-destructive text-sm">
                            {formState?.clientFieldsErrors?.current_password?.[0]}
                        </p>

                    </div>

                    <div className='flex flex-col space-y-2'>
                        <Label className='text-sm font-semibold'>New Password</Label>
                        <div className="relative rounded-lg col-span-3">
                            <PasswordInput
                                id="new_password"
                                name="new_password"
                                className="ps-12 bg-background"
                                placeholder="New password"
                                disabled={isPending}
                            // value={value.servicePrice}
                            // onChange={(e) => setValue({ ...value, servicePrice: Number(e.target.value) })}
                            />
                            <p className="absolute rtl:right-2 left-2 rtl:left-auto top-1/2 -translate-y-1/2 text-muted-foreground text-xs italic p-2">
                                <Lock className="w-4 h-4" />
                            </p>
                        </div>
                        <p className="text-destructive text-sm">
                            {formState?.clientFieldsErrors?.new_password?.[0]}
                        </p>

                    </div>

                    <div className='flex flex-col space-y-2'>
                        <Label className='text-sm font-semibold'>Confirm New Password</Label>
                        <div className="relative rounded-lg col-span-3">
                            <PasswordInput
                                id="new_password_confirmation"
                                name="new_password_confirmation"
                                className="ps-12 bg-background"
                                placeholder="Confirm new password"
                                disabled={isPending}
                            // value={value.servicePrice}
                            // onChange={(e) => setValue({ ...value, servicePrice: Number(e.target.value) })}
                            />
                            <p className="absolute rtl:right-2 left-2 rtl:left-auto top-1/2 -translate-y-1/2 text-muted-foreground text-xs italic p-2">
                                <Lock className="w-4 h-4" />
                            </p>
                        </div>
                        <p className="text-destructive text-sm">
                            {formState?.clientFieldsErrors?.new_password_confirmation?.[0]}
                        </p>

                    </div>


                </div>
                <DialogFooter className="">
                    <Button type="submit" disabled={isPending} loading={isPending}>
                        Change Password
                    </Button>
                    <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                        Cancel
                    </Button>
                </DialogFooter>
            </form>
        </DialogContent>
    </Dialog>
}


