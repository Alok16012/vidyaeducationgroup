import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Send } from 'lucide-react'
import Logo from './Logo.jsx'
import { BRAND, NAV } from '../data/site.js'

export default function Footer() {
  const [subscriberEmail, setSubscriberEmail] = useState('')
  const [subscribeMessage, setSubscribeMessage] = useState('')
  const library = NAV.find((n) => n.label === 'Library')
  const coaching = NAV.find((n) => n.label === 'Coaching Centres')
  const tiffin = NAV.find((n) => n.label === 'Tiffin Services')
  const counselling = NAV.find((n) => n.label === 'Consultancy')

  const handleSubscribe = (event) => {
    event.preventDefault()
    setSubscribeMessage('Thank you for subscribing')
    setSubscriberEmail('')
  }

  return (
    <footer className="bg-navy text-slate-300">
      <div className="container-page py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo boxed src="/images/footer-vidya-logo.jpg" imgClass="h-36 sm:h-40" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              An integrated education ecosystem in Patna — competitive coaching, a 24/7 premium
              digital library, and expert career consultancy under one trusted roof.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-slate-300 transition hover:bg-crimson hover:text-white"
                  aria-label="social link"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-5">
            <FooterCol title="Library" links={library.children} />
            <FooterCol title="Coaching Centres" links={coaching.children} />
            <FooterCol title="Tiffin Services" links={[tiffin]} />
            <FooterCol title="Consultancy" links={[counselling]} />
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Reach Us
            </h4>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-crimson" />
                <span>{BRAND.address}</span>
              </li>
              {BRAND.phones.map((p, i) => (
                <li key={p} className="flex gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-crimson" />
                  <a href={`tel:${BRAND.phonesRaw[i]}`} className="transition hover:text-white">
                    {p}
                  </a>
                </li>
              ))}
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-crimson" />
                <a href={`mailto:${BRAND.email}`} className="transition hover:text-white">
                  {BRAND.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-crimson" />
                <span>Library: {BRAND.libraryHours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 rounded-2xl bg-white/5 p-6 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-base font-bold text-white">
              Get notifications, results & batch alerts
            </p>
            <p className="text-sm text-slate-400">Join our free updates list — no spam, ever.</p>
          </div>
          <div className="mt-4 w-full max-w-md sm:mt-0">
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                required
                placeholder="Your email address"
                value={subscriberEmail}
                onChange={(event) => {
                  setSubscriberEmail(event.target.value)
                  if (subscribeMessage) setSubscribeMessage('')
                }}
                className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-crimson focus:outline-none"
              />
              <button type="submit" className="btn-crimson shrink-0" aria-label="Subscribe">
                <Send className="h-4 w-4" />
              </button>
            </form>
            {subscribeMessage && (
              <p className="mt-3 rounded-xl bg-emerald-500/10 px-4 py-2 text-sm font-bold text-emerald-300" role="status" aria-live="polite">
                {subscribeMessage}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-5 text-xs text-slate-400 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
          <p>
            Director: <span className="text-white">{BRAND.director}</span> · {BRAND.tagline}
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, links }) {
  return (
    <div>
      <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
        {title}
      </h4>
      <ul className="mt-5 space-y-3 text-sm">
        {links.map((l) => (
          <li key={l.to}>
            <Link to={l.to} className="text-slate-400 transition hover:text-crimson">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
