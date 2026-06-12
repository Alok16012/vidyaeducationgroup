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
    title: 'Exam Foundation',
    subtitle: 'Complete basics for major competitive exam tracks.',
    courses: [
      { title: 'SSC Foundation', tag: 'SSC', desc: 'Quant, reasoning, English and G.S basics for SSC preparation.' },
      { title: 'Banking Foundation', tag: 'Banking', desc: 'Banking exam fundamentals with speed, accuracy and practice.' },
      { title: 'Railway Foundation', tag: 'Railway', desc: 'Railway exam foundation covering maths, reasoning, G.S and science.' },
      { title: 'Master Course - SSC / Bank / Rly / Other', tag: 'Master', desc: 'Combined preparation track for SSC, Bank, Railway and other exams.' },
    ],
  },
  {
    title: 'Subject Special',
    subtitle: 'Focused subject courses for stronger concepts and revision.',
    courses: [
      { title: 'Science Special', tag: 'Science', desc: 'Special science classes for Railway and state-level exams.' },
      { title: 'Lucent', tag: 'G.K', desc: 'Lucent-based G.K and G.S preparation with regular revision.' },
      { title: 'Numerical', tag: 'Numerical', desc: 'Numerical ability practice for speed and accuracy.' },
      { title: 'G/S Foundation', tag: 'G.S', desc: 'General Studies foundation for competitive exams.' },
      { title: 'Maths Special', tag: 'Maths', desc: 'Dedicated maths course with concepts, tricks and practice.' },
      { title: 'Reasoning', tag: 'Reasoning', desc: 'Reasoning course for verbal, non-verbal and puzzle-based questions.' },
    ],
  },
  {
    title: 'Exam / State Special',
    subtitle: 'Dedicated courses for Bihar and target exam preparation.',
    courses: [
      { title: 'Daroga Special', tag: 'Daroga', desc: 'Focused preparation for Bihar Daroga exam pattern.' },
      { title: 'Bihar Constable', tag: 'Constable', desc: 'Complete course support for Bihar Constable preparation.' },
      { title: 'BPSC', tag: 'BPSC', desc: 'BPSC-oriented foundation and practice support.' },
    ],
  },
]

export const ONLINE_FOUNDATION_COURSES = ONLINE_COURSE_GROUPS.flatMap((group) => group.courses)

export const TARGET_COURSES = [
  'Daroga',
  '73 BPSC',
  'Bihar Constable',
  'Railway ALP',
  'Railway Science',
]

export const TEST_SERIES = [
  'G.S',
  'Maths',
  'Reasoning',
  'Numerical',
  'SSC',
  'Banking',
  'Railway',
  'Bihar Daroga',
  'Bihar Constable',
  '73 BPSC',
]

export const OFFLINE_COURSES = [
  {
    course: 'Maths Foundation',
    slug: 'maths-foundation',
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
    course: 'Reasoning Foundation',
    slug: 'reasoning-foundation',
    time: '10 to 11 AM',
    duration: '5 to 6 M',
    fee: '3100/-',
    offer: '2499/-',
    faculty: 'Deepak Sir',
    overview: 'Reasoning course for verbal, non-verbal and puzzle-based questions with regular practice.',
    syllabus: ['Analogy and classification', 'Coding-decoding', 'Blood relation', 'Direction sense', 'Puzzles and seating arrangement'],
    outcomes: ['Faster logic building', 'Better puzzle approach', 'Accuracy in reasoning questions'],
  },
  {
    course: 'G.S Foundation',
    slug: 'gs-foundation',
    time: '12 PM to 01 PM',
    duration: '6 to 7 M',
    fee: '3100/-',
    offer: '2499/-',
    faculty: 'Er. S.K Rajan',
    overview: 'General Studies foundation course for competitive exams with current and static topics.',
    syllabus: ['History basics', 'Geography basics', 'Polity basics', 'Economy basics', 'Current affairs revision'],
    outcomes: ['Strong G.S base', 'Regular revision habit', 'Better static GK coverage'],
  },
  {
    course: 'Lucent',
    slug: 'lucent',
    time: 'Batch timing',
    duration: 'Monthly',
    fee: '199/- Month',
    offer: '199/- Month',
    faculty: 'G.S Faculty',
    overview: 'Lucent-based G.K and G.S monthly course for quick revision and exam recall.',
    syllabus: ['Lucent GK chapters', 'Important one-liners', 'Static GK revision', 'Practice questions', 'Monthly revision'],
    outcomes: ['Quick GK revision', 'Better recall', 'Affordable monthly practice'],
  },
  {
    course: 'Science Special',
    slug: 'science-special',
    time: '12 to 01 PM',
    duration: '3 to 4 M',
    fee: '999/-',
    offer: '499/-',
    faculty: 'Er. S.K Rajan',
    overview: 'Focused science course for Railway and state-level exams with concept and fact-based preparation.',
    syllabus: ['Physics basics', 'Chemistry basics', 'Biology basics', 'Railway science questions', 'Revision tests'],
    outcomes: ['Clear science fundamentals', 'Railway-focused practice', 'High-value revision'],
  },
  {
    course: 'Railway ALP (Target)',
    slug: 'railway-alp-target',
    time: '6 to 9 PM',
    duration: 'Till Exam',
    fee: '6999/-',
    offer: '2999/-',
    faculty: 'Er. S.K Rajan',
    overview: 'Target batch for Railway ALP students with exam-focused classes and practice till exam.',
    syllabus: ['Railway ALP syllabus plan', 'Science and technical basics', 'Maths practice', 'Reasoning practice', 'Mock and revision sessions'],
    outcomes: ['Targeted ALP preparation', 'Till-exam support', 'Practice with revision strategy'],
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
