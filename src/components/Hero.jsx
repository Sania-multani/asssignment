import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import heroShape from '../assets/hero-shape.svg'
import heroTraveller from '../assets/hero-traveller.png'
import planeImg from '../assets/plane.png'

function Hero({ onPlayDemo }) {
  return (
    <section className="assign-hero relative overflow-hidden" aria-labelledby="assign-hero-title">
      <img
        src={heroShape}
        alt=""
        aria-hidden="true"
        className="assign-hero-shape absolute right-0 top-0 h-full w-full object-cover object-right-top lg:w-[58%]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-10 sm:px-8 lg:min-h-[780px] lg:grid-cols-2 lg:px-10 lg:pt-0">
        <motion.div
          className="assign-hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="assign-hero-eyebrow text-base font-bold uppercase text-assign-orange sm:text-lg">
            Best destinations around the world
          </p>

          <h1
            id="assign-hero-title"
            className="assign-hero-title mt-4 font-assign-heading text-5xl font-bold leading-[1.15] text-assign-navy sm:text-6xl xl:text-[84px]"
          >
            <span className="relative block w-fit">
              Travel,{' '}
              <span className="relative">
                enjoy
                <span className="assign-hero-underline absolute -bottom-1 left-0 h-2 w-full rounded-full bg-assign-orange" />
              </span>
            </span>
            <span className="block">and live a new</span>
            <span className="block">and full life</span>
          </h1>

          <p className="assign-hero-text mt-8 max-w-md text-base leading-8 sm:text-lg">
            Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it
            engrossed listening. Park gate sell they west hard for the.
          </p>

          <div className="assign-hero-actions mt-10 flex flex-wrap items-center gap-8">
            <a
              href="#destinations"
              className="assign-hero-button rounded-lg bg-assign-yellow px-7 py-4 font-medium text-white shadow-assign-yellow transition-transform hover:-translate-y-1"
            >
              Find out more
            </a>

            <button
              type="button"
              onClick={onPlayDemo}
              className="assign-hero-play flex cursor-pointer items-center gap-4 font-medium"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-assign-orange text-white shadow-assign-orange transition-transform hover:scale-110">
                <Play size={20} fill="currentColor" />
              </span>
              Play Demo
            </button>
          </div>
        </motion.div>

        <motion.div
          className="assign-hero-image relative mx-auto w-full max-w-md lg:max-w-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <img src={heroTraveller} alt="Happy traveller sitting on a suitcase" className="w-full" />

          <motion.img
            src={planeImg}
            alt=""
            aria-hidden="true"
            className="absolute -left-4 top-[18%] w-20 sm:w-28"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.img
            src={planeImg}
            alt=""
            aria-hidden="true"
            className="absolute -right-2 top-[22%] w-16 sm:w-24"
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 3.5, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
