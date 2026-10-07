'use client'

import { useEffect, useMemo, useState } from 'react'
import type { ChangeEvent, FormEvent, ReactNode } from 'react'
import { ArrowLeft, ArrowRight, Check, LoaderCircle } from 'lucide-react'
import {
  applicationTypes, emptyApplication, serviceNeeds, services, vehicleTypes,
} from '@/lib/carrier-network'
import type { CarrierApplication, PlanId } from '@/lib/carrier-network'

const steps = ['Contact', 'Your role', 'Vehicle', 'Authority', 'Your needs', 'Service', 'Business', 'Next step']
const states = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY','DC']
const experience = ['Cargo Van', 'Sprinter', 'Box Truck', 'Straight Truck', 'Hotshot', 'Semi', 'Other']
const schedule = ['Local', 'Regional', 'OTR']
const roleValue = (label: string) => applicationTypes.find(([, name]) => name === label)?.[0] || ''
const fieldClass = 'w-full rounded-lg border border-border bg-white px-3.5 py-3 text-sm text-navy outline-none transition focus:border-cyan focus:ring-2 focus:ring-cyan/20'
const labelClass = 'mb-1.5 block text-sm font-semibold text-navy'

function CheckGroup({ title, values, selected, onChange }: { title: string; values: string[]; selected: string[]; onChange: (values: string[]) => void }) {
  return <fieldset><legend className={labelClass}>{title}</legend><div className="grid gap-2 sm:grid-cols-2">
    {values.map(value => <label key={value} className={`flex cursor-pointer items-center gap-2.5 rounded-lg border px-3 py-2.5 text-sm transition ${selected.includes(value) ? 'border-cyan bg-cyan/5 text-navy' : 'border-border hover:border-cyan/50'}`}>
      <input type="checkbox" checked={selected.includes(value)} onChange={() => onChange(selected.includes(value) ? selected.filter(item => item !== value) : [...selected, value])} className="h-4 w-4 accent-cyan" />{value}
    </label>)}
  </div></fieldset>
}

function Field({ label, children, required = false }: { label: string; children: ReactNode; required?: boolean }) {
  return <label className="block"><span className={labelClass}>{label}{required && <span className="ml-1 text-cyan">*</span>}</span>{children}</label>
}

export function CarrierApplicationForm({ initialPlan = 'not_sure', initialRole, source = 'Get Started' }: { initialPlan?: PlanId; initialRole?: string; source?: string }) {
  const [form, setForm] = useState<CarrierApplication>(() => emptyApplication())
  const [step, setStep] = useState(0)
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)
  const [idempotencyKey, setIdempotencyKey] = useState('')
  const [validation, setValidation] = useState(false)
  const currentService = services.find(service => service.id === form.selectedPlan)
  const primaryRole = form.roles[0] || ''
  const isDriver = form.roles.includes('driver')
  const isOwner = form.roles.includes('vehicle_owner') || form.roles.includes('fleet_owner')
  const isDispatcher = form.roles.includes('dispatcher')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    let attribution: Record<string, string> = {}
    try { attribution = JSON.parse(sessionStorage.getItem('fs-carrier-attribution') || '{}') } catch { /* ignore */ }
    setForm(current => ({
      ...current,
      selectedPlan: (['connect', 'dispatch', 'fleet_management', 'not_sure'].includes(params.get('plan') || '') ? params.get('plan') as PlanId : initialPlan),
      roles: initialRole ? [initialRole] : current.roles,
      applicationType: initialRole || current.applicationType,
      leadSource: params.get('source') || source,
      utmSource: params.get('utm_source') || attribution.utm_source || '',
      utmMedium: params.get('utm_medium') || attribution.utm_medium || '',
      utmCampaign: params.get('utm_campaign') || attribution.utm_campaign || '',
      utmContent: params.get('utm_content') || attribution.utm_content || '',
      utmTerm: params.get('utm_term') || attribution.utm_term || '',
      website: '',
    }))
  }, [initialPlan, initialRole, source])

  const update = <K extends keyof CarrierApplication>(key: K, value: CarrierApplication[K]) => {
    setForm(current => ({ ...current, [key]: value }))
    setError('')
    setIdempotencyKey('')
  }
  const handleInput = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    update(name as keyof CarrierApplication, value as never)
  }
  const errors = useMemo(() => {
    if (!validation) return []
    if (step === 0) return [
      ...(!form.firstName.trim() ? ['First name is required.'] : []),
      ...(!form.lastName.trim() ? ['Last name is required.'] : []),
      ...(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? ['Enter a valid email address.'] : []),
      ...(form.phone.replace(/\D/g, '').length < 7 ? ['Enter a valid phone number.'] : []),
      ...(!form.city.trim() ? ['City is required.'] : []),
      ...(!form.state ? ['Select a state.'] : []),
      ...(!form.zipCode.trim() ? ['ZIP code is required.'] : []),
    ]
    if (step === 1) return form.roles.length ? [] : ['Choose at least one role.']
    if (step === 2) return [
      ...(!['Yes', 'No'].includes(form.vehicleOwnershipStatus) ? ['Choose whether you currently have a vehicle.'] : []),
      ...(form.vehicleOwnershipStatus === 'Yes' && !form.vehicleType ? ['Select a vehicle type.'] : []),
      ...(form.vehicleOwnershipStatus === 'Yes' && (!/^[1-9]\d*$/.test(form.vehicleCount)) ? ['Enter a positive whole number of vehicles.'] : []),
      ...(form.vehicleOwnershipStatus === 'Yes' && !['Yes', 'No'].includes(form.vehicleOperating) ? ['Choose whether your vehicle is currently operating.'] : []),
    ]
    if (step === 3) return [
      ...(!['Yes', 'No', 'Not sure'].includes(form.operatingAuthorityStatus) ? ['Choose your operating authority status.'] : []),
      ...(!['Active', 'Pending', 'Need Assistance', 'Not Applicable'].includes(form.insuranceStatus) ? ['Choose your insurance status.'] : []),
    ]
    if (step === 4) return form.servicesNeeded.length ? [] : ['Choose at least one way FreightSync can help.']
    if (step === 5) return ['connect', 'dispatch', 'fleet_management', 'not_sure'].includes(form.selectedPlan) ? [] : ['Choose a service interest.']
    if (step === 6) return [
      ...(!form.operatingVehicleCount ? ['Choose how many vehicles you operate.'] : []),
      ...(!form.monthlyRevenueRange ? ['Choose an estimated monthly revenue range.'] : []),
      ...(!form.startTimeline ? ['Choose when you are looking to start.'] : []),
    ]
    if (step === 7) return [
      ...(!['Schedule a Call', 'Request FreightSync Review', 'Start Onboarding'].includes(form.nextStep) ? ['Choose a next step.'] : []),
      ...(!form.consent ? ['Please acknowledge the review and contact terms to submit.'] : []),
    ]
    return []
  }, [form, step, validation])

  function getStepErrors(index: number) {
    if (index === 0) return [
      ...(!form.firstName.trim() ? ['First name is required.'] : []),
      ...(!form.lastName.trim() ? ['Last name is required.'] : []),
      ...(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? ['Enter a valid email address.'] : []),
      ...(form.phone.replace(/\D/g, '').length < 7 ? ['Enter a valid phone number.'] : []),
      ...(!form.city.trim() ? ['City is required.'] : []),
      ...(!form.state ? ['Select a state.'] : []),
      ...(!form.zipCode.trim() ? ['ZIP code is required.'] : []),
    ]
    if (index === 1) return form.roles.length ? [] : ['Choose at least one role.']
    if (index === 2) return [
      ...(!['Yes', 'No'].includes(form.vehicleOwnershipStatus) ? ['Choose whether you currently have a vehicle.'] : []),
      ...(form.vehicleOwnershipStatus === 'Yes' && !form.vehicleType ? ['Select a vehicle type.'] : []),
      ...(form.vehicleOwnershipStatus === 'Yes' && (!/^[1-9]\d*$/.test(form.vehicleCount)) ? ['Enter a positive whole number of vehicles.'] : []),
      ...(form.vehicleOwnershipStatus === 'Yes' && !['Yes', 'No'].includes(form.vehicleOperating) ? ['Choose whether your vehicle is currently operating.'] : []),
    ]
    if (index === 3) return [
      ...(!['Yes', 'No', 'Not sure'].includes(form.operatingAuthorityStatus) ? ['Choose your operating authority status.'] : []),
      ...(!['Active', 'Pending', 'Need Assistance', 'Not Applicable'].includes(form.insuranceStatus) ? ['Choose your insurance status.'] : []),
    ]
    if (index === 4) return form.servicesNeeded.length ? [] : ['Choose at least one way FreightSync can help.']
    if (index === 5) return ['connect', 'dispatch', 'fleet_management', 'not_sure'].includes(form.selectedPlan) ? [] : ['Choose a service interest.']
    if (index === 6) return [
      ...(!form.operatingVehicleCount ? ['Choose how many vehicles you operate.'] : []),
      ...(!form.monthlyRevenueRange ? ['Choose an estimated monthly revenue range.'] : []),
      ...(!form.startTimeline ? ['Choose when you are looking to start.'] : []),
    ]
    if (index === 7) return [
      ...(!['Schedule a Call', 'Request FreightSync Review', 'Start Onboarding'].includes(form.nextStep) ? ['Choose a next step.'] : []),
      ...(!form.consent ? ['Please acknowledge the review and contact terms to submit.'] : []),
    ]
    return []
  }
  function validateStep() {
    setValidation(true)
    if (getStepErrors(step).length) return false
    if (step === 1) update('applicationType', primaryRole)
    return true
  }
  function toggleRole(value: string) {
    const roles = form.roles.includes(value) ? form.roles.filter(role => role !== value) : [...form.roles, value]
    setForm(current => ({ ...current, roles, applicationType: roles[0] || '' }))
    setIdempotencyKey('')
  }
  async function submit(event: FormEvent) {
    event.preventDefault()
    if (busy || step !== 7) return
    setValidation(true)
    for (let index = 0; index < 8; index++) {
      if (getStepErrors(index).length) {
        setStep(index)
        return
      }
    }
    setBusy(true)
    setError('')
    try {
      const key = idempotencyKey || crypto.randomUUID()
      setIdempotencyKey(key)
      const response = await fetch('/api/carrier-network/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Idempotency-Key': key },
        body: JSON.stringify({ ...form, applicationType: form.roles[0] || form.applicationType }),
      })
      const result = await response.json().catch(() => ({}))
        if (response.status !== 201 || result.ok !== true) {
          if ((response.status === 400 || response.status === 422) && Array.isArray(result.fields)) {
            const fieldSteps: Record<string, number> = {
              firstName: 0, lastName: 0, email: 0, phone: 0, city: 0, state: 0, zipCode: 0, roles: 1,
               vehicleOwnershipStatus: 2, vehicleType: 2, vehicleYear: 2, vehicleCount: 2, vehicleOperating: 2,
               operatingAuthorityStatus: 3, insuranceStatus: 3, usdotNumber: 3, mcNumber: 3, servicesNeeded: 4, selectedPlan: 5,
              operatingVehicleCount: 6, monthlyRevenueRange: 6, startTimeline: 6, nextStep: 7, consent: 7,
            }
            const first = result.fields[0]
            const field = typeof first === 'string' ? first : first?.field || first?.name
            if (field && fieldSteps[field] !== undefined) setStep(fieldSteps[field])
            setValidation(true)
            const detail = result.fields.map((item: unknown) => typeof item === 'string' ? item : (item as { message?: string; error?: string; field?: string })?.message || (item as { error?: string; field?: string })?.error || (item as { field?: string })?.field).filter(Boolean).join(' ')
            throw new Error(detail || result.error || result.message || `Please review the highlighted fields (HTTP ${response.status}).`)
          }
          throw new Error(result.error || result.message || `Unable to submit your application (HTTP ${response.status}).`)
        }
      try {
        sessionStorage.setItem('fs-carrier-receipt', JSON.stringify({ reference: result.reference || '', receivedAt: new Date().toISOString() }))
      } catch { /* redirect still works without storage */ }
      window.location.assign('/application-received')
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : 'Something went wrong. Please try again.')
      setBusy(false)
    }
  }

  const input = (name: keyof CarrierApplication, label: string, required = false, type = 'text') => <Field label={label} required={required}><input className={fieldClass} name={name} type={type} maxLength={['loadBoards', 'regionsServiced', 'weeklySchedule', 'dispatcherAvailability'].includes(name) ? 300 : 150} value={form[name] as string} onChange={handleInput} autoComplete={name === 'email' ? 'email' : name === 'phone' ? 'tel' : undefined} /></Field>
  const select = (name: keyof CarrierApplication, label: string, options: string[], placeholder = 'Select an option') => <Field label={label}><select className={fieldClass} name={name} value={form[name] as string} onChange={handleInput}><option value="">{placeholder}</option>{options.map(item => <option key={item}>{item}</option>)}</select></Field>
  const roleDetails = <div className="mt-6 space-y-5 border-t border-border pt-5">
    {isDriver && <div className="space-y-4 rounded-xl bg-muted p-4"><h3 className="font-bold text-navy">Driver details</h3><div className="grid gap-4 sm:grid-cols-2">
      {select('licenseType', 'Driver license type', ['Class A CDL', 'Class B CDL', 'Class C', 'Non-CDL', 'Other'])}
      {select('yearsDriving', 'Years driving', ['Less than 1 year', '1–2 years', '3–5 years', '6–10 years', '10+ years'])}
      {select('employmentPreference', 'Employment preference', ['Company Driver', 'Independent Contractor', 'Either'])}
      {select('lookingForVehicle', 'Looking for a vehicle?', ['Yes', 'No'])}
    </div><CheckGroup title="Vehicle experience" values={experience} selected={form.vehicleExperience} onChange={value => update('vehicleExperience', value)} /><CheckGroup title="Availability" values={schedule} selected={form.availability} onChange={value => update('availability', value)} /></div>}
    {isOwner && <div className="space-y-4 rounded-xl bg-muted p-4"><h3 className="font-bold text-navy">Vehicle owner details</h3><div className="grid gap-4 sm:grid-cols-2">
      {select('operatingAuthorityStatus', 'Operating authority', ['Yes', 'No', 'Not sure'])}
      {select('insuranceStatus', 'Insurance status', ['Active', 'Pending', 'Need Assistance', 'Not Applicable'])}
      {select('driverArrangement', 'Desired driver arrangement', ['Company Driver', 'Independent Contractor', 'Either'])}
      {input('weeklySchedule', 'Estimated weekly schedule')}
    </div><CheckGroup title="Operating schedule" values={schedule} selected={form.availability} onChange={value => update('availability', value)} /></div>}
    {isDispatcher && <div className="space-y-4 rounded-xl bg-muted p-4"><h3 className="font-bold text-navy">Dispatcher details</h3><div className="grid gap-4 sm:grid-cols-2">
      {select('yearsDispatching', 'Years dispatching', ['Less than 1 year', '1–2 years', '3–5 years', '6–10 years', '10+ years'])}
      {input('carriersManaged', 'Number of carriers currently managed')}
      {input('loadBoards', 'Load boards used')}
      {input('regionsServiced', 'States / regions serviced')}
      {select('dispatcherAvailability', 'Availability', ['Full-time', 'Part-time', 'Flexible'])}
    </div><CheckGroup title="Equipment experience" values={experience} selected={form.equipmentExperience} onChange={value => update('equipmentExperience', value)} /></div>}
  </div>

  return <section id="application-form" className="scroll-mt-24 rounded-2xl border border-border bg-white shadow-xl shadow-navy/5">
    <div className="border-b border-border px-5 py-5 sm:px-8">
      <div className="flex items-start justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-[.16em] text-cyan">Carrier Network application</p><h2 className="mt-1 text-2xl font-extrabold text-navy">Tell us about your operation</h2></div><span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-neutral">Step {step + 1} of 8</span></div>
      <div className="mt-5 flex gap-1.5" aria-label={`Step ${step + 1} of 8`}>{steps.map((item, index) => <div key={item} className={`h-1.5 flex-1 rounded-full ${index <= step ? 'bg-cyan' : 'bg-border'}`} />)}</div>
      <div className="mt-2 hidden justify-between text-[11px] text-neutral sm:flex">{steps.map((item, index) => <span key={item} className={index === step ? 'font-bold text-navy' : ''}>{item}</span>)}</div>
    </div>
    <form onSubmit={submit} noValidate className="px-5 py-6 sm:px-8 sm:py-8">
      <div className="hidden" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={handleInput} /></label></div>
      <fieldset disabled={busy} className="min-w-0">
      {step === 0 && <div className="grid gap-4 sm:grid-cols-2">{input('firstName','First name',true)}{input('lastName','Last name',true)}{input('email','Email address',true,'email')}{input('phone','Phone number',true,'tel')}{input('businessName','Business name')}{input('city','City',true)}{select('state','State',states)}{input('zipCode','ZIP code',true)}</div>}
      {step === 1 && <><p className="mb-5 text-sm text-neutral">Select every role that describes you. We’ll use your primary selection to route your application.</p><CheckGroup title="I am a…" values={applicationTypes.map(([, label]) => label)} selected={form.roles.map(role => applicationTypes.find(([id]) => id === role)?.[1] || role)} onChange={labels => { setForm(current => { const roles = labels.map(roleValue); return { ...current, roles, applicationType: roles[0] || '' } }); setIdempotencyKey('') }} />{roleDetails}</>}
      {step === 2 && <div className="space-y-5">{select('vehicleOwnershipStatus','Do you currently have a vehicle?',['Yes','No'])}{form.vehicleOwnershipStatus === 'Yes' && <div className="grid gap-4 rounded-xl bg-muted p-4 sm:grid-cols-2">{select('vehicleType','Vehicle type',vehicleTypes)}{input('vehicleYear','Year')}{input('vehicleMake','Make')}{input('vehicleModel','Model')}{input('vehicleLength','Vehicle length (if applicable)')}{input('payloadCapacity','Payload capacity (if known)')}<Field label="Number of vehicles" required><input className={fieldClass} name="vehicleCount" type="number" min="1" step="1" value={form.vehicleCount} onChange={handleInput} /></Field>{select('vehicleOperating','Is the vehicle currently operating?',['Yes','No'])}</div>}</div>}
      {step === 3 && <div className="space-y-5"><p className="text-sm text-neutral">Share what you know. DOT and MC numbers are optional. You can continue without them.</p>{select('operatingAuthorityStatus','Do you currently have operating authority?',['Yes','No','Not sure'])}<div className="grid gap-4 sm:grid-cols-2">{form.operatingAuthorityStatus === 'Yes' && <>{input('usdotNumber','USDOT number')}{input('mcNumber','MC number')}</>}{select('insuranceStatus','Insurance status',['Active','Pending','Need Assistance','Not Applicable'])}</div></div>}
      {step === 4 && <><p className="mb-5 text-sm text-neutral">Choose all the areas where support would help.</p><CheckGroup title="I need…" values={serviceNeeds} selected={form.servicesNeeded} onChange={value => update('servicesNeeded', value)} /></>}
      {step === 5 && <div className="space-y-4"><p className="text-sm text-neutral">Pricing is consistent across our site. The first month’s $49 subscription is waived; applicable service fees remain in effect.</p>{services.map(plan => <label key={plan.id} className={`block cursor-pointer rounded-xl border p-4 transition hover:border-cyan ${form.selectedPlan === plan.id ? 'border-cyan bg-cyan/5 ring-1 ring-cyan' : 'border-border'}`}><span className="flex items-start gap-3"><input type="radio" name="plan" className="mt-1 accent-cyan" checked={form.selectedPlan === plan.id} onChange={() => update('selectedPlan', plan.id)} /><span className="flex-1"><span className="flex flex-wrap items-center justify-between gap-2"><strong className="text-navy">{plan.name}</strong><strong className="text-navy">{plan.price}</strong></span><span className="mt-1 block text-sm text-neutral">{plan.trial}</span></span></span></label>)}<label className="flex cursor-pointer items-start gap-3 rounded-xl border border-border p-4"><input type="radio" name="plan" className="mt-1 accent-cyan" checked={form.selectedPlan === 'not_sure'} onChange={() => update('selectedPlan','not_sure')} /><span><strong className="text-navy">Not sure — help me choose</strong><span className="block text-sm text-neutral">Our team can review your needs with you.</span></span></label></div>}
      {step === 6 && <div className="space-y-4"><div className="grid gap-4 sm:grid-cols-2">{select('operatingVehicleCount','How many vehicles do you currently operate?',['0','1','2–5','6–10','11–25','25+'])}{select('monthlyRevenueRange','Estimated monthly gross transportation revenue',['Not operating yet','Under $5,000','$5,000–$10,000','$10,000–$25,000','$25,000–$50,000','$50,000+'])}{select('startTimeline','When are you looking to start?',['Immediately','Within 7 Days','Within 30 Days','Just Researching'])}</div><Field label="Additional information / notes"><textarea className={fieldClass} name="notes" rows={4} maxLength={1000} value={form.notes} onChange={handleInput} /><span className="mt-1 block text-right text-xs text-neutral">{form.notes.length}/1000</span></Field></div>}
      {step === 7 && <div className="space-y-5"><div className="rounded-xl bg-muted p-5"><p className="text-xs font-bold uppercase tracking-wide text-cyan">Your application summary</p><h3 className="mt-2 text-lg font-bold text-navy">{form.firstName} {form.lastName}</h3><p className="text-sm text-neutral">{form.roles.map(role => applicationTypes.find(([id]) => id === role)?.[1] || role).join(' · ') || 'No role selected'}{form.city ? ` · ${form.city}, ${form.state}` : ''}</p><div className="mt-4 border-t border-border pt-4"><p className="font-semibold text-navy">{currentService?.name || 'Help me choose a service'}</p><p className="mt-1 text-sm text-neutral">{currentService ? `${currentService.price}. ${currentService.trial}` : 'We’ll help identify the right fit.'}</p>{currentService && <p className="mt-1 text-xs text-neutral">{currentService.feeScope}</p>}</div></div><Field label="What should happen next?" required><select className={fieldClass} name="nextStep" value={form.nextStep} onChange={handleInput}><option value="">Select your preferred next step</option><option>Schedule a Call</option><option>Request FreightSync Review</option><option>Start Onboarding</option></select></Field><label className="flex items-start gap-3 text-sm leading-relaxed text-neutral"><input type="checkbox" checked={form.consent} onChange={event => update('consent', event.target.checked)} className="mt-1 h-4 w-4 accent-cyan" /><span>I confirm the information is accurate and agree FreightSync may contact me about this application. I understand network matching requires FreightSync review and approval, and services, freight, revenue, and placement are not guaranteed.</span></label></div>}
      {errors.length > 0 && <div role="alert" className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">{errors[0]}</div>}
      {error && <div role="alert" className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"><p>{error}</p><p className="mt-1 text-xs">Your answers are still here. If receipt could not be confirmed, call FreightSync at 281-310-1114 before submitting again.</p></div>}
      <div className="mt-7 flex items-center justify-between gap-3 border-t border-border pt-5">{step > 0 ? <button type="button" onClick={() => { setStep(step - 1); setValidation(false) }} className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-neutral transition hover:bg-muted focus:outline-none focus:ring-2 focus:ring-cyan"><ArrowLeft className="h-4 w-4" />Back</button> : <span />}{step < 7 ? <button type="button" onClick={() => { if (validateStep()) { setStep(step + 1); setValidation(false) } }} className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan to-teal px-5 py-3 text-sm font-bold text-white transition hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-cyan focus:ring-offset-2">Continue<ArrowRight className="h-4 w-4" /></button> : <button type="submit" disabled={busy} className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan to-teal px-5 py-3 text-sm font-bold text-white transition hover:brightness-95 disabled:cursor-wait disabled:opacity-70 focus:outline-none focus:ring-2 focus:ring-cyan focus:ring-offset-2">{busy ? <><LoaderCircle className="h-4 w-4 animate-spin" />Submitting…</> : <><Check className="h-4 w-4" />Submit application</>}</button>}</div>
      <p className="mt-4 text-center text-xs leading-relaxed text-neutral">Applying does not activate an account. FreightSync reviews each application; matching and onboarding require approval.</p>
      </fieldset>
    </form>
  </section>
}
