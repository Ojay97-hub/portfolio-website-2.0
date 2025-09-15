import { forwardRef } from 'react'

const Textarea = forwardRef(({ label, error, className = '', required = false, rows = 4, id, name, ...props }, ref) => {
  const textareaId = id || name

  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={textareaId} className="block text-sm font-medium text-text">
          {label}
          {required && <span className="text-accent ml-1">*</span>}
        </label>
      )}
      <textarea
        id={textareaId}
        name={name}
        ref={ref}
        rows={rows}
        aria-invalid={!!error}
        aria-describedby={error ? `${textareaId}-error` : undefined}
        className={`w-full px-4 py-3 bg-card border border-border rounded-xl text-text placeholder-muted focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors resize-vertical ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''} ${className}`}
        {...props}
      />
      {error && (
        <p id={`${textareaId}-error`} className="text-sm text-red-400">{error}</p>
      )}
    </div>
  )
})

Textarea.displayName = 'Textarea'

export default Textarea
