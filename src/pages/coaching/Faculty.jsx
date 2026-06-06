import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Award, BookOpen, Users, Sparkles, X, ArrowRight, Quote } from 'lucide-react'
import { PageHero, SectionHeading, Reveal, Pill, CTASection } from '../../components/ui.jsx'
import { FACULTY } from '../../data/site.js'

const ACCENTS = {
  crimson: { ring: 'from-crimson to-red-700', soft: 'bg-crimson/10 text-crimson' },
  slateblue: { ring: 'from-slateblue to-brand-700', soft: 'bg-brand-50 text-slateblue' },
  navy: { ring: 'from-navy to-slateblue', soft: 'bg-navy/5 text-navy' },
}

export default function Faculty() {
  const [active, setActive] = useState(null)
  return (
    <>
      <PageHero
        eyebrow="Coaching · Faculty"
        title="Mentors who turn weak students into"
        highlight="toppers"
        subtitle="Meet the experienced faculty behind our results — experts who blend deep subject knowledge with genuine care and motivation."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Coaching', to: '/coaching' }, { label: 'Faculty Profiles' }]}
      />

      <section className="section">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Our expert team"
              title="Three pillars of every batch"
              subtitle="Click any profile to read their full bio, teaching style and the subjects they own."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {FACULTY.map((f, i) => {
              const a = ACCENTS[f.accent]
              return (
                <Reveal key={f.name} delay={i * 0.1}>
                  <motion.button
                    whileHover={{ y: -6 }}
                    onClick={() => setActive(f)}
                    className="card group flex h-full w-full flex-col p-6 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <span className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${a.ring} font-display text-xl font-extrabold text-white`}>
                        {f.initials}
                      </span>
                      <div>
                        <p className="font-display text-lg font-bold text-navy">{f.name}</p>
                        <p className="text-sm text-crimson">{f.role}</p>
                      </div>
                    </div>
                    <p className="mt-4 line-clamp-3 text-sm text-slate-600">{f.bio}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {f.subjects.slice(0, 3).map((s) => (
                        <Pill key={s}>{s}</Pill>
                      ))}
                    </div>
                    <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                      <span className="flex items-center gap-1.5 text-sm font-semibold text-amber-500">
                        <Star className="h-4 w-4 fill-amber-400 text-amber-400" /> {f.rating}
                      </span>
                      <span className="flex items-center gap-1 text-sm font-bold text-slateblue transition group-hover:gap-2 group-hover:text-crimson">
                        View profile <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </motion.button>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* teaching philosophy */}
      <section className="section bg-softgrey">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="How we teach"
              title="A philosophy of patient mentoring"
              subtitle="Our faculty don't just complete the syllabus — they make sure every student actually understands it."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: BookOpen, title: 'Concept-first', desc: 'Strong fundamentals before shortcuts and tricks.' },
              { icon: Users, title: 'Personal attention', desc: 'Extra care for कमजोर विद्यार्थी who need it most.' },
              { icon: Award, title: 'Result tracking', desc: 'Continuous testing and one-on-one feedback.' },
              { icon: Sparkles, title: 'Motivation', desc: 'Psychology coaching to keep morale high.' },
            ].map((x, i) => (
              <Reveal key={x.title} delay={i * 0.08}>
                <div className="card h-full p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-slateblue">
                    <x.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-navy">{x.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{x.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Learn directly from these mentors"
        subtitle="Join a batch and get personal guidance from S.K Rajan, RD Yadav and Deepak Sir."
        primary={{ label: 'Enroll in a Batch', to: '/contact' }}
        secondary={{ label: 'See Coaching Hub', to: '/coaching' }}
      />

      {/* modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] flex items-end justify-center bg-navy/50 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          >
            <motion.div
              initial={{ y: 40, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 40, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg overflow-hidden rounded-t-3xl bg-white shadow-premium sm:rounded-3xl"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-navy"
              >
                <X className="h-5 w-5" />
              </button>
              <div className={`bg-gradient-to-br ${ACCENTS[active.accent].ring} p-6 text-white`}>
                <div className="flex items-center gap-4">
                  <span className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/15 font-display text-2xl font-extrabold ring-2 ring-white/30">
                    {active.initials}
                  </span>
                  <div>
                    <p className="font-display text-2xl font-bold">{active.name}</p>
                    <p className="text-sm text-white/90">{active.role}</p>
                    <div className="mt-2 flex gap-2">
                      <span className="rounded-full bg-white/15 px-2.5 py-0.5 text-xs font-semibold">
                        {active.exp} experience
                      </span>
                      <span className="flex items-center gap-1 rounded-full bg-white/15 px-2.5 py-0.5 text-xs font-semibold">
                        <Star className="h-3 w-3 fill-white" /> {active.rating}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <Quote className="h-7 w-7 text-crimson/30" />
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{active.bio}</p>
                <p className="mt-5 text-xs font-bold uppercase tracking-wide text-slate-400">Subjects</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {active.subjects.map((s) => (
                    <Pill key={s}>{s}</Pill>
                  ))}
                </div>
                <div className="mt-5 rounded-xl bg-softgrey p-4 text-sm">
                  <span className="font-semibold text-navy">Teaches in: </span>
                  <span className="text-slate-600">{active.batches}</span>
                </div>
                <Link to="/contact" className="btn-crimson mt-5 w-full" onClick={() => setActive(null)}>
                  Book a class with {active.name.split(' ')[0]} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
