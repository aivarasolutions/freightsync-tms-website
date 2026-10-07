const { test } = require('node:test')
const assert = require('node:assert/strict')
const { validateApplication, portalPayload, ApplicationError } = require(process.env.CARRIER_TEST_LIB + '/carrier-application.js')
const { emptyApplication, services } = require(process.env.CARRIER_TEST_LIB + '/carrier-network.js')

function application(overrides = {}) {
  return {
    ...emptyApplication(), firstName: 'Integration', lastName: 'Test',
    email: 'integration-test@example.invalid', phone: '2025550100',
    city: 'Charlotte', state: 'NC', zipCode: '28202',
    applicationType: 'driver', roles: ['driver'], vehicleOwnershipStatus: 'No',
    operatingAuthorityStatus: 'No', insuranceStatus: 'Not Applicable',
    servicesNeeded: ['I need a vehicle'], selectedPlan: 'connect',
    operatingVehicleCount: '0', monthlyRevenueRange: 'Not operating yet',
    startTimeline: 'Just Researching', nextStep: 'Request FreightSync Review',
    consent: true, ...overrides,
  }
}
test('driver without a vehicle or authority can apply', () => {
  const result = validateApplication(application())
  assert.equal(result.vehicleCount, '')
  assert.equal(result.usdotNumber, '')
})
test('all three standard plans are accepted and pricing comes from the server', () => {
  for (const plan of services) {
    const result = portalPayload(validateApplication(application({ selectedPlan: plan.id, monthlyPrice: 1, feePercent: 99 })))
    assert.equal(result.selectedPlan, plan.id)
    assert.ok(result.notes.includes(plan.price))
    assert.equal(result.monthlyPrice, undefined)
    assert.equal(result.feePercent, undefined)
  }
})
test('trial disclosures retain percentage fees', () => {
  for (const id of ['dispatch', 'fleet_management']) {
    assert.match(portalPayload(application({ selectedPlan: id })).notes, /fee still applies/)
  }
})
test('help-me-choose never invents a selected paid plan', () => {
  const result = portalPayload(validateApplication(application({ selectedPlan: 'not_sure' })))
  assert.equal(result.selectedPlan, 'not_sure')
  assert.match(result.notes, /Help Me Choose/)
})
test('required contacts, roles, and consent rejected', () => {
  for (const override of [{ email: 'bad' }, { phone: '123' }, { firstName: '' }, { city: '' }, { consent: false }, { roles: [] }, { roles: ['admin'] }]) {
    assert.throws(() => validateApplication(application(override)), ApplicationError)
  }
})
test('wrong primitive and array types rejected', () => {
  for (const override of [{ roles: 'driver' }, { vehicleCount: 1 }, { email: [] }, { notes: {} }, { servicesNeeded: [false] }]) {
    assert.throws(() => validateApplication(application(override)), ApplicationError)
  }
})
test('honeypot rejects bots, normal forms leave it blank', () => {
  assert.throws(() => validateApplication(application({ website: 'bot.example' })), /Invalid submission/)
  assert.equal(validateApplication(application()).website, '')
})
test('hidden vehicle and authority details cleared after selecting No', () => {
  const result = validateApplication(application({ vehicleType: 'Semi Truck', vehicleCount: '7', vehicleMake: 'Old', usdotNumber: '123', mcNumber: '456' }))
  assert.equal(result.vehicleType, '')
  assert.equal(result.vehicleMake, '')
  assert.equal(result.vehicleCount, '')
  assert.equal(result.usdotNumber, '')
  assert.equal(result.mcNumber, '')
})
test('vehicle owners require type, positive count, and operating status, not DOT/MC', () => {
  const owner = application({ roles: ['vehicle_owner'], applicationType: 'vehicle_owner', vehicleOwnershipStatus: 'Yes', vehicleType: 'Box Truck', vehicleCount: '2', vehicleOperating: 'Yes' })
  assert.equal(validateApplication(owner).vehicleCount, '2')
  assert.equal(portalPayload(owner).vehicleCount, 2)
  for (const value of ['', '0', '-1', '1.5']) assert.throws(() => validateApplication({ ...owner, vehicleCount: value }))
})
test('all selected roles and specialist network fields retained in notes', () => {
  const data = validateApplication(application({
    roles: ['driver', 'vehicle_owner', 'dispatcher'], licenseType: 'Class A CDL', yearsDriving: '3–5 years',
    vehicleExperience: ['Semi'], availability: ['Regional'], employmentPreference: 'Either', lookingForVehicle: 'Yes',
    driverArrangement: 'Independent Contractor', weeklySchedule: 'Weekdays',
    yearsDispatching: '6–10 years', equipmentExperience: ['Box Truck'], carriersManaged: '3',
    loadBoards: 'DAT', regionsServiced: 'NC', dispatcherAvailability: 'Part-time',
  }))
  const notes = portalPayload(data).notes
  for (const value of ['Driver Looking for a Vehicle', 'Vehicle Owner', 'Dispatcher', 'Class A CDL', 'Semi', 'Regional', 'Independent Contractor', 'Weekdays', 'DAT', 'Box Truck', 'Part-time']) {
    assert.ok(notes.includes(value), value)
  }
})
test('UTMs and lead source preserved', () => {
  const result = portalPayload(validateApplication(application({ leadSource: 'Facebook', utmSource: 'fb', utmMedium: 'paid', utmCampaign: 'fall', utmContent: 'van', utmTerm: 'dispatch' })))
  assert.equal(result.leadSource, 'Facebook')
  assert.equal(result.utmSource, 'fb')
  assert.equal(result.utmMedium, 'paid')
  assert.equal(result.utmCampaign, 'fall')
  assert.equal(result.utmContent, 'van')
  assert.equal(result.utmTerm, 'dispatch')
})
test('oversized notes rejected instead of silently truncated', () => {
  assert.throws(() => validateApplication(application({ notes: 'x'.repeat(1001) })), ApplicationError)
})
test('unknown or tampered plans rejected', () => {
  assert.throws(() => validateApplication(application({ selectedPlan: 'free' })), ApplicationError)
})
test('inconsistent primary role rejected', () => {
  assert.throws(() => validateApplication(application({ applicationType: 'dispatcher' })), ApplicationError)
})
test('all preferred next steps retained for admin review', () => {
  for (const nextStep of ['Schedule a Call', 'Request FreightSync Review', 'Start Onboarding']) {
    assert.ok(portalPayload(validateApplication(application({ nextStep }))).notes.includes(nextStep))
  }
})
test('portal wire format uses numeric year and omits missing authority numbers', () => {
  const result = portalPayload(validateApplication(application({
    vehicleOwnershipStatus: 'Yes', vehicleType: 'Box Truck', vehicleCount: '1', vehicleOperating: 'Yes', vehicleYear: '2023',
  })))
  assert.equal(result.vehicleYear, 2023)
  assert.equal(Object.hasOwn(result, 'usdotNumber'), false)
  assert.equal(Object.hasOwn(result, 'mcNumber'), false)
})
test('all questionnaire needs are retained, with verified portal routing categories', () => {
  const { serviceNeeds } = require(process.env.CARRIER_TEST_LIB + '/carrier-network.js')
  const result = portalPayload(validateApplication(application({ servicesNeeded: serviceNeeds })))
  assert.deepEqual(result.servicesNeeded.sort(), ['dispatch', 'dispatcher_network', 'fleet_management', 'other'].sort())
  for (const need of serviceNeeds) assert.ok(result.notes.includes(need))
})
test('optional year rejects malformed input before reaching the portal', () => {
  assert.throws(() => validateApplication(application({
    vehicleOwnershipStatus: 'Yes', vehicleType: 'Box Truck', vehicleCount: '1', vehicleOperating: 'Yes', vehicleYear: 'test',
  })), ApplicationError)
})
