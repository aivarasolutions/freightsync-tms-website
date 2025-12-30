import { ButtonHTMLAttributes, ReactNode } from 'react'
import Link from 'next/link'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'teal'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  children: ReactNode
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  href, 
  children, 
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy'
  
  const variants = {
    primary: 'bg-navy text-white hover:bg-secondary shadow-sm',
    secondary: 'bg-white text-navy border-2 border-navy hover:bg-navy hover:text-white',
    outline: 'border-2 border-gray-300 text-neutral hover:border-navy hover:text-navy',
    teal: 'bg-teal text-white hover:bg-emerald-600 shadow-sm'
  }
  
  const sizes = {
    sm: 'px-5 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }
  
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`
  
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
