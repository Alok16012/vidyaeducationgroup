import { Link } from 'react-router-dom'
import {
  Cpu,
  Briefcase,
  Stethoscope,
  ArrowRight,
  UserSearch,
  FileCheck2,
  GraduationCap,
  ClipboardList,
  CheckCircle2,
} from 'lucide-react'
import { PageHero, SectionHeading, Reveal, CTASection, Pill } from '../../components/ui.jsx'

const STREAMS = [
  {
    icon: Cpu,
    title: 'Tech & IT Admissions',
    desc: 'B.Tech, BCA & MCA admissions with guidance to top engineering and computer colleges.',
    to: '/consultancy/tech',
    accent: 'from-slateblue to-brand-700',
    tags: ['B.Tech', 'BCA', 'MCA'],
  },
  {
    icon: Briefcase,
    title: 'Management & Law',
    desc: 'MBA, BBA & LLB admissions for future corporate leaders and legal professionals.',
    to: '/consultancy/mgmt-law',
    accent: 'from-navy to-slateblue',
    tags: ['MBA', 'BBA', 'LLB'],
  },
  {
    icon: Stethoscope,
    title: 'Medical & Nursing',
    desc: 'Nursing, ANM & GNM institutional allocations, applications and document support.',
    to: '/consultancy/medical',
    accent: 'from-crimson to-red-700',
    tags: ['Nursing', 'ANM', 'GNM'],
  },
]

export default function AdmissionHub() {
  return (
    <>
      <PageHero
        eyebrow="Consultancy · Admission"
        title="Confirmed admissions, made simple and"
        highlight="stress-free"
        subtitle="From choosing the right course to securing your seat — we handle applications, documents and college coordination across every stream."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Consultancy', to: '/consultancy' }, { label: 'Admission' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className="btn-crimson">
            Apply for Admission <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/consultancy" className="btn border border-white/30 bg-white/10 text-white hover:bg-white/20">
            Need Counselling First?
          </Link>
        </div>
      </PageHero>

      {/* streams */}
      <section className="section">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Admission streams"
              title="Pick your stream, we'll handle the rest"
              subtitle="Explore the field you want and get end-to-end admission support — eligibility, applications, documents and final allotment."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {STREAMS.map((v, i) => (
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
                      View admissions <ArrowRight className="h-4 w-4" />
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
              eyebrow="Admission process"
              title="Four simple steps to your seat"
              subtitle="A clear, transparent process so you always know what comes next."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: UserSearch, title: 'Eligibility Check', desc: 'We verify your marks, stream and budget to shortlist the right options.' },
              { icon: ClipboardList, title: 'College Shortlist', desc: 'Get a matched list of colleges with fees, seats and placement insights.' },
              { icon: FileCheck2, title: 'Application & Documents', desc: 'We prepare and submit forms with complete document support.' },
              { icon: GraduationCap, title: 'Seat Confirmed', desc: 'We coordinate with colleges until your admission is confirmed.' },
            ].map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="card relative h-full p-6">
                  <span className="font-display text-4xl font-extrabold text-brand-100">0{i + 1}</span>
                  <s.icon className="mt-2 h-7 w-7 text-crimson" />
                  <h3 className="mt-3 font-display text-base font-bold text-navy">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* what's included */}
      <section className="section">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="What's included"
              title="Full support, start to finish"
              subtitle="One team handles everything so you never feel lost in the admission maze."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                'Course & college selection',
                'Eligibility & cut-off guidance',
                'Form filling & fee assistance',
                'Document verification help',
                'Scholarship & loan guidance',
                'Entrance exam counselling',
                'Hostel & relocation support',
                'Admission status tracking',
              ].map((t) => (
                <li key={t} className="flex items-start gap-2 rounded-xl bg-softgrey p-3 text-sm font-medium text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" /> {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Ready to secure your admission?"
        subtitle="Tell us your stream and marks — we'll get back with a personalised admission plan."
        primary={{ label: 'Apply Now', to: '/contact' }}
        secondary={{ label: 'Talk to a Counsellor', to: '/consultancy' }}
      />
    </>
  )
}
