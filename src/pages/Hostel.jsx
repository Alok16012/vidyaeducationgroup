import {
  BedDouble,
  ShieldCheck,
  Wifi,
  Utensils,
  Droplets,
  ShowerHead,
  Camera,
  Sparkles,
  Clock,
  Fan,
  CheckCircle2,
  MapPin,
  CreditCard,
  Navigation,
} from 'lucide-react'
import { PageHero, SectionHeading, Reveal, FeatureCard, CTASection } from './../components/ui.jsx'
import { BRAND } from '../data/site.js'

const PLANS = [
  {
    name: 'Single Bed Room',
    price: 'Contact',
    per: '/month',
    badge: 'Private',
    points: ['Private single room', 'Study table & cupboard', 'Wi-Fi + power backup', 'Priority room availability check'],
  },
  {
    name: 'Double Bed Room',
    price: 'Contact',
    per: '/month',
    popular: true,
    badge: 'Popular',
    points: ['2-bed sharing room', 'Study table & cupboard', 'Wi-Fi + power backup', 'Daily cleaning', 'Tiffin add-on available'],
  },
  {
    name: 'Triple Bed Room',
    price: 'Contact',
    per: '/month',
    badge: 'Budget',
    points: ['3-bed sharing room', 'Common study-friendly setup', 'Wi-Fi + power backup', 'Student-friendly monthly fee'],
  },
  {
    name: 'Four Bed Room',
    price: 'Contact',
    per: '/month',
    badge: 'Value',
    points: ['4-bed sharing room', 'Affordable hostel option', 'Wi-Fi + power backup', 'Tiffin add-on available'],
  },
]

const HOSTEL_MAP_URL = `https://maps.google.com/?q=${encodeURIComponent(BRAND.address)}`
const HOSTEL_WHATSAPP = `https://wa.me/${BRAND.phonesRaw[0].replace('+', '')}`

export default function Hostel() {
  return (
    <>
      <PageHero
        eyebrow="Hostel & Tiffin · Hostel"
        title="Safe student rooms near your"
        highlight="study campus"
        subtitle="Choose single, double, triple or four-bed rooms with secure stay, essential facilities, fee guidance and payment support."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Hostel' }]}
      >
        <div className="flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold text-brand-100 ring-1 ring-white/20">
            <MapPin className="h-4 w-4 text-crimson" /> Walking distance from coaching & library
          </span>
          <a href={HOSTEL_MAP_URL} target="_blank" rel="noreferrer" className="btn border border-white/30 bg-white/10 text-white hover:bg-white/20">
            <Navigation className="h-4 w-4" /> MAP
          </a>
        </div>
      </PageHero>

      <section className="section">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Hostel Features"
              title="A disciplined stay for serious students"
              subtitle="Safe rooms, clean facilities and study-friendly support so students can focus on coaching, library and preparation."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: ShieldCheck, title: 'Safe & Secure', desc: '24/7 security, biometric entry and a warden for round-the-clock safety.', accent: 'crimson' },
              { icon: BedDouble, title: 'Comfortable Rooms', desc: 'Clean, ventilated rooms with bed, study table, cupboard and fan/AC options.', accent: 'slateblue' },
              { icon: Utensils, title: 'Tiffin Integrated', desc: 'Healthy & tasty home-style meals from our tiffin service, available on-site.', accent: 'navy' },
              { icon: Wifi, title: 'Wi-Fi & Power Backup', desc: 'High-speed internet and inverter backup so study never stops.', accent: 'crimson' },
              { icon: Droplets, title: 'RO Drinking Water', desc: 'Purified RO water and hot water for bathing available daily.', accent: 'slateblue' },
              { icon: Sparkles, title: 'Daily Housekeeping', desc: 'Regular room cleaning, laundry support and hygienic common areas.', accent: 'navy' },
            ].map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 0.08}>
                <FeatureCard {...f} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-softgrey">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Room options"
              title="Choose your room type"
              subtitle="Fee depends on room type and current availability. Confirm room, features and payment details before booking."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {PLANS.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.1}>
                <div className={`card relative flex h-full flex-col p-6 ${p.popular ? 'ring-2 ring-crimson' : ''}`}>
                  {p.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-crimson px-4 py-1 text-xs font-bold text-white">
                      Most Popular
                    </span>
                  )}
                  <span className="mb-4 inline-flex w-fit rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-slateblue">
                    {p.badge}
                  </span>
                  <p className="font-display text-lg font-bold text-navy">{p.name}</p>
                  <div className="mt-3 flex items-end gap-1">
                    <span className="font-display text-3xl font-extrabold text-navy">{p.price}</span>
                    {p.price !== 'Contact' && <span className="pb-1 text-sm text-slate-500">{p.per}</span>}
                  </div>
                  <p className="mt-2 text-xs font-semibold text-slate-500">Fee will be shared as per room availability.</p>
                  <ul className="mt-6 flex-1 space-y-3">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" /> {pt}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`${HOSTEL_WHATSAPP}?text=${encodeURIComponent(`Hello Vidya Education Group, I want hostel details for ${p.name}. Please share features, fee and payment details.`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className={`mt-6 ${p.popular ? 'btn-crimson' : 'btn-ghost'} w-full justify-center`}
                  >
                    Enquire {p.name}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-slate-400">
            * Indicative pricing — please contact us for current room availability and offers.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <Reveal>
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-card">
              <h2 className="flex items-center gap-2 font-display text-2xl font-bold text-navy">
                <MapPin className="h-6 w-6 text-crimson" /> Location & MAP
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{BRAND.address}</p>
              <a href={HOSTEL_MAP_URL} target="_blank" rel="noreferrer" className="btn-primary mt-5">
                <Navigation className="h-4 w-4" /> Open MAP
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl bg-navy-gradient p-6 text-white shadow-premium">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
                <CreditCard className="h-6 w-6" />
              </span>
              <h2 className="mt-5 font-display text-2xl font-bold">Payment Gateway</h2>
              <p className="mt-3 text-sm leading-relaxed text-brand-100">
                Select room type, confirm fee and availability, then our team will share payment details for booking.
              </p>
              <a
                href={`${HOSTEL_WHATSAPP}?text=${encodeURIComponent('Hello Vidya Education Group, I want hostel room fee and payment details.')}`}
                target="_blank"
                rel="noreferrer"
                className="btn-crimson mt-6 w-full justify-center"
              >
                Get Payment Details
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section pb-4 pt-0">
        <div className="container-page">
          <div className="grid grid-cols-2 gap-4 rounded-3xl bg-navy-gradient p-6 text-white sm:grid-cols-4">
            {[
              { icon: Camera, label: 'CCTV secured' },
              { icon: ShowerHead, label: 'Hot water' },
              { icon: Fan, label: 'Fan / AC rooms' },
              { icon: Clock, label: 'Warden 24/7' },
            ].map((x) => (
              <div key={x.label} className="flex items-center gap-2 text-sm font-medium">
                <x.icon className="h-5 w-5 text-crimson" /> {x.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Book your hostel seat near the campus"
        subtitle="Rooms are limited and fill up fast before new batches. Reserve yours today with tiffin included."
        primary={{ label: 'Enquire Now', to: '/contact' }}
        secondary={{ label: 'View Tiffin Service', to: '/tiffin' }}
      />
    </>
  )
}
