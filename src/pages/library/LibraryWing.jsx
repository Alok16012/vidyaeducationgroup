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
  Info,
  MapPin,
  Navigation,
} from 'lucide-react'
import { PageHero, SectionHeading, Reveal, FeatureCard, CTASection } from '../../components/ui.jsx'
import { LIBRARY_ADDRESSES } from '../../data/site.js'
import { LIBRARY_FEATURES } from '../../data/libraryFeatures.js'
import BookingSummary from './BookingSummary.jsx'

const PRICE_TABLES = {
  toppers: {
    rows: [
      { shift: 'Flexible Shift', time: '9 AM to 2 PM / 10 AM to 3 PM', oneMonth: '₹350' },
      { shift: 'Morning', time: '6 AM to 12 PM', oneMonth: '₹250' },
      { shift: 'Afternoon', time: '12 PM to 5 PM', oneMonth: '₹350' },
      { shift: 'Evening', time: '5 PM to 10 PM', oneMonth: '₹300' },
      { shift: 'Flexible Shift', time: '2 PM to 7 PM / 3 PM to 10 PM', oneMonth: '₹400' },
      { shift: 'Two Shift', time: '6 AM to 5 PM', oneMonth: '₹550' },
      { shift: 'Two Shift', time: '6 AM to 12 PM & 5 PM to 10 PM', oneMonth: '₹500' },
      { shift: 'Two Shift', time: '12 PM to 10 PM', oneMonth: '₹600' },
      { shift: 'All Shift', time: '6 AM to 10 PM', oneMonth: '₹750' },
    ],
    addOns: [{ name: 'Locker', oneMonth: '₹50' }],
  },
  digital: {
    rows: [
      { shift: 'Morning', time: '6 AM to 12 PM', oneMonth: '₹250', threeMonths: '₹650' },
      { shift: 'Afternoon', time: '12 PM to 5 PM', oneMonth: '₹400', threeMonths: '₹1,050' },
      { shift: 'Evening', time: '5 PM to 10 PM', oneMonth: '₹350', threeMonths: '₹900' },
      { shift: 'Night', time: '10 PM to 6 AM', oneMonth: '₹350', threeMonths: '₹750' },
      { shift: 'Two Shift', time: '6 AM to 5 PM', oneMonth: '₹600', threeMonths: '₹1,750' },
      { shift: 'Two Shift', time: '12 PM to 10 PM', oneMonth: '₹700', threeMonths: '₹1,950' },
      { shift: 'Two Shift', time: '6 AM to 12 PM & 5 PM to 10 PM', oneMonth: '₹550', threeMonths: '₹1,500' },
      { shift: 'All Shift', time: '6 AM to 10 PM · Reserved for any three shifts', oneMonth: '₹850', threeMonths: '₹2,400' },
      { shift: 'All Shift', time: '6 AM to 10 PM · Unreserved for any three shifts', oneMonth: '₹750', threeMonths: '₹2,100' },
      { shift: 'All Shift', time: 'Reserved for 24 hours', oneMonth: '₹900', threeMonths: '₹2,550' },
    ],
    addOns: [{ name: 'Locker', oneMonth: '₹50', threeMonths: '₹120' }],
    bedCharges: [
      { time: '6 AM to 2 PM', fee: '₹400' },
      { time: '2 PM to 10 PM', fee: '₹400' },
      { time: '6 AM to 8 PM', fee: '₹700' },
      { time: '8 PM to 6 AM', fee: '₹700' },
      { time: '24 Hours', fee: '₹1,200' },
    ],
  },
  premium: {
    rows: [
      { shift: 'Morning', time: '6 AM to 12 PM', oneMonth: '₹300', threeMonths: '₹750' },
      { shift: 'Afternoon', time: '12 PM to 5 PM', oneMonth: '₹400', threeMonths: '₹1,050' },
      { shift: 'Evening', time: '5 PM to 10 PM', oneMonth: '₹350', threeMonths: '₹900' },
      { shift: 'Night (AC)', time: '10 PM to 6 AM', oneMonth: '₹350', threeMonths: '₹750' },
      { shift: 'Two Shift', time: '6 AM to 5 PM', oneMonth: '₹600', threeMonths: '₹1,600' },
      { shift: 'Two Shift', time: '12 PM to 10 PM', oneMonth: '₹700', threeMonths: '₹2,000' },
      { shift: 'Two Shift', time: '6 AM to 12 PM & 5 PM to 10 PM', oneMonth: '₹550', threeMonths: '₹1,500' },
      { shift: 'All Shift', time: '6 AM to 10 PM · Reserved for any three shifts', oneMonth: '₹900', threeMonths: '₹2,500' },
      { shift: 'All Shift', time: '6 AM to 10 PM · Unreserved for any three shifts', oneMonth: '₹800', threeMonths: '₹2,200' },
      { shift: 'All Shift', time: 'Reserved for 24 hours', oneMonth: '₹950', threeMonths: '₹2,600' },
    ],
    addOns: [{ name: 'Locker', oneMonth: '₹50', threeMonths: '₹120' }],
  },
  luxury: {
    rows: [
      { shift: 'Morning', time: '6 AM to 12 PM', oneMonth: '₹300', threeMonths: '₹750' },
      { shift: 'Afternoon', time: '12 PM to 5 PM', oneMonth: '₹450', threeMonths: '₹1,200' },
      { shift: 'Evening', time: '5 PM to 10 PM', oneMonth: '₹400', threeMonths: '₹1,050' },
      { shift: 'Night (AC)', time: '10 PM to 6 AM', oneMonth: '₹300', threeMonths: '₹750' },
      { shift: 'Two Shift', time: '6 AM to 5 PM', oneMonth: '₹700', threeMonths: '₹1,950' },
      { shift: 'Two Shift', time: '12 PM to 10 PM', oneMonth: '₹800', threeMonths: '₹2,250' },
      { shift: 'Two Shift', time: '6 AM to 12 PM & 5 PM to 10 PM', oneMonth: '₹650', threeMonths: '₹1,800' },
      { shift: 'All Shift', time: '6 AM to 10 PM · Reserved for any three shifts', oneMonth: '₹950', threeMonths: '₹2,700' },
      { shift: 'All Shift', time: '6 AM to 10 PM · Unreserved for any three shifts', oneMonth: '₹850', threeMonths: '₹2,400' },
      { shift: 'All Shift', time: 'Reserved for 24 hours', oneMonth: '₹1,000', threeMonths: '₹2,850' },
    ],
    addOns: [{ name: 'Locker', oneMonth: '₹50', threeMonths: '₹120' }],
  },
}

const TIERS = {
  toppers: {
    label: "Topper's Library",
    eyebrow: "Library · Topper's",
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
    label: "Topper's Digital Library",
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
    label: "Topper's Premium Library",
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
    label: "Topper's Luxury Library",
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
  const libraryInfo = LIBRARY_ADDRESSES.find((item) => item.key === tier)
  const libraryLabel = libraryInfo?.label || t.label
  const BadgeIcon = t.badgeIcon
  const priceTable = PRICE_TABLES[tier]

  return (
    <>
      <PageHero
        eyebrow={t.eyebrow}
        title={t.title}
        highlight={t.highlight}
        subtitle={t.subtitle}
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Library', to: '/library' }, { label: libraryLabel }]}
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

      <BookingSummary selectedKey={tier} />

      {/* plans */}
      <section className="section bg-softgrey">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Price List"
              title={`${libraryLabel} time table & price`}
              subtitle="Branch-wise shift timing and offer price. One-month and three-month rates are shown where available."
            />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-12 overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-card">
              <div className={`bg-gradient-to-r ${t.accent} px-5 py-4 text-white`}>
                <p className="font-display text-lg font-bold">{libraryLabel}</p>
                <p className="mt-1 text-xs font-semibold text-white/80">Offer price by shift timing</p>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-[720px] w-full text-left text-sm">
                  <thead className="bg-softgrey text-xs uppercase tracking-wider text-slate-500">
                    <tr>
                      <th className="px-5 py-3 font-extrabold">Shift</th>
                      <th className="px-5 py-3 font-extrabold">Time</th>
                      <th className="px-5 py-3 font-extrabold">Fee 1 Month</th>
                      <th className="px-5 py-3 font-extrabold">Fee 3 Months</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {priceTable.rows.map((row) => (
                      <tr key={`${row.shift}-${row.time}`} className="align-top">
                        <td className="px-5 py-4 font-display font-bold text-navy">{row.shift}</td>
                        <td className="px-5 py-4 text-slate-600">{row.time}</td>
                        <td className="px-5 py-4 font-extrabold text-crimson">{row.oneMonth}</td>
                        <td className="px-5 py-4 font-extrabold text-slateblue">{row.threeMonths || '-'}</td>
                      </tr>
                    ))}
                    {priceTable.addOns?.map((item) => (
                      <tr key={item.name} className="bg-slate-50 align-top">
                        <td className="px-5 py-4 font-display font-bold text-navy">{item.name}</td>
                        <td className="px-5 py-4 text-slate-600">Add-on facility</td>
                        <td className="px-5 py-4 font-extrabold text-crimson">{item.oneMonth}</td>
                        <td className="px-5 py-4 font-extrabold text-slateblue">{item.threeMonths || '-'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>

          {priceTable.bedCharges && (
            <Reveal delay={0.12}>
              <div className="mt-6 rounded-3xl border border-slate-100 bg-white p-5 shadow-card">
                <h3 className="font-display text-lg font-bold text-navy">Bed Charge</h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                  {priceTable.bedCharges.map((item) => (
                    <div key={item.time} className="rounded-2xl bg-softgrey p-4">
                      <p className="text-xs font-bold uppercase text-slate-500">{item.time}</p>
                      <p className="mt-2 font-display text-2xl font-extrabold text-crimson">{item.fee}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          )}

          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-800">
            <p className="flex items-start gap-2">
              <Info className="mt-0.5 h-4 w-4 shrink-0" />
              <span>Note: 1 & 2 shifts me seat reserve nahi hota hai. Please contact the office for the latest A/C price list before confirming payment.</span>
            </p>
          </div>
        </div>
      </section>

      {/* address */}
      <section className="section pb-4 pt-0">
        <div className="container-page">
          <Reveal>
            <div className="flex flex-col gap-5 rounded-3xl border border-slate-100 bg-white p-6 shadow-card sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-crimson/10 text-crimson">
                  <MapPin className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-display text-lg font-bold text-navy">{libraryLabel} Address</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{libraryInfo?.address}</p>
                </div>
              </div>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(libraryInfo?.address || libraryLabel)}`}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost shrink-0"
              >
                <Navigation className="h-4 w-4" /> Get Directions
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* amenities strip */}
      <section className="section pb-4 pt-0">
        <div className="container-page">
          <div className="grid grid-cols-2 gap-4 rounded-3xl bg-navy-gradient p-6 text-white sm:grid-cols-4">
            {LIBRARY_FEATURES.slice(0, 4).map((x) => (
              <div key={x.title} className="flex items-center gap-2 text-sm font-medium">
                <x.icon className="h-5 w-5 text-crimson" /> {x.title}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Book your shift in the ${libraryLabel}`}
        subtitle="Single and two-shift plans do not include reserved seating. Contact the office for current availability and confirmation."
        primary={{ label: 'Book a Seat', to: '/contact' }}
        secondary={{ label: 'Explore Library Hub', to: '/library' }}
      />
    </>
  )
}
