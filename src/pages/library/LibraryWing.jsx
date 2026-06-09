import { Link } from 'react-router-dom'
import {
  BookOpen,
  Lightbulb,
  Plug,
  Wallet,
  Clock,
  Volume2,
  Wifi,
  Tablet,
  MonitorPlay,
  FileText,
  Crown,
  Armchair,
  Lock,
  Wind,
  ShieldCheck,
  Coffee,
  Gem,
  Sofa,
  Headphones,
  Sparkles,
  CheckCircle2,
} from 'lucide-react'
import { PageHero, SectionHeading, Reveal, FeatureCard, CTASection } from '../../components/ui.jsx'

const TIERS = {
  toppers: {
    label: 'Toppers Library',
    eyebrow: 'Library · Toppers',
    title: 'Focused, affordable study for every',
    highlight: 'serious aspirant',
    subtitle:
      'Clean desks, bright lighting, charging points and a solid reference-book collection — all the essentials for disciplined preparation at a student-friendly price.',
    badgeIcon: Wallet,
    badge: 'Budget-friendly · Starts at ₹600/month',
    accent: 'from-slateblue to-brand-700',
    features: [
      { icon: BookOpen, title: 'Open Study Desks', desc: 'Spacious, clean desks in a calm, well-organised study hall.', accent: 'slateblue' },
      { icon: Lightbulb, title: 'Bright Eye-Care Lighting', desc: 'Even, glare-free lighting designed for long reading hours.', accent: 'navy' },
      { icon: Plug, title: 'Charging Points', desc: 'Convenient power points to keep your devices running.', accent: 'crimson' },
      { icon: Volume2, title: 'Pin-Drop Silence', desc: 'A strictly maintained quiet zone for deep concentration.', accent: 'slateblue' },
      { icon: Clock, title: 'Long Study Hours', desc: 'Open early to late so you can study on your own schedule.', accent: 'navy' },
      { icon: ShieldCheck, title: 'CCTV Secured', desc: 'Safe, monitored environment with disciplined supervision.', accent: 'crimson' },
    ],
    plans: [
      { name: 'Monthly', price: '₹600', per: '/month', points: ['Open study desk', 'Charging point access', 'Reference book library', 'Wi-Fi access'] },
      { name: 'Quarterly', price: '₹1,600', per: '/3 months', popular: true, points: ['Everything in Monthly', 'Fixed desk preference', 'Slot priority', 'Best value'] },
      { name: 'Half-Yearly', price: '₹2,900', per: '/6 months', points: ['Everything in Quarterly', 'Lowest monthly cost', 'Free study material kit'] },
    ],
    amenities: [
      { icon: Lightbulb, label: 'Eye-care lighting' },
      { icon: Wifi, label: 'Free Wi-Fi' },
      { icon: Clock, label: 'Long hours' },
      { icon: ShieldCheck, label: 'CCTV secured' },
    ],
  },

  digital: {
    label: 'Toppers Digital Library',
    eyebrow: 'Library · Digital',
    title: 'Smart, tech-powered study with',
    highlight: 'everything online',
    subtitle:
      'Tablet access points, a huge e-book collection, online mock-test platforms and high-speed fiber Wi-Fi — the modern way to prepare, all in one digital study zone.',
    badgeIcon: Tablet,
    badge: 'Tablets · e-books · online test platform',
    accent: 'from-cyan-500 to-blue-700',
    features: [
      { icon: Tablet, title: 'Tablet Access Points', desc: 'Dedicated tablets loaded with notes, e-books and test platforms.', accent: 'slateblue' },
      { icon: BookOpen, title: 'Huge E-Book Library', desc: 'Thousands of digital books and standard reference material.', accent: 'navy' },
      { icon: FileText, title: 'Online Mock Tests', desc: 'Full-length and topic-wise tests with instant analysis.', accent: 'crimson' },
      { icon: MonitorPlay, title: 'Recorded Lectures', desc: 'Access curated video lectures and revision content on demand.', accent: 'slateblue' },
      { icon: Wifi, title: 'High-Speed Fiber Wi-Fi', desc: 'Fast, reliable internet for seamless online study and tests.', accent: 'navy' },
      { icon: Headphones, title: 'Audio Study Booths', desc: 'Quiet booths for video lectures and audio revision with headphones.', accent: 'crimson' },
    ],
    plans: [
      { name: 'Monthly', price: '₹900', per: '/month', points: ['Tablet access (shared)', 'E-book library', 'Online test platform', 'Fiber Wi-Fi'] },
      { name: 'Quarterly', price: '₹2,400', per: '/3 months', popular: true, points: ['Everything in Monthly', 'Dedicated tablet slot', 'Recorded lectures', 'Test analytics'] },
      { name: 'Half-Yearly', price: '₹4,400', per: '/6 months', points: ['Everything in Quarterly', 'Best value per month', 'Priority device access'] },
    ],
    amenities: [
      { icon: Tablet, label: 'Tablet points' },
      { icon: Wifi, label: '100 Mbps fiber' },
      { icon: FileText, label: 'Online tests' },
      { icon: MonitorPlay, label: 'Video lectures' },
    ],
  },

  premium: {
    label: 'Toppers Premium Library',
    eyebrow: 'Library · Premium',
    title: 'Executive study, designed like a',
    highlight: 'luxury workspace',
    subtitle:
      'Ergonomic AC cabins, individual power, high-speed fiber Wi-Fi and digital tablet access points — a premium self-study experience for students who want the best.',
    badgeIcon: Crown,
    badge: 'Ergonomic AC cabins · limited seats',
    accent: 'from-crimson to-red-700',
    features: [
      { icon: Armchair, title: 'Ergonomic Cabins', desc: 'Private, cushioned executive cabins with spacious desks.', accent: 'crimson' },
      { icon: Plug, title: 'Individual Plug Points', desc: 'A dedicated power socket at every single cabin.', accent: 'slateblue' },
      { icon: Wifi, title: 'High-Speed Fiber Wi-Fi', desc: 'Blazing-fast internet for online tests and HD lectures.', accent: 'navy' },
      { icon: Tablet, title: 'Digital Tablet Access', desc: 'Tablet points with e-books, notes and test platforms.', accent: 'crimson' },
      { icon: Wind, title: 'Fully Air-Conditioned', desc: 'Climate-controlled halls keep you cool and comfortable.', accent: 'slateblue' },
      { icon: Lock, title: 'Personal Lockers', desc: 'Secure lockers to store your books and belongings.', accent: 'navy' },
    ],
    plans: [
      { name: 'Monthly', price: '₹1,200', per: '/month', points: ['Reserved executive cabin', 'Fiber Wi-Fi + plug point', 'Tablet access (shared)', 'Locker on request'] },
      { name: 'Quarterly', price: '₹3,200', per: '/3 months', popular: true, points: ['Everything in Monthly', 'Fixed personal cabin', 'Dedicated tablet point', 'Free locker', 'Priority booking'] },
      { name: 'Half-Yearly', price: '₹5,800', per: '/6 months', points: ['Everything in Quarterly', 'Best value per month', 'Guest day-passes (2)', 'Refreshment credits'] },
    ],
    amenities: [
      { icon: Wind, label: 'Air-conditioned' },
      { icon: Plug, label: '1:1 power point' },
      { icon: Lock, label: 'Personal lockers' },
      { icon: ShieldCheck, label: 'CCTV secured' },
    ],
  },

  luxury: {
    label: 'Toppers Luxury Library',
    eyebrow: 'Library · Luxury',
    title: 'The most premium study experience in',
    highlight: 'all of Patna',
    subtitle:
      'Private luxury cabins, recliner-grade seating, a refreshment lounge, air purification and dedicated tablets — a five-star environment built for top rankers.',
    badgeIcon: Gem,
    badge: 'Top-tier private cabins · lounge access',
    accent: 'from-amber-500 to-yellow-600',
    features: [
      { icon: Gem, title: 'Private Luxury Cabins', desc: 'Spacious, fully private cabins with a premium finish and feel.', accent: 'crimson' },
      { icon: Sofa, title: 'Recliner-Grade Seating', desc: 'Ultra-comfortable seating engineered for 10+ hour study days.', accent: 'slateblue' },
      { icon: Coffee, title: 'Refreshment Lounge', desc: 'Exclusive lounge with tea, coffee and refreshment access.', accent: 'navy' },
      { icon: Wind, title: 'AC + Air Purifier', desc: 'Climate control with air purification for a fresh study zone.', accent: 'crimson' },
      { icon: Tablet, title: 'Dedicated Tablet', desc: 'Your own tablet point loaded with e-books and test platforms.', accent: 'slateblue' },
      { icon: Sparkles, title: 'Priority Concierge', desc: 'Priority seat booking, support and guest passes for members.', accent: 'navy' },
    ],
    plans: [
      { name: 'Monthly', price: '₹2,000', per: '/month', points: ['Private luxury cabin', 'Recliner seating', 'Lounge + refreshments', 'Dedicated tablet'] },
      { name: 'Quarterly', price: '₹5,400', per: '/3 months', popular: true, points: ['Everything in Monthly', 'Fixed signature cabin', 'Priority concierge', 'Guest passes (4)'] },
      { name: 'Half-Yearly', price: '₹9,800', per: '/6 months', points: ['Everything in Quarterly', 'Best value per month', 'Personal locker + storage'] },
    ],
    amenities: [
      { icon: Coffee, label: 'Refreshment lounge' },
      { icon: Sofa, label: 'Recliner seating' },
      { icon: Wind, label: 'AC + air purifier' },
      { icon: Sparkles, label: 'Priority concierge' },
    ],
  },
}

export default function LibraryWing({ tier }) {
  const t = TIERS[tier]
  const BadgeIcon = t.badgeIcon

  return (
    <>
      <PageHero
        eyebrow={t.eyebrow}
        title={t.title}
        highlight={t.highlight}
        subtitle={t.subtitle}
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Library', to: '/library' }, { label: t.label }]}
      >
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold text-brand-100 ring-1 ring-white/20">
          <BadgeIcon className="h-4 w-4 text-crimson" /> {t.badge}
        </span>
      </PageHero>

      {/* features */}
      <section className="section">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow={t.label}
              title="Everything you need to study at your best"
              subtitle="Every detail is engineered for long, focused and comfortable study sessions."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.features.map((f, i) => (
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
              eyebrow="Membership plans"
              title="Transparent plans for every commitment"
              subtitle="No hidden charges. Longer plans unlock the best value and perks."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {t.plans.map((p, i) => (
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

      {/* amenities strip */}
      <section className="section pb-4 pt-0">
        <div className="container-page">
          <div className="grid grid-cols-2 gap-4 rounded-3xl bg-navy-gradient p-6 text-white sm:grid-cols-4">
            {t.amenities.map((x) => (
              <div key={x.label} className="flex items-center gap-2 text-sm font-medium">
                <x.icon className="h-5 w-5 text-crimson" /> {x.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Reserve your seat in the ${t.label}`}
        subtitle="Seats are limited and fill up fast. Secure yours today and study in the environment you deserve."
        primary={{ label: 'Book a Seat', to: '/contact' }}
        secondary={{ label: 'Explore Library Hub', to: '/library' }}
      />
    </>
  )
}
