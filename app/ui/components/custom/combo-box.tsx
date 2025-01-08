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
// import { ComboboxProps } from "@/helper/types"
// import { FieldValues, FieldPath } from "react-hook-form"

// Add types
// export function Combobox<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>({ values, field, className, inputPlaceholder = "Select value...", searchPlaceholder = "Search..." }: ComboboxProps<TFieldValues, TName>) {
export function Combobox({ values, field, className, inputPlaceholder = "Select value...", searchPlaceholder = "Search..." }) {


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
                    {field.value && values.length > 0
                        ? values.find((value: { id: number, name: string }) => value.id === field.value)?.name
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
                        {values.length <= 0
                            ? (
                                <CommandLoading>Hang on…</CommandLoading>)
                            : (
                                <>
                                    <CommandEmpty>No value found.</CommandEmpty>
                                    <CommandGroup>

                                        {values.map((value: { id: number, name: string }) => (
                                            <CommandItem
                                                key={value.id}
                                                value={value.name}
                                                onSelect={() => {
                                                    field.onChange(value.id);
                                                    setOpen(false);
                                                }}
                                            >
                                                <CheckIcon
                                                    className={cn(
                                                        "mr-2 h-4 w-4",
                                                        field.value === value.id ? "opacity-100" : "opacity-0"
                                                    )}
                                                />
                                                {value.name}
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
