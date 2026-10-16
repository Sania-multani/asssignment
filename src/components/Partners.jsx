import Reveal from "./Reveal";
import { assignPartners } from "../data/assignData";

function Partners() {
  return (
    <section className="assign-partners py-10" aria-label="Our partners">
      <Reveal className="assign-partners-list mx-auto grid max-w-7xl grid-cols-2 gap-y-6 px-5 sm:grid-cols-3 sm:px-8 lg:grid-cols-5 lg:px-10">
        {assignPartners.map((partner, index) => (
          <div
            key={partner.name}
            className={`assign-partner-item flex h-[88px] items-center justify-center rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-assign-card `}
          >
            <img
              src={partner.image}
              alt={partner.name}
              loading="lazy"
              className={`assign-partner-logo h-auto max-w-[85%] ${partner.widthClass}`}
            />
          </div>
        ))}
      </Reveal>
    </section>
  );
}

export default Partners;
