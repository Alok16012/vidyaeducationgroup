import { Cpu, Code2, Database, Map, FileCheck2, Building2, GraduationCap, Laptop, Rocket } from 'lucide-react'
import VerticalPage from './VerticalPage.jsx'

export default function TechAdmissions() {
  return (
    <VerticalPage
      accent="slateblue"
      eyebrow="Consultancy · Tech & IT"
      title="Engineer your future in"
      highlight="technology"
      subtitle="Complete admission guidance for B.Tech, BCA and MCA — from choosing the right branch to landing a seat at a reputed tech college."
      breadcrumbLabel="Tech & IT Admissions"
      courses={[
        { name: 'B.Tech', full: 'Bachelor of Technology', icon: Cpu, duration: '4 Years', desc: 'Core engineering across CSE, IT, ECE, Mechanical and more with strong placement potential.', eligibility: '10+2 with PCM, valid entrance score (JEE / state CET).' },
        { name: 'BCA', full: 'Bachelor of Computer Applications', icon: Code2, duration: '3 Years', desc: 'A software-focused degree ideal for aspiring developers and IT professionals.', eligibility: '10+2 in any stream with Mathematics / Computer.' },
        { name: 'MCA', full: 'Master of Computer Applications', icon: Database, duration: '2 Years', desc: 'Advanced computing and software engineering for high-growth tech careers.', eligibility: 'Graduation with Mathematics; valid entrance (NIMCET / CET).' },
      ]}
      roadmap={[
        { title: 'Stream & Branch Fit', desc: 'We match your aptitude and interests to the right tech branch.' },
        { title: 'Entrance Strategy', desc: 'Guidance on JEE, CET, NIMCET and college-level exams.' },
        { title: 'College Shortlist', desc: 'A ranked list of best-fit colleges by score and budget.' },
        { title: 'Admission & Counselling', desc: 'Form filling, document help and seat allotment support.' },
      ]}
      colleges={[
        'NITs & GFTIs (via JEE Main)',
        'State Govt. Engineering Colleges',
        'Reputed Private Universities',
        'Top BCA / MCA Institutes',
        'Deemed Tech Universities',
        'AICTE-approved Colleges',
      ]}
      careers={[
        'Software Engineer / Developer',
        'Data Analyst & Data Scientist',
        'Cloud & DevOps Engineer',
        'Cybersecurity Specialist',
        'AI / ML Engineer',
        'IT Consultant',
      ]}
      features={[
        { icon: Map, title: 'Branch Advisory', desc: 'Pick the right specialisation based on scope, salary and your strengths.', accent: 'slateblue' },
        { icon: FileCheck2, title: 'Entrance Guidance', desc: 'Clear plans for JEE, CET and university entrance preparation.', accent: 'crimson' },
        { icon: Building2, title: 'College Matching', desc: 'Data-driven shortlists tuned to your rank and preferences.', accent: 'navy' },
        { icon: Laptop, title: 'Skill Roadmap', desc: 'Advice on certifications and skills that boost employability.', accent: 'slateblue' },
        { icon: GraduationCap, title: 'Scholarship Help', desc: 'Identify merit and need-based scholarship opportunities.', accent: 'crimson' },
        { icon: Rocket, title: 'Placement Outlook', desc: 'Insights into placement records before you commit to a college.', accent: 'navy' },
      ]}
    />
  )
}
