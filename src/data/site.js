export const BRAND = {
  name: 'Vidya Educational Services',
  shortName: 'Vidya Education Group',
  tagline: 'Right Guidance, Bright Future',
  taglineHi: 'सही मार्गदर्शन, उज्ज्वल भविष्य',
  address: 'Rampur Road, Near Sai Chowk, Patna, Bihar',
  phones: ['+91 70616 59107', '+91 93049 54942'],
  phonesRaw: ['+917061659107', '+919304954942'],
  email: 'info@vidyaeducationalservices.in',
  hours: [
    { day: 'Monday – Friday', time: '6:00 AM – 9:00 PM' },
    { day: 'Saturday', time: '6:00 AM – 8:00 PM' },
    { day: 'Sunday', time: '7:00 AM – 1:00 PM' },
  ],
  libraryHours: '24 / 7 — Open all day, every day',
  director: 'Mr. Chandan Kumar',
}

export const NAV = [
  { label: 'Home', to: '/' },
  {
    label: 'Coaching',
    to: '/coaching',
    children: [
      { label: 'Coaching Hub', to: '/coaching', desc: 'Railway ALP & Technical batches' },
      { label: 'Online Classes', to: '/coaching/online', desc: 'Live + recorded lectures' },
      { label: 'Offline Center', to: '/coaching/offline', desc: 'Patna physical batches' },
      { label: 'Faculty Profiles', to: '/coaching/faculty', desc: 'Meet our expert mentors' },
    ],
  },
  {
    label: 'Library',
    to: '/library',
    children: [
      { label: 'Library Hub', to: '/library', desc: '24/7 study zone & seat booking' },
      { label: 'Premium Digital Wing', to: '/library/premium', desc: 'Executive ergonomic cabins' },
      { label: 'Simple Study Wing', to: '/library/simple', desc: 'Budget-friendly desks' },
    ],
  },
  {
    label: 'Consultancy',
    to: '/consultancy',
    children: [
      { label: 'Consultancy Gateway', to: '/consultancy', desc: 'Career path counseling' },
      { label: 'Tech & IT Admissions', to: '/consultancy/tech', desc: 'B.Tech, BCA, MCA' },
      { label: 'Management & Law', to: '/consultancy/mgmt-law', desc: 'MBA, BBA, LLB' },
      { label: 'Medical & Nursing', to: '/consultancy/medical', desc: 'Nursing, ANM, GNM' },
    ],
  },
  { label: 'About', to: '/about' },
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Contact', to: '/contact' },
]

export const NOTIFICATIONS = [
  'Railway ALP Target Batch 2025 — New admissions open now!',
  'Premium Digital Library Wing — Limited executive cabins available.',
  'Free career counselling every Sunday, 10 AM – 1 PM.',
  'Online test-series for General Technical now live.',
  'Scholarship test for meritorious students — Register today.',
]

export const STATS = [
  { value: 8200, suffix: '+', label: 'Students Mentored' },
  { value: 96, suffix: '%', label: 'Selection Success Rate' },
  { value: 120, suffix: '+', label: 'Premium Library Seats' },
  { value: 12, suffix: '+', label: 'Years of Trust' },
]

export const FACULTY = [
  {
    name: 'Er. S.K Rajan',
    role: 'Science & Trade Expert',
    initials: 'SK',
    accent: 'crimson',
    exp: '14+ yrs',
    subjects: ['Basic Science', 'Trade Technical', 'Engineering Drawing'],
    bio: 'A meticulous mentor who breaks down complex trade-technical concepts into simple, exam-ready frameworks. Known for building strong fundamentals from the ground up.',
    rating: 4.9,
    batches: 'ALP & Technician Technical',
  },
  {
    name: 'Er. RD Yadav',
    role: 'Maths Expert',
    initials: 'RD',
    accent: 'slateblue',
    exp: '12+ yrs',
    subjects: ['Quantitative Aptitude', 'Advanced Maths', 'Speed Calculation'],
    bio: 'Specialises in shortcut-driven problem solving and accuracy under time pressure. His speed-maths drills have become legendary among Railway aspirants.',
    rating: 4.8,
    batches: 'Non-Technical & NTPC',
  },
  {
    name: 'Deepak Sir',
    role: 'Reasoning Expert & Psycho Guru',
    initials: 'DS',
    accent: 'navy',
    exp: '11+ yrs',
    subjects: ['Logical Reasoning', 'Puzzles', 'Exam Psychology'],
    bio: 'Blends sharp reasoning techniques with motivational psychology to keep students calm, confident and consistent. The mind-coach every batch loves.',
    rating: 4.9,
    batches: 'All Competitive Batches',
  },
]
