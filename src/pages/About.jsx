import {
  Target,
  Eye,
  HeartHandshake,
  Award,
  Users,
  Building2,
  Quote,
  CheckCircle2,
  Sparkles,
} from 'lucide-react'
import { PageHero, SectionHeading, Reveal, StatCounter, FeatureCard, CTASection } from '../components/ui.jsx'
import { BRAND, STATS } from '../data/site.js'

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Right guidance is the foundation of every"
        highlight="bright future"
        subtitle="Vidya Educational Services is Patna's integrated learning ecosystem — coaching, a premium library and career consultancy, all driven by genuine care for every student."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'About Us' }]}
      />

      {/* intro */}
      <section className="section">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-navy-gradient p-8 text-white shadow-premium">
                <div className="flex h-full flex-col justify-between">
                  <Sparkles className="h-10 w-10 text-crimson" />
                  <div>
                    <p className="font-display text-2xl font-bold leading-snug">
                      “कमजोर विद्यार्थियों पर विशेष ध्यान”
                    </p>
                    <p className="mt-3 text-sm text-brand-100">
                      Special, personal attention for students who need it most — the principle our
                      institute is built on.
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-4 rounded-2xl bg-white p-5 shadow-premium ring-1 ring-slate-100">
                <p className="font-display text-3xl font-extrabold text-navy">
                  12<span className="text-crimson">+</span>
                </p>
                <p className="text-xs font-medium text-slate-500">Years of trust</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading
              align="left"
              eyebrow="Our story"
              title="One campus. Three powerful divisions."
              subtitle="What began as a focused coaching centre has grown into a complete education group serving students across Patna and Bihar."
            />
            <p className="mt-6 text-sm leading-relaxed text-slate-600">
              We saw students struggling not because they lacked ability, but because they lacked the
              right environment, the right mentors and the right direction. Vidya Educational Services
              brings all three together — disciplined coaching for competitive exams, a world-class
              24/7 library, and end-to-end admission consultancy — at fees that families can afford.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                'Affordable, transparent fees',
                'Personal mentoring culture',
                'Modern digital infrastructure',
                'Result-focused teaching',
              ].map((t) => (
                <div key={t} className="flex items-start gap-2 text-sm font-medium text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" /> {t}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* vision mission values */}
      <section className="section bg-softgrey">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="What drives us"
              title="Our vision, mission & values"
              subtitle="A clear purpose guides every batch we run, every seat we offer and every admission we secure."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { icon: Eye, title: 'Our Vision', desc: 'To become Bihar’s most trusted and affordable education ecosystem, where guidance and infrastructure together create lasting success.', accent: 'slateblue' },
              { icon: Target, title: 'Our Mission', desc: 'To empower every aspirant — especially the underprivileged and weaker students — with the mentoring, resources and confidence to achieve their goals.', accent: 'crimson' },
              { icon: HeartHandshake, title: 'Our Values', desc: 'Discipline, honesty, affordability and genuine care. We treat every student’s future as our own responsibility.', accent: 'navy' },
            ].map((f, i) => (
              <Reveal key={f.title} delay={i * 0.1}>
                <FeatureCard {...f} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* director */}
      <section className="section">
        <div className="container-page">
          <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-premium lg:grid lg:grid-cols-5">
            <div className="bg-navy-gradient p-8 text-white lg:col-span-2 lg:p-10">
              <div className="flex h-full flex-col">
                <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-white/10 font-display text-4xl font-extrabold ring-4 ring-white/20">
                  CK
                </div>
                <div className="mt-6 text-center">
                  <p className="font-display text-xl font-bold">{BRAND.director}</p>
                  <p className="text-sm text-brand-100">Founder & Director</p>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3 text-center">
                  <div className="rounded-xl bg-white/10 p-3">
                    <p className="font-display text-lg font-bold">8,200+</p>
                    <p className="text-[11px] text-brand-100">Students</p>
                  </div>
                  <div className="rounded-xl bg-white/10 p-3">
                    <p className="font-display text-lg font-bold">96%</p>
                    <p className="text-[11px] text-brand-100">Success</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-8 lg:col-span-3 lg:p-10">
              <span className="eyebrow">Message from the Director</span>
              <Quote className="mt-5 h-9 w-9 text-crimson/30" />
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                “When I started this institute, I made one promise — that no student would be left
                behind simply because they found a subject difficult. Our entire team gives{' '}
                <span className="font-semibold text-navy">कमजोर विद्यार्थियों पर विशेष ध्यान</span> —
                special attention to weaker students — through extra classes, patient mentoring and
                constant motivation. Education is not a business for us; it is a responsibility we
                carry with pride.”
              </p>
              <p className="mt-6 font-display font-bold text-navy">— {BRAND.director}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { icon: Users, label: 'Personal mentoring' },
                  { icon: Award, label: 'Merit scholarships' },
                  { icon: Building2, label: 'Modern campus' },
                ].map((x) => (
                  <div key={x.label} className="flex items-center gap-2 rounded-xl bg-softgrey p-3 text-sm font-semibold text-navy">
                    <x.icon className="h-5 w-5 text-slateblue" /> {x.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* management structure */}
      <section className="section bg-softgrey">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="How we are organised"
              title="Our management structure"
              subtitle="A lean, accountable team where every division has dedicated leadership and a single shared goal — student success."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { role: 'Director’s Office', name: 'Mr. Chandan Kumar', desc: 'Overall vision, student welfare and quality of education.' },
              { role: 'Academic Head', name: 'Coaching Division', desc: 'Curriculum, faculty coordination and batch planning.' },
              { role: 'Library Operations', name: 'Study Wing Team', desc: '24/7 seat allotment, discipline and digital facilities.' },
              { role: 'Consultancy Cell', name: 'Admission Advisors', desc: 'Career counselling, applications and college tie-ups.' },
            ].map((m, i) => (
              <Reveal key={m.role} delay={i * 0.08}>
                <div className="card h-full p-6">
                  <span className="chip">{m.role}</span>
                  <p className="mt-4 font-display text-lg font-bold text-navy">{m.name}</p>
                  <p className="mt-2 text-sm text-slate-600">{m.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* stats */}
      <section className="relative overflow-hidden bg-navy-gradient py-16 text-white">
        <div className="absolute inset-0 bg-hero-grid [background-size:22px_22px] opacity-30" />
        <div className="container-page relative grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((s) => (
            <StatCounter key={s.label} {...s} light />
          ))}
        </div>
      </section>

      <CTASection
        title="Become part of the Vidya family"
        subtitle="Visit our Patna campus or book a free counselling session to see the difference right guidance makes."
        primary={{ label: 'Contact Us', to: '/contact' }}
        secondary={{ label: 'View Dashboard', to: '/dashboard' }}
      />
    </>
  )
}
