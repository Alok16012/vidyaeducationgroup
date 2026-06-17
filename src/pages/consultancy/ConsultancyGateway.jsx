import { useEffect, useMemo, useState } from 'react'
import {
  ArrowRight,
  BookOpen,
  Building2,
  CheckCircle2,
  GraduationCap,
  Laptop,
  MapPin,
  MessageCircle,
  Phone,
  Stethoscope,
  UserRound,
  Video,
  X,
} from 'lucide-react'
import { SectionHeading, Reveal, FeatureCard, Pill } from '../../components/ui.jsx'
import { BRAND } from '../../data/site.js'

const COURSE_GROUPS = [
  { group: 'UG (Under Graduate)', icon: GraduationCap, courses: ['BCA', 'BBA', 'B.Sc', 'B.Com', 'BA', 'Other UG Course'] },
  { group: 'PG (Post Graduate)', icon: BookOpen, courses: ['MCA', 'MBA', 'M.Sc', 'M.Com', 'MA', 'Other PG Course'] },
  { group: 'Medical', icon: Stethoscope, courses: ['MBBS', 'Nursing', 'ANM', 'GNM', 'B.Sc Nursing'] },
  { group: 'Law', icon: Building2, courses: ['LLB', 'BA LLB', 'BBA LLB', 'Other Law Course'] },
  { group: 'Management', icon: UserRound, courses: ['BBA', 'MBA', 'PGDM', 'Other Management Course'] },
]

const COURSE_MODES = ['Regular Mode', 'Online Course', 'Distance Course']
const COUNSELLING_TYPES = ['Office Visit Counselling', 'Telephonic Counselling', 'Video Calling Counselling']
const STATES = ['Bihar', 'Jharkhand', 'Uttar Pradesh', 'West Bengal', 'Delhi NCR', 'Karnataka', 'Maharashtra', 'Other']
const STATE_COLLEGES = {
  Bihar: [],
  Jharkhand: [],
  'Uttar Pradesh': [],
  'West Bengal': [],
  'Delhi NCR': [],
  Karnataka: [],
  Maharashtra: [],
  Other: [],
}

const initialForm = {
  serviceType: 'Counselling',
  courseGroup: 'UG (Under Graduate)',
  course: 'BCA',
  courseMode: 'Regular Mode',
  counsellingType: 'Office Visit Counselling',
  state: 'Bihar',
  collegeName: '',
  collegeInfo: '',
  collegeWebsite: '',
  name: '',
  phone: '',
  notes: '',
}

export default function ConsultancyGateway() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [isFormOpen, setIsFormOpen] = useState(true)

  useEffect(() => {
    document.body.style.overflow = isFormOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isFormOpen])

  const selectedGroup = useMemo(
    () => COURSE_GROUPS.find((item) => item.group === form.courseGroup) || COURSE_GROUPS[0],
    [form.courseGroup],
  )
  const selectedColleges = useMemo(() => STATE_COLLEGES[form.state] || [], [form.state])

  const update = (key) => (event) => {
    const value = event.target.value
    setForm((current) => {
      if (key === 'courseGroup') {
        const nextGroup = COURSE_GROUPS.find((item) => item.group === value) || COURSE_GROUPS[0]
        return { ...current, courseGroup: value, course: nextGroup.courses[0] }
      }
      if (key === 'state') {
        return { ...current, state: value, collegeName: '', collegeInfo: '', collegeWebsite: '' }
      }
      if (key === 'collegeName') {
        const college = (STATE_COLLEGES[current.state] || []).find((item) => item.name === value)
        return {
          ...current,
          collegeName: value,
          collegeInfo: college?.info || '',
          collegeWebsite: college?.website || '',
        }
      }
      return { ...current, [key]: value }
    })
    if (errors[key]) setErrors((current) => ({ ...current, [key]: undefined }))
  }

  const validate = () => {
    const nextErrors = {}
    if (!form.name.trim()) nextErrors.name = 'Please enter student name'
    if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s|-/g, ''))) {
      nextErrors.phone = 'Enter a valid 10-digit mobile number'
    }
    return nextErrors
  }

  const submit = (event) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return

    const lines = [
      'Counselling Hub Enquiry',
      `Courses: ${form.courseGroup} - ${form.course}`,
      `Course Mode: ${form.courseMode}`,
      `Selected Option: ${form.serviceType}`,
    ]

    if (form.serviceType === 'Counselling') {
      lines.push(`Counselling Type: ${form.counsellingType}`)
      lines.push('Counselling Charge: According to Course')
    } else {
      lines.push(`Select State: ${form.state}`)
      lines.push(`College Name & Details: ${form.collegeName || 'College list pending / Not selected'}`)
      lines.push(`College Information: ${form.collegeInfo || 'Not provided'}`)
      lines.push(`College Website: ${form.collegeWebsite || 'Not provided'}`)
      lines.push('Counselling Charge: Depends on State and College Name & Details')
    }

    lines.push(`Student Name: ${form.name}`)
    lines.push(`Mobile Number: ${form.phone}`)
    if (form.notes.trim()) lines.push(`Notes: ${form.notes.trim()}`)

    window.open(`https://wa.me/${BRAND.phonesRaw[0].replace('+', '')}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank')
  }

  return (
    <>
      <section className="section pt-8">
        <div className="container-page grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-card">
              <p className="eyebrow">Counselling Hub</p>
              <h1 className="heading-lg mt-3">Start with a quick form</h1>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Click below to open the enquiry form. Student details come first, then course, mode,
                and either counselling or admission fields.
              </p>
              <button onClick={() => setIsFormOpen(true)} className="btn-crimson mt-6">
                Open Counselling Form <MessageCircle className="h-4 w-4" />
              </button>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <aside className="space-y-6">
              <div className="rounded-3xl bg-navy-gradient p-6 text-white shadow-premium">
                <Phone className="h-8 w-8 text-crimson" />
                <h2 className="mt-4 font-display text-2xl font-bold">WhatsApp Submission</h2>
                <p className="mt-3 text-sm leading-relaxed text-brand-100">
                  Your complete form details will open on WhatsApp for {BRAND.phones[0]}.
                </p>
                <a href={`https://wa.me/${BRAND.phonesRaw[0].replace('+', '')}`} target="_blank" rel="noreferrer" className="btn-crimson mt-6 w-full">
                  Chat Now <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-card">
                <h3 className="font-display text-lg font-bold text-navy">Available Course Areas</h3>
                <div className="mt-5 space-y-4">
                  {COURSE_GROUPS.map((group) => (
                    <div key={group.group} className="rounded-2xl bg-softgrey p-4">
                      <div className="flex items-center gap-2 font-display text-sm font-bold text-navy">
                        <group.icon className="h-5 w-5 text-crimson" /> {group.group}
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {group.courses.slice(0, 4).map((course) => <Pill key={course}>{course}</Pill>)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      {isFormOpen && (
        <div className="fixed inset-0 z-[70] overflow-y-auto bg-navy/60 px-4 py-4 backdrop-blur-sm sm:py-8">
          <div className="mx-auto max-w-4xl">
            <form id="counselling-form" onSubmit={submit} noValidate className="relative rounded-3xl border border-slate-100 bg-white p-5 shadow-premium sm:p-6">
              <button
                type="button"
                onClick={() => setIsFormOpen(false)}
                className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-navy"
                aria-label="Close form"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="mb-6 pr-12">
                <p className="eyebrow">Counselling Hub</p>
                <h2 className="mt-3 font-display text-2xl font-bold text-navy sm:text-3xl">Counselling / Admission Form</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Fill student details first. Submit will open WhatsApp on {BRAND.phones[0]}.
                </p>
              </div>

              <FormStep number="01" title="Student Details">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Student Name" error={errors.name}>
                    <input className={`input ${errors.name ? '!border-crimson' : ''}`} value={form.name} onChange={update('name')} placeholder="Enter full name" />
                  </Field>
                  <Field label="Mobile Number" error={errors.phone}>
                    <input className={`input ${errors.phone ? '!border-crimson' : ''}`} value={form.phone} onChange={update('phone')} inputMode="numeric" placeholder="10-digit mobile number" />
                  </Field>
                </div>
              </FormStep>

              <FormStep number="02" title="Courses">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Course Category">
                    <select className="input" value={form.courseGroup} onChange={update('courseGroup')}>
                      {COURSE_GROUPS.map((group) => <option key={group.group}>{group.group}</option>)}
                    </select>
                  </Field>
                  <Field label="Course">
                    <select className="input" value={form.course} onChange={update('course')}>
                      {selectedGroup.courses.map((course) => <option key={course}>{course}</option>)}
                    </select>
                  </Field>
                </div>
              </FormStep>

              <FormStep number="03" title="Course Mode">
                <div className="grid gap-3 sm:grid-cols-3">
                  {COURSE_MODES.map((mode) => (
                    <ChoiceButton
                      key={mode}
                      active={form.courseMode === mode}
                      onClick={() => setForm((current) => ({ ...current, courseMode: mode }))}
                      title={mode}
                    />
                  ))}
                </div>
              </FormStep>

              <FormStep number="04" title="Choose One: Counselling or Admission">
                <div className="grid gap-3 sm:grid-cols-2">
                  {['Counselling', 'Admission'].map((type) => (
                    <ChoiceButton
                      key={type}
                      active={form.serviceType === type}
                      onClick={() => setForm((current) => ({ ...current, serviceType: type }))}
                      title={type}
                      desc={type === 'Counselling' ? 'Counselling type and charge by course' : 'State and college details'}
                    />
                  ))}
                </div>
              </FormStep>

              {form.serviceType === 'Counselling' ? (
                <FormStep number="05" title="Counselling">
                  <Field label="Counselling Types">
                    <select className="input" value={form.counsellingType} onChange={update('counsellingType')}>
                      {COUNSELLING_TYPES.map((type) => <option key={type}>{type}</option>)}
                    </select>
                  </Field>
                  <p className="mt-3 rounded-2xl bg-softgrey px-4 py-3 text-sm font-semibold text-slate-600">
                    Counselling Charge: According to Course
                  </p>
                </FormStep>
              ) : (
                <FormStep number="05" title="Admission">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Select State">
                      <select className="input" value={form.state} onChange={update('state')}>
                        {STATES.map((state) => <option key={state}>{state}</option>)}
                      </select>
                    </Field>
                    <Field label="View College Name & Details">
                      <select className="input" value={form.collegeName} onChange={update('collegeName')}>
                        <option value="">Select college in {form.state}</option>
                        {selectedColleges.length ? (
                          selectedColleges.map((college) => (
                            <option key={college.name} value={college.name}>{college.name}</option>
                          ))
                        ) : (
                          <option value={`${form.state} college list pending`}>{form.state} college list will be added soon</option>
                        )}
                      </select>
                    </Field>
                    <Field label="College Information">
                      <textarea className="input min-h-[96px] resize-none" value={form.collegeInfo} onChange={update('collegeInfo')} placeholder={`College details for ${form.state} will appear after list data is added.`} />
                    </Field>
                    <Field label="College Website">
                      <input className="input" value={form.collegeWebsite} onChange={update('collegeWebsite')} placeholder="Website will be added with college data" />
                    </Field>
                    <div className="sm:col-span-2 rounded-2xl border border-slate-100 bg-white px-4 py-3 text-sm text-slate-600">
                      Showing college options for <span className="font-bold text-navy">{form.state}</span>. We can add the exact college names here once the state-wise list is shared.
                    </div>
                    <div className="sm:col-span-2 rounded-2xl bg-softgrey px-4 py-3 text-sm font-semibold text-slate-600">
                      Counselling Charge depends on: State, College Name & Details
                    </div>
                  </div>
                </FormStep>
              )}

              <div className="mt-6">
                <Field label="Extra Notes (optional)">
                  <textarea className="input min-h-[96px] resize-none" value={form.notes} onChange={update('notes')} placeholder="Anything else you want to tell us..." />
                </Field>
              </div>

              <button type="submit" className="btn-crimson mt-8 w-full">
                Submit on WhatsApp <MessageCircle className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      )}

      <section className="section bg-softgrey">
        <div className="container-page">
          <Reveal>
            <SectionHeading eyebrow="Support Options" title="How we guide students" />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: MapPin, title: 'Office Visit Counselling', desc: 'Visit our office for face-to-face guidance and document discussion.', accent: 'crimson' },
              { icon: Phone, title: 'Telephonic Counselling', desc: 'Discuss course, mode and admission options over a phone call.', accent: 'slateblue' },
              { icon: Video, title: 'Video Calling Counselling', desc: 'Get remote counselling with a complete explanation through video call.', accent: 'navy' },
              { icon: Laptop, title: 'Online & Distance Options', desc: 'Compare regular, online and distance course modes before choosing.', accent: 'slateblue' },
              { icon: Building2, title: 'College Details', desc: 'Ask for college information, website, state-wise options and admission steps.', accent: 'crimson' },
              { icon: CheckCircle2, title: 'Charge Clarity', desc: 'Counselling charges are shared according to course, state and college details.', accent: 'navy' },
            ].map((item, index) => (
              <Reveal key={item.title} delay={(index % 3) * 0.08}>
                <FeatureCard {...item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function FormStep({ number, title, children }) {
  return (
    <div className="mt-6 rounded-3xl border border-slate-100 p-5">
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-crimson text-sm font-extrabold text-white">
          {number}
        </span>
        <h2 className="font-display text-lg font-bold text-navy">{title}</h2>
      </div>
      {children}
    </div>
  )
}

function ChoiceButton({ active, onClick, title, desc }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-2xl border px-4 py-4 text-left transition ${
        active
          ? 'border-crimson bg-crimson/5 text-crimson ring-2 ring-crimson/10'
          : 'border-slate-200 text-navy hover:border-slateblue'
      }`}
    >
      <span className="font-display text-base font-bold">{title}</span>
      {desc && <span className="mt-1 block text-xs text-slate-500">{desc}</span>}
    </button>
  )
}

function Field({ label, error, children }) {
  return (
    <div>
      <label className="label">{label}</label>
      {children}
      {error && <p className="mt-1 text-xs font-semibold text-crimson">{error}</p>}
    </div>
  )
}
