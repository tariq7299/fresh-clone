import { Input } from "@/_ui/components/input"
import { Label } from "@/_ui/components/label"

export default function SettingsPage() {
    return (
        <div className="p-0 md:pt-14 size-full max-w-7xl">
            <section className='pb-4 space-y-2'>
                <h1 className="text-2xl md:text-4xl font-semibold  rtl:font-cairo ">
                    Settings
                </h1>

            </section>

            <section className='space-y-2 pb-4'>

                <h2 className='text-lg font-semibold'>Personal information</h2>
                <div className='bg-muted rounded-lg p-6 flex flex-col space-y-6 md:space-y-4 justify-center items-center'>
                    <div className='grid grid-cols-2 gap-4 w-full'>

                        <div className='flex flex-col space-y-2'>
                            <Label className='text-sm font-semibold'>First name</Label>
                            <Input className='w-full' />
                        </div>
                        <div className='flex flex-col space-y-2'>
                            <Label className='text-sm font-semibold'>Last name</Label>
                            <Input className='w-full' />
                        </div>
                        <div className='flex flex-col space-y-2'>
                            <Label className='text-sm font-semibold'>Email</Label>
                            <Input className='w-full' />
                        </div>
                        <div className='flex flex-col space-y-2'>
                            <Label className='text-sm font-semibold'>Phone number</Label>
                            <Input className='w-full' />
                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}
