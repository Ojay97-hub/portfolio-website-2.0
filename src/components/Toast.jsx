import { useEffect } from 'react'
import { CheckCircle, XCircle, AlertCircle, X } from '../lib/icons'

const Toast = ({ 
  message, 
  type = 'success', 
  isVisible, 
  onClose, 
  duration = 5000 
}) => {
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(onClose, duration)
      return () => clearTimeout(timer)
    }
  }, [isVisible, duration, onClose])

  if (!isVisible) return null

  const icons = {
    success: CheckCircle,
    error: XCircle,
    warning: AlertCircle
  }

  const styles = {
    success: 'bg-brand text-navy',
    error: 'bg-red-200 text-red-950',
    warning: 'bg-yellow-200 text-yellow-950'
  }

  const Icon = icons[type]

  return (
    <div role="status" className={`fixed top-24 right-6 z-50 max-w-sm w-[calc(100%-3rem)] transition-all duration-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
      <div className={`flex items-center gap-3 p-4 rounded-2xl border-2 border-navy shadow-[0_4px_0_0_#0F2233] ${styles[type]}`}>
        <Icon size={20} />
        <p className="flex-1 text-sm font-bold">{message}</p>
        <button
          onClick={onClose}
          className="p-1 hover:bg-black/10 rounded-full transition-colors"
          aria-label="Close notification"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  )
}

export default Toast
