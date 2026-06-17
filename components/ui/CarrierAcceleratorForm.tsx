'use client'

import { FormEvent, useState } from 'react'
import { Button } from './Button'

export function CarrierAcceleratorForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')

    const formData = new FormData(e.currentTarget)
    const data = {
      formType: 'Carrier Accelerator Program consultation',
      name: formData.get('name'),
      company: formData.get('company'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      vehicleType: formData.get('vehicleType'),
      vehicleCount: formData.get('vehicleCount'),
      authorityStatus: formData.get('authorityStatus'),
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
        e.currentTarget.reset()
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  const inputClass = 'w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-teal focus:border-transparent bg-white text-navy'

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="hidden">
        <label htmlFor="website">Website</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">
            Full Name *
          </label>
          <input id="name" name="name" type="text" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-navy mb-2">
            Company Name
          </label>
          <input id="company" name="company" type="text" className={inputClass} />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
            Email *
          </label>
          <input id="email" name="email" type="email" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-navy mb-2">
            Phone Number *
          </label>
          <input id="phone" name="phone" type="tel" required className={inputClass} />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="vehicleType" className="block text-sm font-medium text-navy mb-2">
            Vehicle Type *
          </label>
          <select id="vehicleType" name="vehicleType" required className={inputClass}>
            <option value="">Select...</option>
            <option value="Semi Truck">Semi Truck</option>
            <option value="Sprinter Van">Sprinter Van</option>
            <option value="Both">Both</option>
            <option value="Not Sure">Not Sure</option>
          </select>
        </div>
        <div>
          <label htmlFor="vehicleCount" className="block text-sm font-medium text-navy mb-2">
            Number of Vehicles *
          </label>
          <input id="vehicleCount" name="vehicleCount" type="number" min="1" required className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="authorityStatus" className="block text-sm font-medium text-navy mb-2">
          Current Authority Status *
        </label>
        <select id="authorityStatus" name="authorityStatus" required className={inputClass}>
          <option value="">Select...</option>
          <option value="Need to form company">Need to form company</option>
          <option value="Have LLC or entity">Have LLC or entity</option>
          <option value="Have active authority">Have active authority</option>
          <option value="Need guidance">Need guidance</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">
          Additional Notes
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={inputClass}
          placeholder="Tell us about your equipment plans, timeline, location, or driver needs."
        />
      </div>

      <Button type="submit" disabled={status === 'loading'} className="w-full" variant="teal" size="lg">
        {status === 'loading' ? 'Sending...' : 'Schedule a Consultation'}
      </Button>

      {status === 'success' && (
        <p className="text-green-700 font-medium">Thank you. FreightSync will be in touch soon.</p>
      )}
      {status === 'error' && (
        <p className="text-red-600 font-medium">Something went wrong. Please try again.</p>
      )}
    </form>
  )
}
