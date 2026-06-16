'use client'

import { useMemo, useState } from 'react'

const presets = {
  semi: {
    label: 'Semi Truck',
    purchasePrice: 60000,
    grossRevenue: 25000,
    insurance: 2000,
    fuel: 7000,
    maintenance: 1500,
    driverPay: 7000,
    otherExpenses: 1000,
  },
  sprinter: {
    label: 'Sprinter Van',
    purchasePrice: 45000,
    grossRevenue: 12000,
    insurance: 900,
    fuel: 2500,
    maintenance: 700,
    driverPay: 2500,
    otherExpenses: 500,
  },
}

type VehicleType = keyof typeof presets

function money(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value)
}

function months(value: number) {
  return `${Math.ceil(value)} months`
}

export function ROICalculator() {
  const [vehicleType, setVehicleType] = useState<VehicleType>('semi')
  const [values, setValues] = useState(presets.semi)
  const [managementFeePct, setManagementFeePct] = useState(25)

  const result = useMemo(() => {
    const managementFee = values.grossRevenue * (managementFeePct / 100)
    const monthlyNet =
      values.grossRevenue -
      values.insurance -
      values.fuel -
      values.maintenance -
      values.driverPay -
      values.otherExpenses -
      managementFee

    const annualNet = monthlyNet * 12
    const paybackMonths = monthlyNet > 0 ? values.purchasePrice / monthlyNet : null
    const yearTwoCashFlow = paybackMonths !== null && paybackMonths <= 12 ? annualNet + values.purchasePrice : annualNet

    return {
      managementFee,
      monthlyNet,
      annualNet,
      paybackMonths,
      yearTwoCashFlow,
    }
  }, [managementFeePct, values])

  function selectVehicleType(nextType: VehicleType) {
    setVehicleType(nextType)
    setValues(presets[nextType])
  }

  function updateValue(key: keyof typeof values, value: string) {
    setValues((current) => ({
      ...current,
      [key]: Number(value) || 0,
    }))
  }

  const inputClass = 'w-full rounded-lg border border-border bg-white px-4 py-3 text-navy focus:border-transparent focus:ring-2 focus:ring-teal'

  return (
    <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-6">
      <div className="rounded-xl border border-border bg-white p-6 sm:p-8 shadow-lg">
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {Object.entries(presets).map(([key, preset]) => (
            <button
              key={key}
              type="button"
              onClick={() => selectVehicleType(key as VehicleType)}
              className={`rounded-lg border px-4 py-3 text-left font-semibold transition-all ${
                vehicleType === key
                  ? 'border-cyan bg-cyan/10 text-navy shadow-sm'
                  : 'border-border bg-white text-neutral hover:border-cyan hover:text-navy'
              }`}
            >
              {preset.label}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-navy">Vehicle purchase price</span>
            <input className={inputClass} type="number" min="0" value={values.purchasePrice} onChange={(e) => updateValue('purchasePrice', e.target.value)} />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-navy">Monthly gross revenue</span>
            <input className={inputClass} type="number" min="0" value={values.grossRevenue} onChange={(e) => updateValue('grossRevenue', e.target.value)} />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-navy">Monthly insurance</span>
            <input className={inputClass} type="number" min="0" value={values.insurance} onChange={(e) => updateValue('insurance', e.target.value)} />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-navy">Monthly fuel</span>
            <input className={inputClass} type="number" min="0" value={values.fuel} onChange={(e) => updateValue('fuel', e.target.value)} />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-navy">Monthly maintenance</span>
            <input className={inputClass} type="number" min="0" value={values.maintenance} onChange={(e) => updateValue('maintenance', e.target.value)} />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-navy">Driver pay</span>
            <input className={inputClass} type="number" min="0" value={values.driverPay} onChange={(e) => updateValue('driverPay', e.target.value)} />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-navy">FreightSync management fee %</span>
            <input className={inputClass} type="number" min="0" max="100" value={managementFeePct} onChange={(e) => setManagementFeePct(Number(e.target.value) || 0)} />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-navy">Other monthly expenses</span>
            <input className={inputClass} type="number" min="0" value={values.otherExpenses} onChange={(e) => updateValue('otherExpenses', e.target.value)} />
          </label>
        </div>
      </div>

      <div className="rounded-xl bg-gradient-to-br from-navy to-royal p-6 sm:p-8 text-white shadow-xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-cyan mb-3">Estimated output</p>
        <h3 className="text-2xl font-bold text-white mb-6">Planning snapshot</h3>
        <div className="space-y-4">
          <div className="rounded-lg bg-white/10 p-4">
            <p className="text-sm text-white/70">FreightSync management fee</p>
            <p className="text-2xl font-bold text-white">{money(result.managementFee)}</p>
          </div>
          <div className="rounded-lg bg-white/10 p-4">
            <p className="text-sm text-white/70">Estimated monthly net profit</p>
            <p className={`text-3xl font-extrabold ${result.monthlyNet > 0 ? 'text-cyan' : 'text-white'}`}>{money(result.monthlyNet)}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
            <div className="rounded-lg bg-white/10 p-4">
              <p className="text-sm text-white/70">Estimated annual net profit</p>
              <p className="text-xl font-bold text-white">{money(result.annualNet)}</p>
            </div>
            <div className="rounded-lg bg-white/10 p-4">
              <p className="text-sm text-white/70">Estimated year 2 cash flow</p>
              <p className="text-xl font-bold text-white">{money(result.yearTwoCashFlow)}</p>
            </div>
          </div>
          <div className="rounded-lg bg-white p-4 text-navy">
            <p className="text-sm font-semibold text-neutral">Estimated payback period</p>
            {result.paybackMonths === null ? (
              <p className="mt-2 text-sm font-semibold text-red-600">
                Payback period cannot be calculated because estimated monthly net profit is not positive.
              </p>
            ) : (
              <p className="mt-1 text-2xl font-extrabold text-navy">{months(result.paybackMonths)}</p>
            )}
          </div>
        </div>
        <p className="mt-6 text-xs leading-relaxed text-white/70">
          Calculator results are estimates only and are not guarantees of revenue, profit, loads, or payback timelines.
        </p>
      </div>
    </div>
  )
}
