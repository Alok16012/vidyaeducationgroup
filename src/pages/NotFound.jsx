import { Link } from 'react-router-dom'
import { Home, Compass } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-navy-gradient text-white">
      <div className="absolute inset-0 bg-hero-grid [background-size:24px_24px] opacity-30" />
      <div className="container-page relative text-center">
        <p className="font-display text-7xl font-extrabold sm:text-9xl">
          4<span className="text-crimson">0</span>4
        </p>
        <h1 className="mt-4 font-display text-2xl font-bold sm:text-3xl">Page not found</h1>
        <p className="mx-auto mt-3 max-w-md text-brand-100">
          The page you are looking for may have moved. Let's get you back on the right path.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/" className="btn-crimson">
            <Home className="h-4 w-4" /> Back Home
          </Link>
          <Link to="/coaching" className="btn border border-white/30 bg-white/10 text-white hover:bg-white/20">
            <Compass className="h-4 w-4" /> Explore Coaching
          </Link>
        </div>
      </div>
    </section>
  )
}
