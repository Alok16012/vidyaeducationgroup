import {
  Utensils,
  ChefHat,
  Leaf,
  Truck,
  Clock,
  Soup,
  Salad,
  ShieldCheck,
  CheckCircle2,
  CookingPot,
  Phone,
  MapPin,
  MessageCircle,
  ClipboardList,
} from 'lucide-react'
import { PageHero, SectionHeading, Reveal, FeatureCard, CTASection, Pill } from '../components/ui.jsx'
import { BRAND } from '../data/site.js'

const TIFFIN_PHONE = '9934299198'
const TIFFIN_PHONE_DISPLAY = '+91 99342 99198'
const TIFFIN_ADDRESS = BRAND.address

const RATES = [
  {
    name: 'Veg Monthly Tiffin',
    price: '₹2,200',
    tone: 'bg-emerald-50 text-emerald-700',
    points: ['Fresh vegetarian meals', 'Student-friendly monthly plan', 'Dish choice available'],
  },
  {
    name: 'Non-Veg Monthly Tiffin',
    price: '₹2,400',
    tone: 'bg-crimson/10 text-crimson',
    points: ['Veg meals with non-veg option', 'Monthly subscription', 'Dish choice available'],
  },
]

const DISH_CHOICES = [
  'Roti',
  'Rice',
  'Dal',
  'Seasonal Sabzi',
  'Paneer / Special Veg',
  'Egg / Chicken option',
  'Salad',
  'Pickle',
]

export default function TiffinService() {
  return (
    <>
      <PageHero
        eyebrow="Tiffin Services"
        title="Fresh student meals with"
        highlight="your dish choice"
        subtitle="A simple monthly tiffin service for students. Choose dishes according to your taste, select veg or non-veg, and get hygienic home-style food at a student-friendly rate."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Tiffin Services' }]}
      >
        <div className="flex flex-wrap gap-3">
          <a href={`tel:+91${TIFFIN_PHONE}`} className="btn-crimson">
            <Phone className="h-4 w-4" /> {TIFFIN_PHONE_DISPLAY}
          </a>
          <Pill tone="green">Veg ₹2,200/month</Pill>
          <Pill tone="crimson">Non-Veg ₹2,400/month</Pill>
        </div>
      </PageHero>

      <section className="section">
        <div className="container-page grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-card">
              <SectionHeading
                align="left"
                eyebrow="Monthly Rates"
                title="Clear pricing, simple subscription"
                subtitle="Choose the plan that matches your food preference. Students can discuss dish choices before starting."
              />
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {RATES.map((rate) => (
                  <div key={rate.name} className="rounded-3xl border border-slate-100 p-5">
                    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${rate.tone}`}>
                      Monthly
                    </span>
                    <h3 className="mt-4 font-display text-lg font-bold text-navy">{rate.name}</h3>
                    <p className="mt-3 font-display text-5xl font-extrabold text-navy">{rate.price}</p>
                    <p className="mt-1 text-sm text-slate-500">per month</p>
                    <ul className="mt-5 space-y-3">
                      {rate.points.map((point) => (
                        <li key={point} className="flex items-start gap-2 text-sm font-medium text-slate-600">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" /> {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl bg-navy-gradient p-6 text-white shadow-premium">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
                <ClipboardList className="h-6 w-6" />
              </span>
              <h2 className="mt-5 font-display text-2xl font-bold">Choose dishes your way</h2>
              <p className="mt-3 text-sm leading-relaxed text-brand-100">
                Students can choose dishes according to their taste and routine. Share your preference
                for veg or non-veg meals, and we will guide you with available daily options.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {DISH_CHOICES.map((dish) => (
                  <span key={dish} className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold text-white ring-1 ring-white/10">
                    {dish}
                  </span>
                ))}
              </div>
              <a
                href={`https://wa.me/91${TIFFIN_PHONE}?text=${encodeURIComponent('Hello, I want to start tiffin service and choose my dishes.')}`}
                target="_blank"
                rel="noreferrer"
                className="btn-crimson mt-8 w-full"
              >
                <MessageCircle className="h-4 w-4" /> Discuss Dish Choice
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-softgrey">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Service Features"
              title="Made for students"
              subtitle="Clean, regular and flexible meals for students who want dependable food during study hours."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: ChefHat, title: 'Home-Style Cooking', desc: 'Simple, fresh and comforting meals prepared for everyday student routines.', accent: 'crimson' },
              { icon: Leaf, title: 'Veg & Non-Veg Options', desc: 'Choose a vegetarian or non-vegetarian monthly plan according to your preference.', accent: 'slateblue' },
              { icon: ShieldCheck, title: 'Hygienic Preparation', desc: 'Food is prepared with cleanliness, quality ingredients and regular kitchen care.', accent: 'navy' },
              { icon: Salad, title: 'Dish Choice Available', desc: 'Students can choose dishes as per taste and available daily options.', accent: 'slateblue' },
              { icon: Truck, title: 'Student-Friendly Service', desc: 'Designed for students staying near coaching, library, PG or hostel areas.', accent: 'crimson' },
              { icon: Soup, title: 'Balanced Meal Style', desc: 'Meals can include roti, rice, dal, sabzi, salad and special options.', accent: 'navy' },
            ].map((feature, i) => (
              <Reveal key={feature.title} delay={(i % 3) * 0.08}>
                <FeatureCard {...feature} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-6 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-card">
              <h2 className="font-display text-2xl font-bold text-navy">Address</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{TIFFIN_ADDRESS}</p>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(TIFFIN_ADDRESS)}`}
                target="_blank"
                rel="noreferrer"
                className="btn-primary mt-5"
              >
                <MapPin className="h-4 w-4" /> Open in Google Maps
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-card">
              <h2 className="font-display text-2xl font-bold text-navy">Contact</h2>
              <a href={`tel:+91${TIFFIN_PHONE}`} className="mt-5 flex items-center gap-3 rounded-2xl bg-softgrey p-4 font-display text-xl font-bold text-slateblue">
                <Phone className="h-5 w-5 text-crimson" /> {TIFFIN_PHONE_DISPLAY}
              </a>
              <a
                href={`https://wa.me/91${TIFFIN_PHONE}`}
                target="_blank"
                rel="noreferrer"
                className="mt-4 flex items-center gap-3 rounded-2xl bg-emerald-50 p-4 text-sm font-bold text-emerald-700"
              >
                <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-4">
        <div className="container-page">
          <div className="grid grid-cols-2 gap-4 rounded-3xl bg-navy-gradient p-6 text-white sm:grid-cols-4">
            {[
              { icon: Clock, label: 'Regular service' },
              { icon: CookingPot, label: 'Cooked fresh' },
              { icon: Utensils, label: 'Dish choice' },
              { icon: ShieldCheck, label: 'Hygiene assured' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-sm font-medium">
                <item.icon className="h-5 w-5 text-crimson" /> {item.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Start your student tiffin subscription"
        subtitle="Call or WhatsApp us to choose veg or non-veg, share your dish preference and confirm your monthly service."
        primary={{ label: 'Call Tiffin Service', to: '/contact' }}
        secondary={{ label: 'Contact Us', to: '/contact' }}
      />
    </>
  )
}
