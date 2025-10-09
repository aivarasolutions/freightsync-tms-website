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
        : 'border-border bg-white'
    }`}>
      <h3 className="text-2xl font-bold text-secondary mb-2">
        {name}
      </h3>
      <p className="text-neutral mb-6">
        {description}
      </p>
      {price && (
        <div className="mb-6">
          <span className="text-4xl font-bold text-secondary">
            {price}
          </span>
        </div>
      )}
      <ul className="space-y-3 mb-8">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start">
            <Check className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
            <span className="text-neutral">{feature}</span>
          </li>
        ))}
      </ul>
      <Button variant={highlighted ? 'primary' : 'outline'} className="w-full">
        Request Pricing
      </Button>
    </div>
  )
}
