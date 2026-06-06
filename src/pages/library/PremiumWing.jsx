import { Link } from 'react-router-dom'
import {
  Crown,
  Armchair,
  Plug,
  Wifi,
  Tablet,
  Wind,
  Lock,
  Coffee,
  Lightbulb,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Star,
} from 'lucide-react'
import { PageHero, SectionHeading, Reveal, FeatureCard, CTASection, Pill } from '../../components/ui.jsx'

const PLANS = [
  { name: 'Monthly', price: '₹1,200', per: '/month', points: ['Reserved executive cabin', 'Fiber Wi-Fi + plug point', 'Tablet access (shared)', 'Locker on request'] },
  { name: 'Quarterly', price: '₹3,200', per: '/3 months', popular: true, points: ['Everything in Monthly', 'Fixed personal cabin', 'Dedicated tablet point', 'Free locker', 'Priority slot booking'] },
  { name: 'Half-Yearly', price: '₹5,800', per: '/6 months', points: ['Everything in Quarterly', 'Best value per month', 'Guest day-passes (2)', 'Refreshment credits'] },
]

export default function PremiumWing() {
  return (
    <>
      <PageHero
        eyebrow="Library · Premium"
        title="Executive study, designed like a"
        highlight="luxury workspace"
        subtitle="Ergonomic cabins, individual power, high-speed fiber Wi-Fi and digital tablet access points — the most premium self-study experience in Patna."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Library', to: '/library' }, { label: 'Premium Wing' }]}
      >
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold text-brand-100 ring-1 ring-white/20">
          <Crown className="h-4 w-4 text-crimson" /> Limited executive cabins available
        </span>
      </PageHero>

      {/* highlight features */}
      <section className="section">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Premium experience"
              title="Comfort that fuels concentration"
              subtitle="Every detail of the premium wing is engineered for long, focused, fatigue-free study sessions."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Armchair, title: 'Ergonomic Cabins', desc: 'Private, cushioned executive cabins with spacious desks and back-support chairs.', accent: 'crimson' },
              { icon: Plug, title: 'Individual Plug Points', desc: 'A dedicated power socket at every single cabin for laptops and devices.', accent: 'slateblue' },
              { icon: Wifi, title: 'High-Speed Fiber Wi-Fi', desc: 'Blazing-fast, reliable internet for online tests and HD video lectures.', accent: 'navy' },
              { icon: Tablet, title: 'Digital Tablet Access', desc: 'Tablet access points loaded with e-books, notes and test platforms.', accent: 'crimson' },
              { icon: Wind, title: 'Fully Air-Conditioned', desc: 'Climate-controlled halls keep you cool and comfortable year-round.', accent: 'slateblue' },
              { icon: Lock, title: 'Personal Lockers', desc: 'Secure lockers to store your books and belongings safely.', accent: 'navy' },
            ].map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 0.08}>
                <FeatureCard {...f} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* showcase */}
      <section className="section bg-softgrey">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-crimson to-red-700 p-8 text-white shadow-premium">
              <div className="absolute inset-0 bg-hero-grid [background-size:20px_20px] opacity-20" />
              <Crown className="relative h-10 w-10" />
              <p className="relative mt-6 font-display text-2xl font-bold leading-snug">
                Your own executive cabin, ready whenever you are.
              </p>
              <div className="relative mt-8 grid grid-cols-2 gap-4">
                {[
                  { v: '24/7', l: 'Access' },
                  { v: '100 Mbps', l: 'Fiber Wi-Fi' },
                  { v: 'AC', l: 'Cabins' },
                  { v: '1:1', l: 'Power point' },
                ].map((x) => (
                  <div key={x.l} className="rounded-2xl bg-white/10 p-4">
                    <p className="font-display text-xl font-extrabold">{x.v}</p>
                    <p className="text-xs text-red-100">{x.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading
              align="left"
              eyebrow="Why students upgrade"
              title="Premium pays for itself in focus"
              subtitle="Aspirants who switch to the premium wing consistently report longer, deeper and more productive study hours."
            />
            <ul className="mt-8 space-y-4">
              {[
                'Distraction-free private cabins reduce wandering attention',
                'Reliable Wi-Fi means no interruptions during online mocks',
                'Comfortable seating supports 8–10 hour study days',
                'Digital tablets put your entire syllabus at your fingertips',
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm font-medium text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-crimson" /> {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* plans */}
      <section className="section">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Membership plans"
              title="Premium plans for every commitment"
              subtitle="Transparent pricing with no hidden charges. Longer plans unlock the best value and perks."
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
                    Choose {p.name}
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-slate-400">
            * Indicative pricing — please contact us for current offers and student discounts.
          </p>
        </div>
      </section>

      {/* mini amenities strip */}
      <section className="pb-4">
        <div className="container-page">
          <div className="grid grid-cols-2 gap-4 rounded-3xl bg-navy-gradient p-6 text-white sm:grid-cols-4">
            {[
              { icon: Lightbulb, label: 'Soft eye-care lighting' },
              { icon: Coffee, label: 'Refreshment lounge' },
              { icon: ShieldCheck, label: 'CCTV secured' },
              { icon: Star, label: 'Priority support' },
            ].map((x) => (
              <div key={x.label} className="flex items-center gap-2 text-sm font-medium">
                <x.icon className="h-5 w-5 text-crimson" /> {x.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Reserve a premium cabin before they fill up"
        subtitle="Executive seats are limited. Secure yours today and study like a professional."
        primary={{ label: 'Book Premium Seat', to: '/contact' }}
        secondary={{ label: 'Compare Simple Wing', to: '/library/simple' }}
      />
    </>
  )
}
