import { Button } from './Button'
import { Check } from 'lucide-react'

interface PricingCardProps {
  name: string
  description: string
  price?: string
  features: string[]
  highlighted?: boolean
}

export function PricingCard({ name, description, price, features, highlighted = false }: PricingCardProps) {
  return (
    <div className={`p-8 rounded-xl border-2 ${
      highlighted 
        ? 'border-primary bg-gradient-to-br from-primary/5 to-accent/5' 
        : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'
    }`}>
      <h3 className="text-2xl font-bold text-secondary dark:text-white mb-2">
        {name}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        {description}
      </p>
      {price && (
        <div className="mb-6">
          <span className="text-4xl font-bold text-secondary dark:text-white">
            {price}
          </span>
        </div>
      )}
      <ul className="space-y-3 mb-8">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start">
            <Check className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      <Button variant={highlighted ? 'primary' : 'outline'} className="w-full">
        Request Pricing
      </Button>
    </div>
  )
}
