import { motion } from 'framer-motion'
import { Heart, Leaf, Map, Send, Users } from 'lucide-react'
import Reveal from './Reveal'
import { assignSteps, assignStepText } from '../data/assignData'
import tripImg from '../assets/trip-greece.jpg'
import robbinImg from '../assets/avatar-robbin.jpg'

function BookSteps() {
  return (
    <section id="booking" className="assign-booking py-20" aria-labelledby="assign-booking-title">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">
        <Reveal className="assign-booking-left">
          <p className="font-medium text-assign-text">Easy and Fast</p>
          <h2 id="assign-booking-title" className="mt-3 font-assign-heading text-4xl font-bold leading-tight text-assign-navy sm:text-5xl">
            Book Your Next Trip <br className="hidden sm:block" /> In 3 Easy Steps
          </h2>

          <ul className="assign-booking-steps mt-10 flex flex-col gap-8">
            {assignSteps.map((step) => (
              <li key={step.title} className="flex items-start gap-5">
                <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white ${step.color}`}>
                  <step.icon size={22} />
                </span>
                <div>
                  <h3 className="font-semibold text-assign-text">{step.title}</h3>
                  <p className="mt-1 max-w-xs text-sm leading-6">{assignStepText}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.2} className="assign-booking-right relative mx-auto w-full max-w-sm pb-10">
          <span className="absolute -top-10 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-assign-glow blur-3xl" aria-hidden="true" />

          <article className="assign-trip-card relative rounded-3xl bg-white p-4 shadow-assign-card">
            <img src={tripImg} alt="Greece trip" loading="lazy" className="h-48 w-full rounded-2xl object-cover" />
            <h3 className="mt-4 font-medium text-assign-navy">Trip To Greece</h3>
            <p className="mt-1 text-sm">14-29 June | by Robbin jr</p>

            <div className="mt-4 flex gap-3 text-assign-text">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-assign-grey/60"><Leaf size={14} /></span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-assign-grey/60"><Map size={14} /></span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-assign-grey/60"><Send size={14} /></span>
            </div>

            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="flex items-center gap-2"><Users size={16} /> 24 people going</span>
              <Heart size={18} className="text-assign-purple" />
            </div>
          </article>

          <motion.div
            className="assign-trip-progress absolute -right-2 bottom-[20%] flex w-60 items-start gap-3 rounded-2xl bg-white p-4 shadow-assign-card sm:-right-10"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <img src={robbinImg} alt="Robbin" className="h-10 w-10 rounded-full object-cover" />
            <div className="w-full">
              <p className="text-xs">Ongoing</p>
              <p className="text-sm font-medium text-assign-navy">Trip to rome</p>
              <p className="mt-2 text-xs"><span className="text-assign-purple">40%</span> completed</p>
              <div className="mt-1 h-1 w-full rounded-full bg-assign-grey">
                <div className="h-1 w-2/5 rounded-full bg-assign-purple" />
              </div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}

export default BookSteps
