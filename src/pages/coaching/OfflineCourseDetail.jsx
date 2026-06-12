import { Link, useParams } from 'react-router-dom'
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Clock,
  IndianRupee,
  MapPin,
  UserRound,
} from 'lucide-react'
import { PageHero, SectionHeading, Reveal, CTASection, Pill, FeatureCard } from '../../components/ui.jsx'
import {
  COACHING_ADDRESS,
  COACHING_FEATURES,
  getFacultyForCourse,
  getOfflineCourseBySlug,
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

export default function OfflineCourseDetail() {
  const { slug } = useParams()
  const course = getOfflineCourseBySlug(slug)

  if (!course) {
    return (
      <section className="section">
        <div className="container-page text-center">
          <p className="font-display text-3xl font-bold text-navy">Course not found</p>
          <p className="mx-auto mt-3 max-w-md text-sm text-slate-600">
            This offline course may have moved. Please check the latest offline course list.
          </p>
          <Link to="/coaching/offline" className="btn-primary mt-6">
            Back to Offline Courses <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    )
  }

  const faculty = getFacultyForCourse(course)
  const facultyName = faculty?.name || course.faculty
  const facultyExp = faculty?.exp || 'Experienced'
  const facultyRole = faculty?.role || 'Course Faculty'
  const facultyInitials = faculty?.initials || initials(facultyName)

  return (
    <>
      <PageHero
        eyebrow="Offline Course Detail"
        title={course.course}
        highlight="batch"
        subtitle={course.overview}
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'Coaching Centres', to: '/coaching' },
          { label: 'Offline Center', to: '/coaching/offline' },
          { label: course.course },
        ]}
      >
        <div className="flex flex-wrap gap-3">
          <Pill tone="crimson">{course.offer} offer</Pill>
          <Pill>{course.time}</Pill>
          <Pill tone="green">{course.duration}</Pill>
        </div>
      </PageHero>

      <section className="section">
        <div className="container-page grid gap-8 lg:grid-cols-[1.35fr_0.85fr]">
          <Reveal>
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-card">
              <SectionHeading
                align="left"
                eyebrow="Course Detail"
                title="What this batch covers"
                subtitle={course.overview}
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { icon: Clock, label: 'Time', value: course.time },
                  { icon: CalendarDays, label: 'Duration', value: course.duration },
                  { icon: IndianRupee, label: 'Offer Fee', value: course.offer },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl bg-softgrey p-4">
                    <item.icon className="h-5 w-5 text-crimson" />
                    <p className="mt-3 text-xs font-bold uppercase tracking-wider text-slate-400">{item.label}</p>
                    <p className="mt-1 font-display text-base font-bold text-navy">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="font-display text-xl font-bold text-navy">Syllabus focus</h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {course.syllabus.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-100 p-4">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                      <span className="text-sm font-semibold text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-display text-xl font-bold text-navy">Student outcomes</h3>
                <div className="mt-4 space-y-3">
                  {course.outcomes.map((item) => (
                    <p key={item} className="flex items-center gap-3 rounded-2xl bg-brand-50 px-4 py-3 text-sm font-semibold text-slateblue">
                      <BadgeCheck className="h-5 w-5 shrink-0" /> {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <aside className="space-y-6">
              <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-card">
                <h3 className="font-display text-lg font-bold text-navy">Faculty</h3>
                <div className="mt-5 flex items-center gap-4">
                  <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-navy-gradient font-display text-xl font-extrabold text-white">
                    {facultyInitials}
                  </span>
                  <div>
                    <p className="font-display text-lg font-bold text-navy">{facultyName}</p>
                    <p className="text-sm text-crimson">{facultyRole}</p>
                    <p className="mt-1 text-xs font-semibold text-slate-500">{facultyExp} experience</p>
                  </div>
                </div>
                {faculty?.bio && <p className="mt-5 text-sm leading-relaxed text-slate-600">{faculty.bio}</p>}
                <Link to="/coaching/faculty" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-slateblue hover:text-crimson">
                  View faculty profiles <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-card">
                <h3 className="flex items-center gap-2 font-display text-lg font-bold text-navy">
                  <MapPin className="h-5 w-5 text-crimson" /> Offline Center
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{COACHING_ADDRESS.address}</p>
                <a href={COACHING_ADDRESS.mapUrl} target="_blank" rel="noreferrer" className="btn-primary mt-5">
                  Open Map <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="rounded-3xl bg-navy-gradient p-6 text-white shadow-premium">
                <p className="text-sm font-semibold text-brand-100 line-through">Regular fee: {course.fee}</p>
                <p className="mt-2 font-display text-4xl font-extrabold">{course.offer}</p>
                <p className="mt-2 text-sm text-brand-100">Current offer for this offline batch.</p>
                <Link to="/contact" className="btn-crimson mt-6 w-full">
                  Reserve Demo Seat <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className="section bg-softgrey">
        <div className="container-page">
          <Reveal>
            <SectionHeading eyebrow="Included" title="Batch support facilities" />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {COACHING_FEATURES.map((feature, i) => (
              <Reveal key={feature} delay={i * 0.08}>
                <FeatureCard
                  icon={i === 0 ? BookOpen : i === 1 ? UserRound : i === 2 ? CheckCircle2 : BadgeCheck}
                  title={feature}
                  desc="Available to support regular study, revision and doubt clearing."
                  accent={i % 2 === 0 ? 'slateblue' : 'crimson'}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Join ${course.course}`}
        subtitle="Book a free demo, visit the center and confirm the batch timing before admission."
        primary={{ label: 'Book Free Demo', to: '/contact' }}
        secondary={{ label: 'All Offline Courses', to: '/coaching/offline' }}
      />
    </>
  )
}
