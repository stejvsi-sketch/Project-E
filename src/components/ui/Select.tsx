import { SelectHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  options: { value: string; label: string }[]
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, options, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-semibold text-text-heading mb-2">
            {label}
          </label>
        )}
        <select
          className={cn(
            'flex h-11 w-full rounded-xl border border-border-subtle bg-white/50 backdrop-blur-sm px-4 py-2.5 text-base transition-all cursor-pointer',
            'text-text-heading',
            'focus:outline-none focus:ring-2 focus:ring-accent-gold/50 focus:border-accent-gold focus:bg-white',
            'hover:border-accent-gold/30',
            'disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-disabled-bg disabled:text-disabled-text',
            error && 'border-red-500 focus:ring-red-500/50',
            className
          )}
          ref={ref}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value} className="bg-muted-bg text-text-heading">
              {option.label}
            </option>
          ))}
        </select>
        {error && (
          <p className="mt-2 text-sm text-red-600">{error}</p>
        )}
      </div>
    )
  }
)

Select.displayName = 'Select'
