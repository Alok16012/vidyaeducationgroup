import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Clock,
  Armchair,
  Wifi,
  Volume2,
  ShieldCheck,
  Coffee,
  Plug,
  CalendarDays,
  CheckCircle2,
  ArrowRight,
  Crown,
  BookMarked,
} from 'lucide-react'
import { PageHero, SectionHeading, Reveal, FeatureCard, CTASection, Pill } from '../../components/ui.jsx'
import { BRAND } from '../../data/site.js'

const SLOTS = [
  '06:00 – 10:00 AM',
  '10:00 – 02:00 PM',
  '02:00 – 06:00 PM',
  '06:00 – 10:00 PM',
  '10:00 PM – 02:00 AM',
  '02:00 – 06:00 AM',
]

export default function LibraryHub() {
  const [slot, setSlot] = useState(null)
  const [seat, setSeat] = useState(null)
  const booked = new Set(['A2', 'A6', 'B4', 'C1', 'C7', 'D3', 'D8'])

  const seats = []
  for (const r of ['A', 'B', 'C', 'D']) {
    for (let i = 1; i <= 8; i++) seats.push(`${r}${i}`)
  }

  return (
    <>
      <PageHero
        eyebrow="Digital Library"
        title="A peaceful 24/7 study zone that never"
        highlight="closes"
        subtitle="Reserve your seat, pick your slot and study in a calm, disciplined environment with high-speed Wi-Fi and dedicated power at every desk."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Library' }]}
      >
        <div className="flex flex-wrap items-center gap-4 text-sm text-brand-100">
          <span className="flex items-center gap-2"><Clock className="h-5 w-5 text-crimson" /> {BRAND.libraryHours}</span>
        </div>
      </PageHero>

      {/* wings */}
      <section className="section">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Two study wings"
              title="Choose the wing that suits you"
              subtitle="From budget-friendly desks to executive ergonomic cabins — premium comfort or simple focus, your choice."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Reveal>
              <Link to="/library/premium" className="card group block overflow-hidden">
                <div className="flex items-center justify-between bg-gradient-to-br from-crimson to-red-700 p-6 text-white">
                  <div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-bold">
                      <Crown className="h-3.5 w-3.5" /> Premium
                    </span>
                    <p className="mt-3 font-display text-2xl font-bold">Premium & Luxury Wing</p>
                  </div>
                  <ArrowRight className="h-6 w-6 transition group-hover:translate-x-1" />
                </div>
                <div className="p-6">
                  <p className="text-sm text-slate-600">Executive ergonomic cabins, individual plug points, fiber Wi-Fi and digital tablet access.</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Pill tone="crimson">Ergonomic Cabins</Pill>
                    <Pill tone="crimson">Tablet Access</Pill>
                    <Pill tone="crimson">Fiber Wi-Fi</Pill>
                  </div>
                </div>
              </Link>
            </Reveal>
            <Reveal delay={0.1}>
              <Link to="/library/simple" className="card group block overflow-hidden">
                <div className="flex items-center justify-between bg-navy-gradient p-6 text-white">
                  <div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-bold">
                      <BookMarked className="h-3.5 w-3.5" /> Value
                    </span>
                    <p className="mt-3 font-display text-2xl font-bold">Simple Study Wing</p>
                  </div>
                  <ArrowRight className="h-6 w-6 transition group-hover:translate-x-1" />
                </div>
                <div className="p-6">
                  <p className="text-sm text-slate-600">Budget-friendly desks, neat lighting, charging points and a solid reference-book inventory.</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Pill>Affordable</Pill>
                    <Pill>Good Lighting</Pill>
                    <Pill>Reference Books</Pill>
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* booking grid */}
      <section className="section bg-softgrey">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Live seat booking"
              title="Reserve your seat & slot"
              subtitle="Pick a time slot and tap an available seat to reserve it. This interactive grid mirrors our real allocation system."
            />
          </Reveal>

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {/* slots */}
            <Reveal>
              <div className="card p-6">
                <h3 className="flex items-center gap-2 font-display text-base font-bold text-navy">
                  <CalendarDays className="h-5 w-5 text-slateblue" /> Select a Slot
                </h3>
                <div className="mt-4 space-y-2">
                  {SLOTS.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSlot(s)}
                      className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                        slot === s
                          ? 'border-slateblue bg-brand-50 text-slateblue'
                          : 'border-slate-200 text-slate-600 hover:border-slateblue'
                      }`}
                    >
                      {s}
                      {slot === s && <CheckCircle2 className="h-4 w-4" />}
                    </button>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* seats */}
            <Reveal delay={0.1} className="lg:col-span-2">
              <div className="card p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="flex items-center gap-2 font-display text-base font-bold text-navy">
                    <Armchair className="h-5 w-5 text-slateblue" /> Select a Seat
                  </h3>
                  <div className="flex gap-3 text-xs text-slate-500">
                    <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded bg-emerald-50 ring-1 ring-emerald-300" /> Free</span>
                    <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded bg-slateblue" /> Selected</span>
                    <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded bg-slate-200" /> Booked</span>
                  </div>
                </div>

                <div className="mt-4 rounded-xl bg-softgrey py-2 text-center text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Front · Study Hall
                </div>

                <div className="mt-4 grid grid-cols-8 gap-2">
                  {seats.map((s) => {
                    const isBooked = booked.has(s)
                    const isSel = seat === s
                    return (
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        key={s}
                        disabled={isBooked || !slot}
                        onClick={() => setSeat(s)}
                        className={`flex aspect-square items-center justify-center rounded-lg text-[11px] font-bold transition ${
                          isSel
                            ? 'bg-slateblue text-white'
                            : isBooked
                              ? 'cursor-not-allowed bg-slate-200 text-slate-400'
                              : slot
                                ? 'bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200 hover:bg-emerald-100'
                                : 'cursor-not-allowed bg-slate-100 text-slate-300'
                        }`}
                      >
                        {s}
                      </motion.button>
                    )
                  })}
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-xl bg-softgrey p-4">
                  <div className="text-sm">
                    {slot && seat ? (
                      <p className="text-navy">
                        Booking <span className="font-bold text-slateblue">Seat {seat}</span> for{' '}
                        <span className="font-bold text-crimson">{slot}</span>
                      </p>
                    ) : (
                      <p className="text-slate-500">Select a slot, then a seat to continue.</p>
                    )}
                  </div>
                  <Link
                    to="/contact"
                    className={`btn-crimson ${slot && seat ? '' : 'pointer-events-none opacity-50'}`}
                  >
                    Confirm Booking
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* amenities */}
      <section className="section">
        <div className="container-page">
          <Reveal>
            <SectionHeading eyebrow="Everything included" title="Amenities at the library" />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Clock, title: '24/7 Open Access', desc: 'Study whenever you’re most productive — day, night or early morning.', accent: 'crimson' },
              { icon: Wifi, title: 'High-Speed Wi-Fi', desc: 'Fiber internet for online tests, video lectures and research.', accent: 'slateblue' },
              { icon: Plug, title: 'Power at Every Desk', desc: 'Individual plug points so your devices never run out of charge.', accent: 'navy' },
              { icon: Volume2, title: 'Pin-Drop Silence', desc: 'A strictly quiet, distraction-free zone for deep focus.', accent: 'slateblue' },
              { icon: ShieldCheck, title: 'CCTV & Safe', desc: 'Secure, monitored premises with a safe environment for all.', accent: 'crimson' },
              { icon: Coffee, title: 'Refreshment Corner', desc: 'Water, tea and a small break area to recharge yourself.', accent: 'navy' },
            ].map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 0.08}>
                <FeatureCard {...f} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Claim your seat in the calmest study zone in Patna"
        subtitle="Monthly, quarterly and half-yearly plans available for both premium and simple wings."
        primary={{ label: 'Book a Seat', to: '/contact' }}
        secondary={{ label: 'See Premium Wing', to: '/library/premium' }}
      />
    </>
  )
}
