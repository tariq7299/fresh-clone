"use client"

import * as React from "react"
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/outline'
import { cn } from "@/_lib/utils/utils"
import { Button } from "@/_ui/components/custom/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandLoading
} from "@/_ui/components/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/_ui/components/popover"
import { Service, ApiServicesWithCategory, ApiService } from "@/[lang]/professional/_lib/definitions"

// import { ComboboxProps } from "@/helper/types"
// import { FieldValues, FieldPath } from "react-hook-form"

// Add types
// export function Combobox<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>({ values, field, className, inputPlaceholder = "Select value...", searchPlaceholder = "Search..." }: ComboboxProps<TFieldValues, TName>) {
export function ServicesComboBox({ servicesList, selectedService, setSelectedService, className, inputPlaceholder = "Select value...", searchPlaceholder = "Search..." }: { servicesList: ApiServicesWithCategory[], selectedService: Service, setSelectedService: any, className?: string, inputPlaceholder?: string, searchPlaceholder?: string }) {


    const [open, setOpen] = React.useState(false)

    return (
        <Popover open={open} onOpenChange={setOpen} >
            <PopoverTrigger className={className} asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className=" justify-between active:scale-100"
                >
                    {selectedService.serviceCategory && servicesList.length > 0
                        ? servicesList.find((item: { name: string, services: ApiService[] }) => item.name === selectedService.serviceCategory)?.services.find((service: ApiService) => service.id === Number(selectedService.serviceId))?.name
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

                                    {servicesList.map((item: { name: string, services: ApiService[] }) => (
                                        <CommandGroup key={item.name} heading={item.name}>

                                            {item.services.map((service: ApiService) => (

                                                <CommandItem
                                                    className=""
                                                    key={service.id}
                                                    value={service.name}
                                                    onSelect={() => {
                                                        setSelectedService({
                                                            serviceCategory: item.name,
                                                            serviceName: service.name,
                                                            servicePrice: service.price,
                                                            serviceDuration: service.duration, serviceCurrency: "EGP",
                                                            serviceId: service.id
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
