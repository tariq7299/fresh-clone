import { Separator } from '@/_ui/components/separator';
import { Award, HandPlatter, CalendarCheck2, ShieldCheck, Sparkles, Star } from 'lucide-react';

export default function FeaturesSection({ dict }: { dict: any }) {
    return (
        <>
            <div className="max-w-[1440px] m-auto ">

                <h1 className="font-semibold font-source-sans text-start text-2xl md:text-3xl pb-16">
                    {dict.home.the_lumière_difference.title}
                </h1>

                <h2 className="font-source-sans font-bold text-xl pb-11 lg:pb-7">{dict.home.the_lumière_difference.for_business_owners.title}</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">

                    <div className="flex flex-col gap-1 items-start justify-center">
                        <Award className="size-9 mb-3" />
                        <h3 className="font-bold text-lg">{dict.home.the_lumière_difference.for_business_owners.advanced_booking.title}</h3>
                        <p className="leading-tight">{dict.home.the_lumière_difference.for_business_owners.advanced_booking.description}</p>
                    </div>
                    <div className="flex flex-col gap-1 items-start justify-center">
                        <HandPlatter className="size-9 mb-3" />
                        <h3 className="font-bold text-lg">{dict.home.the_lumière_difference.for_business_owners.slot_optimization.title}</h3>
                        <p className="leading-tight">{dict.home.the_lumière_difference.for_business_owners.slot_optimization.description}</p>
                    </div>
                    <div className="flex flex-col gap-1 items-start justify-center">
                        <CalendarCheck2 className="size-9 mb-3" />
                        <h3 className="font-bold text-lg">{dict.home.the_lumière_difference.for_business_owners.service_management.title}</h3>
                        <p className="leading-tight">{dict.home.the_lumière_difference.for_business_owners.service_management.description}</p>
                    </div>

                </div>
                <Separator className="w-[50vw] max-w-[370px] m-auto my-16 lg:my-10"></Separator>

                <h2 className="font-source-sans font-bold text-xl pb-11 lg:pb-7">{dict.home.the_lumière_difference.for_customers.title}</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">

                    <div className="flex flex-col gap-1 items-start justify-center">
                        <ShieldCheck className="size-9 mb-3" />
                        <h3 className="font-bold text-lg">{dict.home.the_lumière_difference.for_customers.simple_booking.title}</h3>
                        <p className="leading-tight">{dict.home.the_lumière_difference.for_customers.simple_booking.description}</p>
                    </div>
                    <div className="flex flex-col gap-1 items-start justify-center">
                        <Sparkles className="size-9 mb-3" />
                        <h3 className="font-bold text-lg">{dict.home.the_lumière_difference.for_customers.real_time.title}</h3>
                        <p className="leading-tight">{dict.home.the_lumière_difference.for_customers.real_time.description}</p>
                    </div>
                    <div className="flex flex-col gap-1 items-start justify-center">
                        <Star className="size-9 mb-3" />
                        <h3 className="font-bold text-lg">{dict.home.the_lumière_difference.for_customers.personalized.title}</h3>
                        <p className="leading-tight">{dict.home.the_lumière_difference.for_customers.personalized.description}</p>
                    </div>

                </div>

            </div>
        </>
    )
}