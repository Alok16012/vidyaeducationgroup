import { Link } from 'react-router-dom'
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
  Sparkles,
  Coffee,
  CookingPot,
} from 'lucide-react'
import { PageHero, SectionHeading, Reveal, FeatureCard, CTASection } from '../components/ui.jsx'

const PLANS = [
  {
    name: 'Lunch Only',
    price: '₹1,800',
    per: '/month',
    points: ['1 meal a day (lunch)', 'Roti, rice, dal, sabzi', 'Hygienic home-style cooking', 'Pickup from center'],
  },
  {
    name: 'Lunch + Dinner',
    price: '₹3,200',
    per: '/month',
    popular: true,
    points: ['2 meals a day', 'Full thali both times', 'Free delivery to library/hostel', 'Weekly special menu', 'Sunday special'],
  },
  {
    name: 'Full Day',
    price: '₹4,200',
    per: '/month',
    points: ['Breakfast + lunch + dinner', 'Morning tea & snacks', 'Priority delivery', 'Custom diet on request'],
  },
]

const MENU = [
  { day: 'Monday', lunch: 'Rajma, Rice, Roti, Salad', dinner: 'Aloo-Gobhi, Dal, Roti' },
  { day: 'Tuesday', lunch: 'Chole, Jeera Rice, Roti', dinner: 'Mix Veg, Dal, Roti' },
  { day: 'Wednesday', lunch: 'Kadhi Pakora, Rice, Roti', dinner: 'Paneer, Dal, Roti' },
  { day: 'Thursday', lunch: 'Dal Makhani, Rice, Roti', dinner: 'Bhindi, Dal, Roti' },
  { day: 'Friday', lunch: 'Matar-Paneer, Rice, Roti', dinner: 'Aloo-Soyabean, Dal, Roti' },
  { day: 'Saturday', lunch: 'Sambar, Rice, Roti', dinner: 'Seasonal Veg, Dal, Roti' },
  { day: 'Sunday', lunch: 'Special Thali + Sweet', dinner: 'Pulao / Khichdi + Raita' },
]

export default function TiffinService() {
  return (
    <>
      <PageHero
        eyebrow="Tiffin Service · Mess"
        title="Ghar jaisa khana, taaki padhai par rahe"
        highlight="poora focus"
        subtitle="Hygienic, home-style tiffin and mess service for students — fresh, nutritious meals delivered to your library cabin or hostel, so you never lose study time worrying about food."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Tiffin Service' }]}
      >
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold text-brand-100 ring-1 ring-white/20">
          <Utensils className="h-4 w-4 text-crimson" /> Pure veg · fresh daily · student-friendly pricing
        </span>
      </PageHero>

      {/* features */}
      <section className="section">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Why our tiffin"
              title="Food that feels like home"
              subtitle="Every meal is cooked fresh in a clean kitchen with quality ingredients — balanced, tasty and easy on a student's budget."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: ChefHat, title: 'Home-Style Cooking', desc: 'Simple, comforting ghar-jaisa khana cooked daily by experienced cooks.', accent: 'crimson' },
              { icon: Leaf, title: 'Pure Veg & Fresh', desc: '100% vegetarian meals prepared fresh every day — never reheated or stored.', accent: 'slateblue' },
              { icon: ShieldCheck, title: 'Hygienic Kitchen', desc: 'Clean, FSSAI-conscious kitchen with strict hygiene and quality checks.', accent: 'navy' },
              { icon: Truck, title: 'Free Delivery', desc: 'Hot tiffin delivered right to your library cabin, hostel or PG on time.', accent: 'crimson' },
              { icon: Salad, title: 'Balanced Nutrition', desc: 'Dal, sabzi, roti, rice and salad — a balanced thali to keep you energized.', accent: 'slateblue' },
              { icon: Soup, title: 'Weekly Variety', desc: 'A rotating weekly menu so you never get bored of the same food.', accent: 'navy' },
            ].map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 0.08}>
                <FeatureCard {...f} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* weekly menu */}
      <section className="section bg-softgrey">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="This week's menu"
              title="A sample weekly meal plan"
              subtitle="Here's a taste of what's on the table. Festive days and Sundays get a special thali with sweets."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-12 overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-card">
              <div className="grid grid-cols-12 bg-navy px-6 py-4 text-xs font-bold uppercase tracking-wider text-white">
                <div className="col-span-3 sm:col-span-2">Day</div>
                <div className="col-span-5 sm:col-span-5">Lunch</div>
                <div className="col-span-4 sm:col-span-5">Dinner</div>
              </div>
              {MENU.map((m, i) => (
                <div
                  key={m.day}
                  className={`grid grid-cols-12 items-center px-6 py-4 text-sm ${
                    i % 2 ? 'bg-softgrey/50' : 'bg-white'
                  } ${m.day === 'Sunday' ? 'bg-crimson/5' : ''}`}
                >
                  <div className="col-span-3 flex items-center gap-2 font-semibold text-navy sm:col-span-2">
                    {m.day === 'Sunday' && <Sparkles className="h-4 w-4 text-crimson" />}
                    {m.day}
                  </div>
                  <div className="col-span-5 text-slate-600 sm:col-span-5">{m.lunch}</div>
                  <div className="col-span-4 text-slate-600 sm:col-span-5">{m.dinner}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <p className="mt-6 text-center text-xs text-slate-400">
            * Menu may vary slightly based on seasonal vegetables and availability.
          </p>
        </div>
      </section>

      {/* plans */}
      <section className="section">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Monthly plans"
              title="Simple plans, no hidden charges"
              subtitle="Pick a plan that fits your routine and budget. Pause or upgrade anytime — just give us a day's notice."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PLANS.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.1}>
                <div className={`card relative flex h-full flex-col p-6 ${p.popular ? 'ring-2 ring-crimson' : ''}`}>
                  {p.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-crimson px-4 py-1 text-xs font-bold text-white">
                      Most Popular
                    </span>
                  )}
                  <p className="font-display text-lg font-bold text-navy">{p.name}</p>
                  <div className="mt-3 flex items-end gap-1">
                    <span className="font-display text-4xl font-extrabold text-navy">{p.price}</span>
                    <span className="pb-1 text-sm text-slate-500">{p.per}</span>
                  </div>
                  <ul className="mt-6 flex-1 space-y-3">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" /> {pt}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className={`mt-6 ${p.popular ? 'btn-crimson' : 'btn-ghost'} w-full`}>
                    Choose {p.name}
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-slate-400">
            * Indicative pricing — please contact us for current offers and student discounts.
          </p>
        </div>
      </section>

      {/* amenities strip */}
      <section className="pb-4">
        <div className="container-page">
          <div className="grid grid-cols-2 gap-4 rounded-3xl bg-navy-gradient p-6 text-white sm:grid-cols-4">
            {[
              { icon: Clock, label: 'On-time delivery' },
              { icon: CookingPot, label: 'Cooked fresh daily' },
              { icon: Coffee, label: 'Morning tea option' },
              { icon: ShieldCheck, label: 'Hygiene assured' },
            ].map((x) => (
              <div key={x.label} className="flex items-center gap-2 text-sm font-medium">
                <x.icon className="h-5 w-5 text-crimson" /> {x.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Bhookh mitao, padhai par dhyan lagao"
        subtitle="Subscribe to our student tiffin service today and get fresh, home-style meals delivered without breaking your study routine."
        primary={{ label: 'Start Tiffin Subscription', to: '/contact' }}
        secondary={{ label: 'Talk to Us', to: '/contact' }}
      />
    </>
  )
}
