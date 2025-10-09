interface TestimonialProps {
  quote: string
  author: string
  role: string
  company: string
}

export function Testimonial({ quote, author, role, company }: TestimonialProps) {
  return (
    <div className="bg-muted dark:bg-gray-800 p-8 rounded-xl">
      <blockquote className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-6">
        "{quote}"
      </blockquote>
      <div className="flex items-center">
        <div>
          <div className="font-semibold text-secondary dark:text-white">
            {author}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {role}, {company}
          </div>
        </div>
      </div>
    </div>
  )
}
