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
import OfflineCourseDetail from './pages/coaching/OfflineCourseDetail.jsx'
import Faculty from './pages/coaching/Faculty.jsx'
import LibraryHub from './pages/library/LibraryHub.jsx'
import LibraryWing from './pages/library/LibraryWing.jsx'
import ConsultancyGateway from './pages/consultancy/ConsultancyGateway.jsx'
import TechAdmissions from './pages/consultancy/TechAdmissions.jsx'
import MgmtLaw from './pages/consultancy/MgmtLaw.jsx'
import Medical from './pages/consultancy/Medical.jsx'
import AdmissionHub from './pages/consultancy/AdmissionHub.jsx'
import TiffinService from './pages/TiffinService.jsx'
import Hostel from './pages/Hostel.jsx'
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
          <Route path="/coaching/offline/:slug" element={<OfflineCourseDetail />} />
          <Route path="/coaching/faculty" element={<Faculty />} />

          <Route path="/library" element={<LibraryHub />} />
          <Route path="/library/toppers" element={<LibraryWing tier="toppers" />} />
          <Route path="/library/digital" element={<LibraryWing tier="digital" />} />
          <Route path="/library/premium" element={<LibraryWing tier="premium" />} />
          <Route path="/library/luxury" element={<LibraryWing tier="luxury" />} />

          <Route path="/consultancy" element={<ConsultancyGateway />} />
          <Route path="/consultancy/admission" element={<AdmissionHub />} />
          <Route path="/consultancy/tech" element={<TechAdmissions />} />
          <Route path="/consultancy/mgmt-law" element={<MgmtLaw />} />
          <Route path="/consultancy/medical" element={<Medical />} />

          <Route path="/tiffin" element={<TiffinService />} />
          <Route path="/hostel" element={<Hostel />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  )
}
