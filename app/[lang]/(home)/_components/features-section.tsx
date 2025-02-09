import { Separator } from '@/_ui/components/separator';
import { Award, HandPlatter, CalendarCheck2, ShieldCheck, Sparkles, Star } from 'lucide-react';

export default function FeaturesSection() {
    return (
        <>
            <div className="max-w-[1440px] m-auto ">

                <h1 className="font-semibold font-source-sans text-left text-2xl md:text-3xl pb-16">
                    The <span className="font-cinzel text-3xl  font-bold">Lumière</span> difference
                </h1>

                <h2 className="font-source-sans font-bold text-xl pb-11 lg:pb-7">For business owners</h2>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">

                    <div className="flex flex-col gap-1 items-start justify-center">
                        <Award className="size-9 mb-3" />
                        <h3 className="font-bold text-lg">Advanced Booking Management</h3>
                        <p className="leading-tight">Effortlessly track and manage appointments, cancellations, and client details.</p>
                    </div>
                    <div className="flex flex-col gap-1 items-start justify-center">
                        <HandPlatter className="size-9 mb-3" />
                        <h3 className="font-bold text-lg">Free Slot Optimization</h3>
                        <p className="leading-tight">Maximize bookings by efficiently displaying open slots to customers.</p>
                    </div>
                    <div className="flex flex-col gap-1 items-start justify-center">
                        <CalendarCheck2 className="size-9 mb-3" />
                        <h3 className="font-bold text-lg">Service Management</h3>
                        <p className="leading-tight">Add, edit, and organize your offerings to ensure clients see exactly what you provide.</p>
                    </div>

                </div>
                <Separator className="w-[50vw] max-w-[370px] m-auto my-16 lg:my-10"></Separator>

                <h2 className="font-source-sans font-bold text-xl pb-11 lg:pb-7">For customers</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">

                    <div className="flex flex-col gap-1 items-start justify-center">
                        <ShieldCheck className="size-9 mb-3" />
                        <h3 className="font-bold text-lg">Simple Booking Interface</h3>
                        <p className="leading-tight">Find and book beauty and wellness services in just a few clicks.</p>
                    </div>
                    <div className="flex flex-col gap-1 items-start justify-center">
                        <Sparkles className="size-9 mb-3" />
                        <h3 className="font-bold text-lg">Real-Time Availability</h3>
                        <p className="leading-tight">View updated schedules and available slots instantly.</p>
                    </div>
                    <div className="flex flex-col gap-1 items-start justify-center">
                        <Star className="size-9 mb-3" />
                        <h3 className="font-bold text-lg">Personalized Experience</h3>
                        <p className="leading-tight">Discover services tailored to your preferences and needs.</p>
                    </div>

                </div>

            </div>
        </>
    )
}