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
import { Service } from "@/professional/_lib/definitions"
import { useState } from "react"
import { z } from "zod"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup, SelectLabel } from '@/_ui/components/select';

const editServiceSchema = z.object({
    servicePrice: z.number().gte(1, { message: "Enter a valid price" }),
    serviceDuration: z.number().gte(1, { message: "Enter a valid duration" }),
})


export default function EditServiceDialog({ currentService, services, setServices }: {
    currentService: Service,
    services: Service[],
    setServices: (services: Service[]) => void
}) {

    const [isOpen, setIsOpen] = useState(false)

    const [value, setValue] = useState({
        servicePrice: currentService?.servicePrice || 0,
        serviceDuration: currentService?.serviceDuration || 0,
        errors: {
            servicePrice: [] as string[] | undefined,
            serviceDuration: [] as string[] | undefined
        }
    })

    const handleSaveChanges = () => {

        setValue({ ...value, errors: { servicePrice: [], serviceDuration: [] } })

        const validatedData = editServiceSchema.safeParse({ servicePrice: Number(value.servicePrice), serviceDuration: Number(value.serviceDuration) })
        if (!validatedData.success) {

            if (validatedData.error.flatten().fieldErrors.servicePrice) {
                setValue({ ...value, errors: { servicePrice: validatedData.error.flatten().fieldErrors.servicePrice, serviceDuration: [] } })
            }

            if (validatedData.error.flatten().fieldErrors.serviceDuration) {
                setValue({ ...value, errors: { servicePrice: [], serviceDuration: validatedData.error.flatten().fieldErrors.serviceDuration } })
            }

            return
        }
        // Create a new array by mapping over the existing services
        // For the service being edited, update its price and duration
        // Leave all other services unchanged
        const updatedServicesList = services.map((service) => {
            if (service.serviceId === currentService.serviceId) {
                return {
                    ...service,
                    servicePrice: value.servicePrice,
                    serviceDuration: value.serviceDuration,
                }
            }
            return service
        })

        setServices(updatedServicesList)
        setIsOpen(false)
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>

                <Button variant="ghost" className="w-full justify-start  p-2 hover:bg-accent-100/80  font-semibold transition-colors duration-200 ease-in-out">Edit</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit <span className="font-bold">{currentService?.serviceName}</span></DialogTitle>
                    <DialogDescription>
                        Make changes to your service here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Duration
                        </Label>
                        <div className=" col-span-3">
                            <div className="relative roudned-lg  ">
                                <Select name="duration" value={value.serviceDuration?.toString() || ""} onValueChange={(e) => setValue({ ...value, serviceDuration: Number(e) })}>
                                    <SelectTrigger className="w-full  text-md">
                                        <SelectValue placeholder="Select a your business capacity" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Duration</SelectLabel>
                                            {[15, 30, 45, 60, 75, 90, 105, 120].map((duration) => (
                                                <SelectItem key={duration} value={duration.toString()}>
                                                    <span className="text-sm">{duration} min</span>
                                                </SelectItem>
                                            ))}

                                        </SelectGroup>
                                    </SelectContent>
                                </Select>

                                {/* <p className="absolute right-9 top-1/2 -translate-y-1/2 text-muted-foreground text-xs italic p-2">min</p> */}
                            </div>
                            {value.errors.serviceDuration && value?.errors?.serviceDuration?.length > 0 && <p className=" text-destructive text-sm col-span-3 pt-2">{value?.errors?.serviceDuration?.[0]}</p>}

                        </div>
                        {/* <div className=" col-span-3">
                            <div className="relative roudned-lg  ">
                                <Input
                                    id="name"
                                    type="number"
                                    className="remove-default-input-styles"
                                    value={value.serviceDuration}
                                    onChange={(e) => setValue({ ...value, serviceDuration: Number(e.target.value) })}
                                />
                                <p className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground text-xs italic p-2">min</p>
                            </div>
                            {value.errors.serviceDuration && value?.errors?.serviceDuration?.length > 0 && <p className=" text-destructive text-sm col-span-3 pt-2">{value?.errors?.serviceDuration?.[0]}</p>}

                        </div> */}
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Price
                        </Label>
                        <div className=" col-span-3">


                            <div className="relative roudned-lg  col-span-3">
                                <Input
                                    type="number"
                                    id="username"
                                    className="remove-default-input-styles"
                                    value={value.servicePrice}
                                    onChange={(e) => setValue({ ...value, servicePrice: Number(e.target.value) })}
                                />
                                <p className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground text-xs italic p-2">{currentService?.serviceCurrency}</p>

                            </div>

                            {value.errors.servicePrice && value?.errors?.servicePrice?.length > 0 && <p className=" text-destructive text-sm col-span-3 pt-2">{value?.errors?.servicePrice?.[0]}</p>}
                        </div>
                    </div>
                </div>
                <DialogFooter>
                    <Button type="button" onClick={handleSaveChanges}>Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
