import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BookOpen,
  Building2,
  ClipboardCheck,
  ExternalLink,
  MapPin,
  MonitorPlay,
  Navigation,
  Smartphone,
  Target,
  Users,
} from 'lucide-react'
import { PageHero, SectionHeading, Reveal, FeatureCard, CTASection, Pill } from '../../components/ui.jsx'
import {
  COACHING_ADDRESS,
  COACHING_FEATURES,
  ONLINE_APP_LINK,
  ONLINE_FOUNDATION_COURSES,
  OFFLINE_COURSES,
  TARGET_COURSES,
  TEST_SERIES,
} from '../../data/coaching.js'

export default function CoachingHub() {
  return (
    <>
      <PageHero
        eyebrow="Coaching Classes"
        title="Choose online app learning or"
        highlight="offline classroom"
        subtitle="Foundation courses, target batches, test series and offline classroom coaching with map, timing, fee, faculty and offer details."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Coaching' }]}
      >
        <div className="flex flex-wrap gap-3">
          <a href={ONLINE_APP_LINK.url} target="_blank" rel="noreferrer" className="btn-crimson">
            <Smartphone className="h-4 w-4" /> Online App Link
          </a>
          <Link to="/coaching/offline" className="btn border border-white/30 bg-white/10 text-white hover:bg-white/20">
            Offline Address & MAP <Navigation className="h-4 w-4" />
          </Link>
        </div>
      </PageHero>

      <section className="section">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Online / Offline"
              title="Coaching options"
              subtitle="Online courses are available through the app. Offline courses run at the Patna center with address and map support."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="card flex h-full flex-col p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-slateblue">
                  <Smartphone className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-navy">Online - App Link</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  Foundation courses, target courses and test series are available online through app access.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <Pill>Foundation</Pill>
                  <Pill tone="crimson">Target</Pill>
                  <Pill tone="green">Free Demo</Pill>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={ONLINE_APP_LINK.url} target="_blank" rel="noreferrer" className="btn-primary">
                    App Link <ExternalLink className="h-4 w-4" />
                  </a>
                  <Link to="/coaching/online" className="btn-ghost">
                    Course Details
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="card flex h-full flex-col p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-crimson/10 text-crimson">
                  <Building2 className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-navy">Offline - Address & MAP</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{COACHING_ADDRESS.address}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <Pill>Courses</Pill>
                  <Pill tone="crimson">Time</Pill>
                  <Pill tone="green">Offer</Pill>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={COACHING_ADDRESS.mapUrl} target="_blank" rel="noreferrer" className="btn-primary">
                    Open MAP <MapPin className="h-4 w-4" />
                  </a>
                  <Link to="/coaching/offline" className="btn-ghost">
                    Offline Courses
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section bg-softgrey">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Online Courses"
              title="Foundation and target catalog"
              subtitle="Quick view of available online courses. Open online classes for course links and details."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <Reveal>
              <div className="card h-full p-6">
                <h3 className="flex items-center gap-2 font-display text-lg font-bold text-navy">
                  <BookOpen className="h-5 w-5 text-slateblue" /> Foundation
                </h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {ONLINE_FOUNDATION_COURSES.slice(0, 9).map((course) => (
                    <Pill key={course.title}>{course.title}</Pill>
                  ))}
                </div>
                <Link to="/coaching/online#foundation-courses" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-slateblue hover:text-crimson">
                  View all foundation courses <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="card h-full p-6">
                <h3 className="flex items-center gap-2 font-display text-lg font-bold text-navy">
                  <Target className="h-5 w-5 text-crimson" /> Target
                </h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {TARGET_COURSES.map((course) => (
                    <Pill key={course} tone="crimson">{course}</Pill>
                  ))}
                </div>
                <Link to="/coaching/online#target-courses" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-slateblue hover:text-crimson">
                  Course Link & Details <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="card h-full p-6">
                <h3 className="flex items-center gap-2 font-display text-lg font-bold text-navy">
                  <ClipboardCheck className="h-5 w-5 text-crimson" /> Test Series
                </h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {TEST_SERIES.slice(0, 8).map((test) => (
                    <Pill key={test} tone="green">{test}</Pill>
                  ))}
                </div>
                <Link to="/coaching/online#test-series" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-slateblue hover:text-crimson">
                  Free Demo <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Offline Courses"
              title="Classroom course preview"
              subtitle="Offline course details include time, duration, fee, offer, faculty name and experience."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {OFFLINE_COURSES.map((course, i) => (
              <Reveal key={course.course} delay={(i % 4) * 0.06}>
                <div className="card flex h-full flex-col p-5">
                  <p className="font-display text-base font-bold text-navy">{course.course}</p>
                  <p className="mt-2 text-sm text-slate-600">{course.time} - {course.duration}</p>
                  <div className="mt-4 flex items-end gap-2">
                    <span className="text-sm text-slate-400 line-through">{course.fee}</span>
                    <span className="font-display text-xl font-extrabold text-crimson">{course.offer}</span>
                  </div>
                  <Link to="/coaching/offline" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-slateblue hover:text-crimson">
                    Course Detail <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-softgrey">
        <div className="container-page">
          <Reveal>
            <SectionHeading eyebrow="Features" title="Coaching features" />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {COACHING_FEATURES.map((feature, i) => (
              <Reveal key={feature} delay={i * 0.08}>
                <FeatureCard
                  icon={i === 0 ? BookOpen : i === 1 ? Users : i === 2 ? ClipboardCheck : MonitorPlay}
                  title={feature}
                  desc="Available across coaching programs to support complete preparation."
                  accent={i % 2 === 0 ? 'slateblue' : 'crimson'}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Start with the right coaching mode"
        subtitle="Use the app for online courses or visit the offline center for classroom batches and demo classes."
        primary={{ label: 'Online Courses', to: '/coaching/online' }}
        secondary={{ label: 'Offline Courses', to: '/coaching/offline' }}
      />
    </>
  )
}
