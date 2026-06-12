import { Link } from 'react-router-dom'
import {
  Clock,
  ArrowRight,
  Crown,
  BookMarked,
  Tablet,
  Gem,
  MapPin,
} from 'lucide-react'
import { PageHero, SectionHeading, Reveal, FeatureCard, CTASection, Pill } from '../../components/ui.jsx'
import { BRAND, LIBRARY_ADDRESSES } from '../../data/site.js'
import { LIBRARY_FEATURES } from '../../data/libraryFeatures.js'
import BookingSummary from './BookingSummary.jsx'

export default function LibraryHub() {
  const wings = [
    { key: 'toppers', icon: BookMarked, tag: 'Value', desc: 'Affordable focused study hall with desks, lighting and charging points.', grad: 'bg-navy-gradient', pills: ['Affordable', 'Good Lighting', 'Reference Books'] },
    { key: 'digital', icon: Tablet, tag: 'Digital', desc: 'Tablet access, e-books, online mock tests and high-speed fiber Wi-Fi.', grad: 'bg-gradient-to-br from-cyan-500 to-blue-700', pills: ['Tablets', 'E-Books', 'Online Tests'] },
    { key: 'premium', icon: Crown, tag: 'Premium', desc: 'Executive ergonomic AC cabins, individual plug points and tablet access.', grad: 'bg-gradient-to-br from-crimson to-red-700', pills: ['AC Cabins', 'Tablet Access', 'Fiber Wi-Fi'] },
    { key: 'luxury', icon: Gem, tag: 'Luxury', desc: 'Five-star private cabins, recliner seating, lounge and priority concierge.', grad: 'bg-gradient-to-br from-amber-500 to-yellow-600', pills: ['Private Cabins', 'Lounge', 'Concierge'] },
  ].map((wing) => ({
    ...wing,
    ...LIBRARY_ADDRESSES.find((item) => item.key === wing.key),
  }))

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
              title="Choose the library that suits you"
              subtitle="Four tiers — from an affordable focused study hall to a five-star luxury cabin experience. Pick the one that fits your goal and budget."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {wings.map((w, i) => (
              <Reveal key={w.to} delay={(i % 4) * 0.08}>
                <Link to={w.to} className="card group flex h-full flex-col overflow-hidden">
                  <div className={`flex items-center justify-between ${w.grad} p-5 text-white`}>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-bold">
                      <w.icon className="h-3.5 w-3.5" /> {w.tag}
                    </span>
                    <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="font-display text-lg font-bold text-navy">{w.label}</p>
                    <p className="mt-2 flex-1 text-sm text-slate-600">{w.desc}</p>
                    <p className="mt-4 flex items-start gap-2 border-t border-slate-100 pt-4 text-xs leading-relaxed text-slate-500">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-crimson" />
                      {w.address}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {w.pills.map((p) => (
                        <Pill key={p}>{p}</Pill>
                      ))}
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <BookingSummary />

      {/* amenities */}
      <section className="section">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Library Features"
              title="Facilities built for serious study"
              subtitle="Comfort, security and focus-friendly facilities across our library spaces."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {LIBRARY_FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 0.08}>
                <FeatureCard {...f} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Claim your seat in the calmest study zone in Patna"
        subtitle="Single shift, two shifts and bed shift options are available according to the current A/C price list."
        primary={{ label: 'Book a Seat', to: '/contact' }}
        secondary={{ label: 'See Premium Wing', to: '/library/premium' }}
      />
    </>
  )
}
