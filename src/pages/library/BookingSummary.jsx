import { Armchair, BedDouble, Building2, CalendarDays, CheckCircle2, ReceiptText } from 'lucide-react'
import { SectionHeading, Reveal } from '../../components/ui.jsx'
import {
  LIBRARY_BOOKING,
  LIBRARY_BOOKING_MODES,
  LIBRARY_EXTRA_SEATS,
  LIBRARY_SHIFTS,
  getLibrarySeatTotal,
} from '../../data/libraryBooking.js'

function formatCount(count) {
  return String(count).padStart(2, '0')
}

function seatLabel(seats) {
  return seats.includes('to') ? `Seats ${seats}` : `${seats} seats`
}

export default function BookingSummary({ selectedKey }) {
  const libraries = selectedKey
    ? LIBRARY_BOOKING.filter((library) => library.key === selectedKey)
    : LIBRARY_BOOKING

  return (
    <section className="section bg-softgrey">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Online Booking"
            title="No. of Seats"
            subtitle="Hall-wise seat details, special seats, bed seats and shift options for online booking."
          />
        </Reveal>

        <div className={`mt-12 grid gap-6 ${selectedKey ? 'lg:grid-cols-1' : 'sm:grid-cols-2 lg:grid-cols-4'}`}>
          {libraries.map((library, i) => (
            <Reveal key={library.key} delay={(i % 4) * 0.08}>
              <div className="card flex h-full flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-display text-lg font-bold text-navy">{library.label}</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                      {getLibrarySeatTotal(library)} total seats
                    </p>
                  </div>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-slateblue">
                    <Building2 className="h-5 w-5" />
                  </span>
                </div>

                <div className="mt-5 space-y-3">
                  {library.halls.map((hall) => (
                    <div
                      key={hall.name}
                      className="flex items-center justify-between rounded-xl bg-softgrey px-4 py-3"
                    >
                      <span className="text-sm font-bold text-navy">{hall.name}</span>
                      <span className="text-sm font-semibold text-slate-600">{seatLabel(hall.seats)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <Reveal>
            <div className="h-full rounded-3xl bg-white p-6 shadow-card ring-1 ring-slate-100">
              <h3 className="flex items-center gap-2 font-display text-base font-bold text-navy">
                <Armchair className="h-5 w-5 text-crimson" /> Special Seats
              </h3>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {LIBRARY_EXTRA_SEATS.map((item) => {
                  const Icon = item.label === 'Bed' ? BedDouble : Armchair
                  return (
                    <div key={item.label} className="rounded-xl bg-softgrey p-4">
                      <Icon className="h-5 w-5 text-slateblue" />
                      <p className="mt-3 text-sm font-bold text-navy">{item.label}</p>
                      <p className="mt-1 font-display text-2xl font-extrabold text-crimson">
                        {formatCount(item.count)}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="h-full rounded-3xl bg-white p-6 shadow-card ring-1 ring-slate-100">
              <h3 className="flex items-center gap-2 font-display text-base font-bold text-navy">
                <CalendarDays className="h-5 w-5 text-slateblue" /> Shifts
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {LIBRARY_SHIFTS.map((shift) => (
                  <span
                    key={shift}
                    className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1.5 text-xs font-bold text-slateblue"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5" /> {shift}
                  </span>
                ))}
              </div>
              <div className="mt-5 rounded-xl bg-softgrey p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Booking modes</p>
                <p className="mt-2 text-sm font-bold text-navy">{LIBRARY_BOOKING_MODES.join(' / ')}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="h-full rounded-3xl bg-navy-gradient p-6 text-white shadow-premium">
              <h3 className="flex items-center gap-2 font-display text-base font-bold">
                <ReceiptText className="h-5 w-5 text-crimson" /> A/C Price List
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-brand-100">
                Final pricing is confirmed according to the current A/C price list, selected library,
                hall, shift and booking mode.
              </p>
              <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-brand-200">
                Contact the office before confirming payment.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
