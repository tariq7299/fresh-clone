"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/ui/components/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/ui/components/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/ui/components/popover"
import { categories } from "./custom/category"

const frameworks = [
    {
        value: "nails",
        label: "Nails",
    },
    {
        value: "hair&styling",
        label: "Hair & Styling",
    },
    {
        value: "nuxt.js",
        label: "Nuxt.js",
    },
    {
        value: "remix",
        label: "Remix",
    },
    {
        value: "astro",
        label: "Astro",
    },
]

export function Combobox({ triggerClassName = '', triggerIcon = (<ChevronsUpDown className="opacity-50" />), labelClassName = "", popoverClassName = "" }) {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className={cn("w-[200px] justify-between", triggerClassName)}
                >
                    {value
                        ? categories.find((framework) => framework.value === value)?.label
                        : "Select a category..."}
                    {triggerIcon}
                </Button>
            </PopoverTrigger>
            <PopoverContent className={cn("w-[200px] p-0", popoverClassName)}>
                <Command>
                    <CommandInput placeholder="nails..." />
                    <CommandList>
                        <CommandEmpty>No salon found.</CommandEmpty>
                        <CommandGroup>
                            {categories.map((category) => (
                                <CommandItem
                                    key={category.value}
                                    value={category.value}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue)
                                        setOpen(false)
                                    }}
                                    className={cn(
                                        category.icon && "flex items-center gap-2",
                                    )}
                                >
                                    {category.icon && (<span className="size-6">{category.icon}</span>)} <span className={cn(labelClassName)}>{category.label}</span>
                                    <Check
                                        className={cn(
                                            "ml-auto",
                                            value === category.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
