import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Dashboard from './pages/Dashboard.jsx'
import CoachingHub from './pages/coaching/CoachingHub.jsx'
import OnlineClasses from './pages/coaching/OnlineClasses.jsx'
import OfflineCenter from './pages/coaching/OfflineCenter.jsx'
import Faculty from './pages/coaching/Faculty.jsx'
import LibraryHub from './pages/library/LibraryHub.jsx'
import PremiumWing from './pages/library/PremiumWing.jsx'
import SimpleWing from './pages/library/SimpleWing.jsx'
import ConsultancyGateway from './pages/consultancy/ConsultancyGateway.jsx'
import TechAdmissions from './pages/consultancy/TechAdmissions.jsx'
import MgmtLaw from './pages/consultancy/MgmtLaw.jsx'
import Medical from './pages/consultancy/Medical.jsx'
import NotFound from './pages/NotFound.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/coaching" element={<CoachingHub />} />
          <Route path="/coaching/online" element={<OnlineClasses />} />
          <Route path="/coaching/offline" element={<OfflineCenter />} />
          <Route path="/coaching/faculty" element={<Faculty />} />

          <Route path="/library" element={<LibraryHub />} />
          <Route path="/library/premium" element={<PremiumWing />} />
          <Route path="/library/simple" element={<SimpleWing />} />

          <Route path="/consultancy" element={<ConsultancyGateway />} />
          <Route path="/consultancy/tech" element={<TechAdmissions />} />
          <Route path="/consultancy/mgmt-law" element={<MgmtLaw />} />
          <Route path="/consultancy/medical" element={<Medical />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  )
}
