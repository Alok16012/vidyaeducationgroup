import { Link } from 'react-router-dom'
import {
  TrainFront,
  Wrench,
  Cog,
  Calculator,
  Brain,
  Trophy,
  Monitor,
  Building2,
  Users,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Layers,
} from 'lucide-react'
import { PageHero, SectionHeading, Reveal, FeatureCard, CTASection, Pill, CheckList } from '../../components/ui.jsx'

const BATCHES = [
  {
    icon: TrainFront,
    title: 'Railway ALP Target Batch',
    level: 'Basic → Advanced',
    desc: 'Complete Assistant Loco Pilot preparation covering CBT-1, CBT-2 and CBAT with daily practice.',
    points: ['Trade theory + practical', 'Speed maths drills', 'CBAT psycho training'],
    accent: 'crimson',
  },
  {
    icon: Wrench,
    title: 'General Technical',
    level: 'Trade focused',
    desc: 'Technician & Technical posts with deep coverage of engineering trades and basic science.',
    points: ['Engineering drawing', 'Trade-wise modules', 'Previous year analysis'],
    accent: 'slateblue',
  },
  {
    icon: Cog,
    title: 'Non-Technical (NTPC)',
    level: 'All graduates',
    desc: 'GA, Maths & Reasoning intensive batch for NTPC, Group-D and allied non-technical posts.',
    points: ['Current affairs', 'Reasoning mastery', 'Sectional mocks'],
    accent: 'navy',
  },
]

export default function CoachingHub() {
  return (
    <>
      <PageHero
        eyebrow="Coaching Division"
        title="Railway & competitive coaching that scales with"
        highlight="your level"
        subtitle="Structured target batches for Railway ALP, General Technical and Non-Technical exams — taught from absolute basics to advanced, exam-cracking level."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Coaching' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link to="/coaching/offline" className="btn-crimson">
            Join Offline Batch <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/coaching/online" className="btn border border-white/30 bg-white/10 text-white hover:bg-white/20">
            Explore Online Classes
          </Link>
        </div>
      </PageHero>

      {/* batches */}
      <section className="section">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Our target batches"
              title="Choose the batch built for your exam"
              subtitle="Every batch is mapped to the latest exam pattern and runs in both morning and evening shifts."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {BATCHES.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.1}>
                <div className="card flex h-full flex-col p-6">
                  <div className="flex items-center justify-between">
                    <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${b.accent === 'crimson' ? 'bg-crimson/10 text-crimson' : b.accent === 'slateblue' ? 'bg-brand-50 text-slateblue' : 'bg-navy/5 text-navy'}`}>
                      <b.icon className="h-6 w-6" />
                    </span>
                    <Pill>{b.level}</Pill>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-navy">{b.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{b.desc}</p>
                  <CheckList items={b.points} className="mt-4" />
                  <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-slateblue hover:text-crimson">
                    Enquire & enroll <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* level path */}
      <section className="section bg-softgrey">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="From zero to selection"
              title="A clear path from basic to high level"
              subtitle="No student is left behind. We start with fundamentals and progressively build towards exam mastery."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              { step: '01', title: 'Foundation', desc: 'Core concepts, NCERT-level basics and confidence building.', icon: Layers },
              { step: '02', title: 'Core Building', desc: 'Subject-wise depth, formulas, trades and reasoning patterns.', icon: Cog },
              { step: '03', title: 'Practice', desc: 'Daily DPP, topic tests and sectional mocks with analysis.', icon: BarChart3 },
              { step: '04', title: 'Exam Mastery', desc: 'Full-length mocks, speed-accuracy and final revision sprints.', icon: Trophy },
            ].map((s, i) => (
              <Reveal key={s.step} delay={i * 0.08}>
                <div className="card relative h-full p-6">
                  <span className="font-display text-4xl font-extrabold text-brand-100">{s.step}</span>
                  <s.icon className="mt-2 h-7 w-7 text-crimson" />
                  <h3 className="mt-3 font-display text-base font-bold text-navy">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* subjects */}
      <section className="section">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="What you'll master"
              title="Complete subject coverage"
              subtitle="Our three flagship faculty cover every section that matters for Railway and competitive success."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { icon: Wrench, label: 'Science & Trade', who: 'Er. S.K Rajan' },
                { icon: Calculator, label: 'Mathematics', who: 'Er. RD Yadav' },
                { icon: Brain, label: 'Reasoning', who: 'Deepak Sir' },
              ].map((s) => (
                <div key={s.label} className="card p-5">
                  <s.icon className="h-7 w-7 text-slateblue" />
                  <p className="mt-3 font-display text-sm font-bold text-navy">{s.label}</p>
                  <p className="text-xs text-slate-500">{s.who}</p>
                </div>
              ))}
            </div>
            <Link to="/coaching/faculty" className="btn-primary mt-8">
              Meet the Faculty <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid gap-4">
              {[
                { icon: Monitor, title: 'Online Classes', desc: 'Live + recorded lectures and full test-series repository.', to: '/coaching/online' },
                { icon: Building2, title: 'Offline Center', desc: 'Physical batches at Patna with morning & evening shifts.', to: '/coaching/offline' },
                { icon: Users, title: 'Faculty Profiles', desc: 'Learn from experienced, result-oriented mentors.', to: '/coaching/faculty' },
              ].map((c) => (
                <Link key={c.to} to={c.to} className="card group flex items-center gap-4 p-5 transition hover:border-slateblue">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-gradient text-white">
                    <c.icon className="h-6 w-6" />
                  </span>
                  <div className="flex-1">
                    <p className="font-display text-base font-bold text-navy">{c.title}</p>
                    <p className="text-sm text-slate-500">{c.desc}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-slate-300 transition group-hover:translate-x-1 group-hover:text-crimson" />
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* features */}
      <section className="section bg-softgrey">
        <div className="container-page">
          <Reveal>
            <SectionHeading eyebrow="Included with every batch" title="More than just classes" />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: CheckCircle2, title: 'Daily Practice Problems', desc: 'Structured DPP sheets with detailed video solutions every single day.', accent: 'slateblue' },
              { icon: BarChart3, title: 'Test Series & Analysis', desc: 'Topic, sectional and full-length mocks with rank and weakness reports.', accent: 'crimson' },
              { icon: Brain, title: 'Doubt & Psycho Support', desc: 'Open doubt sessions plus exam-temperament coaching by Deepak Sir.', accent: 'navy' },
            ].map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08}>
                <FeatureCard {...f} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Your selection journey starts here"
        subtitle="Enroll in a target batch today and get a free demo class plus a personalised study plan."
        primary={{ label: 'Enroll Now', to: '/contact' }}
        secondary={{ label: 'Visit Offline Center', to: '/coaching/offline' }}
      />
    </>
  )
}
