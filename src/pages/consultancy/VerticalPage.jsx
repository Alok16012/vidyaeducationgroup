import { Link } from 'react-router-dom'
import { CheckCircle2, ArrowRight, GraduationCap, Building2, TrendingUp, FileCheck2 } from 'lucide-react'
import { PageHero, SectionHeading, Reveal, FeatureCard, CTASection, Pill } from '../../components/ui.jsx'

export default function VerticalPage({
  eyebrow,
  title,
  highlight,
  subtitle,
  breadcrumbLabel,
  courses,
  roadmap,
  colleges,
  careers,
  features,
  accent = 'slateblue',
}) {
  const headerAccent = {
    slateblue: 'from-slateblue to-brand-700',
    navy: 'from-navy to-slateblue',
    crimson: 'from-crimson to-red-700',
  }[accent]

  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        highlight={highlight}
        subtitle={subtitle}
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'Consultancy', to: '/consultancy' },
          { label: breadcrumbLabel },
        ]}
      >
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className="btn-crimson">
            Get Admission Guidance <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/dashboard" className="btn border border-white/30 bg-white/10 text-white hover:bg-white/20">
            Track Application
          </Link>
        </div>
      </PageHero>

      {/* courses */}
      <section className="section">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Courses we guide for"
              title="Programs & specialisations"
              subtitle="Detailed advisory for each program — eligibility, scope and the best-fit colleges for your profile."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {courses.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.08}>
                <div className="card flex h-full flex-col p-6">
                  <div className="flex items-center justify-between">
                    <span className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${headerAccent} text-white`}>
                      <c.icon className="h-6 w-6" />
                    </span>
                    <Pill>{c.duration}</Pill>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-navy">{c.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-crimson">{c.full}</p>
                  <p className="mt-3 text-sm text-slate-600">{c.desc}</p>
                  <div className="mt-4 border-t border-slate-100 pt-4">
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Eligibility</p>
                    <p className="mt-1 text-sm text-slate-600">{c.eligibility}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* roadmap */}
      <section className="section bg-softgrey">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Your roadmap"
              title="From decision to degree"
              subtitle="A clear, stage-by-stage plan so you always know what to do next."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {roadmap.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.08}>
                <div className="card relative h-full p-6">
                  <span className="font-display text-4xl font-extrabold text-brand-100">
                    0{i + 1}
                  </span>
                  <h3 className="mt-2 font-display text-base font-bold text-navy">{r.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{r.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* colleges + careers */}
      <section className="section">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="card h-full p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-slateblue">
                  <Building2 className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg font-bold text-navy">Top College Advisory</h3>
              </div>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {colleges.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" /> {c}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs text-slate-400">
                We advise on government, private and deemed institutions based on your rank, budget and location.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card h-full p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-crimson/10 text-crimson">
                  <TrendingUp className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg font-bold text-navy">Career Outcomes</h3>
              </div>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {careers.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-slate-600">
                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-slateblue" /> {c}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-crimson mt-6">
                Discuss My Career Path <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* features */}
      <section className="section bg-softgrey">
        <div className="container-page">
          <Reveal>
            <SectionHeading eyebrow="With our support" title="What you get" />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 0.08}>
                <FeatureCard {...f} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Take the first confident step today"
        subtitle="Talk to our advisors and get a personalised admission strategy for your dream course."
        primary={{ label: 'Book Free Counselling', to: '/contact' }}
        secondary={{ label: 'Back to Consultancy', to: '/consultancy' }}
      />
    </>
  )
}
