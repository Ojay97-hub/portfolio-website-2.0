const Section = ({ 
  children, 
  id, 
  title, 
  description, 
  className = '',
  titleAlign = 'left',
  ...props 
}) => {
  const alignClass = titleAlign === 'center' ? 'text-center' : 'text-left'
  
  return (
    <section 
      id={id} 
      className={`py-16 md:py-24 ${className}`} 
      {...props}
    >
      <div className="container">
        {(title || description) && (
          <div className={`mb-12 ${alignClass}`}>
            {title && (
              <h2 className="section-heading">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-lg text-muted max-w-2xl text-balance">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

export default Section
