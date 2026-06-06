import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  GraduationCap,
  BookOpenCheck,
  Compass,
  ArrowRight,
  Megaphone,
  Star,
  ShieldCheck,
  Clock,
  Users,
  Sparkles,
  Wifi,
  TrendingUp,
  Phone,
  Quote,
} from 'lucide-react'
import { Reveal, SectionHeading, StatCounter, FeatureCard, CTASection, Pill } from '../components/ui.jsx'
import LeadForm from '../components/LeadForm.jsx'
import { BRAND, STATS, NOTIFICATIONS } from '../data/site.js'

const ROUTES = [
  {
    title: 'Coaching Division',
    desc: 'Railway ALP, Technical & Non-Technical target batches from basic to advanced level.',
    icon: GraduationCap,
    to: '/coaching',
    accent: 'from-slateblue to-brand-700',
    points: ['Live + Recorded', 'Test Series', 'Doubt Support'],
  },
  {
    title: 'Premium Library',
    desc: '24/7 peaceful study zone with executive ergonomic cabins and high-speed Wi-Fi.',
    icon: BookOpenCheck,
    to: '/library',
    accent: 'from-crimson to-red-700',
    points: ['24/7 Access', 'Plug Points', 'Seat Booking'],
  },
  {
    title: 'Career Consultancy',
    desc: 'Expert admission guidance for Tech, Management, Law, Medical & Nursing careers.',
    icon: Compass,
    to: '/consultancy',
    accent: 'from-navy to-slateblue',
    points: ['Profile Tracking', 'Top Colleges', 'End-to-end'],
  },
]

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <Routes3 />
      <Stats />
      <WhyUs />
      <Testimonials />
      <LeadSection />
      <CTASection
        title="Right Guidance today, a Bright Future tomorrow"
        subtitle="Join thousands of students from Patna who chose Vidya Educational Services to power their journey."
        primary={{ label: 'Book Free Counselling', to: '/contact' }}
        secondary={{ label: 'Explore Coaching', to: '/coaching' }}
      />
    </>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-gradient text-white">
      <div className="absolute inset-0 bg-hero-grid [background-size:24px_24px] opacity-40" />
      <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-crimson/20 blur-3xl" />
      <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-slateblue/40 blur-3xl" />

      <div className="container-page relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div className="min-w-0">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-100 ring-1 ring-white/20"
          >
            <Sparkles className="h-3.5 w-3.5 text-crimson" /> {BRAND.tagline}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-5 font-display text-[28px] font-extrabold leading-[1.15] break-words sm:text-5xl lg:text-6xl"
          >
            Bihar's Trusted &{' '}
            <span className="relative inline-block whitespace-nowrap text-crimson">
              Affordable
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
              >
                <path
                  d="M2 9C60 3 240 3 298 9"
                  stroke="#DC2626"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>{' '}
            Education Hub in Patna
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-brand-100 sm:text-lg"
          >
            Coaching, a premium 24/7 digital library, and professional career consultancy — one
            integrated ecosystem dedicated to your success. <span className="font-semibold text-white">कमजोर विद्यार्थियों पर विशेष ध्यान।</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link to="/dashboard" className="btn-crimson">
              Get Started <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={`tel:${BRAND.phonesRaw[0]}`} className="btn border border-white/30 bg-white/10 text-white hover:bg-white/20">
              <Phone className="h-4 w-4" /> {BRAND.phones[0]}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-brand-100"
          >
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-crimson" /> 12+ years of trust
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-crimson" /> 24/7 Library
            </span>
            <span className="flex items-center gap-2">
              <Star className="h-5 w-5 text-crimson" /> 96% Success Rate
            </span>
          </motion.div>
        </div>

        {/* hero entry cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative min-w-0"
        >
          <div className="rounded-3xl bg-white/10 p-2 ring-1 ring-white/20 backdrop-blur">
            <div className="rounded-[20px] bg-white p-5 shadow-premium">
              <div className="flex items-center justify-between">
                <p className="font-display text-sm font-bold text-navy">Choose your path</p>
                <Pill tone="crimson">3 Dashboards</Pill>
              </div>
              <div className="mt-4 space-y-3">
                {ROUTES.map((r) => (
                  <Link
                    key={r.to}
                    to={r.to}
                    className="group flex items-center gap-4 rounded-2xl border border-slate-100 bg-softgrey/60 p-4 transition hover:border-slateblue hover:bg-white hover:shadow-card"
                  >
                    <span
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${r.accent} text-white`}
                    >
                      <r.icon className="h-6 w-6" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-display text-sm font-bold text-navy">
                        {r.title}
                      </span>
                      <span className="block truncate text-xs text-slate-500">{r.desc}</span>
                    </span>
                    <ArrowRight className="h-5 w-5 shrink-0 text-slate-300 transition group-hover:translate-x-1 group-hover:text-crimson" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-white p-4 shadow-premium sm:block">
            <p className="font-display text-2xl font-extrabold text-navy">
              8,200<span className="text-crimson">+</span>
            </p>
            <p className="text-xs font-medium text-slate-500">Students mentored</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Ticker() {
  const items = [...NOTIFICATIONS, ...NOTIFICATIONS]
  return (
    <div className="border-y border-slate-200 bg-white">
      <div className="container-page flex items-center gap-4 py-3">
        <span className="flex shrink-0 items-center gap-2 rounded-full bg-crimson px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
          <Megaphone className="h-3.5 w-3.5" /> Notice
        </span>
        <div className="relative flex-1 overflow-hidden">
          <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
            {items.map((n, i) => (
              <span key={i} className="flex items-center gap-2 text-sm font-medium text-slate-600">
                <span className="h-1.5 w-1.5 rounded-full bg-crimson" /> {n}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function Routes3() {
  return (
    <section className="section">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Three pillars, one campus"
            title="Everything a serious aspirant needs"
            subtitle="From classroom to library to career placement — explore the division that fits where you are right now."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {ROUTES.map((r, i) => (
            <Reveal delay={i * 0.1} key={r.to}>
              <div className="card group flex h-full flex-col overflow-hidden">
                <div className={`bg-gradient-to-br ${r.accent} p-6 text-white`}>
                  <r.icon className="h-9 w-9" />
                  <h3 className="mt-4 font-display text-xl font-bold">{r.title}</h3>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-sm leading-relaxed text-slate-600">{r.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {r.points.map((p) => (
                      <Pill key={p}>{p}</Pill>
                    ))}
                  </div>
                  <Link
                    to={r.to}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-slateblue transition group-hover:gap-3 group-hover:text-crimson"
                  >
                    Enter dashboard <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Stats() {
  return (
    <section className="relative overflow-hidden bg-navy-gradient py-16 text-white">
      <div className="absolute inset-0 bg-hero-grid [background-size:22px_22px] opacity-30" />
      <div className="container-page relative grid grid-cols-2 gap-8 lg:grid-cols-4">
        {STATS.map((s) => (
          <StatCounter key={s.label} {...s} light />
        ))}
      </div>
    </section>
  )
}

function WhyUs() {
  const feats = [
    { icon: Users, title: 'Special Care for Weak Students', desc: 'Director Mr. Chandan Kumar personally ensures कमजोर विद्यार्थी get extra mentoring and remedial classes.', accent: 'crimson' },
    { icon: Wifi, title: 'High-Speed Digital Library', desc: 'Fiber Wi-Fi, individual plug points and tablet access points across premium and simple wings.', accent: 'slateblue' },
    { icon: TrendingUp, title: 'Result-Driven Coaching', desc: 'Structured batches scaling from basics to advanced for Railway ALP & Technical exams.', accent: 'navy' },
    { icon: Compass, title: 'End-to-End Consultancy', desc: 'From profile evaluation to final admission across Tech, Management, Law & Medical.', accent: 'slateblue' },
    { icon: Clock, title: '24/7 Study Environment', desc: 'A disciplined, peaceful and CCTV-monitored zone open round the clock, every day.', accent: 'crimson' },
    { icon: ShieldCheck, title: 'Trusted & Affordable', desc: 'Premium facilities at the most student-friendly fees in Patna — value without compromise.', accent: 'navy' },
  ]
  return (
    <section className="section bg-softgrey">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Why Vidya"
            title="Built around the student, not the syllabus"
            subtitle="A rare combination of disciplined coaching, premium infrastructure and genuine personal care."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {feats.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.08}>
              <FeatureCard {...f} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const data = [
    { name: 'Amit Raj', tag: 'Railway ALP, Selected', text: 'The technical faculty and daily test series gave me real exam confidence. The 24/7 library was my second home.' },
    { name: 'Priya Sharma', tag: 'B.Tech Admission', text: 'Their consultancy team mapped my whole roadmap and got me into a top engineering college. Truly right guidance.' },
    { name: 'Sonu Kumar', tag: 'Non-Technical Batch', text: 'Deepak Sir’s reasoning tricks and motivation completely changed my preparation. Affordable and world-class.' },
  ]
  return (
    <section className="section">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Student voices"
            title="Stories of right guidance"
            subtitle="Real results from students who trusted Vidya Educational Services with their future."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {data.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div className="card flex h-full flex-col p-6">
                <Quote className="h-8 w-8 text-crimson/30" />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">“{t.text}”</p>
                <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 font-display font-bold text-slateblue">
                    {t.name[0]}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-navy">{t.name}</p>
                    <p className="text-xs text-crimson">{t.tag}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function LeadSection() {
  return (
    <section className="section bg-softgrey">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow="Free consultation"
            title="Talk to a counsellor today"
            subtitle="Share your details and our team will call you back with personalised guidance on coaching, library plans or admissions."
          />
          <ul className="mt-8 space-y-4">
            {[
              { icon: Phone, label: 'Instant call back from our team' },
              { icon: Users, label: 'One-on-one career counselling' },
              { icon: ShieldCheck, label: 'No spam — your details stay private' },
            ].map((x) => (
              <li key={x.label} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-slateblue shadow-card">
                  <x.icon className="h-5 w-5" />
                </span>
                {x.label}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="card p-6 sm:p-8">
            <h3 className="font-display text-lg font-bold text-navy">Request a free call back</h3>
            <p className="mt-1 text-sm text-slate-500">We usually respond within a few hours.</p>
            <div className="mt-6">
              <LeadForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
