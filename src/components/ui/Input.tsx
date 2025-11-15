import { InputHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-semibold text-text-heading mb-2">
            {label}
          </label>
        )}
        <input
          className={cn(
            'flex h-12 w-full rounded-lg border border-border-subtle bg-muted-bg px-4 py-3 text-base transition-colors',
            'text-text-heading placeholder:text-text-muted',
            'focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-accent-gold',
            'disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-disabled-bg disabled:text-disabled-text',
            error && 'border-red-500 focus:ring-red-500',
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="mt-2 text-sm text-red-600">{error}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
