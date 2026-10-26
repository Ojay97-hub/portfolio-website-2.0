import { forwardRef } from 'react'

const Textarea = forwardRef(({ label, error, className = '', required = false, rows = 4, id, name, ...props }, ref) => {
  const textareaId = id || name

  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={textareaId} className="block text-sm font-bold text-ink">
          {label}
          {required && <span className="text-brand-deep ml-1">*</span>}
        </label>
      )}
      <textarea
        id={textareaId}
        name={name}
        ref={ref}
        rows={rows}
        aria-invalid={!!error}
        aria-describedby={error ? `${textareaId}-error` : undefined}
        className={`w-full px-4 py-3 bg-ivory border-2 border-ink rounded-2xl text-ink placeholder:text-ink-faint shadow-pop focus:ring-2 focus:ring-brand focus:ring-offset-0 transition-shadow resize-vertical ${error ? 'border-red-600 focus:ring-red-500' : ''} ${className}`}
        {...props}
      />
      {error && (
        <p id={`${textareaId}-error`} className="text-sm font-bold text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  )
})

Textarea.displayName = 'Textarea'

export default Textarea
