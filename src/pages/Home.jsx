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
  Phone,
  Quote,
  Utensils,
} from 'lucide-react'
import { Reveal, SectionHeading, StatCounter, CTASection, Pill } from '../components/ui.jsx'
import LeadForm from '../components/LeadForm.jsx'
import { BRAND, STATS } from '../data/site.js'

const ROUTES = [
  {
    title: 'Premium Library',
    desc: '24/7 peaceful study zone with executive ergonomic cabins and high-speed Wi-Fi.',
    icon: BookOpenCheck,
    to: '/library',
    accent: 'from-crimson to-red-700',
    points: ['24/7 Access', 'Plug Points', 'Seat Booking'],
  },
  {
    title: 'Coaching Centres',
    desc: 'Online and offline coaching for foundation, target batches and test series.',
    icon: GraduationCap,
    to: '/coaching',
    accent: 'from-slateblue to-brand-700',
    points: ['Online App', 'Offline Centre', 'Test Series'],
  },
  {
    title: 'Tiffin Services',
    desc: 'Healthy & tasty home-style tiffin (mess) delivered fresh to your library cabin or hostel.',
    icon: Utensils,
    to: '/tiffin',
    accent: 'from-emerald-500 to-emerald-700',
    points: ['Pure Veg', 'Fresh Daily', 'Free Delivery'],
  },
  {
    title: 'Consultancy',
    desc: 'Expert counselling and admission guidance for Tech, Management, Law, Medical & Nursing careers.',
    icon: Compass,
    to: '/consultancy',
    accent: 'from-navy to-slateblue',
    points: ['Profile Tracking', 'Top Colleges', 'End-to-end'],
  },
]

const SERVICE_NOTICES = [
  {
    service: 'Coaching',
    badge: 'New Batch',
    to: '/coaching/offline',
    tone: 'crimson',
    title: 'New Foundation Batch starts 2 July 2026',
    details: 'SSC · Banking · Railway · BPSC · Bihar Daroga | Maths · General Science · Current Affairs · G.K. / G.S.',
  },
  {
    service: 'Library',
    badge: 'Offer',
    to: '/library',
    tone: 'slateblue',
    title: '₹50 Discount on Any Shift',
    details: 'Choose your preferred library and study shift. Limited-period admission offer.',
  },
  {
    service: 'Tiffin Services',
    badge: 'Meal Offer',
    to: '/tiffin',
    tone: 'emerald',
    title: 'Monthly Plan with Free Delivery',
    details: 'Choose your dishes · Fresh home-style meals · Veg ₹2,200 · Non-Veg ₹2,400',
  },
  {
    service: 'Consultancy',
    badge: 'Admission Open',
    to: '/consultancy',
    tone: 'navy',
    title: 'Notice 2026–2027',
    details: 'Nursing · Paramedical · B.Ed. · Management · Engineering · B.Sc. · B.Pharma Courses',
  },
]

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <Routes3 />
      <Stats />
      <Testimonials />
      <LeadSection />
      <CTASection
        title="Coaching, Library, Tiffin and Career Support in One Place"
        subtitle="A complete support system for students in Patna, from focused study and expert teaching to healthy meals and admission guidance."
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

          <motion.figure
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-5 overflow-hidden rounded-3xl border border-white/20 bg-white/10 shadow-premium"
          >
            <img
              src="/images/student-services-hero.png"
              alt="Students using Vidya's coaching, library, tiffin and consultancy services"
              className="aspect-[8/5] w-full object-cover"
            />
          </motion.figure>

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
              <ShieldCheck className="h-5 w-5 text-crimson" /> 10+ years of trust
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-crimson" /> 24/7 Library
            </span>
            <span className="flex items-center gap-2">
              <Star className="h-5 w-5 text-crimson" /> 85% Success Rate
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
          <div className="service-path-panel rounded-3xl bg-white/10 p-2 ring-1 ring-white/20 backdrop-blur">
            <div className="rounded-[20px] bg-white p-5 shadow-premium">
              <div className="flex items-center justify-between">
                <p className="flex items-center gap-2 font-display text-sm font-bold text-navy">
                  <span className="service-path-dot h-2.5 w-2.5 rounded-full bg-crimson" />
                  Choose your path
                </p>
                <span className="service-count rounded-full bg-crimson/10 px-3 py-1 text-xs font-bold text-crimson">
                  4 Services
                </span>
              </div>
              <div className="mt-4 space-y-3">
                {ROUTES.map((r, index) => (
                  <Link
                    key={r.to}
                    to={r.to}
                    style={{ '--service-delay': `${index * 1.4}s` }}
                    className="service-path-card group flex items-center gap-4 rounded-2xl border border-slate-100 bg-softgrey/60 p-4 transition hover:-translate-y-1 hover:border-slateblue hover:bg-white hover:shadow-card"
                  >
                    <span
                      className={`service-path-icon flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${r.accent} text-white`}
                    >
                      <r.icon className="h-6 w-6" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-display text-sm font-bold text-navy">
                        {r.title}
                      </span>
                      <span className="block truncate text-xs text-slate-500">{r.desc}</span>
                    </span>
                    <span className="service-path-arrow flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-slate-300 shadow-sm transition group-hover:bg-crimson group-hover:text-white">
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-white p-4 shadow-premium sm:block">
            <p className="font-display text-2xl font-extrabold text-navy">
              8 Lakh<span className="text-crimson">+</span>
            </p>
            <p className="text-xs font-medium text-slate-500">Students mentored</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Ticker() {
  const tones = {
    crimson: 'border-crimson/20 bg-crimson/5 text-crimson',
    slateblue: 'border-slateblue/20 bg-brand-50 text-slateblue',
    emerald: 'border-emerald-200 bg-emerald-50 text-emerald-700',
    navy: 'border-navy/20 bg-slate-100 text-navy',
  }
  const badges = {
    crimson: 'bg-crimson',
    slateblue: 'bg-slateblue',
    emerald: 'bg-emerald-600',
    navy: 'bg-navy',
  }

  return (
    <section className="border-y border-slate-200 bg-white py-5" aria-label="Latest notices and offers">
      <div className="container-page">
        <div className="mb-4 flex items-center gap-2">
          <Megaphone className="h-5 w-5 text-crimson" />
          <h2 className="font-display text-sm font-extrabold uppercase text-navy">
            Latest Notices & Offers
          </h2>
        </div>

        <div className="space-y-3">
          {SERVICE_NOTICES.map((notice) => (
            <div
              key={notice.service}
              className={`grid min-h-[76px] grid-cols-[118px_minmax(0,1fr)] overflow-hidden rounded-xl border sm:grid-cols-[190px_minmax(0,1fr)] ${tones[notice.tone]}`}
            >
              <Link
                to={notice.to}
                className="relative z-10 flex flex-col justify-center border-r border-current/15 bg-inherit px-3 sm:px-4"
              >
                <span className="text-xs font-extrabold uppercase sm:text-sm">{notice.service}</span>
                <span className={`notice-blink mt-1 w-fit rounded-full px-2 py-0.5 text-[9px] font-extrabold uppercase text-white sm:text-[10px] ${badges[notice.tone]}`}>
                  {notice.badge}
                </span>
              </Link>

              <div className="notice-marquee flex min-w-0 items-center overflow-hidden">
                <div className="notice-marquee-track flex w-max items-center">
                  {[0, 1].map((copy) => (
                    <Link
                      key={copy}
                      to={notice.to}
                      className="flex shrink-0 items-center gap-4 whitespace-nowrap px-6"
                      aria-hidden={copy === 1}
                    >
                      <span className="text-sm font-extrabold text-navy">{notice.title}</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-current" />
                      <span className="text-xs font-medium text-slate-600 sm:text-sm">{notice.details}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Routes3() {
  return (
    <section className="section hidden md:block">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Four pillars, one campus"
            title="Everything a serious aspirant needs"
            subtitle="From classroom to library to career placement and healthy daily meals — explore the division that fits where you are right now."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

function Testimonials() {
  const data = [
    { name: 'Amit Raj', tag: 'Railway ALP, Selected', text: 'The technical faculty and daily test series gave me real exam confidence. The 24/7 library was my second home.' },
    { name: 'Priya Sharma', tag: 'B.Tech Admission', text: 'Their consultancy team mapped my whole roadmap and got me into a top engineering college. Truly right guidance.' },
    { name: 'Sonu Kumar', tag: 'Non-Technical Batch', text: 'Deepak Sir’s reasoning tricks and motivation completely changed my preparation. Affordable and world-class.' },
    { name: 'Neha Kumari', tag: 'SSC Foundation', text: 'The structured classes and regular practice sets helped me improve my speed and accuracy every week.' },
    { name: 'Rahul Kumar', tag: 'Premium Library', text: 'The peaceful environment, personal locker and 24/7 access made it much easier to maintain a serious study routine.' },
    { name: 'Anjali Singh', tag: 'Banking Foundation', text: 'Faculty members explain every topic patiently, and the doubt support keeps the preparation clear and focused.' },
    { name: 'Rohit Raj', tag: 'Bihar Daroga Batch', text: 'The syllabus plan, mock tests and consistent guidance gave my preparation the direction it was missing.' },
    { name: 'Sakshi Verma', tag: 'Career Consultancy', text: 'I received clear information about courses, colleges and admission options without any confusion or pressure.' },
    { name: 'Aditya Anand', tag: 'Digital Library', text: 'Fast Wi-Fi, comfortable seating and a disciplined atmosphere make this a dependable place for long study hours.' },
    { name: 'Pooja Kumari', tag: 'Online Course', text: 'Recorded lessons and test practice let me study around my schedule while still staying connected with the faculty.' },
  ]

  const ReviewCard = ({ review }) => (
    <blockquote className="card flex min-h-[260px] w-[300px] shrink-0 flex-col p-6 sm:w-[350px]">
      <Quote className="h-8 w-8 text-crimson/30" />
      <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">“{review.text}”</p>
      <footer className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-5">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-50 font-display font-bold text-slateblue">
          {review.name[0]}
        </span>
        <div>
          <p className="text-sm font-bold text-navy">{review.name}</p>
          <p className="text-xs text-crimson">{review.tag}</p>
        </div>
      </footer>
    </blockquote>
  )

  return (
    <section className="section overflow-hidden">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Student voices"
            title="Stories of right guidance"
            subtitle="Real results from students who trusted Vidya Education Group with their future."
          />
        </Reveal>
      </div>

      <div className="review-marquee mt-12">
        <div className="review-marquee-track flex w-max">
          <div className="flex gap-6 pr-6">
            {data.map((review) => <ReviewCard key={review.name} review={review} />)}
          </div>
          <div className="flex gap-6 pr-6" aria-hidden="true">
            {data.map((review) => <ReviewCard key={`duplicate-${review.name}`} review={review} />)}
          </div>
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
              { icon: Clock, label: 'Free consultation timing: 8:00 AM – 8:00 PM (all days)' },
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
