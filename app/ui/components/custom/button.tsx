import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { ArrowPathIcon } from '@heroicons/react/24/outline'

const buttonVariants = cva(
    'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
    {
        variants: {
            borderType: {
                fullRounded: 'px-4 py-4.5 rounded-full',
                default: " px-4 py-2"
            },
            variant: {
                default:
                    'bg-primary text-primary-foreground shadow hover:bg-primary/90',
                destructive:
                    'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
                outline:
                    // 'border border-input bg-background shadow-sm hover:bg-secondary-100 hover:text-accent-foreground',
                    'border border-input bg-background shadow-sm hover:bg-accent-100 ',
                secondary:
                    'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
                accent:
                    'bg-accent text-accent-foreground shadow-sm hover:bg-accent/80',
                ghost: 'hover:bg-accent/10 ',
                link: 'text-primary underline-offset-4 hover:underline',
            },
            size: {
                default: 'h-9 ',
                sm: 'h-8 rounded-md py-0 px-3 text-xs',
                lg: 'h-10 rounded-md py-0 px-8',
                icon: 'h-9 w-9 py-0 px-0',
            },
        },
        defaultVariants: {
            borderType: 'default',
            variant: 'default',
            size: 'default',
        },
    }
)

interface ButtonPropsBase
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> { }

type ButtonProps = ButtonPropsBase &
    (
        | { asChild: true }
        | {
            asChild?: false
            loading?: boolean
            leftSection?: JSX.Element
            rightSection?: JSX.Element
        }
    )

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, borderType, variant, size, children, ...props }, ref) => {

        if (props.asChild) {
            return (
                <Slot
                    className={cn(buttonVariants({ borderType, variant, size, className }))}
                    ref={ref}
                    {...props}
                >
                    {children}
                </Slot>
            )
        }

        const {
            loading = false,
            leftSection,
            rightSection,
            disabled,
            ...otherProps
        } = props

        return (
            <button
                className={cn(buttonVariants({ borderType, variant, size, className }))}
                disabled={loading || disabled}
                ref={ref}
                {...otherProps}
            >
                {((leftSection && loading) ||
                    (!leftSection && !rightSection && loading)) && (
                        <ArrowPathIcon className='mr-2 h-4 w-4 animate-spin' />
                    )}
                {!loading && leftSection && <div className='mr-2'>{leftSection}</div>}
                {children}
                {!loading && rightSection && <div className='ml-2'>{rightSection}</div>}
                {rightSection && loading && (
                    <ArrowPathIcon className='ml-2 h-4 w-4 animate-spin' />
                )}
            </button>
        )
    }
)
Button.displayName = 'Button'

// eslint-disable-next-line react-refresh/only-export-components
export { Button, buttonVariants }
