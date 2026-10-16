import { Plus } from 'lucide-react'

// small 5 x 5 grid of "+" signs used as background decoration
function PlusGrid({ className = '' }) {
  const items = Array.from({ length: 25 }, (_, i) => i)

  return (
    <div className={`assign-plus-grid grid grid-cols-5 gap-3 ${className}`} aria-hidden="true">
      {items.map((i) => (
        <Plus
          key={i}
          size={14}
          className={i === 7 ? 'text-assign-purple' : i === 0 ? 'text-assign-orange' : 'text-assign-grey'}
        />
      ))}
    </div>
  )
}

export default PlusGrid
