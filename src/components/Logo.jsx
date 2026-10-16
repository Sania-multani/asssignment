function Logo({ className = '' }) {
  return (
    <a href="#top" className={`assign-logo font-bold text-assign-navy ${className}`} aria-label="Jadoo home">
      Jad<span className="text-assign-yellow">oo</span>
    </a>
  )
}

export default Logo
