import { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights, guides, and best practices for last-mile delivery and TMS operations.',
}

const posts = [
  {
    title: 'How to choose a TMS for last-mile delivery',
    excerpt: 'A comprehensive guide to selecting the right transportation management system for your delivery operation.',
    slug: 'how-to-choose-a-tms',
    date: '2024-10-01',
    readTime: '8 min read'
  }
]

export default function Blog() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary/10 via-muted/30 to-accent/10 py-20">
        <Container>
          <SectionHeading
            title="Insights & Resources"
            subtitle="Best practices for last-mile delivery operations"
            centered
          />
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-primary transition-colors group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h2 className="text-2xl font-bold text-secondary dark:text-white group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors" />
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
