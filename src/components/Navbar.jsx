import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, ChevronDown, Phone, ArrowRight } from 'lucide-react'
import Logo from './Logo.jsx'
import { NAV, BRAND } from '../data/site.js'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setOpenGroup(null)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => (document.body.style.overflow = '')
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 shadow-card backdrop-blur-md' : 'bg-white'
      }`}
    >
      {/* top bar */}
      <div className="hidden bg-navy text-white lg:block">
        <div className="container-page flex h-9 items-center justify-between text-xs">
          <p className="font-medium text-brand-100">
            {BRAND.tagline} · <span className="text-white">{BRAND.address}</span>
          </p>
          <div className="flex items-center gap-4">
            {BRAND.phones.map((p, i) => (
              <a
                key={p}
                href={`tel:${BRAND.phonesRaw[i]}`}
                className="flex items-center gap-1.5 font-semibold transition hover:text-crimson"
              >
                <Phone className="h-3.5 w-3.5" /> {p}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* main bar */}
      <div className="container-page flex h-16 items-center justify-between lg:h-20">
        <Link to="/" aria-label="Home">
          <Logo />
        </Link>

        {/* desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="group relative"
                onMouseEnter={() => setOpenGroup(item.label)}
                onMouseLeave={() => setOpenGroup(null)}
              >
                <button className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold text-navy transition hover:text-slateblue">
                  {item.label}
                  <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" />
                </button>
                <AnimatePresence>
                  {openGroup === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-1/2 top-full w-80 -translate-x-1/2 pt-3"
                    >
                      <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white p-2 shadow-premium">
                        {item.children.map((c) => (
                          <Link
                            key={c.to}
                            to={c.to}
                            className="flex items-start gap-3 rounded-xl p-3 transition hover:bg-softgrey"
                          >
                            <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-slateblue">
                              <ArrowRight className="h-4 w-4" />
                            </span>
                            <span>
                              <span className="block text-sm font-semibold text-navy">
                                {c.label}
                              </span>
                              <span className="block text-xs text-slate-500">{c.desc}</span>
                            </span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-sm font-semibold transition ${
                    isActive ? 'text-crimson' : 'text-navy hover:text-slateblue'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link to="/contact" className="btn-crimson !px-5 !py-2.5 text-sm">
            Enroll Now
          </Link>
        </div>

        {/* mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-navy lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-navy/40 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 34 }}
              className="fixed right-0 top-0 z-50 flex h-full w-[86%] max-w-sm flex-col bg-white shadow-premium lg:hidden"
            >
              <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                <Logo />
                <button
                  onClick={() => setOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-4 py-4">
                {NAV.map((item) =>
                  item.children ? (
                    <div key={item.label} className="border-b border-slate-100 py-1">
                      <button
                        onClick={() =>
                          setOpenGroup((g) => (g === item.label ? null : item.label))
                        }
                        className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-bold text-navy"
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-4 w-4 transition ${
                            openGroup === item.label ? 'rotate-180 text-crimson' : ''
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {openGroup === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="space-y-1 pb-2 pl-3">
                              {item.children.map((c) => (
                                <Link
                                  key={c.to}
                                  to={c.to}
                                  className="block rounded-lg px-3 py-2.5 text-sm text-slate-600 transition hover:bg-softgrey hover:text-slateblue"
                                >
                                  {c.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      end={item.to === '/'}
                      className={({ isActive }) =>
                        `block border-b border-slate-100 px-3 py-3.5 text-sm font-bold transition ${
                          isActive ? 'text-crimson' : 'text-navy'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  ),
                )}
              </div>

              <div className="border-t border-slate-100 p-4">
                <Link to="/contact" className="btn-crimson w-full">
                  Enroll Now <ArrowRight className="h-4 w-4" />
                </Link>
                <div className="mt-3 flex flex-col gap-1.5">
                  {BRAND.phones.map((p, i) => (
                    <a
                      key={p}
                      href={`tel:${BRAND.phonesRaw[i]}`}
                      className="flex items-center gap-2 text-sm font-semibold text-slateblue"
                    >
                      <Phone className="h-4 w-4" /> {p}
                    </a>
                  ))}
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
