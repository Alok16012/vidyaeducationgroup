import { MapPin, Phone, Mail, Clock, Navigation, MessageCircle } from 'lucide-react'
import { PageHero, Reveal, SectionHeading } from '../components/ui.jsx'
import LeadForm from '../components/LeadForm.jsx'
import { BRAND } from '../data/site.js'

function isOpenNow() {
  const now = new Date()
  const day = now.getDay() // 0 Sun .. 6 Sat
  const h = now.getHours()
  if (day === 0) return h >= 7 && h < 13
  if (day === 6) return h >= 6 && h < 20
  return h >= 6 && h < 21
}

export default function Contact() {
  const open = isOpenNow()
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="We're here to give you the"
        highlight="right direction"
        subtitle="Call us, message us or visit our Patna campus. Our counselling team is ready to help you choose coaching, a library plan or the right admission path."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Contact Us' }]}
      />

      <section className="section">
        <div className="container-page grid gap-8 lg:grid-cols-3">
          {/* info cards */}
          <div className="space-y-5 lg:col-span-1">
            <Reveal>
              <div className="card p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-crimson/10 text-crimson">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-base font-bold text-navy">Visit Campus</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{BRAND.address}</p>
                <a
                  href="https://maps.google.com/?q=Rampur+Road+Sai+Chowk+Patna+Bihar"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-slateblue hover:text-crimson"
                >
                  <Navigation className="h-4 w-4" /> Get Directions
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="card p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-slateblue">
                    <Phone className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-base font-bold text-navy">Call / WhatsApp</h3>
                </div>
                <div className="mt-4 space-y-2">
                  {BRAND.phones.map((p, i) => (
                    <a
                      key={p}
                      href={`tel:${BRAND.phonesRaw[i]}`}
                      className="flex items-center justify-between rounded-xl bg-softgrey px-4 py-3 text-sm font-semibold text-navy transition hover:bg-brand-50"
                    >
                      {p} <Phone className="h-4 w-4 text-slateblue" />
                    </a>
                  ))}
                  <a
                    href={`https://wa.me/${BRAND.phonesRaw[0].replace('+', '')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-white"
                  >
                    <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
                  </a>
                </div>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="mt-3 flex items-center gap-2 text-sm text-slate-600 hover:text-slateblue"
                >
                  <Mail className="h-4 w-4" /> {BRAND.email}
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="card p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy/5 text-navy">
                      <Clock className="h-5 w-5" />
                    </span>
                    <h3 className="font-display text-base font-bold text-navy">Office Hours</h3>
                  </div>
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${
                      open ? 'bg-emerald-50 text-emerald-600' : 'bg-crimson/10 text-crimson'
                    }`}
                  >
                    <span
                      className={`h-2 w-2 rounded-full ${open ? 'bg-emerald-500' : 'bg-crimson'}`}
                    />
                    {open ? 'Open now' : 'Closed now'}
                  </span>
                </div>
                <ul className="mt-4 space-y-2 text-sm">
                  {BRAND.hours.map((h) => (
                    <li key={h.day} className="flex justify-between border-b border-slate-100 pb-2 text-slate-600 last:border-0">
                      <span className="font-medium">{h.day}</span>
                      <span>{h.time}</span>
                    </li>
                  ))}
                  <li className="flex justify-between pt-1 text-slate-600">
                    <span className="font-medium text-crimson">Library</span>
                    <span className="font-semibold text-crimson">24 / 7 Open</span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>

          {/* form */}
          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="card p-6 sm:p-8">
              <SectionHeading
                align="left"
                eyebrow="Send a message"
                title="Tell us how we can help"
              />
              <div className="mt-8">
                <LeadForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* map */}
      <section className="pb-20">
        <div className="container-page">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-slate-100 shadow-card">
              <div className="relative h-[360px] w-full bg-softgrey">
                <div className="absolute inset-0 bg-hero-grid [background-size:26px_26px] opacity-60" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-crimson text-white shadow-premium">
                    <MapPin className="h-8 w-8" />
                  </span>
                  <p className="mt-4 font-display text-lg font-bold text-navy">
                    {BRAND.shortName}
                  </p>
                  <p className="mt-1 max-w-xs text-sm text-slate-500">{BRAND.address}</p>
                  <a
                    href="https://maps.google.com/?q=Rampur+Road+Sai+Chowk+Patna+Bihar"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary mt-5"
                  >
                    <Navigation className="h-4 w-4" /> Open in Google Maps
                  </a>
                  <p className="mt-3 text-xs text-slate-400">
                    (Embedded Google Maps placeholder — replace with live iframe in production)
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
