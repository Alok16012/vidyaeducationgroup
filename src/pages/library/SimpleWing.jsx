import { Link } from 'react-router-dom'
import {
  BookMarked,
  Lightbulb,
  Plug,
  BookOpen,
  Wallet,
  Clock,
  Volume2,
  CheckCircle2,
  Library,
  ArrowRight,
} from 'lucide-react'
import { PageHero, SectionHeading, Reveal, FeatureCard, CTASection, Pill } from '../../components/ui.jsx'

const BOOKS = [
  { cat: 'Railway / SSC', items: ['Lucent GK', 'RS Aggarwal Maths', 'Kiran Reasoning', 'Previous Year Papers'] },
  { cat: 'General Science', items: ['NCERT 6–12', 'Trade Technical Guides', 'Engineering Drawing', 'Physics Wallah Notes'] },
  { cat: 'Current Affairs', items: ['Monthly Magazines', 'Daily Newspapers', 'Yearbook', 'GK Digest'] },
  { cat: 'Reference', items: ['Oxford Dictionary', 'Grammar Guides', 'Map Atlas', 'Formula Handbooks'] },
]

const PLANS = [
  { name: 'Monthly', price: '₹600', per: '/month', points: ['Open study desk', 'Charging point access', 'Reference book library', 'Wi-Fi access'] },
  { name: 'Quarterly', price: '₹1,600', per: '/3 months', popular: true, points: ['Everything in Monthly', 'Fixed desk preference', 'Slot priority', 'Best value'] },
  { name: 'Half-Yearly', price: '₹2,900', per: '/6 months', points: ['Everything in Quarterly', 'Lowest monthly cost', 'Free study material kit'] },
]

export default function SimpleWing() {
  return (
    <>
      <PageHero
        eyebrow="Library · Simple"
        title="Focused, affordable study for every"
        highlight="serious aspirant"
        subtitle="Clean desks, bright lighting, charging points and a solid reference-book collection — all the essentials for disciplined preparation, minus the premium price."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Library', to: '/library' }, { label: 'Simple Wing' }]}
      >
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold text-brand-100 ring-1 ring-white/20">
          <Wallet className="h-4 w-4 text-crimson" /> Budget-friendly · Starts at ₹600/month
        </span>
      </PageHero>

      {/* features */}
      <section className="section">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="The essentials, done right"
              title="Everything you need to focus"
              subtitle="No frills, no distractions — just a clean, well-lit, quiet space built purely for study."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: BookMarked, title: 'Neat Study Desks', desc: 'Spacious, sturdy desks arranged for comfortable solo study.', accent: 'slateblue' },
              { icon: Lightbulb, title: 'Bright, Even Lighting', desc: 'Eye-friendly lighting setup that prevents strain on long days.', accent: 'crimson' },
              { icon: Plug, title: 'Charging Points', desc: 'Conveniently placed charging points to keep devices powered.', accent: 'navy' },
              { icon: BookOpen, title: 'Reference Inventory', desc: 'A growing collection of standard exam books and guides.', accent: 'slateblue' },
              { icon: Volume2, title: 'Quiet Atmosphere', desc: 'A calm, silent zone that respects everyone’s concentration.', accent: 'crimson' },
              { icon: Clock, title: 'Long Study Hours', desc: 'Generous opening hours so you can study at your own pace.', accent: 'navy' },
            ].map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 0.08}>
                <FeatureCard {...f} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* book inventory */}
      <section className="section bg-softgrey">
        <div className="container-page">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionHeading
                align="left"
                eyebrow="Reference library"
                title="Books available on the shelves"
                subtitle="Browse our reference-book inventory, free for all members to use within the wing."
              />
              <Pill tone="brand"><Library className="h-3.5 w-3.5" /> 1,500+ titles</Pill>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BOOKS.map((b, i) => (
              <Reveal key={b.cat} delay={i * 0.08}>
                <div className="card h-full p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-slateblue">
                    <BookOpen className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-navy">{b.cat}</h3>
                  <ul className="mt-3 space-y-2">
                    {b.items.map((it) => (
                      <li key={it} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500" /> {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* plans */}
      <section className="section">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Affordable plans"
              title="Simple plans, honest prices"
              subtitle="Quality study space that fits any student’s budget."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PLANS.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.1}>
                <div className={`card relative flex h-full flex-col p-6 ${p.popular ? 'ring-2 ring-slateblue' : ''}`}>
                  {p.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-slateblue px-4 py-1 text-xs font-bold text-white">
                      Best Value
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
                  <Link to="/contact" className={`mt-6 ${p.popular ? 'btn-primary' : 'btn-ghost'} w-full`}>
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

      <CTASection
        title="Start studying smart, without overspending"
        subtitle="Join the simple wing today, or upgrade to premium anytime as your needs grow."
        primary={{ label: 'Book a Desk', to: '/contact' }}
        secondary={{ label: 'Explore Premium Wing', to: '/library/premium' }}
      />
    </>
  )
}
