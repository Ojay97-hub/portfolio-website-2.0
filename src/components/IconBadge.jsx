import Icons from '../lib/icons'

const IconBadge = ({ 
  icon, 
  children,
  variant = 'default',
  size = 'md',
  className = '',
  ...props 
}) => {
  // Get the icon component dynamically
  const IconComponent = Icons[icon] || Icons.Circle
  
  const baseStyles = 'inline-flex items-center gap-2 font-medium rounded-full transition-colors'
  
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
  
  const iconSizes = {
    sm: 12,
    md: 14,
    lg: 16
  }
  
  return (
    <span 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      <IconComponent size={iconSizes[size]} />
      {children}
    </span>
  )
}

export default IconBadge
