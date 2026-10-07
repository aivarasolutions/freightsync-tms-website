export const PORTAL_URL = 'https://portal.freightsynctms.com'
export const LEADS_ENDPOINT = `${PORTAL_URL}/api/public/leads`

export const connectFeatures = [
  'FreightSync TMS access', 'Carrier Network access', 'Driver profile', 'Vehicle profile',
  'Document storage', 'Availability management', 'Load tracking', 'Revenue tracking',
  'Dispatcher network access', 'Driver/vehicle matching opportunities',
  'Digital document uploads', 'BOL and POD storage', 'Transportation business organization tools',
]
export const dispatchFeatures = [
  'Active dispatch support', 'Load searching', 'Load opportunity matching',
  'Rate negotiation assistance', 'Broker communication', 'Load setup',
  'Pickup/delivery coordination', 'Rate confirmation organization', 'BOL/POD management',
  'Dispatch documentation', 'Revenue and settlement tracking',
]
export const fleetFeatures = [
  'Fleet operations support', 'Driver coordination', 'Driver management', 'Vehicle management',
  'Load assignment', 'Driver scheduling', 'Fleet availability', 'Document management',
  'Insurance and document tracking', 'Driver/vehicle matching', 'Pickup and delivery monitoring',
  'Driver settlements', 'Owner settlements', 'Vehicle-level reporting', 'Driver-level reporting',
  'Fleet performance reporting', 'Fleet dashboard', 'Operational support',
]
export const services = [
  {
    id: 'connect', slug: 'connect', name: 'FreightSync Connect',
    headline: 'Get Connected. Stay Organized.',
    description: 'Independent drivers, vehicle owners, and small fleets get access to the FreightSync network and TMS tools needed to organize their transportation business.',
    audience: 'Independent drivers, vehicle owners, and small fleets that want transportation technology and network access.',
    monthlyPrice: 49, feePercent: 0,
    price: '$49/month', feeScope: 'No percentage-based service fee with FreightSync Connect.',
    trial: 'First month FREE.',
    cta: 'Join FreightSync Connect', features: connectFeatures,
  },
  {
    id: 'dispatch', slug: 'dispatch', name: 'FreightSync Dispatch',
    headline: 'You Drive. We Help Keep You Moving.',
    description: 'Dispatch support for owner operators and independent carriers who want help organizing loads, communicating with brokers, and coordinating pickups and deliveries.',
    audience: 'Owner operators and independent carriers looking for active dispatch support.',
    monthlyPrice: 49, feePercent: 5,
    price: '$49/month + 5% of completed FreightSync-dispatched load revenue',
    feeScope: 'The 5% fee applies only to completed loads FreightSync dispatches or directly manages. It does not apply to unrelated freight booked independently.',
    trial: 'First month $49 subscription FREE. The 5% dispatch fee still applies to completed FreightSync-dispatched loads during the free trial.',
    cta: 'Get Dispatch Support', features: dispatchFeatures,
  },
  {
    id: 'fleet_management', slug: 'fleet-management', name: 'FreightSync Fleet Management',
    headline: 'Run Your Fleet Without Running Every Detail Yourself.',
    description: 'Coordinate vehicles, drivers, freight, paperwork, reporting, and day-to-day transportation operations through one platform.',
    audience: 'Vehicle owners and growing fleets that need more than dispatching.',
    monthlyPrice: 49, feePercent: 8,
    price: '$49/month + 8% of completed FreightSync-managed load revenue',
    feeScope: 'The 8% fee applies only to completed loads being managed through FreightSync Fleet Management.',
    trial: 'First month $49 subscription FREE. The 8% management fee still applies to completed FreightSync-managed loads during the free trial.',
    cta: 'Request Fleet Management', features: fleetFeatures,
  },
] as const
export type PlanId = typeof services[number]['id'] | 'not_sure'
export const serviceIds: readonly string[] = [...services.map(service => service.id), 'not_sure']

export const applicationTypes = [
  ['owner_operator', 'Owner Operator'], ['vehicle_owner', 'Vehicle Owner'],
  ['fleet_owner', 'Fleet Owner'], ['driver', 'Driver Looking for a Vehicle'],
  ['dispatcher', 'Dispatcher'], ['new_business', 'New Transportation Business'], ['other', 'Other'],
] as const
export const vehicleTypes = [
  'Cargo Van', 'Sprinter Van', 'Box Truck', 'Straight Truck', 'Hotshot',
  'Pickup Truck', 'Semi Truck', 'Multiple Vehicles', 'Other',
]
export const serviceNeeds = [
  'I need loads', 'I need dispatching', 'I need a driver', 'I need a vehicle',
  'I need fleet management', 'I need TMS software', 'I need help organizing my transportation business',
  'I need help getting started', 'I am a dispatcher looking for carriers', 'Other',
]
export const networkFaqs = [
  { question: 'Do I need my own vehicle?', answer: 'No. FreightSync also accepts applications from drivers looking to connect with participating vehicle owners. All matching initially requires FreightSync admin approval.' },
  { question: 'What types of vehicles do you support?', answer: 'Cargo vans, Sprinter vans, box trucks, straight trucks, hotshots, pickups, semi trucks, and fleets.' },
  { question: 'Does FreightSync guarantee loads?', answer: 'No. FreightSync provides technology, dispatch support, load sourcing assistance, and transportation network resources, but freight availability and revenue cannot be guaranteed.' },
  { question: 'Does FreightSync take a percentage of every load I run?', answer: 'No. Connect costs $49/month with no percentage fee. Dispatch costs $49/month plus 5% only on completed loads FreightSync dispatches or directly manages. Fleet Management costs $49/month plus 8% only on completed FreightSync-managed loads. Unrelated independently booked freight is not subject to those fees.' },
  { question: 'What is free during the first month?', answer: 'The monthly $49 subscription is waived for the first month. The 5% dispatch fee or 8% management fee still applies to qualifying completed loads during that month. Connect has no percentage-based fee.' },
  { question: 'Can I cancel?', answer: 'Yes. No setup fee, no cancellation fee, and cancel anytime.' },
  { question: 'Is there a contract?', answer: 'Customers must accept the appropriate FreightSync service agreement. Plans do not require a long-term commitment unless an individual fleet agreement specifically states otherwise.' },
  { question: 'Do you offer larger-fleet pricing?', answer: 'Custom pricing can be offered for larger fleets. Standard Fleet Management pricing is $49/month plus 8% of completed FreightSync-managed load revenue.' },
]
export const networkDisclaimer = "FreightSync TMS provides transportation technology, administrative support, carrier support, and dispatch-related services subject to the customer's agreement and operating authority. Freight availability, rates, revenue, driver placement, and vehicle placement are not guaranteed."

// Contract used by the existing Owner Portal public lead API.
export interface CarrierApplication {
  firstName: string
  lastName: string
  email: string
  phone: string
  businessName: string
  city: string
  state: string
  zipCode: string
  applicationType: string
  roles: string[]
  vehicleOwnershipStatus: string
  vehicleType: string
  vehicleYear: string
  vehicleMake: string
  vehicleModel: string
  vehicleLength: string
  payloadCapacity: string
  vehicleCount: string
  vehicleOperating: string
  operatingAuthorityStatus: string
  usdotNumber: string
  mcNumber: string
  insuranceStatus: string
  servicesNeeded: string[]
  selectedPlan: PlanId
  operatingVehicleCount: string
  monthlyRevenueRange: string
  startTimeline: string
  notes: string
  nextStep: string
  licenseType: string
  yearsDriving: string
  vehicleExperience: string[]
  availability: string[]
  employmentPreference: string
  lookingForVehicle: string
  driverArrangement: string
  weeklySchedule: string
  yearsDispatching: string
  equipmentExperience: string[]
  carriersManaged: string
  loadBoards: string
  regionsServiced: string
  dispatcherAvailability: string
  consent: boolean
  leadSource: string
  utmSource: string
  utmMedium: string
  utmCampaign: string
  utmContent: string
  utmTerm: string
  website: string
}

export function emptyApplication(): CarrierApplication {
  return {
    firstName: '', lastName: '', email: '', phone: '', businessName: '', city: '', state: '', zipCode: '',
    applicationType: '', roles: [], vehicleOwnershipStatus: '', vehicleType: '', vehicleYear: '',
    vehicleMake: '', vehicleModel: '', vehicleLength: '', payloadCapacity: '', vehicleCount: '',
    vehicleOperating: '', operatingAuthorityStatus: '', usdotNumber: '', mcNumber: '',
    insuranceStatus: '', servicesNeeded: [], selectedPlan: 'not_sure', operatingVehicleCount: '',
    monthlyRevenueRange: '', startTimeline: '', notes: '', nextStep: '', licenseType: '',
    yearsDriving: '', vehicleExperience: [], availability: [], employmentPreference: '',
    lookingForVehicle: '', driverArrangement: '', weeklySchedule: '', yearsDispatching: '',
    equipmentExperience: [], carriersManaged: '', loadBoards: '', regionsServiced: '',
    dispatcherAvailability: '', consent: false, leadSource: 'Direct', utmSource: '', utmMedium: '',
    utmCampaign: '', utmContent: '', utmTerm: '', website: '',
  }
}
