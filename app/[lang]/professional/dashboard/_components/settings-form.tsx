import { Input } from "@/_ui/components/input"
import { Label } from "@/_ui/components/label"
import { UserRound, Mail, Lock } from 'lucide-react';
import { PasswordInput } from "@/_ui/components/custom/password-input";

import EditSecurityInfoDialog from "../_components/edit-security-info-dialog"
import EditPersonalInfoDialog from "../_components/edit-personal-info-dialog"
import { getProfessionalInfo } from "@/[lang]/professional/_lib/data"
import { PersonalInfoFormData } from "../_lib/definitions";
import PersonalInputs from "./personal-inputs";



export default async function SettingsForm() {


    const data = await getProfessionalInfo() as {
        user: PersonalInfoFormData
    }

    if (!data) throw new Error("Professional info not found")

    console.log('professionalInfo', data)

    const professionalInfo: {
        first_name: string,
        last_name: string,
        email: string,
        phone_number: string
    } = {
        first_name: data.user.first_name,
        last_name: data.user.last_name,
        email: data.user.email,
        phone_number: data.user.phone_number
    }


    return <>

        <section className='space-y-2 pb-8'>

            <h2 className='text-lg font-semibold'>Personal information</h2>

            <div className='bg-muted rounded-lg p-6 flex flex-col space-y-6 md:space-y-4 justify-center items-center'>

                <PersonalInputs className="pointer-events-none" data={professionalInfo} />

            </div>

            <div className="flex justify-end items-center w-full pt-2">

                <EditPersonalInfoDialog professionalInfo={professionalInfo} />

            </div>

        </section>

        <section className='space-y-2 pb-4'>

            <h2 className='text-lg font-semibold'>Security</h2>
            <div className='bg-muted rounded-lg p-6 flex flex-col space-y-6 md:space-y-4 justify-center items-center'>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full pointer-events-none'>

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
            <div className="flex justify-end items-center w-full pt-2">
                <EditSecurityInfoDialog />
            </div>
        </section>
    </>
}
