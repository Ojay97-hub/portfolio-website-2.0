import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Check } from '../lib/icons'

/**
 * CustomDropdown - A fully-styled, animated dropdown component
 * @param {Object} props
 * @param {Array} props.options - Array of { value, label, icon?: Component } objects
 * @param {string} props.value - Currently selected value
 * @param {function} props.onChange - Callback when selection changes
 * @param {string} props.placeholder - Placeholder text when no selection
 * @param {string} props.className - Additional classes for the container
 */
export default function CustomDropdown({
    options,
    value,
    onChange,
    placeholder = 'Select...',
    className = '',
    icon: Icon = null
}) {
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef(null)

    // Find the selected option
    const selectedOption = options.find(opt => opt.value === value)

    // Close on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    // Close on escape key
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                setIsOpen(false)
            }
        }
        document.addEventListener('keydown', handleEscape)
        return () => document.removeEventListener('keydown', handleEscape)
    }, [])

    const handleSelect = (option) => {
        onChange(option.value)
        setIsOpen(false)
    }

    return (
        <div ref={dropdownRef} className={`relative ${className}`}>
            {/* Trigger Button */}
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`
                    w-full flex items-center justify-between gap-3
                    px-4 py-3 rounded-xl
                    bg-surface/80 backdrop-blur-sm
                    border-2 transition-all duration-300
                    text-left font-medium
                    ${isOpen
                        ? 'border-primary shadow-lg shadow-primary/10'
                        : 'border-border hover:border-primary/50 hover:shadow-md'
                    }
                `}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
            >
                <div className="flex items-center gap-2 min-w-0">
                    {Icon && <Icon size={18} className="text-primary shrink-0" />}
                    {selectedOption?.icon && <selectedOption.icon size={16} className="text-primary shrink-0" />}
                    <span className={`truncate ${selectedOption ? 'text-foreground' : 'text-muted-foreground'}`}>
                        {selectedOption?.label || placeholder}
                    </span>
                </div>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0"
                >
                    <ChevronDown size={18} className="text-muted-foreground" />
                </motion.div>
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.ul
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className={`
                            absolute z-50 left-0 right-0 mt-2
                            py-2 rounded-xl
                            bg-surface/95 backdrop-blur-xl
                            border-2 border-border
                            shadow-xl shadow-black/10
                            max-h-64 overflow-y-auto
                            scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent
                        `}
                        role="listbox"
                    >
                        {options.map((option, index) => {
                            const isSelected = option.value === value
                            const OptionIcon = option.icon

                            return (
                                <motion.li
                                    key={option.value}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.03 }}
                                >
                                    <button
                                        type="button"
                                        onClick={() => handleSelect(option)}
                                        className={`
                                            w-full flex items-center gap-3 px-4 py-2.5
                                            text-left transition-all duration-200
                                            ${isSelected
                                                ? 'bg-primary/10 text-primary font-semibold'
                                                : 'text-foreground hover:bg-surface-hover'
                                            }
                                        `}
                                        role="option"
                                        aria-selected={isSelected}
                                    >
                                        {OptionIcon && (
                                            <OptionIcon
                                                size={16}
                                                className={isSelected ? 'text-primary' : 'text-muted-foreground'}
                                            />
                                        )}
                                        <span className="flex-1 truncate">{option.label}</span>
                                        {isSelected && (
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                className="shrink-0"
                                            >
                                                <Check size={16} className="text-primary" />
                                            </motion.div>
                                        )}
                                    </button>
                                </motion.li>
                            )
                        })}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    )
}
