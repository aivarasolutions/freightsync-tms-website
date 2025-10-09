'use client'

import { useState, FormEvent } from 'react'
import { Button } from './Button'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    
    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      fleetSize: formData.get('fleetSize'),
      message: formData.get('message'),
      honeypot: formData.get('website'),
    }
    
    if (data.honeypot) {
      setStatus('error')
      return
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      
      if (res.ok) {
        setStatus('success')
        ;(e.target as HTMLFormElement).reset()
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="hidden">
        <label htmlFor="website">Website</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:text-white"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Work Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:text-white"
        />
      </div>
      
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Company *
        </label>
        <input
          type="text"
          id="company"
          name="company"
          required
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:text-white"
        />
      </div>
      
      <div>
        <label htmlFor="fleetSize" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Fleet Size
        </label>
        <select
          id="fleetSize"
          name="fleetSize"
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:text-white"
        >
          <option value="">Select...</option>
          <option value="1-10">1-10 vehicles</option>
          <option value="11-50">11-50 vehicles</option>
          <option value="51-200">51-200 vehicles</option>
          <option value="200+">200+ vehicles</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:text-white"
        ></textarea>
      </div>
      
      <Button type="submit" disabled={status === 'loading'} className="w-full">
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </Button>
      
      {status === 'success' && (
        <p className="text-green-600 dark:text-green-400">Thank you! We'll be in touch soon.</p>
      )}
      {status === 'error' && (
        <p className="text-red-600 dark:text-red-400">Something went wrong. Please try again.</p>
      )}
    </form>
  )
}
