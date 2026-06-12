import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  ClipboardCheck,
  ExternalLink,
  MapPin,
  MonitorPlay,
  Navigation,
  Projector,
  ShieldCheck,
  Users,
} from 'lucide-react'
import { PageHero, SectionHeading, Reveal, FeatureCard, CTASection, Pill } from '../../components/ui.jsx'
import {
  COACHING_ADDRESS,
  COACHING_FEATURES,
  OFFLINE_COURSES,
  getFacultyForCourse,
  offlineCoursePath,
} from '../../data/coaching.js'

function initials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function CourseTable() {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-card">
      <div className="overflow-x-auto">
        <table className="min-w-[980px] w-full text-left text-sm">
          <thead className="bg-navy-gradient text-white">
            <tr>
              {['Course', 'Time', 'Duration', 'Fee', 'Offer', 'Faculty', 'Details'].map((head) => (
                <th key={head} className="px-5 py-4 font-display text-xs font-bold uppercase tracking-wider">
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {OFFLINE_COURSES.map((course) => {
              const faculty = getFacultyForCourse(course)
              const facultyName = faculty?.name || course.faculty
              const exp = faculty?.exp || 'Experienced'
              return (
                <tr key={course.course} className="align-top transition hover:bg-softgrey">
                  <td className="px-5 py-4">
                    <p className="font-display font-bold text-navy">{course.course}</p>
                  </td>
                  <td className="px-5 py-4 font-semibold text-slate-600">{course.time}</td>
                  <td className="px-5 py-4 text-slate-600">{course.duration}</td>
                  <td className="px-5 py-4 text-slate-500 line-through">{course.fee}</td>
                  <td className="px-5 py-4 font-display text-base font-extrabold text-crimson">{course.offer}</td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 font-display text-sm font-extrabold text-slateblue">
                        {faculty?.initials || initials(facultyName)}
                      </span>
                      <div>
                        <p className="font-bold text-navy">{facultyName}</p>
                        <p className="text-xs text-slate-500">{exp} experience</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <Link
                      to={offlineCoursePath(course)}
                      className="inline-flex items-center gap-2 rounded-xl bg-crimson px-3 py-2 text-xs font-bold text-white transition hover:bg-red-700"
                    >
                      Course Detail <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default function OfflineCenter() {
  return (
    <>
      <PageHero
        eyebrow="Coaching Classes - Offline"
        title="Offline courses at our"
        highlight="Patna center"
        subtitle="Classroom batches with course timing, duration, fee, offer, faculty detail and map support."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Coaching', to: '/coaching' }, { label: 'Offline Center' }]}
      >
        <div className="flex flex-wrap items-center gap-3 text-sm text-brand-100">
          <span className="flex items-center gap-2"><MapPin className="h-5 w-5 text-crimson" /> {COACHING_ADDRESS.address}</span>
          <a href={COACHING_ADDRESS.mapUrl} target="_blank" rel="noreferrer" className="btn border border-white/30 bg-white/10 text-white hover:bg-white/20">
            <Navigation className="h-4 w-4" /> MAP
          </a>
        </div>
      </PageHero>

      <section className="section">
        <div className="container-page grid gap-8 lg:grid-cols-3">
          <Reveal className="lg:col-span-1">
            <div className="card h-full p-6">
              <h3 className="flex items-center gap-2 font-display text-lg font-bold text-navy">
                <MapPin className="h-5 w-5 text-crimson" /> Address & MAP
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{COACHING_ADDRESS.address}</p>
              <a href={COACHING_ADDRESS.mapUrl} target="_blank" rel="noreferrer" className="btn-primary mt-5">
                Open MAP <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="relative min-h-[280px] overflow-hidden rounded-3xl border border-slate-100 bg-softgrey shadow-card">
              <div className="absolute inset-0 bg-hero-grid [background-size:24px_24px] opacity-60" />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-crimson text-white shadow-premium">
                  <MapPin className="h-8 w-8" />
                </span>
                <p className="mt-4 font-display text-lg font-bold text-navy">{COACHING_ADDRESS.label}</p>
                <p className="mt-1 max-w-md text-sm text-slate-500">{COACHING_ADDRESS.address}</p>
                <a href={COACHING_ADDRESS.mapUrl} target="_blank" rel="noreferrer" className="btn-crimson mt-5">
                  <Navigation className="h-4 w-4" /> Get Directions
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-softgrey">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Offline Courses"
              title="Course, time, duration, fee and offer"
              subtitle="Each course includes course detail, faculty name, profile-style pic and experience."
            />
          </Reveal>
          <div className="mt-12">
            <Reveal>
              <CourseTable />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <Reveal>
            <SectionHeading eyebrow="Features" title="Facilities included with coaching" />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {COACHING_FEATURES.map((feature, i) => (
              <Reveal key={feature} delay={i * 0.08}>
                <FeatureCard
                  icon={i === 0 ? BookOpen : i === 1 ? Users : i === 2 ? ClipboardCheck : MonitorPlay}
                  title={feature}
                  desc="Built to support regular study, revision, doubt clearing and hybrid learning."
                  accent={i % 2 === 0 ? 'slateblue' : 'crimson'}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-softgrey">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Classroom Support"
              title="Offline learning with hybrid backup"
              subtitle="Students get classroom discipline plus online/offline continuity for stronger preparation."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Projector, title: 'Hybrid Class Room', desc: 'Online and offline class support for flexible learning.', accent: 'slateblue' },
              { icon: ShieldCheck, title: 'Special Doubt Facilities', desc: 'Dedicated doubt support to keep every student moving.', accent: 'crimson' },
              { icon: BadgeCheck, title: 'Updated Study Material', desc: 'Course material aligned with current exam patterns.', accent: 'navy' },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <FeatureCard {...item} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="btn-crimson">
              Reserve a Demo Seat <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/coaching/faculty" className="btn-ghost">
              Faculty Profiles
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Experience a free demo class"
        subtitle="Visit the center, check the course table and choose the batch that fits your timing."
        primary={{ label: 'Reserve a Demo Seat', to: '/contact' }}
        secondary={{ label: 'View Online Option', to: '/coaching/online' }}
      />
    </>
  )
}
