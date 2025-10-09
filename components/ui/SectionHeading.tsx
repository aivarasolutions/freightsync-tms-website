import { ReactNode } from 'react'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  children?: ReactNode
}

export function SectionHeading({ title, subtitle, centered = false, children }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  )
}
