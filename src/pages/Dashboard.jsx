import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  CalendarClock,
  Armchair,
  Users,
  BookOpen,
  Bell,
  TrendingUp,
  CheckCircle2,
  Clock,
  Video,
  FileText,
  ArrowUpRight,
  GraduationCap,
} from 'lucide-react'
import { PageHero, Pill } from '../components/ui.jsx'

const TABS = ['Overview', 'Class Schedule', 'Library Seat', 'Consultancy']

const SCHEDULE = [
  { day: 'Mon', subject: 'Trade Technical', time: '7:00 – 8:30 AM', faculty: 'Er. S.K Rajan', mode: 'Offline' },
  { day: 'Tue', subject: 'Quantitative Maths', time: '8:30 – 10:00 AM', faculty: 'Er. RD Yadav', mode: 'Online' },
  { day: 'Wed', subject: 'Reasoning', time: '7:00 – 8:30 AM', faculty: 'Deepak Sir', mode: 'Offline' },
  { day: 'Thu', subject: 'Basic Science', time: '8:30 – 10:00 AM', faculty: 'Er. S.K Rajan', mode: 'Online' },
  { day: 'Fri', subject: 'Mock Test + Analysis', time: '6:00 – 8:00 PM', faculty: 'All Faculty', mode: 'Offline' },
]

const NOTICES = [
  { t: 'Weekly mock test scored 78/100 — up 6%', tag: 'Result', tone: 'green' },
  { t: 'Library seat A-14 booked for tomorrow 6 AM', tag: 'Library', tone: 'brand' },
  { t: 'Consultancy meeting confirmed for Fri 5 PM', tag: 'Meeting', tone: 'amber' },
]

export default function Dashboard() {
  const [tab, setTab] = useState('Overview')
  return (
    <>
      <PageHero
        eyebrow="Student Dashboard"
        title="Your learning, library & career —"
        highlight="one panel"
        subtitle="A centralized view of class schedules, library seat bookings and consultancy meeting statuses. This is a UI mockup of the student portal experience."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Dashboard' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link to="/coaching" className="btn-crimson">
            Go to Coaching
          </Link>
          <Link to="/library" className="btn border border-white/30 bg-white/10 text-white hover:bg-white/20">
            Book a Seat
          </Link>
        </div>
      </PageHero>

      <section className="section">
        <div className="container-page">
          {/* greeting + quick stats */}
          <div className="flex flex-col gap-6 rounded-3xl border border-slate-100 bg-white p-6 shadow-card sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-gradient font-display text-xl font-bold text-white">
                RK
              </span>
              <div>
                <p className="font-display text-lg font-bold text-navy">Welcome back, Rahul 👋</p>
                <p className="text-sm text-slate-500">Railway ALP — Technical Target Batch 2025</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: 'Attendance', value: '92%' },
                { label: 'Avg. Score', value: '78%' },
                { label: 'Rank', value: '#14' },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl bg-softgrey px-4 py-3 text-center">
                  <p className="font-display text-xl font-extrabold text-navy">{s.value}</p>
                  <p className="text-[11px] font-medium text-slate-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* tabs */}
          <div className="mt-8 flex flex-wrap gap-2 rounded-2xl bg-white p-2 shadow-card">
            {TABS.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                  tab === t ? 'bg-slateblue text-white shadow-card' : 'text-slate-600 hover:bg-softgrey'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="mt-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                {tab === 'Overview' && <Overview />}
                {tab === 'Class Schedule' && <Schedule />}
                {tab === 'Library Seat' && <LibrarySeat />}
                {tab === 'Consultancy' && <Consultancy />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  )
}

function Card({ children, className = '' }) {
  return <div className={`card p-6 ${className}`}>{children}</div>
}

function Overview() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="space-y-6 lg:col-span-2">
        <Card>
          <div className="flex items-center justify-between">
            <h3 className="font-display text-lg font-bold text-navy">Today's Plan</h3>
            <Pill tone="green">On track</Pill>
          </div>
          <div className="mt-5 space-y-3">
            {[
              { icon: Video, label: 'Live: Reasoning Puzzles', time: '7:00 AM', done: true },
              { icon: FileText, label: 'Daily Practice Problems (DPP)', time: '11:00 AM', done: true },
              { icon: BookOpen, label: 'Self-study at Library Seat A-14', time: '2:00 PM', done: false },
              { icon: GraduationCap, label: 'Mock Test — Sectional', time: '6:00 PM', done: false },
            ].map((x) => (
              <div key={x.label} className="flex items-center gap-3 rounded-xl bg-softgrey p-3">
                <span className={`flex h-9 w-9 items-center justify-center rounded-lg ${x.done ? 'bg-emerald-100 text-emerald-600' : 'bg-brand-50 text-slateblue'}`}>
                  {x.done ? <CheckCircle2 className="h-5 w-5" /> : <x.icon className="h-5 w-5" />}
                </span>
                <span className="flex-1 text-sm font-semibold text-navy">{x.label}</span>
                <span className="text-xs font-medium text-slate-500">{x.time}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="font-display text-lg font-bold text-navy">Performance trend</h3>
          <div className="mt-6 flex items-end gap-3">
            {[52, 60, 58, 67, 72, 78].map((v, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-2">
                <div className="flex h-40 w-full items-end rounded-lg bg-softgrey">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${v}%` }}
                    transition={{ delay: i * 0.08, duration: 0.6 }}
                    className="w-full rounded-lg bg-gradient-to-t from-slateblue to-crimson"
                  />
                </div>
                <span className="text-[11px] font-medium text-slate-500">T{i + 1}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-emerald-600">
            <TrendingUp className="h-4 w-4" /> +26% improvement over 6 mock tests
          </p>
        </Card>
      </div>

      <div className="space-y-6">
        <Card>
          <h3 className="flex items-center gap-2 font-display text-lg font-bold text-navy">
            <Bell className="h-5 w-5 text-crimson" /> Notifications
          </h3>
          <div className="mt-4 space-y-3">
            {NOTICES.map((n) => (
              <div key={n.t} className="rounded-xl border border-slate-100 p-3">
                <Pill tone={n.tone}>{n.tag}</Pill>
                <p className="mt-2 text-sm text-slate-700">{n.t}</p>
              </div>
            ))}
          </div>
        </Card>
        <QuickLinks />
      </div>
    </div>
  )
}

function QuickLinks() {
  const links = [
    { to: '/coaching/online', label: 'Online Classroom', icon: Video },
    { to: '/library', label: 'Library Booking', icon: Armchair },
    { to: '/consultancy', label: 'Consultancy', icon: Users },
  ]
  return (
    <Card>
      <h3 className="font-display text-lg font-bold text-navy">Quick links</h3>
      <div className="mt-4 space-y-2">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className="flex items-center gap-3 rounded-xl bg-softgrey p-3 text-sm font-semibold text-navy transition hover:bg-brand-50"
          >
            <l.icon className="h-5 w-5 text-slateblue" />
            <span className="flex-1">{l.label}</span>
            <ArrowUpRight className="h-4 w-4 text-slate-400" />
          </Link>
        ))}
      </div>
    </Card>
  )
}

function Schedule() {
  return (
    <Card>
      <div className="flex items-center gap-2">
        <CalendarClock className="h-5 w-5 text-slateblue" />
        <h3 className="font-display text-lg font-bold text-navy">Weekly Class Schedule</h3>
      </div>
      <div className="mt-5 overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="text-xs uppercase tracking-wide text-slate-400">
              <th className="pb-3 font-semibold">Day</th>
              <th className="pb-3 font-semibold">Subject</th>
              <th className="pb-3 font-semibold">Time</th>
              <th className="pb-3 font-semibold">Faculty</th>
              <th className="pb-3 font-semibold">Mode</th>
            </tr>
          </thead>
          <tbody>
            {SCHEDULE.map((s) => (
              <tr key={s.day} className="border-t border-slate-100">
                <td className="py-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy text-xs font-bold text-white">
                    {s.day}
                  </span>
                </td>
                <td className="py-3 font-semibold text-navy">{s.subject}</td>
                <td className="py-3 text-slate-600">{s.time}</td>
                <td className="py-3 text-slate-600">{s.faculty}</td>
                <td className="py-3">
                  <Pill tone={s.mode === 'Online' ? 'brand' : 'crimson'}>{s.mode}</Pill>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}

function LibrarySeat() {
  const booked = ['A-14', 'B-03', 'C-09']
  const seats = Array.from({ length: 24 }, (_, i) => {
    const row = String.fromCharCode(65 + Math.floor(i / 8))
    const num = String((i % 8) + 1).padStart(2, '0')
    return `${row}-${num}`
  })
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <Card className="lg:col-span-2">
        <div className="flex items-center justify-between">
          <h3 className="flex items-center gap-2 font-display text-lg font-bold text-navy">
            <Armchair className="h-5 w-5 text-slateblue" /> Premium Wing — Seat Map
          </h3>
          <div className="flex gap-3 text-xs">
            <Legend color="bg-emerald-500" label="Available" />
            <Legend color="bg-slateblue" label="Yours" />
            <Legend color="bg-slate-300" label="Booked" />
          </div>
        </div>
        <div className="mt-6 grid grid-cols-8 gap-2">
          {seats.map((s) => {
            const yours = s === 'A-14'
            const taken = booked.includes(s) && !yours
            return (
              <div
                key={s}
                className={`flex aspect-square items-center justify-center rounded-lg text-[10px] font-bold ${
                  yours
                    ? 'bg-slateblue text-white'
                    : taken
                      ? 'bg-slate-200 text-slate-400'
                      : 'bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200'
                }`}
              >
                {s}
              </div>
            )
          })}
        </div>
      </Card>
      <Card>
        <h3 className="font-display text-lg font-bold text-navy">Your booking</h3>
        <div className="mt-4 rounded-2xl bg-navy-gradient p-5 text-white">
          <p className="text-xs uppercase tracking-wide text-brand-100">Seat</p>
          <p className="font-display text-3xl font-extrabold">A-14</p>
          <div className="mt-4 space-y-2 text-sm text-brand-100">
            <p className="flex items-center gap-2"><Clock className="h-4 w-4" /> 6:00 AM – 12:00 PM</p>
            <p className="flex items-center gap-2"><CalendarClock className="h-4 w-4" /> Tomorrow</p>
          </div>
        </div>
        <Link to="/library" className="btn-primary mt-4 w-full">
          Manage Bookings
        </Link>
      </Card>
    </div>
  )
}

function Legend({ color, label }) {
  return (
    <span className="flex items-center gap-1.5 text-slate-500">
      <span className={`h-3 w-3 rounded ${color}`} /> {label}
    </span>
  )
}

function Consultancy() {
  const steps = [
    { label: 'Profile Submitted', done: true },
    { label: 'Counselling Done', done: true },
    { label: 'College Shortlisted', done: true },
    { label: 'Application In Progress', done: false, active: true },
    { label: 'Admission Confirmed', done: false },
  ]
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <Card className="lg:col-span-2">
        <h3 className="font-display text-lg font-bold text-navy">Admission Tracking — B.Tech</h3>
        <div className="mt-6 space-y-1">
          {steps.map((s, i) => (
            <div key={s.label} className="flex gap-4">
              <div className="flex flex-col items-center">
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold ${
                    s.done
                      ? 'bg-emerald-500 text-white'
                      : s.active
                        ? 'bg-crimson text-white'
                        : 'bg-slate-200 text-slate-400'
                  }`}
                >
                  {s.done ? <CheckCircle2 className="h-5 w-5" /> : i + 1}
                </span>
                {i < steps.length - 1 && <span className="my-1 h-8 w-0.5 bg-slate-200" />}
              </div>
              <div className="pt-1.5">
                <p className={`text-sm font-semibold ${s.active ? 'text-crimson' : 'text-navy'}`}>
                  {s.label}
                </p>
                {s.active && <p className="text-xs text-slate-500">Our advisor is preparing your documents.</p>}
              </div>
            </div>
          ))}
        </div>
      </Card>
      <Card>
        <h3 className="font-display text-lg font-bold text-navy">Next meeting</h3>
        <div className="mt-4 rounded-2xl border border-slate-100 p-4">
          <Pill tone="amber">Scheduled</Pill>
          <p className="mt-3 font-display text-base font-bold text-navy">Career Counselling</p>
          <p className="mt-1 text-sm text-slate-600">Friday, 5:00 PM · On Campus</p>
          <p className="mt-1 text-sm text-slate-600">Advisor: Admission Cell</p>
        </div>
        <Link to="/consultancy" className="btn-ghost mt-4 w-full">
          View Consultancy
        </Link>
      </Card>
    </div>
  )
}
