"use client"

import { Button } from "@/_ui/components/custom/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/_ui/components/dialog"
import { Input } from "@/_ui/components/input"
import { Label } from "@/_ui/components/label"
import { Mail, Router, UserRound } from "lucide-react"
import { useActionState, useEffect, useState } from "react"
import { handleUpdateProfessionalPersonalInfo } from "../_lib/form-actions"
import { PersonalInfoFormState } from "../_lib/definitions"
import { handleFormResponse } from "@/_lib/utils/utils";
import PersonalInputs from "./personal-inputs"
import { useRouter } from "next/navigation";

// TODO: Write types
export default function EditPersonalInfoDialog({ professionalInfo }: {
    professionalInfo: {
        first_name: string,
        last_name: string,
        email: string,
        phone_number: string
    }
}) {

    const INITIAL_STATE: PersonalInfoFormState = {
        success: false,
        clientFieldsErrors: null,
        apiDataResponse: null,
        apiMsgs: "",
        formData: {
            first_name: professionalInfo.first_name,
            last_name: professionalInfo.last_name,
            email: professionalInfo.email,
            phone_number: professionalInfo.phone_number
        }
    };

    const [formState, formAction, isPending] = useActionState(handleUpdateProfessionalPersonalInfo, INITIAL_STATE);

    const router = useRouter()

    useEffect(() => {
        handleFormResponse({
            formState, successCallback: () => {
                router.refresh()
            }
        })
    }, [formState])

    const [open, setOpen] = useState(false)

    return (
        // <form action={formAction}>

        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="">
                    Edit
                </Button>
            </DialogTrigger>
            <DialogContent >

                <form action={formAction} className="  grid w-full  gap-4  ">

                    <DialogHeader className="">
                        <DialogTitle className="">
                            Personal information
                        </DialogTitle>
                        <DialogDescription>
                            Edit your personal information
                        </DialogDescription>
                    </DialogHeader>

                    <PersonalInputs errors={formState.clientFieldsErrors} data={formState.formData} isPending={isPending} />


                    <DialogFooter className="">
                        <Button disabled={isPending} loading={isPending}>
                            Save changes
                        </Button>
                        <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                            Cancel
                        </Button>
                    </DialogFooter>

                </form>

            </DialogContent>
        </Dialog>
        // </form>
    )
}
