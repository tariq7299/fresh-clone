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
import { Service } from "@/[lang]/professional/_lib/definitions"
import { useState } from "react"
import { z } from "zod"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup, SelectLabel } from '@/_ui/components/select';


const createEditServiceSchema = (dict: any) => z.object({
    servicePrice: z.number().gte(1, { message: dict.edit_dialog.price.validation }),
    serviceDuration: z.number().gte(1, { message: dict.edit_dialog.duration.validation }),
})

export default function EditServiceDialog({
    currentService,
    services,
    setServices,
    dict
}: {
    currentService: Service,
    services: Service[],
    setServices: (services: Service[]) => void,
    dict: any
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

        const editServiceSchema = createEditServiceSchema(dict)
        const validatedData = editServiceSchema.safeParse({
            servicePrice: Number(value.servicePrice),
            serviceDuration: Number(value.serviceDuration)
        })

        if (!validatedData.success) {
            if (validatedData.error.flatten().fieldErrors.servicePrice) {
                setValue({
                    ...value, errors: {
                        servicePrice: validatedData.error.flatten().fieldErrors.servicePrice,
                        serviceDuration: []
                    }
                })
            }

            if (validatedData.error.flatten().fieldErrors.serviceDuration) {
                setValue({
                    ...value, errors: {
                        servicePrice: [],
                        serviceDuration: validatedData.error.flatten().fieldErrors.serviceDuration
                    }
                })
            }

            return
        }

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
                <Button variant="ghost" className="w-full justify-start p-2 hover:bg-accent-100/80 font-semibold transition-colors duration-200 ease-in-out">
                    {dict.actions.edit}
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] ">
                <DialogHeader>
                    <DialogTitle className="pt-6">
                        {dict.edit_dialog.title}{" "}
                        <span className="font-bold">{currentService?.serviceName}</span>
                    </DialogTitle>
                    <DialogDescription>
                        {dict.edit_dialog.description}
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            {dict.edit_dialog.duration.label}
                        </Label>
                        <div className="col-span-3">
                            <div className="relative rounded-lg">
                                <Select
                                    name="duration"
                                    value={value.serviceDuration?.toString() || ""}
                                    onValueChange={(e) => setValue({ ...value, serviceDuration: Number(e) })}
                                >
                                    <SelectTrigger className="w-full text-md">
                                        <SelectValue placeholder="Select duration" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>{dict.edit_dialog.duration.group_label}</SelectLabel>
                                            {[15, 30, 45, 60, 75, 90, 105, 120].map((duration) => (
                                                <SelectItem key={duration} value={duration.toString()}>
                                                    <span className="text-sm">
                                                        {duration} {dict.edit_dialog.duration.unit}
                                                    </span>
                                                </SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            {value.errors.serviceDuration?.length > 0 && (
                                <p className="text-destructive text-sm col-span-3 pt-2">
                                    {value.errors.serviceDuration[0]}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            {dict.edit_dialog.price.label}
                        </Label>
                        <div className="col-span-3">
                            <div className="relative rounded-lg col-span-3">
                                <Input
                                    type="number"
                                    id="username"
                                    className="remove-default-input-styles"
                                    value={value.servicePrice}
                                    onChange={(e) => setValue({ ...value, servicePrice: Number(e.target.value) })}
                                />
                                <p className="absolute right-2 rtl:left-2 rtl:right-auto top-1/2 -translate-y-1/2 text-muted-foreground text-xs italic p-2">
                                    {currentService?.serviceCurrency}
                                </p>
                            </div>
                            {value.errors.servicePrice?.length > 0 && (
                                <p className="text-destructive text-sm col-span-3 pt-2">
                                    {value.errors.servicePrice[0]}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
                <DialogFooter>
                    <Button type="button" onClick={handleSaveChanges}>
                        {dict.edit_dialog.save}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
