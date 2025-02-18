"use client"

import { cn } from "@/_lib/utils/utils";
import { Button } from "@/_ui/components/custom/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/_ui/components/dialog"
import { Input } from "@/_ui/components/input"
import { Label } from "@/_ui/components/label"
import { Textarea } from "@/_ui/components/textarea";
import { useEffect, useState } from "react"
import { BusinessLocationErrors } from "../onboarding/business-location/business-location-form"
import { z } from "zod"
import { BusinessLocationFormData } from "@/[lang]/professional/onboarding/business-location/business-location-form"

const locationDetailsSchema = z.object({
    address: z.string().trim().min(1, { message: "address_required" }),
    district: z.string().optional(),
    city: z.string().optional(),
    country: z.string().trim().min(1, { message: "country_required" }),
    directions: z.string().optional(),
    street: z.string().optional(),
    apartment: z.string().optional(),
    building: z.string().optional(),
})

export type LocationDetails = z.infer<typeof locationDetailsSchema>

type BusinessLocationDetailsErrors = Omit<BusinessLocationErrors, "online_business" | "place_id" | "lat" | "lng">

// TODO: Write types
export default function LocationDetails({
    setLocation,
    location,
    className,
    dict
}: {
    setLocation: (location: any) => void,
    location: any,
    className: string,
    dict: any
}) {

    const [isOpen, setIsOpen] = useState(false)

    const [value, setValue] = useState<LocationDetails>({
        address: '',
        district: '',
        city: '',
        country: '',
        directions: '',
        street: '',
        apartment: '',
        building: ''
    })

    const [errors, setErrors] = useState<BusinessLocationDetailsErrors | null>(null)

    const handleSave = () => {
        const result = locationDetailsSchema.safeParse(value)

        if (result.success) {

            setIsOpen(false)
            setLocation({ ...location, ...value })
        } else {
            setErrors(result.error.flatten().fieldErrors)
        }


    }

    useEffect(() => {
        setValue({ ...location })
    }, [location])

    return <>

        <div className={cn("flex gap-2 w-full justify-between", className)}>
            <div className="flex flex-col text-base ">

                {location.address && <p className="">{location.address}</p>}
                {(location.apartment || location.building || location.street) && <p className="">{`${location.street && location.street}${location.building && ", " + location.building}${location.apartment && ", " + location.apartment}`}</p>}
                {location.district && <p className="">{location.district}</p>}
                {location.city && <p className="">{location.city}</p>}
                {location.country && <p className="">{location.country}</p>}
            </div>
            <div>
                {/* <Button size={"sm"} variant={"outline"} className="font-bold">Edit</Button> */}

                <Dialog open={isOpen} onOpenChange={setIsOpen} >
                    <DialogTrigger asChild>

                        <Button
                            type="button"
                            variant="outline"
                            className="w-full justify-start hover:bg-accent-100/80 font-bold transition-colors duration-200 ease-in-out"
                        >
                            {dict.onboarding.business_location.location_details.edit}
                        </Button>
                    </DialogTrigger>

                    <DialogContent className="sm:max-w-[740px] sm:w-[80vw] overflow-hidden p-3">

                        <DialogHeader className="absolute top-0 left-0 rtl:right-0 bg-background pt-8 px-8 pb-2 w-full">
                            <DialogTitle className="text-3xl font-bold rtl:font-cairo">
                                {dict.onboarding.business_location.location_details.title}
                            </DialogTitle>
                            <DialogDescription>
                                {dict.onboarding.business_location.location_details.description}
                            </DialogDescription>
                        </DialogHeader>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-28 pb-24 h-[80vh] md:h-auto overflow-y-auto px-5">

                            <div className="col-span-2 md:col-span-3 space-y-1">
                                <Label htmlFor="address" className="text-right font-bold">
                                    {dict.onboarding.business_location.location_details.fields.address.label}
                                </Label>
                                <Input
                                    id="address"
                                    type="text"
                                    className="remove-default-input-styles"
                                    placeholder={dict.onboarding.business_location.location_details.fields.address.placeholder}
                                    value={value.address}
                                    onChange={(e) => setValue({ ...value, address: e.target.value })}
                                />
                                {errors?.address && <p className=" text-destructive text-sm col-span-3 pt-2">{dict.onboarding.business_location.validation[errors?.address]}</p>}
                            </div>

                            <div className="col-span-2 md:col-span-1 space-y-1">
                                <Label htmlFor="city" className="text-right font-bold">
                                    {dict.onboarding.business_location.location_details.fields.city.label}
                                </Label>
                                <Input
                                    id="city"
                                    type="text"
                                    className="remove-default-input-styles"
                                    placeholder={dict.onboarding.business_location.location_details.fields.city.placeholder}
                                    value={value.city}
                                    onChange={(e) => setValue({ ...value, city: e.target.value })}
                                />
                                {errors?.city && <p className=" text-destructive text-sm col-span-3 pt-2">{errors?.city}</p>}
                            </div>

                            <div className="col-span-1 md:col-span-2 space-y-1">
                                <Label htmlFor="district" className="text-right font-bold">
                                    {dict.onboarding.business_location.location_details.fields.district.label}
                                </Label>
                                <Input
                                    id="district"
                                    type="text"
                                    className="remove-default-input-styles"
                                    placeholder={dict.onboarding.business_location.location_details.fields.district.placeholder}
                                    value={value.district}
                                    onChange={(e) => setValue({ ...value, district: e.target.value })}
                                />
                                {errors?.district && <p className=" text-destructive text-sm col-span-3 pt-2">{dict.onboarding.business_location.validation[errors?.district]}</p>}
                            </div>

                            <div className="col-span-1 md:col-span-2 space-y-1">
                                <Label htmlFor="country" className="text-right font-bold">
                                    {dict.onboarding.business_location.location_details.fields.country.label}
                                </Label>
                                <Input
                                    id="country"
                                    type="text"
                                    className="remove-default-input-styles"
                                    placeholder={dict.onboarding.business_location.location_details.fields.country.placeholder}
                                    value={value.country}
                                    onChange={(e) => setValue({ ...value, country: e.target.value })}
                                />
                                {errors?.country && <p className=" text-destructive text-sm col-span-3 pt-2">{dict.onboarding.business_location.validation[errors?.country]}</p>}
                            </div>

                            <div className="col-span-2 md:col-span-2 space-y-1">
                                <Label htmlFor="street" className="text-right font-bold">
                                    {dict.onboarding.business_location.location_details.fields.street.label}
                                </Label>
                                <Input
                                    id="street"
                                    type="text"
                                    className="remove-default-input-styles"
                                    placeholder={dict.onboarding.business_location.location_details.fields.street.placeholder}
                                    value={value.street}
                                    onChange={(e) => setValue({ ...value, street: e.target.value })}
                                />
                                {errors?.street && <p className=" text-destructive text-sm col-span-3 pt-2">{dict.onboarding.business_location.validation[errors?.street]}</p>}
                            </div>

                            <div className="col-span-1 md:col-span-1 space-y-1">
                                <Label htmlFor="building" className="text-right font-bold">
                                    {dict.onboarding.business_location.location_details.fields.building.label}
                                </Label>
                                <Input
                                    id="building"
                                    type="text"
                                    className="remove-default-input-styles"
                                    placeholder={dict.onboarding.business_location.location_details.fields.building.placeholder}
                                    value={value.building}
                                    onChange={(e) => setValue({ ...value, building: e.target.value })}
                                />
                                {errors?.building && <p className=" text-destructive text-sm col-span-3 pt-2">{dict.onboarding.business_location.validation[errors?.building]}</p>}
                            </div>

                            <div className="col-span-1 md:col-span-1 space-y-1">
                                <Label htmlFor="apartment" className="text-right font-bold">
                                    {dict.onboarding.business_location.location_details.fields.apartment.label}
                                </Label>
                                <Input
                                    id="apartment"
                                    type="text"
                                    className="remove-default-input-styles"
                                    placeholder={dict.onboarding.business_location.location_details.fields.apartment.placeholder}
                                    value={value.apartment}
                                    onChange={(e) => setValue({ ...value, apartment: e.target.value })}
                                />
                                {errors?.apartment && <p className=" text-destructive text-sm col-span-3 pt-2">{dict.onboarding.business_location.validation[errors?.apartment]}</p>}
                            </div>

                            <div className="col-span-2 md:col-span-4 space-y-1">
                                <Label htmlFor="directions" className="text-right font-bold">
                                    {dict.onboarding.business_location.location_details.fields.directions.label}
                                </Label>
                                <Textarea
                                    id="directions"
                                    className="remove-default-input-styles"
                                    placeholder={dict.onboarding.business_location.location_details.fields.directions.placeholder}
                                    value={value.directions}
                                    onChange={(e) => setValue({ ...value, directions: e.target.value })}
                                />
                                {errors?.directions && <p className=" text-destructive text-sm col-span-3 pt-2">{dict.onboarding.business_location.validation[errors?.directions]}</p>}
                            </div>



                        </div>

                        <DialogFooter className="absolute bottom-0 left-0 rtl:right-0 flex gap-1 p-3 w-full bg-background">
                            <Button
                                variant="outline"
                                type="button"
                                onClick={() => { setIsOpen(false) }}
                            >
                                {dict.onboarding.business_location.location_details.actions.cancel}
                            </Button>
                            <Button type="button" onClick={handleSave}>
                                {dict.onboarding.business_location.location_details.actions.save}
                            </Button>
                        </DialogFooter>

                    </DialogContent>
                </Dialog>
            </div>

        </div>

    </>

}