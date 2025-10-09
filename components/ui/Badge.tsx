import { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'primary' | 'accent' | 'secondary'
}

export function Badge({ children, variant = 'primary' }: BadgeProps) {
  const variants = {
    primary: 'bg-primary text-white',
    accent: 'bg-accent text-white',
    secondary: 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
  }
  
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${variants[variant]}`}>
      {children}
    </span>
  )
}
