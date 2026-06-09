import { Link } from 'react-router-dom'
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
} from 'lucide-react'
import { PageHero, SectionHeading, Reveal, FeatureCard, CTASection } from './../components/ui.jsx'

const PLANS = [
  {
    name: 'Triple Sharing',
    price: '₹3,500',
    per: '/month',
    points: ['3-bed shared room', 'Study table & cupboard', 'Wi-Fi + power backup', 'Common washroom'],
  },
  {
    name: 'Double Sharing',
    price: '₹5,000',
    per: '/month',
    popular: true,
    points: ['2-bed room', 'Attached washroom', 'Wi-Fi + power backup', 'Daily cleaning', 'Tiffin add-on available'],
  },
  {
    name: 'Single Room',
    price: '₹7,500',
    per: '/month',
    points: ['Private single room', 'Attached washroom', 'Priority Wi-Fi', 'Personal study setup'],
  },
]

export default function Hostel() {
  return (
    <>
      <PageHero
        eyebrow="Hostel & Tiffin · Hostel"
        title="A safe, comfortable home away from"
        highlight="home in Patna"
        subtitle="Secure, hygienic and well-managed student accommodation close to our coaching center and library — so outstation aspirants can focus fully on their studies."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Hostel' }]}
      >
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold text-brand-100 ring-1 ring-white/20">
          <MapPin className="h-4 w-4 text-crimson" /> Walking distance from coaching & library
        </span>
      </PageHero>

      {/* features */}
      <section className="section">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Why our hostel"
              title="Everything an aspirant needs to settle in"
              subtitle="A disciplined, secure and study-friendly environment with all the daily essentials taken care of."
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

      {/* plans */}
      <section className="section bg-softgrey">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Room options"
              title="Rooms for every budget"
              subtitle="Transparent monthly rent with no hidden charges. Tiffin can be added to any plan."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PLANS.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.1}>
                <div className={`card relative flex h-full flex-col p-6 ${p.popular ? 'ring-2 ring-crimson' : ''}`}>
                  {p.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-crimson px-4 py-1 text-xs font-bold text-white">
                      Most Popular
                    </span>
                  )}
                  <p className="font-display text-lg font-bold text-navy">{p.name}</p>
                  <div className="mt-3 flex items-end gap-1">
                    <span className="font-display text-4xl font-extrabold text-navy">{p.price}</span>
                    <span className="pb-1 text-sm text-slate-500">{p.per}</span>
                  </div>
                  <ul className="mt-6 flex-1 space-y-3">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" /> {pt}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className={`mt-6 ${p.popular ? 'btn-crimson' : 'btn-ghost'} w-full`}>
                    Enquire {p.name}
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-slate-400">
            * Indicative pricing — please contact us for current room availability and offers.
          </p>
        </div>
      </section>

      {/* amenities strip */}
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
