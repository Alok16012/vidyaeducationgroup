import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export function Reveal({ children, delay = 0, y = 24, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function Eyebrow({ children, className = '' }) {
  return <span className={`eyebrow ${className}`}>{children}</span>
}

export function SectionHeading({ eyebrow, title, subtitle, align = 'center', light = false }) {
  const alignment = align === 'center' ? 'mx-auto text-center items-center' : 'text-left items-start'
  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignment}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className={`heading-lg ${light ? '!text-white' : ''}`}>{title}</h2>
      {subtitle && (
        <p className={`text-base leading-relaxed ${light ? 'text-brand-100' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

export function StatCounter({ value, suffix = '', label, light = false }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf
    const start = performance.now()
    const dur = 1600
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setN(Math.floor(eased * value))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  return (
    <div ref={ref} className="text-center">
      <p
        className={`font-display text-4xl font-extrabold sm:text-5xl ${
          light ? 'text-white' : 'text-navy'
        }`}
      >
        {n.toLocaleString('en-IN')}
        <span className="text-crimson">{suffix}</span>
      </p>
      <p className={`mt-2 text-sm font-medium ${light ? 'text-brand-100' : 'text-slate-500'}`}>
        {label}
      </p>
    </div>
  )
}

export function FeatureCard({ icon: Icon, title, desc, accent = 'slateblue', className = '' }) {
  const ring = {
    slateblue: 'bg-brand-50 text-slateblue',
    crimson: 'bg-crimson/10 text-crimson',
    navy: 'bg-navy/5 text-navy',
  }[accent]
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`card group p-6 ${className}`}
    >
      <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${ring}`}>
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="font-display text-lg font-bold text-navy">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
    </motion.div>
  )
}

export function Pill({ children, tone = 'brand' }) {
  const tones = {
    brand: 'bg-brand-50 text-slateblue',
    crimson: 'bg-crimson/10 text-crimson',
    green: 'bg-emerald-50 text-emerald-700',
    amber: 'bg-amber-50 text-amber-700',
    slate: 'bg-slate-100 text-slate-600',
  }
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${tones[tone]}`}>
      {children}
    </span>
  )
}

export function PageHero({ eyebrow, title, highlight, subtitle, breadcrumb, children }) {
  return (
    <section className="relative overflow-hidden bg-navy-gradient text-white">
      <div className="absolute inset-0 bg-hero-grid [background-size:22px_22px] opacity-40" />
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-crimson/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-slateblue/40 blur-3xl" />
      <div className="container-page relative py-16 sm:py-20 lg:py-24">
        {breadcrumb && (
          <nav className="mb-5 flex flex-wrap items-center gap-2 text-xs font-medium text-brand-200">
            {breadcrumb.map((b, i) => (
              <span key={i} className="flex items-center gap-2">
                {b.to ? (
                  <Link to={b.to} className="transition hover:text-white">
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-white">{b.label}</span>
                )}
                {i < breadcrumb.length - 1 && <span className="text-brand-400">/</span>}
              </span>
            ))}
          </nav>
        )}
        <div className="max-w-3xl">
          {eyebrow && (
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-100 ring-1 ring-white/20">
              {eyebrow}
            </span>
          )}
          <h1 className="heading-xl !text-white">
            {title} {highlight && <span className="text-gradient bg-white">{highlight}</span>}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-100 sm:text-lg">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  )
}

export function CTASection({ title, subtitle, primary, secondary }) {
  return (
    <section className="section">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-navy-gradient px-6 py-14 text-center text-white shadow-premium sm:px-12">
          <div className="absolute inset-0 bg-hero-grid [background-size:20px_20px] opacity-30" />
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-crimson/30 blur-3xl" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="heading-lg !text-white">{title}</h2>
            {subtitle && <p className="mt-4 text-brand-100">{subtitle}</p>}
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {primary && (
                <Link to={primary.to} className="btn-crimson">
                  {primary.label} <ArrowRight className="h-4 w-4" />
                </Link>
              )}
              {secondary && (
                <Link
                  to={secondary.to}
                  className="btn border border-white/30 bg-white/10 text-white hover:bg-white/20"
                >
                  {secondary.label}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function CheckList({ items, className = '' }) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((it, i) => (
        <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
            <svg viewBox="0 0 20 20" className="h-3 w-3" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 011.4-1.4l3.1 3.1 6.8-6.8a1 1 0 011.4 0z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          {it}
        </li>
      ))}
    </ul>
  )
}
