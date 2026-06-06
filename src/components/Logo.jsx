export default function Logo({ className = '', imgClass = 'h-11 lg:h-14', boxed = false }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/logo.png"
        alt="New Vidya Education Group"
        className={`${imgClass} w-auto object-contain ${
          boxed ? 'rounded-2xl bg-white p-2 shadow-card' : ''
        }`}
      />
    </div>
  )
}
