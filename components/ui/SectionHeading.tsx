import { ReactNode } from 'react'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  children?: ReactNode
}

export function SectionHeading({ title, subtitle, centered = false, children }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center mx-auto' : ''}`}>
      <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-neutral max-w-3xl">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  )
}
