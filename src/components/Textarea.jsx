import { forwardRef } from 'react'

const Textarea = forwardRef(({
  label,
  error,
  className = '',
  required = false,
  rows = 4,
  ...props
}, ref) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-text">
          {label}
          {required && <span className="text-accent ml-1">*</span>}
        </label>
      )}
      <textarea
        ref={ref}
        rows={rows}
        className={`w-full px-4 py-3 bg-card border border-border rounded-xl text-text placeholder-muted focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors resize-vertical ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''} ${className}`}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-400">{error}</p>
      )}
    </div>
  )
})

Textarea.displayName = 'Textarea'

export default Textarea
