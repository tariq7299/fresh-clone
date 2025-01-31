"use client"

import * as React from "react"
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/outline'
import { Check, ChevronsUpDown } from "lucide-react"
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
import { ChevronsUpDownIcon } from "lucide-react";
// import { ComboboxProps } from "@/helper/types"
// import { FieldValues, FieldPath } from "react-hook-form"

// Add types
// export function Combobox<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>({ values, field, className, inputPlaceholder = "Select value...", searchPlaceholder = "Search..." }: ComboboxProps<TFieldValues, TName>) {
export function Combobox({ triggerIconOnLeft = false, values, field, className, inputPlaceholder = "Select value...", searchPlaceholder = "Search...", triggerClassName = "", triggerIcon = <ChevronsUpDownIcon className="opacity-50" />, popoverClassName = "" }: { triggerIconOnLeft?: boolean, values: { id: number, name: string, icon: string }[], field?: any, className?: string, inputPlaceholder?: string, searchPlaceholder?: string, triggerClassName?: string, triggerIcon?: React.ReactNode | null, popoverClassName?: string }) {


    const [open, setOpen] = React.useState(false)

    return (
        <Popover open={open} onOpenChange={setOpen} >
            <PopoverTrigger className={className} asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className={cn(" justify-between ", triggerClassName)}

                >
                    {field.value && values.length > 0
                        ? (
                            <p className="font-semibold">
                                {values.find((value: { id: number, name: string }) => value.id === field.value)?.name}
                            </p>

                        )
                        : inputPlaceholder}
                    <div className={cn("order-first", triggerIconOnLeft ? "order-first" : "")}>{triggerIcon}</div>
                </Button>
            </PopoverTrigger>
            <PopoverContent className={cn(" p-0", popoverClassName)}    >
                <Command filter={(value, search) => {
                    if (search && value.toLowerCase().trim().includes(search?.toLowerCase().trim())) {
                        return 1
                    }
                    return 0
                }}
                >
                    <CommandInput placeholder={searchPlaceholder} />
                    <CommandList>
                        {values.length <= 0
                            ? (
                                <CommandLoading>Hang on…</CommandLoading>)
                            : (
                                <>
                                    <CommandEmpty>No value found.</CommandEmpty>
                                    <CommandGroup>

                                        {values.map((value: { id: number, name: string, icon: string }) => (
                                            <CommandItem
                                                key={value.id}
                                                value={value.name}
                                                onSelect={() => {
                                                    field.onChange(value.id);
                                                    setOpen(false);
                                                }}
                                            >
                                                {value.icon && (<span className="size-6">{value.icon}</span>)} <span >{value.name}</span>
                                                <Check
                                                    className={cn(
                                                        "ml-auto size-5",
                                                        field.value === value.id ? "opacity-100" : "opacity-0"
                                                    )}
                                                />
                                                {/* {value.name} */}
                                            </CommandItem>


                                        ))}
                                    </CommandGroup>
                                </>)}


                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover >
    )
}
