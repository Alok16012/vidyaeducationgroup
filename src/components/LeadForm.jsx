import { useState } from 'react'
import { CheckCircle2, Loader2 } from 'lucide-react'

const SERVICES = ['Coaching', 'Premium Library', 'Simple Library', 'Career Counselling']

export default function LeadForm({ compact = false, defaultService = 'Coaching' }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: defaultService,
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Please enter your name'
    else if (form.name.trim().length < 2) e.name = 'Name looks too short'
    if (!form.phone.trim()) e.phone = 'Mobile number is required'
    else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s|-/g, '')))
      e.phone = 'Enter a valid 10-digit mobile number'
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Enter a valid email address'
    return e
  }

  const onChange = (k) => (ev) => {
    setForm((f) => ({ ...f, [k]: ev.target.value }))
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }))
  }

  const onSubmit = (ev) => {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length) return
    setStatus('sending')
    setTimeout(() => {
      setStatus('success')
      setForm({ name: '', phone: '', email: '', service: defaultService, message: '' })
    }, 1100)
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl bg-emerald-50 p-8 text-center">
        <CheckCircle2 className="h-14 w-14 text-emerald-500" />
        <h3 className="mt-4 font-display text-xl font-bold text-navy">Request received!</h3>
        <p className="mt-2 max-w-sm text-sm text-slate-600">
          Thank you for reaching out to Vidya Educational Services. Our counsellor will call you
          shortly with the right guidance.
        </p>
        <button onClick={() => setStatus('idle')} className="btn-ghost mt-6">
          Submit another response
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <div className={compact ? 'space-y-4' : 'grid gap-4 sm:grid-cols-2'}>
        <div>
          <label className="label">Full Name</label>
          <input
            className={`input ${errors.name ? '!border-crimson !ring-crimson/30' : ''}`}
            placeholder="e.g. Rahul Kumar"
            value={form.name}
            onChange={onChange('name')}
          />
          {errors.name && <p className="mt-1 text-xs font-medium text-crimson">{errors.name}</p>}
        </div>
        <div>
          <label className="label">Mobile Number</label>
          <input
            className={`input ${errors.phone ? '!border-crimson !ring-crimson/30' : ''}`}
            placeholder="10-digit mobile"
            inputMode="numeric"
            value={form.phone}
            onChange={onChange('phone')}
          />
          {errors.phone && (
            <p className="mt-1 text-xs font-medium text-crimson">{errors.phone}</p>
          )}
        </div>
      </div>

      <div className={compact ? 'space-y-4' : 'grid gap-4 sm:grid-cols-2'}>
        <div>
          <label className="label">Email (optional)</label>
          <input
            className={`input ${errors.email ? '!border-crimson !ring-crimson/30' : ''}`}
            placeholder="you@email.com"
            value={form.email}
            onChange={onChange('email')}
          />
          {errors.email && (
            <p className="mt-1 text-xs font-medium text-crimson">{errors.email}</p>
          )}
        </div>
        <div>
          <label className="label">Interested In</label>
          <select className="input" value={form.service} onChange={onChange('service')}>
            {SERVICES.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="label">Message (optional)</label>
        <textarea
          rows={compact ? 2 : 3}
          className="input resize-none"
          placeholder="Tell us how we can help you…"
          value={form.message}
          onChange={onChange('message')}
        />
      </div>

      <button type="submit" disabled={status === 'sending'} className="btn-crimson w-full">
        {status === 'sending' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending…
          </>
        ) : (
          'Request a Free Call Back'
        )}
      </button>
      <p className="text-center text-xs text-slate-400">
        By submitting, you agree to be contacted by our counselling team.
      </p>
    </form>
  )
}
