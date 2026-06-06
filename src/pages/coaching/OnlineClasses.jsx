import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Play,
  Radio,
  FileText,
  Clock,
  Video,
  Download,
  Wifi,
  MonitorPlay,
  ListChecks,
  ArrowRight,
  Users,
} from 'lucide-react'
import { PageHero, SectionHeading, Reveal, Pill, CTASection } from '../../components/ui.jsx'

const LECTURES = [
  { title: 'Trade Technical — Basics of Electricity', faculty: 'Er. S.K Rajan', dur: '58 min', tag: 'Science' },
  { title: 'Time, Speed & Distance Shortcuts', faculty: 'Er. RD Yadav', dur: '46 min', tag: 'Maths' },
  { title: 'Blood Relations & Coding-Decoding', faculty: 'Deepak Sir', dur: '52 min', tag: 'Reasoning' },
  { title: 'Engineering Drawing Fundamentals', faculty: 'Er. S.K Rajan', dur: '1h 04m', tag: 'Science' },
  { title: 'Profit, Loss & Discount', faculty: 'Er. RD Yadav', dur: '49 min', tag: 'Maths' },
  { title: 'Seating Arrangement Puzzles', faculty: 'Deepak Sir', dur: '55 min', tag: 'Reasoning' },
]

const TESTS = [
  { name: 'ALP CBT-1 Full Mock #08', q: 75, time: '60 min', attempted: false },
  { name: 'Reasoning Sectional #12', q: 35, time: '30 min', attempted: true },
  { name: 'Maths Speed Test #15', q: 30, time: '25 min', attempted: false },
  { name: 'General Science Quiz #20', q: 25, time: '20 min', attempted: true },
]

export default function OnlineClasses() {
  return (
    <>
      <PageHero
        eyebrow="Coaching · Online"
        title="A complete virtual classroom in your"
        highlight="pocket"
        subtitle="Live streaming lectures, an organised recorded library and a full test-series repository — study anywhere, never miss a class."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Coaching', to: '/coaching' }, { label: 'Online Classes' }]}
      />

      {/* live + grid */}
      <section className="section">
        <div className="container-page grid gap-8 lg:grid-cols-3">
          {/* live container */}
          <Reveal className="lg:col-span-2">
            <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-card">
              <div className="relative aspect-video bg-navy-gradient">
                <div className="absolute inset-0 bg-hero-grid [background-size:22px_22px] opacity-30" />
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-crimson px-3 py-1.5 text-xs font-bold text-white">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-white" /> LIVE NOW
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 ring-4 ring-white/30 backdrop-blur"
                  >
                    <Play className="h-9 w-9 fill-white" />
                  </motion.button>
                  <p className="mt-4 font-display text-lg font-bold">Reasoning: Syllogism Masterclass</p>
                  <p className="text-sm text-brand-100">Deepak Sir · 1,240 watching</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 p-5">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Users className="h-4 w-4 text-slateblue" /> 1,240 students online
                </div>
                <div className="flex gap-2">
                  <Pill tone="crimson"><Radio className="h-3.5 w-3.5" /> Live</Pill>
                  <Pill><Wifi className="h-3.5 w-3.5" /> HD Stream</Pill>
                </div>
              </div>
            </div>
          </Reveal>

          {/* upcoming live */}
          <Reveal delay={0.1}>
            <div className="card h-full p-6">
              <h3 className="flex items-center gap-2 font-display text-lg font-bold text-navy">
                <Clock className="h-5 w-5 text-crimson" /> Upcoming Live
              </h3>
              <div className="mt-4 space-y-3">
                {[
                  { t: 'Speed Maths Drill', f: 'Er. RD Yadav', when: 'Today · 6:00 PM' },
                  { t: 'Trade Practical Q&A', f: 'Er. S.K Rajan', when: 'Tomorrow · 7:00 AM' },
                  { t: 'Mock Test Discussion', f: 'All Faculty', when: 'Fri · 8:00 PM' },
                ].map((x) => (
                  <div key={x.t} className="rounded-xl bg-softgrey p-3">
                    <p className="text-sm font-bold text-navy">{x.t}</p>
                    <p className="text-xs text-slate-500">{x.f}</p>
                    <p className="mt-1 text-xs font-semibold text-crimson">{x.when}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* recorded grid */}
      <section className="section bg-softgrey">
        <div className="container-page">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionHeading
                align="left"
                eyebrow="Recorded library"
                title="Watch & revise, anytime"
                subtitle="Every class is recorded and neatly organised by subject and faculty."
              />
              <Pill tone="brand"><MonitorPlay className="h-3.5 w-3.5" /> 420+ lectures</Pill>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {LECTURES.map((l, i) => (
              <Reveal key={l.title} delay={(i % 3) * 0.08}>
                <div className="card group overflow-hidden">
                  <div className="relative flex aspect-video items-center justify-center bg-navy-gradient">
                    <div className="absolute inset-0 bg-hero-grid [background-size:18px_18px] opacity-30" />
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur transition group-hover:scale-110">
                      <Play className="h-6 w-6 fill-white text-white" />
                    </span>
                    <span className="absolute bottom-2 right-2 rounded-md bg-black/60 px-2 py-0.5 text-[11px] font-semibold text-white">
                      {l.dur}
                    </span>
                  </div>
                  <div className="p-4">
                    <Pill tone={l.tag === 'Maths' ? 'brand' : l.tag === 'Reasoning' ? 'amber' : 'crimson'}>
                      {l.tag}
                    </Pill>
                    <p className="mt-2 font-display text-sm font-bold text-navy">{l.title}</p>
                    <p className="mt-1 text-xs text-slate-500">{l.faculty}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* test series */}
      <section className="section">
        <div className="container-page grid gap-8 lg:grid-cols-3">
          <Reveal className="lg:col-span-1">
            <SectionHeading
              align="left"
              eyebrow="Test repository"
              title="Practice that mirrors the real exam"
              subtitle="Attempt sectional and full-length mocks, then review detailed solutions and your rank."
            />
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                { icon: ListChecks, label: '180+ Tests' },
                { icon: FileText, label: 'PDF Solutions' },
                { icon: Download, label: 'Offline Access' },
                { icon: Video, label: 'Video Reviews' },
              ].map((x) => (
                <div key={x.label} className="flex items-center gap-2 rounded-xl bg-softgrey p-3 text-sm font-semibold text-navy">
                  <x.icon className="h-5 w-5 text-slateblue" /> {x.label}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="card divide-y divide-slate-100">
              {TESTS.map((t) => (
                <div key={t.name} className="flex flex-wrap items-center gap-4 p-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-slateblue">
                    <FileText className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-display text-sm font-bold text-navy">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.q} Questions · {t.time}</p>
                  </div>
                  {t.attempted ? (
                    <Pill tone="green">Attempted</Pill>
                  ) : (
                    <button className="btn-crimson !px-4 !py-2 text-xs">Start Test</button>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Bring the classroom home"
        subtitle="Get instant access to live classes, recorded lectures and the full test series with one enrollment."
        primary={{ label: 'Get Online Access', to: '/contact' }}
        secondary={{ label: 'See Offline Batches', to: '/coaching/offline' }}
      />
    </>
  )
}
