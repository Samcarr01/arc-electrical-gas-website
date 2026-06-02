const badges = [
  { label: 'NAPIT Approved', sub: 'Domestic & Commercial', icon: '⚡', bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700' },
  { label: 'Part P Accredited', sub: 'Building Regulations', icon: '✓', bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-700' },
  { label: 'Gas Safe Registered', sub: 'Reg. No. 584102', icon: '🔥', bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-700' },
  { label: 'Worcester Bosch', sub: 'Accredited Installer', icon: '🏅', bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-700' },
  { label: '20+ Years Experience', sub: 'Family Run Business', icon: '★', bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700' },
  { label: 'Fully Insured', sub: 'Certified on Completion', icon: '✓', bg: 'bg-gray-50', border: 'border-gray-200', text: 'text-gray-700' },
]

export default function TrustBadges() {
  return (
    <section className="py-8 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {badges.map(b => (
            <div key={b.label} className={`${b.bg} ${b.border} border rounded-xl p-3 text-center`}>
              <div className="text-xl mb-1">{b.icon}</div>
              <p className={`font-semibold text-xs ${b.text}`}>{b.label}</p>
              <p className="text-xs text-gray-500 mt-0.5">{b.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
