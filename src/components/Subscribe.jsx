import { useState } from "react";
import { Mail, Plus, Send } from "lucide-react";
import Reveal from "./Reveal";
import circlesLeft from "../assets/subscribe-circles-left.svg";
import circlesRight from "../assets/subscribe-circles-right.svg";

// 0 = empty, 1 = grey plus, 2 = orange plus, 3 = purple plus
const assignPlusRows = [
  [0, 0, 1, 1, 2],
  [0, 0, 1, 1, 1],
  [0, 0, 3, 1, 1],
  [0, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
];

const assignPlusColors = {
  1: "text-assign-text/25",
  2: "text-assign-orange",
  3: "text-assign-purple",
};

function Subscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(""); // '', 'error' or 'success'

  function handleChange(e) {
    setEmail(e.target.value);
    setStatus("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    const isValid = /^\S+@\S+\.\S+$/.test(email);

    if (isValid) {
      setStatus("success");
      setEmail("");
    } else {
      setStatus("error");
    }
  }

  return (
    <section
      className="assign-subscribe py-20"
      aria-labelledby="assign-subscribe-title"
    >
      <Reveal className="mx-auto max-w-[1170px] px-5 sm:px-8 xl:px-0">
        <div className="assign-subscribe-wrapper relative">
          {/* box with background circles (clipped inside the box) */}
          <div className="assign-subscribe-box relative overflow-hidden rounded-[20px] rounded-tl-[60px] rounded-tr-none bg-assign-lavender px-5 pb-[78px] pt-16 text-center sm:rounded-tl-[100px] sm:pt-20">
            <img
              src={circlesLeft}
              alt=""
              aria-hidden="true"
              className="assign-subscribe-circles-left pointer-events-none absolute bottom-0 left-5 hidden h-[290px] w-auto opacity-20 md:block"
            />
            <img
              src={circlesRight}
              alt=""
              aria-hidden="true"
              className="assign-subscribe-circles-right pointer-events-none absolute right-0 top-0 hidden h-[272px] w-auto opacity-20 md:block"
            />

            <h2
              id="assign-subscribe-title"
              className="relative mx-auto max-w-[870px] text-2xl font-semibold leading-9 text-assign-text sm:text-[32px] sm:leading-[54px]"
            >
              Subscribe to get information, latest news and other interesting
              offers about Jadoo
            </h2>

            <div className="assign-subscribe-form-area relative mt-12 sm:mt-[74px]">
              <form
                onSubmit={handleSubmit}
                noValidate
                className="assign-subscribe-form flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6 sm:pr-10"
              >
                <label className="flex h-[68px] w-full items-center gap-4 rounded-[10px] bg-white px-[30px] sm:w-[421px]">
                  <Mail size={20} className="shrink-0 text-assign-text" />
                  <span className="sr-only">Your email</span>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="Your email"
                    className="w-full bg-transparent text-sm text-assign-text outline-none placeholder:text-assign-text"
                  />
                </label>

                <button
                  type="submit"
                  className="h-[68px] w-full cursor-pointer rounded-[10px] bg-linear-to-b from-assign-peach to-assign-coral font-medium text-white transition-transform hover:-translate-y-1 sm:w-[180px]"
                >
                  Subscribe
                </button>
              </form>

              <p
                className="assign-subscribe-message absolute left-0 right-0 top-full mt-3 text-sm"
                role="status"
              >
                {status === "error" && (
                  <span className="text-assign-orange">
                    Please enter a valid email address.
                  </span>
                )}
                {status === "success" && (
                  <span className="text-assign-teal">
                    Thanks for subscribing!
                  </span>
                )}
              </p>
            </div>
          </div>

          {/* these two stick out of the box, so they are outside the clipped box */}
          <span
            className="assign-subscribe-send absolute -top-[13px] right-2 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-linear-to-br from-assign-violet to-assign-purple text-white sm:-right-5"
            aria-hidden="true"
          >
            <Send size={28} fill="currentColor" />
          </span>

          <div
            className="assign-subscribe-plus absolute -right-[110px] top-[306px] hidden w-[175px] grid-cols-5 xl:grid"
            aria-hidden="true"
          >
            {assignPlusRows.flat().map((cell, index) => (
              <span
                key={index}
                className="flex h-[35px] w-[35px] items-center justify-center"
              >
                {cell !== 0 && (
                  <Plus size={12} className={assignPlusColors[cell]} />
                )}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default Subscribe;
