export const LIBRARY_BOOKING = [
  {
    key: 'toppers',
    label: "Topper's Library",
    halls: [
      { name: 'Hall-01', seats: '1 to 78', count: 78 },
      { name: 'Hall-02', seats: '79 to 133', count: 55 },
    ],
  },
  {
    key: 'digital',
    label: "Topper's Digital Library",
    halls: [
      { name: 'Hall-01', seats: '73', count: 73 },
      { name: 'Hall-02', seats: '52', count: 52 },
    ],
  },
  {
    key: 'premium',
    label: "Topper's Premium Library",
    halls: [
      { name: 'Hall-01', seats: '111', count: 111 },
      { name: 'Hall-02', seats: '30', count: 30 },
    ],
  },
  {
    key: 'luxury',
    label: "Topper's Luxury Library",
    halls: [
      { name: 'Hall-01', seats: '49', count: 49 },
      { name: 'Hall-02', seats: '20', count: 20 },
    ],
  },
]

export const LIBRARY_EXTRA_SEATS = [
  { label: 'Special', count: 8 },
  { label: 'Bed', count: 8 },
]

export const LIBRARY_SHIFTS = ['Morning', 'Noon', 'Evening', 'Night', 'Bed']

export const LIBRARY_BOOKING_MODES = ['Single Shift', 'Two Shifts']

export function getLibrarySeatTotal(library) {
  return library.halls.reduce((total, hall) => total + hall.count, 0)
}
