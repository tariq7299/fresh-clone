import Form from "../_components/settings-form"
import { getProfessionalInfo } from "@/[lang]/professional/_lib/data"

export default function SettingsPage() {


    return (
        <div className="p-0 md:pt-14 size-full max-w-7xl">
            <section className='pb-4 space-y-2'>
                <h1 className="text-2xl md:text-4xl font-semibold  rtl:font-cairo ">
                    Settings
                </h1>
            </section>

            <Form />
        </div>
    )
}
