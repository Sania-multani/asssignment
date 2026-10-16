import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import Logo from './Logo'
import { assignFooterColumns } from '../data/assignData'
import googlePlay from '../assets/google-play.png'
import appStore from '../assets/app-store.png'

function Footer() {
  return (
    <footer className="assign-footer pb-10 pt-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-y-10 px-5 text-center sm:grid-cols-3 sm:gap-x-4 sm:gap-y-12 sm:px-8 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1.3fr] lg:gap-x-8 lg:px-10 lg:text-left">
        <div className="assign-footer-brand sm:col-span-3 lg:col-span-1">
          <Logo className="text-4xl font-medium" />
          <p className="mx-auto mt-3 max-w-[220px] text-xs leading-5 lg:mx-0">
            Book your trip in minute, get full Control for much longer.
          </p>
        </div>

        {assignFooterColumns.map((column) => (
          <nav key={column.title} className="assign-footer-column" aria-label={column.title}>
            <h3 className="text-base font-semibold text-assign-navy sm:text-lg">{column.title}</h3>
            <ul className="mt-5 flex flex-col gap-3 text-sm">
              {column.links.map((link) => (
                <li key={link}>
                  <a href="#top" className="transition-colors hover:text-assign-orange">{link}</a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div className="assign-footer-social sm:col-span-3 lg:col-span-1">
          <div className="flex justify-center gap-4 lg:justify-start">
            <a href="#top" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-assign-navy shadow-assign-card transition-transform hover:-translate-y-1">
              <FaFacebookF size={14} />
            </a>
            <a href="#top" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-assign-yellow via-assign-orange to-assign-purple text-white transition-transform hover:-translate-y-1">
              <FaInstagram size={16} />
            </a>
            <a href="#top" aria-label="Twitter" className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-assign-navy shadow-assign-card transition-transform hover:-translate-y-1">
              <FaTwitter size={14} />
            </a>
          </div>

          <p className="mt-6 text-sm">Discover our app</p>
          <div className="mt-4 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a href="#top"><img src={googlePlay} alt="Get it on Google Play" className="h-10" /></a>
            <a href="#top"><img src={appStore} alt="Download on the App Store" className="h-10" /></a>
          </div>
        </div>
      </div>

      <p className="mt-16 px-5 text-center text-xs">All rights reserved@jadoo.co</p>
    </footer>
  )
}

export default Footer