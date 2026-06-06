import { Link } from 'react-router-dom'
import {
  Sunrise,
  Sunset,
  MapPin,
  Projector,
  Armchair,
  Wind,
  ShieldCheck,
  ClipboardList,
  UserCheck,
  CreditCard,
  BadgeCheck,
  ArrowRight,
  Building2,
} from 'lucide-react'
import { PageHero, SectionHeading, Reveal, FeatureCard, CTASection, Pill } from '../../components/ui.jsx'
import { BRAND } from '../../data/site.js'

export default function OfflineCenter() {
  return (
    <>
      <PageHero
        eyebrow="Coaching · Offline"
        title="Classroom coaching at our"
        highlight="Patna center"
        subtitle="A disciplined, distraction-free environment with experienced faculty, modern classrooms and flexible morning & evening batches."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Coaching', to: '/coaching' }, { label: 'Offline Center' }]}
      >
        <div className="flex items-center gap-2 text-sm text-brand-100">
          <MapPin className="h-5 w-5 text-crimson" /> {BRAND.address}
        </div>
      </PageHero>

      {/* batches */}
      <section className="section">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Flexible shifts"
              title="Morning & evening batches"
              subtitle="Pick the shift that fits your routine — both run the same complete syllabus with the same faculty."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="card overflow-hidden">
                <div className="flex items-center gap-3 bg-gradient-to-br from-crimson to-red-700 p-6 text-white">
                  <Sunrise className="h-9 w-9" />
                  <div>
                    <p className="font-display text-xl font-bold">Morning Batch</p>
                    <p className="text-sm text-red-100">6:00 AM – 10:00 AM</p>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 text-sm text-slate-600">
                    {['Ideal for college-going students', 'Fresh-mind concept sessions', 'Daily morning DPP practice', 'Library access after class'].map((x) => (
                      <li key={x} className="flex items-center gap-2">
                        <BadgeCheck className="h-4 w-4 text-crimson" /> {x}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="card overflow-hidden">
                <div className="flex items-center gap-3 bg-navy-gradient p-6 text-white">
                  <Sunset className="h-9 w-9" />
                  <div>
                    <p className="font-display text-xl font-bold">Evening Batch</p>
                    <p className="text-sm text-brand-100">5:00 PM – 9:00 PM</p>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 text-sm text-slate-600">
                    {['Perfect for working aspirants', 'Doubt-clearing focused sessions', 'Weekend full-length mocks', 'Extra classes for weak students'].map((x) => (
                      <li key={x} className="flex items-center gap-2">
                        <BadgeCheck className="h-4 w-4 text-slateblue" /> {x}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* infrastructure */}
      <section className="section bg-softgrey">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Our campus"
              title="Infrastructure built for focus"
              subtitle="Everything in our Patna center is designed to keep you comfortable, attentive and safe."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Projector, title: 'Smart Classrooms', desc: 'Projector-enabled rooms with clear audio for concept-rich teaching.', accent: 'slateblue' },
              { icon: Armchair, title: 'Comfortable Seating', desc: 'Spacious, ergonomic benches that keep you focused through long sessions.', accent: 'crimson' },
              { icon: Wind, title: 'Air-Cooled Halls', desc: 'Well-ventilated, cool classrooms for a pleasant study atmosphere.', accent: 'navy' },
              { icon: ShieldCheck, title: 'CCTV Secured', desc: 'Fully monitored, safe premises for students and parents’ peace of mind.', accent: 'slateblue' },
              { icon: Building2, title: 'Central Location', desc: 'Easily reachable at Rampur Road, Near Sai Chowk, Patna.', accent: 'crimson' },
              { icon: Armchair, title: 'Attached Library', desc: 'Direct access to our 24/7 premium and simple study wings.', accent: 'navy' },
            ].map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 0.08}>
                <FeatureCard {...f} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* enrollment process */}
      <section className="section">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Simple & transparent"
              title="How to enroll in 4 steps"
              subtitle="Joining a batch is quick and hassle-free — walk in or call us to begin."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              { icon: ClipboardList, title: 'Enquire', desc: 'Call us or fill the form to share your target exam and goals.' },
              { icon: UserCheck, title: 'Counselling', desc: 'Get a free counselling session and a recommended batch.' },
              { icon: CreditCard, title: 'Enroll', desc: 'Complete easy admission with affordable, transparent fees.' },
              { icon: BadgeCheck, title: 'Start Learning', desc: 'Begin classes, receive material and your study schedule.' },
            ].map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="card relative h-full p-6 text-center">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-gradient text-white">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <span className="mt-4 block font-display text-xs font-bold uppercase tracking-wider text-crimson">
                    Step {i + 1}
                  </span>
                  <h3 className="mt-1 font-display text-base font-bold text-navy">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="btn-crimson">
              Book a Campus Visit <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/coaching/faculty" className="btn-ghost">
              Meet the Faculty
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Experience a free demo class"
        subtitle="Sit in a real session at our Patna center and feel the teaching quality before you enroll."
        primary={{ label: 'Reserve a Demo Seat', to: '/contact' }}
        secondary={{ label: 'View Online Option', to: '/coaching/online' }}
      />
    </>
  )
}
