"use client"

import * as React from 'react'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import { Button } from './button'
import { cn } from '@/_lib/utils/utils'

export interface PasswordInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> { }

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false)
    return (
      <div className='relative rounded-md'>
        <input
          type={showPassword ? 'text' : 'password'}
          className={cn(
            'flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground/50 placeholder:text-sm md:placeholder:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm rtl:ps-8',
            className
          )}
          ref={ref}
          {...props}
        />
        <Button
          type='button'
          size='icon'
          variant='ghost'
          className='absolute right-1 top-1/2 h-6 w-6 -translate-y-1/2 rounded-md text-muted-foreground'
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? <EyeIcon className='h-4 w-4' /> : <EyeSlashIcon className='h-4 w-4' />}
        </Button>
      </div>
    )
  }
)
PasswordInput.displayName = 'PasswordInput'

export { PasswordInput }
