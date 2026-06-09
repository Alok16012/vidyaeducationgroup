import { Link } from 'react-router-dom'
import {
  Cpu,
  Briefcase,
  Stethoscope,
  Compass,
  UserSearch,
  Map,
  FileCheck2,
  GraduationCap,
  TrendingUp,
  ArrowRight,
  Target,
  PhoneCall,
} from 'lucide-react'
import { PageHero, SectionHeading, Reveal, CTASection, Pill, FeatureCard } from '../../components/ui.jsx'

const VERTICALS = [
  {
    icon: Cpu,
    title: 'Tech & IT Admissions',
    desc: 'B.Tech, BCA & MCA roadmaps with guidance to top engineering and computer colleges.',
    to: '/consultancy/tech',
    accent: 'from-slateblue to-brand-700',
    tags: ['B.Tech', 'BCA', 'MCA'],
  },
  {
    icon: Briefcase,
    title: 'Management & Law',
    desc: 'MBA, BBA & LLB admission funnels for future corporate leaders and legal professionals.',
    to: '/consultancy/mgmt-law',
    accent: 'from-navy to-slateblue',
    tags: ['MBA', 'BBA', 'LLB'],
  },
  {
    icon: Stethoscope,
    title: 'Medical & Nursing',
    desc: 'Strategic guidance for Nursing, ANM & GNM institutional allocations and applications.',
    to: '/consultancy/medical',
    accent: 'from-crimson to-red-700',
    tags: ['Nursing', 'ANM', 'GNM'],
  },
]

export default function ConsultancyGateway() {
  return (
    <>
      <PageHero
        eyebrow="Career Counselling"
        title="The right career decision, backed by"
        highlight="expert guidance"
        subtitle="From profile evaluation to final admission, our advisors map a personalised path across Tech, Management, Law, Medical and Nursing careers."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Consultancy' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className="btn-crimson">
            Book Free Counselling <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/dashboard" className="btn border border-white/30 bg-white/10 text-white hover:bg-white/20">
            Track My Application
          </Link>
        </div>
      </PageHero>

      {/* verticals */}
      <section className="section">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Our verticals"
              title="Specialised guidance for every field"
              subtitle="Pick your area of interest and explore tailored roadmaps, college advisory and admission tracking."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {VERTICALS.map((v, i) => (
              <Reveal key={v.to} delay={i * 0.1}>
                <div className="card group flex h-full flex-col overflow-hidden">
                  <div className={`bg-gradient-to-br ${v.accent} p-6 text-white`}>
                    <v.icon className="h-9 w-9" />
                    <h3 className="mt-4 font-display text-xl font-bold">{v.title}</h3>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-sm text-slate-600">{v.desc}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {v.tags.map((t) => (
                        <Pill key={t}>{t}</Pill>
                      ))}
                    </div>
                    <Link
                      to={v.to}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-slateblue transition group-hover:gap-3 group-hover:text-crimson"
                    >
                      Explore roadmap <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* process */}
      <section className="section bg-softgrey">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="How it works"
              title="A guided journey to admission"
              subtitle="Our structured, transparent process keeps you informed and confident at every step."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: UserSearch, title: 'Profile Evaluation', desc: 'We assess your marks, interests, budget and goals in a free session.' },
              { icon: Map, title: 'Personalised Roadmap', desc: 'Get a clear path with course, college and timeline recommendations.' },
              { icon: FileCheck2, title: 'Application Support', desc: 'End-to-end help with forms, documents and entrance preparation.' },
              { icon: GraduationCap, title: 'Admission Secured', desc: 'We track your application until you’re confirmed and enrolled.' },
            ].map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="card relative h-full p-6">
                  <span className="font-display text-4xl font-extrabold text-brand-100">
                    0{i + 1}
                  </span>
                  <s.icon className="mt-2 h-7 w-7 text-crimson" />
                  <h3 className="mt-3 font-display text-base font-bold text-navy">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* profile tracking mock */}
      <section className="section">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Dynamic profile tracking"
              title="Always know where you stand"
              subtitle="Every student gets a live admission tracker — no more uncertainty about your application status."
            />
            <div className="mt-8 space-y-4">
              {[
                { icon: Target, label: 'Real-time status of every application' },
                { icon: TrendingUp, label: 'College shortlists matched to your profile' },
                { icon: PhoneCall, label: 'Direct line to your dedicated advisor' },
              ].map((x) => (
                <div key={x.label} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-slateblue shadow-card">
                    <x.icon className="h-5 w-5" />
                  </span>
                  {x.label}
                </div>
              ))}
            </div>
            <Link to="/dashboard" className="btn-primary mt-8">
              View Sample Tracker <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card p-6">
              <div className="flex items-center justify-between">
                <p className="font-display text-base font-bold text-navy">Admission Tracker</p>
                <Pill tone="amber">In Progress</Pill>
              </div>
              <div className="mt-5 space-y-4">
                {[
                  { label: 'Profile evaluated', done: true },
                  { label: 'Roadmap shared', done: true },
                  { label: 'Colleges shortlisted', done: true },
                  { label: 'Applications submitted', done: false, active: true },
                  { label: 'Admission confirmed', done: false },
                ].map((s, i, arr) => (
                  <div key={s.label} className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <span className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${s.done ? 'bg-emerald-500 text-white' : s.active ? 'bg-crimson text-white' : 'bg-slate-200 text-slate-400'}`}>
                        {s.done ? '✓' : i + 1}
                      </span>
                      {i < arr.length - 1 && <span className="my-1 h-6 w-0.5 bg-slate-200" />}
                    </div>
                    <p className={`pt-1 text-sm font-semibold ${s.active ? 'text-crimson' : 'text-navy'}`}>
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* why us */}
      <section className="section bg-softgrey">
        <div className="container-page">
          <Reveal>
            <SectionHeading eyebrow="Why our consultancy" title="Guidance you can trust" />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Compass, title: 'Unbiased Advice', desc: 'Recommendations based on your future, not commissions.', accent: 'slateblue' },
              { icon: GraduationCap, title: 'Wide College Network', desc: 'Tie-ups and insights across reputed institutions.', accent: 'crimson' },
              { icon: FileCheck2, title: 'End-to-End Support', desc: 'From the first query to the final admission letter.', accent: 'navy' },
            ].map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08}>
                <FeatureCard {...f} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Confused about your next step? Let's talk."
        subtitle="Book a free counselling session and get a clear, personalised career roadmap."
        primary={{ label: 'Book Free Counselling', to: '/contact' }}
        secondary={{ label: 'Explore Tech Careers', to: '/consultancy/tech' }}
      />
    </>
  )
}
