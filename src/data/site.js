export const BRAND = {
  name: 'Vidya Educational Services',
  shortName: 'Vidya Education Group',
  tagline: 'Right Guidance, Bright Future',
  taglineHi: 'सही मार्गदर्शन, उज्ज्वल भविष्य',
  address: 'Rampur Road, Near Sai Chowk, Patna, Bihar',
  phones: ['+91 95044 46940', '+91 93049 54942'],
  phonesRaw: ['+919504446940', '+919304954942'],
  email: 'info@vidyaeducationalservices.in',
  hours: [
    { day: 'Monday – Friday', time: '6:00 AM – 9:00 PM' },
    { day: 'Saturday', time: '6:00 AM – 8:00 PM' },
    { day: 'Sunday', time: '7:00 AM – 1:00 PM' },
  ],
  libraryHours: '24 / 7 — Open all day, every day',
  director: 'Mr. Chandan Kumar',
}

export const LIBRARY_ADDRESSES = [
  {
    key: 'toppers',
    label: "Topper's Library",
    to: '/library/toppers',
    address: 'Ramkrishna Colony, Back of Kela Mandi, Bazar Samiti, Patna',
  },
  {
    key: 'digital',
    label: "Topper's Digital Library",
    to: '/library/digital',
    address: 'Rampur Road, Near Lakshmi Market, Bazar Samiti, Patna',
  },
  {
    key: 'premium',
    label: "Topper's Premium Library",
    to: '/library/premium',
    address: 'Rampur Road, Near Vidya Education Group, Bazar Samiti, Patna',
  },
  {
    key: 'luxury',
    label: "Topper's Luxury Library",
    to: '/library/luxury',
    address: 'Rampur Road, Near Kesar Sweets, Bazar Samiti, Patna',
  },
]

export const NAV = [
  { label: 'Home', to: '/' },
  {
    label: 'Coaching',
    to: '/coaching',
    children: [
      { label: 'Online Classes', to: '/coaching/online', desc: 'Live + recorded lectures' },
      { label: 'Offline Center', to: '/coaching/offline', desc: 'Patna physical batches' },
    ],
  },
  {
    label: 'Library',
    to: '/library',
    children: [
      { label: "Topper's Library", to: '/library/toppers', desc: 'Affordable focused study hall' },
      { label: "Topper's Digital Library", to: '/library/digital', desc: 'Tablets, e-books & online tests' },
      { label: "Topper's Premium Library", to: '/library/premium', desc: 'Ergonomic AC cabins' },
      { label: "Topper's Luxury Library", to: '/library/luxury', desc: 'Five-star private cabins' },
    ],
  },
  {
    label: 'Consultancy',
    to: '/consultancy',
    children: [
      { label: 'Counselling', to: '/consultancy', desc: 'Career path & profile counselling' },
      { label: 'Admission', to: '/consultancy/admission', desc: 'Tech, Management, Law, Medical & Nursing' },
    ],
  },
  {
    label: 'Hostel & Tiffin',
    to: '/tiffin',
    children: [
      { label: 'Hostel', to: '/hostel', desc: 'Safe, comfortable student accommodation' },
      { label: 'Tiffin Services', to: '/tiffin', desc: 'Healthy & tasty home-style meals' },
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
  { value: 8, suffix: ' Lakh+', label: 'Students Mentored' },
  { value: 85, suffix: '%', label: 'Selection Success Rate' },
  { value: 650, suffix: '+', label: 'Premium Library Seats' },
  { value: 10, suffix: '+', label: 'Years of Trust' },
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
