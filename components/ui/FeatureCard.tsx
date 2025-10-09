import { ReactNode } from 'react'

interface FeatureCardProps {
  title: string
  description: string
  icon?: ReactNode
  bullets?: string[]
}

export function FeatureCard({ title, description, icon, bullets }: FeatureCardProps) {
  return (
    <div className="p-6 bg-white rounded-lg border border-border hover:border-primary transition-colors">
      {icon && (
        <div className="w-12 h-12 mb-4 text-primary">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-bold text-secondary mb-2">
        {title}
      </h3>
      <p className="text-neutral mb-4">
        {description}
      </p>
      {bullets && bullets.length > 0 && (
        <ul className="space-y-2">
          {bullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start text-sm text-neutral">
              <span className="mr-2 text-accent">•</span>
              {bullet}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
