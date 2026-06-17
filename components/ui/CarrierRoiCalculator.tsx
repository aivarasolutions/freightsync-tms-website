'use client'

import { useMemo, useState } from 'react'

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

export function CarrierRoiCalculator() {
  const [grossRevenue, setGrossRevenue] = useState(18000)
  const [fuel, setFuel] = useState(4500)
  const [insurance, setInsurance] = useState(1800)
  const [vehiclePayment, setVehiclePayment] = useState(3200)
  const [driverPay, setDriverPay] = useState(5200)
  const [maintenance, setMaintenance] = useState(1200)
  const [otherCosts, setOtherCosts] = useState(900)

  const result = useMemo(() => {
    const managementFee = grossRevenue * 0.25
    const expenses = fuel + insurance + vehiclePayment + driverPay + maintenance + otherCosts + managementFee
    return {
      managementFee,
      expenses,
      projectedOwnerCashFlow: grossRevenue - expenses,
    }
  }, [driverPay, fuel, grossRevenue, insurance, maintenance, otherCosts, vehiclePayment])

  const fields = [
    { label: 'Monthly gross revenue', value: grossRevenue, setter: setGrossRevenue, min: 0, max: 40000, step: 500 },
    { label: 'Fuel', value: fuel, setter: setFuel, min: 0, max: 12000, step: 100 },
    { label: 'Insurance', value: insurance, setter: setInsurance, min: 0, max: 6000, step: 100 },
    { label: 'Vehicle payment', value: vehiclePayment, setter: setVehiclePayment, min: 0, max: 10000, step: 100 },
    { label: 'Driver pay', value: driverPay, setter: setDriverPay, min: 0, max: 14000, step: 100 },
    { label: 'Maintenance reserve', value: maintenance, setter: setMaintenance, min: 0, max: 5000, step: 100 },
    { label: 'Other operating costs', value: otherCosts, setter: setOtherCosts, min: 0, max: 5000, step: 100 },
  ]

  return (
    <div className="rounded-xl border border-border bg-white p-6 sm:p-8 shadow-lg">
      <div className="grid lg:grid-cols-[1fr_0.8fr] gap-8">
        <div>
          <h3 className="text-2xl font-bold text-navy mb-2">Owner Cash Flow Planner</h3>
          <p className="text-neutral mb-6">
            Estimate how revenue, operating costs, and FreightSync&apos;s management fee can affect monthly owner cash flow.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {fields.map((field) => (
              <label key={field.label} className="block">
                <span className="mb-2 flex items-center justify-between gap-3 text-sm font-semibold text-navy">
                  {field.label}
                  <span className="text-cyan">{currency.format(field.value)}</span>
                </span>
                <input
                  type="range"
                  min={field.min}
                  max={field.max}
                  step={field.step}
                  value={field.value}
                  onChange={(event) => field.setter(Number(event.target.value))}
                  className="w-full accent-cyan"
                />
              </label>
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-gradient-to-br from-navy to-royal p-6 text-white">
          <p className="text-sm font-semibold text-cyan mb-2">Planning estimate</p>
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3">
              <span className="text-white/80">Gross revenue</span>
              <span className="font-bold">{currency.format(grossRevenue)}</span>
            </div>
            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3">
              <span className="text-white/80">FreightSync fee</span>
              <span className="font-bold">{currency.format(result.managementFee)}</span>
            </div>
            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3">
              <span className="text-white/80">Estimated total costs</span>
              <span className="font-bold">{currency.format(result.expenses)}</span>
            </div>
            <div>
              <span className="text-white/80">Projected owner cash flow</span>
              <p className="mt-1 text-4xl font-extrabold text-white">{currency.format(result.projectedOwnerCashFlow)}</p>
            </div>
          </div>
          <p className="mt-6 text-sm text-white/75">
            This calculator is for planning only. FreightSync does not guarantee revenue, profit, utilization, load availability, or investment returns.
          </p>
        </div>
      </div>
    </div>
  )
}
