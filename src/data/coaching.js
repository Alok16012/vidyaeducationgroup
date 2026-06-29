import { BRAND, FACULTY } from './site.js'

export const COACHING_ADDRESS = {
  label: 'Offline Coaching Center',
  address: BRAND.address,
  mapUrl: `https://maps.google.com/?q=${encodeURIComponent(BRAND.address)}`,
}

export const ONLINE_APP_LINK = {
  label: 'Online App Link',
  url: `https://wa.me/${BRAND.phonesRaw[0].replace('+', '')}?text=${encodeURIComponent(
    'Hello Vidya Education Group, please share the online coaching app link.',
  )}`,
}

export const ONLINE_COURSE_GROUPS = [
  {
    title: 'Foundation Batch',
    subtitle: 'App-link based foundation and subject-special courses.',
    courses: [
      { title: 'Maths Special', tag: 'Maths', desc: 'Dedicated maths course with concepts, tricks and regular practice.' },
      { title: 'Reasoning Special', tag: 'Reasoning', desc: 'Reasoning special batch for verbal, non-verbal and puzzle questions.' },
      { title: 'G/S Foundation', tag: 'G.S', desc: 'General Studies foundation for competitive exams.' },
      { title: 'Science Special', tag: 'Science', desc: 'Special science classes for Railway and state-level exams.' },
      { title: 'English Foundation', tag: 'English', desc: 'Grammar, vocabulary and exam-oriented comprehension practice.' },
      { title: 'BPSC Foundation', tag: 'BPSC', desc: 'BPSC-oriented foundation with G.S, current affairs and practice support.' },
      { title: 'Master Course - SSC / Bank / Railway / Other', tag: 'Master', desc: 'Combined preparation track for SSC, Bank, Railway and other competitive exams.' },
      { title: 'Daroga Special', tag: 'Daroga', desc: 'Focused preparation for Bihar Daroga exam pattern.' },
      { title: 'SSC Foundation', tag: 'SSC', desc: 'Quant, reasoning, English and G.S basics for SSC preparation.' },
      { title: 'Banking Special', tag: 'Banking', desc: 'Banking exam fundamentals with speed, accuracy and practice.' },
    ],
  },
]

export const ONLINE_FOUNDATION_COURSES = ONLINE_COURSE_GROUPS.flatMap((group) => group.courses)

export const TARGET_COURSES = [
  'Bihar Constable',
  'Bihar Daroga',
]

export const TEST_SERIES = [
  'BPSC (Full Length)',
  'Daroga (Full Length)',
  'G/S - ₹250',
  'Maths - ₹250',
  'Reasoning - ₹250',
  'English - ₹250',
  'Railway (Full Length)',
  'SSC (Full Length)',
  'Bihar Constable (Full Length)',
]

export const OFFLINE_COURSES = [
  {
    course: 'Maths Special',
    slug: 'maths-special',
    time: '1 PM to 2 PM',
    duration: '6 to 7 M',
    fee: '3100/-',
    offer: '2499/-',
    faculty: 'Er. RD Yadav',
    overview: 'Foundation maths course for students who need strong basics, speed calculation and exam-level practice.',
    syllabus: ['Number system', 'Percentage and ratio', 'Profit, loss and discount', 'Time, speed and distance', 'Simplification and DI basics'],
    outcomes: ['Clear core concepts', 'Improve calculation speed', 'Build exam-ready problem solving'],
  },
  {
    course: 'Reasoning Special',
    slug: 'reasoning-special',
    time: '10 AM to 11 AM',
    duration: '5 to 6 M',
    fee: '3100/-',
    offer: '2499/-',
    faculty: 'Deepak Sir',
    overview: 'Reasoning special batch for verbal, non-verbal and puzzle-based questions with regular practice.',
    syllabus: ['Analogy and classification', 'Coding-decoding', 'Blood relation', 'Direction sense', 'Puzzles and seating arrangement'],
    outcomes: ['Faster logic building', 'Better puzzle approach', 'Accuracy in reasoning questions'],
  },
  {
    course: 'G/S Foundation',
    slug: 'gs-foundation',
    time: '12 PM to 1 PM',
    duration: '6 to 7 M',
    fee: '3100/-',
    offer: '2499/-',
    faculty: 'Er. S.K Rajan',
    overview: 'General Studies foundation course for competitive exams with current and static topics.',
    syllabus: ['History basics', 'Geography basics', 'Polity basics', 'Economy basics', 'Current affairs revision'],
    outcomes: ['Strong G.S base', 'Regular revision habit', 'Better static GK coverage'],
  },
  {
    course: 'Science Special',
    slug: 'science-special',
    time: '12 PM to 1 PM',
    duration: '3 to 4 M',
    fee: '999/-',
    offer: '499/-',
    faculty: 'Er. S.K Rajan',
    overview: 'Focused science course for Railway and state-level exams with concept and fact-based preparation.',
    syllabus: ['Physics basics', 'Chemistry basics', 'Biology basics', 'Railway science questions', 'Revision tests'],
    outcomes: ['Clear science fundamentals', 'Railway-focused practice', 'High-value revision'],
  },
  {
    course: 'English Foundation',
    slug: 'english-foundation',
    time: '9 AM to 10 AM',
    duration: '6 to 7 M',
    fee: '4000/-',
    offer: '2499/-',
    faculty: 'English Faculty',
    overview: 'English foundation batch for grammar, vocabulary and exam-oriented comprehension practice.',
    syllabus: ['Grammar rules', 'Vocabulary building', 'Error detection', 'Sentence improvement', 'Reading comprehension'],
    outcomes: ['Better grammar accuracy', 'Stronger vocabulary', 'Confidence in English sections'],
  },
  {
    course: 'BPSC Foundation',
    slug: 'bpsc-foundation',
    time: 'New batch timing',
    duration: 'Foundation Batch',
    fee: 'Contact',
    offer: 'Contact',
    faculty: 'Er. S.K Rajan',
    overview: 'BPSC foundation batch covering G.S, current affairs and exam-oriented practice.',
    syllabus: ['BPSC syllabus plan', 'General Studies', 'Current affairs', 'Bihar special', 'Practice sessions'],
    outcomes: ['Structured BPSC preparation', 'Better current affairs coverage', 'Regular revision support'],
  },
  {
    course: 'Master Course',
    slug: 'master-course',
    time: 'New batch timing',
    duration: 'Complete Course',
    fee: 'Contact',
    offer: 'Contact',
    faculty: 'Er. RD Yadav',
    overview: 'Master course for SSC, Bank, Railway and other competitive exams with complete preparation support.',
    syllabus: ['Maths', 'Reasoning', 'English', 'G.S / G.K', 'Exam-wise practice'],
    outcomes: ['One course for multiple exams', 'Complete foundation support', 'Regular test practice'],
  },
  {
    course: 'Daroga Special',
    slug: 'daroga-special',
    time: 'New batch timing',
    duration: 'Target Batch',
    fee: 'Contact',
    offer: 'Contact',
    faculty: 'Deepak Sir',
    overview: 'Special batch for Bihar Daroga preparation with syllabus plan, practice and revision.',
    syllabus: ['Daroga syllabus plan', 'G.S and current affairs', 'Reasoning practice', 'Maths practice', 'Mock tests'],
    outcomes: ['Daroga-focused preparation', 'Practice with revision', 'Exam strategy support'],
  },
  {
    course: 'SSC Foundation',
    slug: 'ssc-foundation',
    time: 'New batch timing',
    duration: 'Foundation Batch',
    fee: 'Contact',
    offer: 'Contact',
    faculty: 'Er. RD Yadav',
    overview: 'SSC foundation batch for maths, reasoning, English and G.S basics.',
    syllabus: ['Quant basics', 'Reasoning basics', 'English grammar', 'General awareness', 'SSC practice sets'],
    outcomes: ['Strong SSC base', 'Improved speed', 'Exam-pattern practice'],
  },
  {
    course: 'Banking Special',
    slug: 'banking-special',
    time: 'New batch timing',
    duration: 'Special Batch',
    fee: 'Contact',
    offer: 'Contact',
    faculty: 'Er. RD Yadav',
    overview: 'Banking special batch focused on speed, accuracy and regular practice.',
    syllabus: ['Quantitative aptitude', 'Reasoning ability', 'English basics', 'Banking awareness', 'Practice sets'],
    outcomes: ['Better speed and accuracy', 'Banking exam focus', 'Regular mock practice'],
  },
  {
    course: 'Bihar Constable Target',
    slug: 'bihar-constable-target',
    time: 'New batch timing',
    duration: 'Target Batch',
    fee: 'Contact',
    offer: 'Contact',
    faculty: 'Er. S.K Rajan',
    overview: 'Target batch for Bihar Constable with syllabus coverage, practice and revision.',
    syllabus: ['Constable syllabus plan', 'G.S', 'Maths', 'Reasoning', 'Full-length practice'],
    outcomes: ['Targeted preparation', 'Regular practice', 'Exam-focused revision'],
  },
  {
    course: 'Bihar Daroga Target',
    slug: 'bihar-daroga-target',
    time: 'New batch timing',
    duration: 'Target Batch',
    fee: 'Contact',
    offer: 'Contact',
    faculty: 'Deepak Sir',
    overview: 'Target batch for Bihar Daroga with syllabus plan, practice and course details.',
    syllabus: ['Daroga syllabus plan', 'G.S and current affairs', 'Reasoning', 'Maths', 'Full-length tests'],
    outcomes: ['Daroga target preparation', 'Syllabus-wise practice', 'Revision and mock support'],
  },
]

export const COACHING_FEATURES = [
  'Updated Study Material',
  'Experienced Faculty',
  'Special Doubt Facilities',
  'Hybrid Class Room (Online & Offline)',
]

export function courseDetailsUrl(course) {
  return `https://wa.me/${BRAND.phonesRaw[0].replace('+', '')}?text=${encodeURIComponent(
    `Hello Vidya Education Group, I want course details for ${course}.`,
  )}`
}

export function offlineCoursePath(course) {
  return `/coaching/offline/${course.slug}`
}

export function getOfflineCourseBySlug(slug) {
  return OFFLINE_COURSES.find((course) => course.slug === slug)
}

export function getFacultyForCourse(course) {
  return FACULTY.find((faculty) => faculty.name === course.faculty)
}
