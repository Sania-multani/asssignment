import Reveal from './Reveal'
import PlusGrid from './PlusGrid'
import { assignServices } from '../data/assignData'

function Services() {
  return (
    <section id="services" className="assign-services relative py-20" aria-labelledby="assign-services-title">
      <PlusGrid className="absolute right-10 top-16 hidden lg:grid" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal className="assign-services-heading text-center">
          <p className="font-medium uppercase text-assign-text">Category</p>
          <h2 id="assign-services-title" className="mt-2 font-assign-heading text-4xl font-bold text-assign-navy sm:text-5xl">
            We Offer Best Services
          </h2>
        </Reveal>

        <div className="assign-services-list mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {assignServices.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.1} className="assign-service-item relative h-full">
              {index === 1 && (
                <span
                  className="assign-service-box absolute -bottom-9 -left-9 hidden h-24 w-24 rounded-tl-3xl rounded-br-lg bg-assign-orange lg:block"
                  aria-hidden="true"
                />
              )}

              <article
                className={`assign-service-card relative z-10 h-full rounded-3xl px-6 py-10 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-assign-card ${
                  index === 1 ? 'bg-white shadow-assign-card' : ''
                }`}
              >
                <img src={service.image} alt="" className="mx-auto h-16 w-16 object-contain" />
                <h3 className="mt-6 text-xl font-semibold text-assign-navy">{service.title}</h3>
                <p className="mt-4 text-sm leading-7">{service.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services