interface StatProps {
  value: string
  label: string
  description?: string
}

export function Stat({ value, label, description }: StatProps) {
  return (
    <div className="text-center p-6">
      <div className="text-4xl sm:text-5xl font-bold text-teal mb-2">
        {value}
      </div>
      <div className="text-lg font-semibold text-navy mb-1">
        {label}
      </div>
      {description && (
        <div className="text-sm text-neutral">
          {description}
        </div>
      )}
    </div>
  )
}
