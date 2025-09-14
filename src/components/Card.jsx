const Card = ({ 
  children, 
  className = '', 
  hover = true,
  ...props 
}) => {
  const hoverStyles = hover ? 'card-hover' : ''
  
  return (
    <div
      className={`bg-surface border border-border rounded-2xl p-6 shadow-soft transition ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card
