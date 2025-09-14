const Badge = ({ 
  children, 
  variant = 'default',
  size = 'md',
  className = '',
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center font-medium rounded-full transition-colors'
  
  const variants = {
    default: 'bg-primary/20 text-text',
    accent: 'bg-accent/20 text-accent',
    soft: 'bg-accentSoft/20 text-accentSoft'
  }
  
  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base'
  }
  
  return (
    <span 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}

export default Badge
