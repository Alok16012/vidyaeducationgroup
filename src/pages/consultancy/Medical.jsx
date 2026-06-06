import { Stethoscope, HeartPulse, Syringe, Map, FileCheck2, Building2, GraduationCap, ShieldPlus, Activity } from 'lucide-react'
import VerticalPage from './VerticalPage.jsx'

export default function Medical() {
  return (
    <VerticalPage
      accent="crimson"
      eyebrow="Consultancy · Medical & Nursing"
      title="Build a caring career in"
      highlight="healthcare"
      subtitle="Strategic application guidance for Nursing, ANM and GNM programs — with support for institutional allocations and the entire admission process."
      breadcrumbLabel="Medical & Nursing"
      courses={[
        { name: 'B.Sc Nursing', full: 'Bachelor of Science in Nursing', icon: Stethoscope, duration: '4 Years', desc: 'A full professional nursing degree with strong hospital and clinical exposure.', eligibility: '10+2 with PCB; entrance / merit based.' },
        { name: 'ANM', full: 'Auxiliary Nurse Midwifery', icon: Syringe, duration: '2 Years', desc: 'A focused diploma for community health and midwifery roles.', eligibility: '10+2 (any stream, PCB preferred).' },
        { name: 'GNM', full: 'General Nursing & Midwifery', icon: HeartPulse, duration: '3 Years', desc: 'A widely-recognised nursing diploma with broad employment scope.', eligibility: '10+2 with 40%+; PCB / arts as per institute.' },
      ]}
      roadmap={[
        { title: 'Eligibility Check', desc: 'We verify your stream, marks and entrance eligibility.' },
        { title: 'Course Selection', desc: 'Choose between B.Sc Nursing, ANM or GNM based on goals.' },
        { title: 'Institute Allocation', desc: 'Match to government and private nursing institutions.' },
        { title: 'Admission Support', desc: 'Application, counselling and document verification help.' },
      ]}
      colleges={[
        'Government Nursing Colleges',
        'Private Nursing Institutes',
        'Hospital-attached Schools',
        'INC-recognised Institutions',
        'State Nursing Councils',
        'Paramedical Institutes',
      ]}
      careers={[
        'Staff Nurse (Govt. / Private)',
        'Community Health Worker',
        'ICU / OT Nurse',
        'Midwife / ANM',
        'Hospital Administrator',
        'Healthcare Educator',
      ]}
      features={[
        { icon: Map, title: 'Course Guidance', desc: 'Pick the right nursing path for your goals and eligibility.', accent: 'crimson' },
        { icon: FileCheck2, title: 'Application Support', desc: 'Help with forms, entrance and document verification.', accent: 'slateblue' },
        { icon: Building2, title: 'Institute Allocation', desc: 'Strategic placement across recognised institutions.', accent: 'navy' },
        { icon: ShieldPlus, title: 'INC Recognition Check', desc: 'We ensure your institute is properly recognised and valid.', accent: 'crimson' },
        { icon: Activity, title: 'Scope & Outcomes', desc: 'Clarity on job prospects and growth in healthcare.', accent: 'slateblue' },
        { icon: GraduationCap, title: 'Scholarship Help', desc: 'Identify financial aid and scholarship options.', accent: 'navy' },
      ]}
    />
  )
}
