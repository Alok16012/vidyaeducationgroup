import {
  ArrowRight,
  BookOpen,
  ClipboardCheck,
  ExternalLink,
  FileText,
  Gift,
  GraduationCap,
  ListChecks,
  MonitorPlay,
  Play,
  Smartphone,
  Target,
  Users,
} from 'lucide-react'
import { PageHero, SectionHeading, Reveal, Pill, CTASection, FeatureCard } from '../../components/ui.jsx'
import {
  COACHING_FEATURES,
  ONLINE_APP_LINK,
  ONLINE_COURSE_GROUPS,
  ONLINE_FOUNDATION_COURSES,
  TARGET_COURSES,
  TEST_SERIES,
  courseDetailsUrl,
} from '../../data/coaching.js'

const FOUNDATION_TOTAL = ONLINE_FOUNDATION_COURSES.length

function DetailsLink({ title, label = 'Details', className = '' }) {
  return (
    <a
      href={courseDetailsUrl(title)}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slateblue transition hover:border-slateblue hover:bg-brand-50 ${className}`}
    >
      {label} <ArrowRight className="h-3.5 w-3.5" />
    </a>
  )
}

function FoundationCourse({ course }) {
  return (
    <div className="flex items-center justify-between gap-4 border-t border-slate-100 py-3 first:border-t-0 first:pt-0 last:pb-0">
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <p className="font-display text-sm font-bold text-navy">{course.title}</p>
          <span className="rounded-md bg-softgrey px-2 py-1 text-[11px] font-bold text-slate-500">
            {course.tag}
          </span>
        </div>
        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-slate-500">{course.desc}</p>
      </div>
      <DetailsLink title={course.title} label="App Link" className="shrink-0" />
    </div>
  )
}

export default function OnlineClasses() {
  return (
    <>
      <PageHero
        eyebrow="Coaching Classes - Online"
        title="Online courses through our"
        highlight="learning app"
        subtitle="Foundation courses, target batches and test series are available online with course details, demo support and direct app access."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Coaching', to: '/coaching' }, { label: 'Online Classes' }]}
      >
        <div className="flex flex-wrap gap-3">
          <a href={ONLINE_APP_LINK.url} target="_blank" rel="noreferrer" className="btn-crimson">
            <Smartphone className="h-4 w-4" /> {ONLINE_APP_LINK.label}
          </a>
          <a href="#test-series" className="btn border border-white/30 bg-white/10 text-white hover:bg-white/20">
            Free Demo <Play className="h-4 w-4" />
          </a>
        </div>
      </PageHero>

      <section id="foundation-courses" className="section bg-softgrey">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Online Course Hub"
              title="Courses, targets and tests in one clean view"
              subtitle="Pick your foundation track, choose a target batch, or start with a test-series demo."
            />
          </Reveal>

          <Reveal>
            <div className="mt-10 overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-card">
              <div className="border-b border-slate-100 p-5 sm:p-6">
                <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <Pill>{FOUNDATION_TOTAL} Foundation</Pill>
                      <Pill tone="crimson">{TARGET_COURSES.length} Target</Pill>
                      <Pill tone="green">{TEST_SERIES.length} Tests</Pill>
                    </div>
                    <h3 className="mt-4 font-display text-2xl font-bold text-navy">Online Course Catalog</h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
                      A single organized catalog for app-based classes, exam targets and practice tests.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a href={ONLINE_APP_LINK.url} target="_blank" rel="noreferrer" className="btn-primary">
                      <Smartphone className="h-4 w-4" /> App Link
                    </a>
                    <a href="#test-series" className="btn-ghost">
                      <Gift className="h-4 w-4" /> Free Demo
                    </a>
                  </div>
                </div>
              </div>

              <div className="grid gap-0 xl:grid-cols-[1.55fr_0.9fr]">
                <div className="p-5 sm:p-6">
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <div>
                      <h4 className="font-display text-xl font-bold text-navy">Foundation Courses</h4>
                      <p className="mt-1 text-sm text-slate-500">SSC, Banking, Railway and subject-wise courses.</p>
                    </div>
                    <span className="hidden h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-slateblue sm:flex">
                      <GraduationCap className="h-5 w-5" />
                    </span>
                  </div>

                  <div className="grid gap-5">
                    {ONLINE_COURSE_GROUPS.map((group) => (
                      <div key={group.title} className="rounded-2xl border border-slate-100 bg-white p-4">
                        <div className="mb-3 flex items-start justify-between gap-3">
                          <div>
                            <p className="font-display text-base font-bold text-navy">{group.title}</p>
                            <p className="mt-1 text-xs leading-relaxed text-slate-500">{group.subtitle}</p>
                          </div>
                          <span className="shrink-0 rounded-md bg-softgrey px-2 py-1 text-[11px] font-bold text-slate-500">
                            {group.courses.length}
                          </span>
                        </div>
                        <div>
                          {group.courses.map((course) => (
                            <FoundationCourse key={course.title} course={course} />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-slate-100 bg-slate-50/70 p-5 sm:p-6 xl:border-l xl:border-t-0">
                  <div id="target-courses">
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <div>
                        <h4 className="font-display text-xl font-bold text-navy">Target Batches</h4>
                        <p className="mt-1 text-sm text-slate-500">Focused exam preparation.</p>
                      </div>
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-crimson/10 text-crimson">
                        <Target className="h-5 w-5" />
                      </span>
                    </div>
                    <div className="space-y-2">
                      {TARGET_COURSES.map((course) => (
                        <div key={course} className="flex items-center justify-between gap-3 rounded-xl bg-white px-4 py-3 ring-1 ring-slate-100">
                          <div>
                            <p className="font-display text-sm font-bold text-navy">{course}</p>
                            <p className="text-xs text-slate-500">Syllabus + practice</p>
                          </div>
                          <DetailsLink title={course} className="shrink-0" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div id="test-series" className="mt-8">
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <div>
                        <h4 className="font-display text-xl font-bold text-navy">Test Series</h4>
                        <p className="mt-1 text-sm text-slate-500">Subject and exam-wise practice.</p>
                      </div>
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                        <ClipboardCheck className="h-5 w-5" />
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {TEST_SERIES.map((test) => (
                        <a
                          key={test}
                          href={courseDetailsUrl(`${test} Test Series`)}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-full bg-white px-3 py-1.5 text-xs font-bold text-navy ring-1 ring-slate-100 transition hover:bg-brand-50 hover:text-slateblue"
                        >
                          {test}
                        </a>
                      ))}
                    </div>
                    <div className="mt-5 flex items-center gap-2 rounded-xl bg-emerald-50 p-3 text-sm font-semibold text-emerald-700">
                      <Gift className="h-5 w-5" />
                      Free demo available
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <Reveal>
            <SectionHeading eyebrow="Features" title="Why students choose our online coaching" />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {COACHING_FEATURES.map((feature, i) => (
              <Reveal key={feature} delay={i * 0.08}>
                <FeatureCard
                  icon={i === 0 ? BookOpen : i === 1 ? Users : i === 2 ? ListChecks : MonitorPlay}
                  title={feature}
                  desc="Designed to support serious preparation with guided learning and regular practice."
                  accent={i % 2 === 0 ? 'slateblue' : 'crimson'}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Start online coaching with a free demo"
        subtitle="Request the app link, choose your course and get course details from the counselling team."
        primary={{ label: 'Get App Link', to: '/contact' }}
        secondary={{ label: 'See Offline Courses', to: '/coaching/offline' }}
      />
    </>
  )
}
