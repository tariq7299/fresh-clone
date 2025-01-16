import { Button } from "@/ui/components/custom/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/ui/components/dialog"
import { Input } from "@/ui/components/input"
import { Label } from "@/ui/components/label"
import { selectedService } from "@/professional/_components/business-services-form"
import { useState } from "react"
import { z } from "zod"

const editServiceSchema = z.object({
    servicePrice: z.number().gte(1, { message: "Enter a valid price" }),
    serviceDuration: z.number().gte(1, { message: "Enter a valid duration" }),
})


export default function EditServiceDialog({ service, selectedServicesList, setSelectedServicesList }: {
    service: selectedService,
    selectedServicesList: selectedService[],
    setSelectedServicesList: (services: selectedService[]) => void
}) {

    const [isOpen, setIsOpen] = useState(false)

    const [value, setValue] = useState({
        servicePrice: service.servicePrice || "",
        serviceDuration: service.serviceDuration || "",
        errors: {
            servicePrice: [],
            serviceDuration: []
        }
    })

    const handleSaveChanges = () => {

        setValue({ ...value, errors: { servicePrice: [], serviceDuration: [] } })

        const validatedData = editServiceSchema.safeParse({ servicePrice: Number(value.servicePrice), serviceDuration: Number(value.serviceDuration) })
        if (!validatedData.success) {
            setValue({ ...value, errors: validatedData.error.flatten().fieldErrors })
            return
        }

        const updatedServicesList = selectedServicesList.map((selectedService) => {
            if (selectedService.serviceId === service.serviceId) {
                return {
                    ...selectedService,
                    servicePrice: String(value.servicePrice),
                    serviceDuration: String(value.serviceDuration),
                }
            }
            return selectedService
        })

        setSelectedServicesList(updatedServicesList)
        setIsOpen(false)
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>

                <Button variant="ghost" className="w-full justify-start  p-2 hover:bg-accent-100/80  font-semibold transition-colors duration-200 ease-in-out">Edit</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit <span className="font-bold">{service.serviceName}</span></DialogTitle>
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
                                <Input
                                    id="name"
                                    type="number"
                                    // defaultValue={""}
                                    className="remove-default-input-styles"
                                    value={value.serviceDuration}
                                    onChange={(e) => setValue({ ...value, serviceDuration: e.target.value })}
                                />
                                <p className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground text-xs italic p-2">min</p>
                            </div>
                            {value.errors.serviceDuration?.length > 0 && <p className=" text-destructive text-sm col-span-3 pt-2">{value.errors.serviceDuration?.[0]}</p>}

                        </div>
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
                                    // defaultValue={""}
                                    className="remove-default-input-styles"
                                    value={value.servicePrice}
                                    onChange={(e) => setValue({ ...value, servicePrice: e.target.value })}
                                />
                                <p className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground text-xs italic p-2">{service.serviceCurrency}</p>

                            </div>

                            {value.errors.servicePrice?.length > 0 && <p className=" text-destructive text-sm col-span-3 pt-2">{value.errors.servicePrice?.[0]}</p>}
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
