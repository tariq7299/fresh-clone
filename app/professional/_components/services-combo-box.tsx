"use client"

import * as React from "react"
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/outline'
import { cn } from "@/lib/utils/utils"
import { Button } from "@/ui/components/custom/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandLoading
} from "@/ui/components/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/ui/components/popover"
import { Service, servicesList, selectedService } from "./business-services-form"


// import { ComboboxProps } from "@/helper/types"
// import { FieldValues, FieldPath } from "react-hook-form"

// Add types
// export function Combobox<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>({ values, field, className, inputPlaceholder = "Select value...", searchPlaceholder = "Search..." }: ComboboxProps<TFieldValues, TName>) {
export function ServicesComboBox({ servicesList, selectedService, setSelectedService, setServicesList, className, inputPlaceholder = "Select value...", searchPlaceholder = "Search..." }: { servicesList: servicesList, selectedService: selectedService, setSelectedService: any, setServicesList?: any, className?: string, inputPlaceholder?: string, searchPlaceholder?: string }) {

    console.log("servicesList", servicesList)

    const [open, setOpen] = React.useState(false)

    return (
        <Popover open={open} onOpenChange={setOpen} >
            <PopoverTrigger className={className} asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className=" justify-between"
                >
                    {selectedService.serviceCategory && servicesList.length > 0
                        ? servicesList.find((item: { name: string, services: Service[] }) => item.name === selectedService.serviceCategory)?.services.find((service: Service) => service.id === Number(selectedService.serviceId))?.name
                        : inputPlaceholder}
                    <ChevronUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className=" p-0">
                <Command filter={(value, search) => {
                    if (search && value.toLowerCase().trim().includes(search?.toLowerCase().trim())) {
                        return 1
                    }
                    return 0
                }}
                >
                    <CommandInput placeholder={searchPlaceholder} />
                    <CommandList>
                        {servicesList.length <= 0
                            ? (
                                <CommandLoading>Hang on…</CommandLoading>)
                            : (
                                <>

                                    <CommandEmpty>No value found.</CommandEmpty>

                                    {servicesList.map((item: { name: string, services: Service[] }) => (
                                        <CommandGroup key={item.name} heading={item.name}>

                                            {item.services.map((service: Service) => (

                                                <CommandItem
                                                    key={service.id}
                                                    value={service.name}
                                                    onSelect={() => {
                                                        setSelectedService({
                                                            serviceCategory: item.name,
                                                            serviceName: service.name,
                                                            servicePrice: String(service.price), serviceDuration: String(service.duration), serviceCurrency: "EGP",
                                                            serviceId: String(service.id)
                                                        });
                                                        setOpen(false);
                                                    }}
                                                >


                                                    <CheckIcon
                                                        className={cn(
                                                            "mr-2 h-4 w-4",
                                                            Number(selectedService.serviceId) === service.id ? "opacity-100" : "opacity-0"
                                                        )}
                                                    />
                                                    {service.name}
                                                </CommandItem>
                                            ))}
                                        </CommandGroup>
                                    ))}
                                </>
                            )}
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover >
    )
}
