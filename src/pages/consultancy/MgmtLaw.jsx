import { Briefcase, TrendingUp, Scale, Map, FileCheck2, Building2, GraduationCap, Users, Gavel } from 'lucide-react'
import VerticalPage from './VerticalPage.jsx'

export default function MgmtLaw() {
  return (
    <VerticalPage
      accent="navy"
      eyebrow="Consultancy · Management & Law"
      title="Lead in business and"
      highlight="law"
      subtitle="Admission funnel tracking for MBA, BBA and LLB — guiding future corporate leaders and legal professionals to the right institutions."
      breadcrumbLabel="Management & Law"
      courses={[
        { name: 'MBA', full: 'Master of Business Administration', icon: TrendingUp, duration: '2 Years', desc: 'Specialise in Finance, Marketing, HR or Operations for leadership roles.', eligibility: 'Graduation in any stream; CAT / MAT / CMAT / state CET.' },
        { name: 'BBA', full: 'Bachelor of Business Administration', icon: Briefcase, duration: '3 Years', desc: 'A strong management foundation and a direct pathway into the MBA.', eligibility: '10+2 in any stream; merit or entrance based.' },
        { name: 'LLB', full: 'Bachelor of Legislative Law', icon: Scale, duration: '3 / 5 Years', desc: 'Integrated (BA-LLB) and 3-year LLB routes into the legal profession.', eligibility: '10+2 or graduation; CLAT / LSAT / state law entrance.' },
      ]}
      roadmap={[
        { title: 'Goal Mapping', desc: 'Define whether management, law or an integrated path suits you.' },
        { title: 'Entrance Planning', desc: 'Strategy for CAT, MAT, CLAT and other key exams.' },
        { title: 'Institute Shortlist', desc: 'Best B-schools and law schools matched to your profile.' },
        { title: 'Admission Funnel', desc: 'Track GD-PI rounds, applications and final allotment.' },
      ]}
      colleges={[
        'Top Government B-Schools',
        'AICTE-approved MBA Colleges',
        'National Law Universities (CLAT)',
        'Reputed Private Law Colleges',
        'University Management Departments',
        'Integrated BBA-MBA Programs',
      ]}
      careers={[
        'Business / Management Consultant',
        'Financial Analyst',
        'Marketing & Brand Manager',
        'HR Manager',
        'Corporate Lawyer / Advocate',
        'Legal Advisor & Compliance',
      ]}
      features={[
        { icon: Map, title: 'Career Mapping', desc: 'Align your strengths with management or legal career tracks.', accent: 'navy' },
        { icon: FileCheck2, title: 'Entrance Strategy', desc: 'Structured plans for CAT, MAT, CMAT and CLAT.', accent: 'crimson' },
        { icon: Building2, title: 'Institute Advisory', desc: 'Shortlists of top B-schools and law universities.', accent: 'slateblue' },
        { icon: Users, title: 'GD-PI Coaching', desc: 'Preparation support for group discussions and interviews.', accent: 'navy' },
        { icon: Gavel, title: 'Specialisation Guidance', desc: 'Choose the right MBA stream or branch of law.', accent: 'crimson' },
        { icon: GraduationCap, title: 'Application Tracking', desc: 'Stay updated through every stage of the admission funnel.', accent: 'slateblue' },
      ]}
    />
  )
}
