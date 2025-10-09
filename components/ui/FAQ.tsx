'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  items: FAQItem[]
}

export function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-4">
      {items.map((item, idx) => (
        <div key={idx} className="border border-border rounded-lg bg-white">
          <button
            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted transition-colors"
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            aria-expanded={openIndex === idx}
          >
            <span className="font-semibold text-secondary">
              {item.question}
            </span>
            <ChevronDown 
              className={`w-5 h-5 text-neutral transition-transform ${
                openIndex === idx ? 'rotate-180' : ''
              }`}
            />
          </button>
          {openIndex === idx && (
            <div className="px-6 pb-4 text-neutral">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
