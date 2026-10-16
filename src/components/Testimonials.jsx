import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Reveal from './Reveal'
import { assignTestimonials } from '../data/assignData'

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const total = assignTestimonials.length
  const current = assignTestimonials[activeIndex]
  const next = assignTestimonials[(activeIndex + 1) % total]

  function goPrev() {
    setActiveIndex((activeIndex - 1 + total) % total)
  }

  function goNext() {
    setActiveIndex((activeIndex + 1) % total)
  }

  return (
    <section id="testimonials" className="assign-testimonials py-20" aria-labelledby="assign-testimonials-title">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">
        <Reveal className="assign-testimonials-left">
          <p className="font-medium uppercase text-assign-text">Testimonials</p>
          <h2 id="assign-testimonials-title" className="mt-3 font-assign-heading text-4xl font-bold leading-tight text-assign-navy sm:text-5xl">
            What People Say <br className="hidden sm:block" /> About Us.
          </h2>

          <div className="assign-testimonials-dots mt-12 flex gap-3">
            {assignTestimonials.map((item, index) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show testimonial ${index + 1}`}
                className={`h-2.5 w-2.5 cursor-pointer rounded-full transition-colors ${
                  index === activeIndex ? 'bg-assign-navy' : 'bg-assign-grey'
                }`}
              />
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2} className="assign-testimonials-right relative pt-8">
          <div className="relative mr-0 md:mr-16">
            <AnimatePresence mode="wait">
              <motion.article
                key={current.name}
                className="assign-testimonial-card relative z-10 rounded-xl bg-white p-8 pt-10 shadow-assign-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.35 }}
              >
                <img
                  src={current.image}
                  alt={current.name}
                  className="absolute -left-4 -top-8 h-16 w-16 rounded-full object-cover"
                />
                <p className="ml-4 text-sm leading-7">“{current.text}”</p>
                <p className="ml-4 mt-6 font-medium text-assign-navy">{current.name}</p>
                <p className="ml-4 text-xs">{current.place}</p>
              </motion.article>
            </AnimatePresence>

            <div className="assign-testimonial-next mx-6 -mt-3 rounded-xl border border-assign-grey bg-white px-6 pb-4 pt-8 opacity-70">
              <p className="font-medium text-assign-navy">{next.name}</p>
              <p className="text-xs">{next.place}</p>
            </div>

            <div className="assign-testimonial-arrows mt-6 flex gap-4 md:absolute md:-right-14 md:top-1/3 md:mt-0 md:flex-col">
              <button type="button" onClick={goPrev} aria-label="Previous testimonial" className="cursor-pointer text-assign-text hover:text-assign-navy">
                <ChevronUp size={24} />
              </button>
              <button type="button" onClick={goNext} aria-label="Next testimonial" className="cursor-pointer text-assign-text hover:text-assign-navy">
                <ChevronDown size={24} />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Testimonials
