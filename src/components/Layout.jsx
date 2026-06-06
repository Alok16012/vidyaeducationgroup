import { useState } from 'react'
import { Phone, X, MessageCircle } from 'lucide-react'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import { BRAND } from '../data/site.js'

export default function Layout({ children }) {
  const [openFab, setOpenFab] = useState(false)
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />

      {/* floating contact */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
        {openFab && (
          <div className="flex flex-col items-end gap-2">
            {BRAND.phones.map((p, i) => (
              <a
                key={p}
                href={`tel:${BRAND.phonesRaw[i]}`}
                className="flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-navy shadow-premium ring-1 ring-slate-100"
              >
                <Phone className="h-4 w-4 text-slateblue" /> {p}
              </a>
            ))}
            <a
              href={`https://wa.me/${BRAND.phonesRaw[0].replace('+', '')}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-white shadow-premium"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
          </div>
        )}
        <button
          onClick={() => setOpenFab((v) => !v)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-crimson text-white shadow-premium transition hover:scale-105"
          aria-label="Contact options"
        >
          {openFab ? <X className="h-6 w-6" /> : <Phone className="h-6 w-6" />}
        </button>
      </div>
    </div>
  )
}
