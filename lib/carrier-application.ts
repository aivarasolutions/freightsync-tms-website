import { applicationTypes, emptyApplication, services, serviceIds, serviceNeeds, vehicleTypes, type CarrierApplication } from './carrier-network'

export class ApplicationError extends Error {
  constructor(message: string, public readonly fields: string[] = []) { super(message) }
}

const choices: Partial<Record<keyof CarrierApplication, readonly string[]>> = {
  vehicleOwnershipStatus: ['Yes', 'No'],
  vehicleOperating: ['Yes', 'No'],
  operatingAuthorityStatus: ['Yes', 'No', 'Not sure'],
  insuranceStatus: ['Active', 'Pending', 'Need Assistance', 'Not Applicable'],
  nextStep: ['Schedule a Call', 'Request FreightSync Review', 'Start Onboarding'],
}
const maxLengths: Partial<Record<keyof CarrierApplication, number>> = {
  notes: 1000, loadBoards: 300, weeklySchedule: 300, dispatcherAvailability: 300,
  regionsServiced: 300, email: 254, phone: 40,
}
const requiredContact: (keyof CarrierApplication)[] = ['firstName', 'lastName', 'email', 'phone', 'city', 'state', 'zipCode']

export function validateApplication(input: unknown): CarrierApplication {
  if (!input || typeof input !== 'object' || Array.isArray(input)) throw new ApplicationError('Invalid application.')
  const raw = input as Record<string, unknown>
  const clean = emptyApplication()
  const fields: string[] = []
  for (const key of Object.keys(clean) as (keyof CarrierApplication)[]) {
    const value = raw[key]
    if (Array.isArray(clean[key])) {
      if (value === undefined) continue
      if (!Array.isArray(value) || value.length > 15 || value.some(item => typeof item !== 'string' || item.length > 150)) {
        fields.push(key)
      } else Object.assign(clean, { [key]: Array.from(new Set(value.map(item => item.trim()))) })
    } else if (key === 'consent') {
      clean.consent = value === true
    } else if (value !== undefined) {
      if (typeof value !== 'string' || value.length > (maxLengths[key] ?? 150)) fields.push(key)
      else Object.assign(clean, { [key]: value.trim() })
    }
  }
  requiredContact.forEach(key => { if (!clean[key]) fields.push(key) })
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean.email)) fields.push('email')
  if (clean.phone.replace(/\D/g, '').length < 7) fields.push('phone')
  const roleIds: readonly string[] = applicationTypes.map(([id]) => id)
  if (!roleIds.includes(clean.applicationType)) fields.push('applicationType')
  if (!clean.roles.length || clean.roles.some(role => !roleIds.includes(role))) fields.push('roles')
  if (!clean.roles.includes(clean.applicationType)) fields.push('applicationType')
  if (!serviceIds.includes(clean.selectedPlan)) fields.push('selectedPlan')
  if (!clean.consent) fields.push('consent')
  if (clean.website) throw new ApplicationError('Invalid submission.')
  for (const [key, values] of Object.entries(choices)) {
    const value = clean[key as keyof CarrierApplication]
    if (typeof value === 'string' && value && !values.includes(value)) fields.push(key)
  }
  for (const key of ['vehicleOwnershipStatus', 'operatingAuthorityStatus', 'insuranceStatus', 'nextStep', 'operatingVehicleCount', 'monthlyRevenueRange', 'startTimeline'] as const) {
    if (!clean[key]) fields.push(key)
  }
  if (!clean.servicesNeeded.length) fields.push('servicesNeeded')
  if (clean.servicesNeeded.some(need => !serviceNeeds.includes(need))) fields.push('servicesNeeded')
  if (clean.vehicleOwnershipStatus === 'Yes') {
    if (!vehicleTypes.includes(clean.vehicleType)) fields.push('vehicleType')
    if (clean.vehicleYear && (!/^\d{4}$/.test(clean.vehicleYear) || Number(clean.vehicleYear) < 1900 || Number(clean.vehicleYear) > new Date().getFullYear() + 2)) fields.push('vehicleYear')
    if (!/^\d+$/.test(clean.vehicleCount) || Number(clean.vehicleCount) < 1) fields.push('vehicleCount')
    if (!clean.vehicleOperating) fields.push('vehicleOperating')
  } else {
    for (const key of ['vehicleType', 'vehicleYear', 'vehicleMake', 'vehicleModel', 'vehicleLength', 'payloadCapacity', 'vehicleCount', 'vehicleOperating'] as const) clean[key] = ''
  }
  if (clean.operatingAuthorityStatus !== 'Yes') {
    clean.usdotNumber = ''
    clean.mcNumber = ''
  }
  if (fields.length) throw new ApplicationError('Please check the highlighted application fields.', Array.from(new Set(fields)))
  return clean
}

/**
 * The portal supports the base lead fields below. Extra role-specific details
 * are retained as readable applicant notes until its API exposes profile fields.
 * Pricing is generated here, never accepted from a browser.
 */
export function portalPayload(application: CarrierApplication) {
  const plan = services.find(service => service.id === application.selectedPlan)
  const details: string[] = [
    application.notes,
    `Applicant roles: ${application.roles.map(role => applicationTypes.find(([id]) => id === role)?.[1] ?? role).join(', ')}`,
    `Next step: ${application.nextStep}`,
    `Services requested: ${application.servicesNeeded.join('; ')}`,
    `Vehicles currently operating: ${application.operatingVehicleCount}`,
    `Vehicle currently operating: ${application.vehicleOperating || 'Not applicable'}`,
    application.vehicleLength && `Vehicle length: ${application.vehicleLength}`,
    application.payloadCapacity && `Payload capacity: ${application.payloadCapacity}`,
    plan ? `Selected service: ${plan.name}. ${plan.price}. ${plan.trial} ${plan.feeScope} No setup fee. No cancellation fee. Cancel anytime.`
      : 'Selected service: Not Sure – Help Me Choose. Standard plans: Connect $49/month; Dispatch $49/month + 5% of completed FreightSync-dispatched load revenue; Fleet Management $49/month + 8% of completed FreightSync-managed load revenue. First month subscription waived; applicable percentage fees still apply.',
  ].filter((value): value is string => !!value)
  if (application.roles.includes('driver')) {
    details.push('DRIVER NETWORK', `License type: ${application.licenseType}`, `Years driving: ${application.yearsDriving}`,
      `Vehicle experience: ${application.vehicleExperience.join(', ')}`, `Availability: ${application.availability.join(', ')}`,
      `Employment preference: ${application.employmentPreference}`, `Looking for a vehicle: ${application.lookingForVehicle}`)
  }
  if (application.roles.includes('vehicle_owner') || application.roles.includes('fleet_owner') || application.servicesNeeded.includes('I need a driver')) {
    details.push('VEHICLE OWNER NETWORK', `Desired driver arrangement: ${application.driverArrangement}`,
      `Local / Regional / OTR: ${application.availability.join(', ')}`, `Estimated weekly schedule: ${application.weeklySchedule}`)
  }
  if (application.roles.includes('dispatcher')) {
    details.push('DISPATCHER NETWORK', `Years dispatching: ${application.yearsDispatching}`,
      `Equipment experience: ${application.equipmentExperience.join(', ')}`, `Carriers currently managed: ${application.carriersManaged}`,
      `Load boards used: ${application.loadBoards}`, `States/regions serviced: ${application.regionsServiced}`,
      `Availability: ${application.dispatcherAvailability}`)
  }
  details.push('Applicant consent: agreed to be contacted about this application. All network matching requires FreightSync administrator approval.')
  return {
    firstName: application.firstName, lastName: application.lastName, email: application.email.toLowerCase(),
    phone: application.phone, businessName: application.businessName, city: application.city,
    state: application.state, zipCode: application.zipCode, applicationType: application.applicationType,
    vehicleOwnershipStatus: application.vehicleOwnershipStatus, vehicleType: application.vehicleType,
    ...(application.vehicleYear ? { vehicleYear: Number(application.vehicleYear) } : {}),
    vehicleMake: application.vehicleMake, vehicleModel: application.vehicleModel,
    vehicleCount: application.vehicleCount ? Number(application.vehicleCount) : 0,
    operatingAuthorityStatus: application.operatingAuthorityStatus,
    ...(application.usdotNumber ? { usdotNumber: application.usdotNumber } : {}),
    ...(application.mcNumber ? { mcNumber: application.mcNumber } : {}),
    insuranceStatus: application.insuranceStatus,
    // The deployed portal accepts a narrower enum than the website questionnaire.
    // Preserve EVERY original selection above; route unsupported categories to
    // its verified "other" category rather than silently discarding details.
    servicesNeeded: Array.from(new Set(application.servicesNeeded.map(need => ({
      'I need dispatching': 'dispatch',
      'I need fleet management': 'fleet_management',
      'I am a dispatcher looking for carriers': 'dispatcher_network',
    } as Record<string, string>)[need] ?? 'other'))),
    selectedPlan: application.selectedPlan,
    monthlyRevenueRange: application.monthlyRevenueRange, startTimeline: application.startTimeline,
    leadSource: application.leadSource || 'Direct', utmSource: application.utmSource,
    utmMedium: application.utmMedium, utmCampaign: application.utmCampaign,
    utmContent: application.utmContent, utmTerm: application.utmTerm,
    notes: details.join('\n'),
  }
}
