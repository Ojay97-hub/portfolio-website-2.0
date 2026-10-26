import { forwardRef } from 'react'

const Input = forwardRef(({ label, error, className = '', required = false, id, name, ...props }, ref) => {
  const inputId = id || name

  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={inputId} className="block text-sm font-bold text-ink">
          {label}
          {required && <span className="text-brand-deep ml-1">*</span>}
        </label>
      )}
      <input
        id={inputId}
        name={name}
        ref={ref}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : undefined}
        className={`w-full px-4 py-3 bg-ivory border-2 border-ink rounded-2xl text-ink placeholder:text-ink-faint shadow-pop focus:ring-2 focus:ring-brand focus:ring-offset-0 transition-shadow ${error ? 'border-red-600 focus:ring-red-500' : ''} ${className}`}
        {...props}
      />
      {error && (
        <p id={`${inputId}-error`} className="text-sm font-bold text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  )
})

Input.displayName = 'Input'

export default Input
