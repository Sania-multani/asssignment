import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'
import Logo from './Logo'
import { assignNavLinks } from '../data/assignData'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header id="top" className="assign-navbar sticky top-0 z-50 bg-white/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        <Logo className="text-4xl" />

        <nav aria-label="Main menu" className="assign-navbar-links hidden items-center gap-10 text-base font-medium text-assign-navy lg:flex">
          {assignNavLinks.map((link) => (
            <a key={link.label} href={link.href} className="transition-colors hover:text-assign-orange">
              {link.label}
            </a>
          ))}
          <a href="#top" className="transition-colors hover:text-assign-orange">Login</a>
          <a
            href="#top"
            className="assign-navbar-signup rounded-md border border-assign-navy px-5 py-2 transition-colors hover:bg-assign-navy hover:text-white"
          >
            Sign up
          </a>
          <button type="button" className="assign-navbar-lang flex items-center gap-1 cursor-pointer">
            EN <ChevronDown size={16} />
          </button>
        </nav>

        <button
          type="button"
          className="assign-navbar-toggle cursor-pointer text-assign-navy lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            aria-label="Mobile menu"
            className="assign-navbar-mobile overflow-hidden bg-white lg:hidden"
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
          >
            <div className="flex flex-col gap-4 px-5 pb-6 font-medium text-assign-navy sm:px-8">
              {assignNavLinks.map((link) => (
                <a key={link.label} href={link.href} onClick={() => setIsMenuOpen(false)}>
                  {link.label}
                </a>
              ))}
              <a href="#top">Login</a>
              <a href="#top" className="w-fit rounded-md border border-assign-navy px-5 py-2">Sign up</a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
