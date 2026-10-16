import { Navigation } from "lucide-react";
import Reveal from "./Reveal";
import { assignDestinations } from "../data/assignData";
import spiralImg from "../assets/spiral.svg";

function Destinations() {
  return (
    <section
      id="destinations"
      className="assign-destinations py-20"
      aria-labelledby="assign-destinations-title"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal className="assign-destinations-heading text-center">
          <p className="text-lg font-medium text-assign-text">Top Selling</p>
          <h2
            id="assign-destinations-title"
            className="mt-2 font-assign-heading text-4xl font-bold text-assign-navy sm:text-5xl"
          >
            Top Destinations
          </h2>
        </Reveal>

        <div className="assign-destinations-list mt-16 grid justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:flex xl:justify-center xl:gap-9">
          {assignDestinations.map((place, index) => (
            <Reveal
              key={place.name}
              delay={index * 0.15}
              className={`assign-destination-item relative w-full xl:w-[314px] ${index === 2 ? "xl:ml-[25px]" : ""}`}
            >
              {index === 2 && (
                <img
                  src={spiralImg}
                  alt=""
                  aria-hidden="true"
                  className="assign-destination-spiral absolute -right-[63px] top-[158px] z-0 hidden h-[253px] w-[97px] xl:block"
                />
              )}

              <article className="assign-destination-card relative z-10 overflow-hidden rounded-[30px] bg-white shadow-assign-destination transition-transform duration-300 hover:-translate-y-2">
                <div className="overflow-hidden">
                  <img
                    src={place.image}
                    alt={place.name}
                    loading="lazy"
                    className="h-[327px] w-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>

                <div className="assign-destination-info pb-10 pl-5 pr-6 pt-6 text-assign-text">
                  <div className="flex items-center justify-between text-lg leading-7">
                    <h3>{place.name}</h3>
                    <span>{place.price}</span>
                  </div>
                  <p className="mt-3.5 flex items-center gap-4 text-base leading-6">
                    <Navigation
                      size={16}
                      fill="currentColor"
                      className="text-black"
                    />
                    {place.days}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Destinations;
