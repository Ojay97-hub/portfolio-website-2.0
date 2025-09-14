import { Star, Quote } from 'lucide-react'
import Card from './Card'

const TestimonialCard = ({ testimonial, className = '' }) => {
  const { name, role, company, content, rating, avatar } = testimonial

  return (
    <Card className={`h-full ${className}`}>
      {/* Quote Icon */}
      <div className="mb-4">
        <Quote className="text-accent" size={24} />
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={16}
            className={index < rating ? 'text-accent fill-accent' : 'text-muted'}
          />
        ))}
      </div>

      {/* Content */}
      <blockquote className="text-text mb-6 flex-1">
        "{content}"
      </blockquote>

      {/* Author Info */}
      <div className="flex items-center gap-3">
        {avatar && avatar !== '/testimonial-avatar-1.jpg' && avatar !== '/testimonial-avatar-2.jpg' ? (
          <img
            src={avatar}
            alt={`${name} avatar`}
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
            <span className="text-accent font-semibold text-sm">
              {name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
        )}
        <div>
          <h4 className="font-semibold text-text">{name}</h4>
          <p className="text-sm text-muted">{role} • {company}</p>
        </div>
      </div>
    </Card>
  )
}

export default TestimonialCard
