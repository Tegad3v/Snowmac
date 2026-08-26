import { FaInstagram, FaFacebookF } from "react-icons/fa6";
import Logo from "../components/Logo";
import MotionElement from "../components/MotionElement";

import { ig } from "../Data/Data";

import { facebook as fb } from "../Data/Data";

function Footer() {
  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Sevices", href: "#services" },
    { label: "Our Approach", href: "#approach" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const services = [
    { label: "Design", href: "#services" },
    { label: "Construction", href: "#services" },
    { label: "General Building Services", href: "#services" },
  ];

  return (
    <footer className="relative bg-black text-white px-5 py-8 md:p-12 lg:p-30">
      <div
        className="
            flex flex-col md:grid
            lg:grid-cols-5
            gap-12
            lg:gap-16
            pb-16
            lg:pb-20
          "
      >
        <MotionElement
          axis="y"
          distance={40}
          delay={0.1}
          duration={0.7}
          className="col-span-2 lg:col-span-2 flex flex-col gap-6"
        >
          <a href="#top">
            <Logo className="text-[40px] md:text-[52px]" />
          </a>

          <p
            className="
                max-w-md
                text-white/55
                font-inter
                text-sm
                sm:text-[15px]
                leading-6
                sm:leading-7
              "
          >
            Snowmac Integrated Building Services delivers premium engineering,
            architecture, construction, interior design and real estate
            solutions across Nigeria.
          </p>

          {/* Socials */}
          <div className="flex gap-3 mt-2">
            <a
              href={ig}
              aria-label="Instagram"
              className="
                  w-8 h-8
                  md:w-12
                  md:h-12
                  md:text-[22px]
                  rounded-full
                  bg-[#353535]
                  flex
                  items-center
                  justify-center
                  text-white
                  hover:bg-brandGold
                  hover:text-black
                  transition-colors
                "
            >
              <FaInstagram />
            </a>

            <a
              href={fb}
              aria-label="Facebook"
              className="
                  w-8 h-8
                  md:w-12
                  md:h-12
                  md:text-[20px]
                  rounded-full
                  bg-[#353535]
                  flex
                  items-center
                  justify-center
                  text-white
                  hover:bg-brandGold
                  hover:text-black
                  transition-colors
                "
            >
              <FaFacebookF />
            </a>
          </div>
        </MotionElement>

        {/* Quick Links */}
        <MotionElement
          axis="y"
          distance={40}
          delay={0.2}
          duration={0.7}
          className="flex flex-col gap-5"
        >
          <h3 className="font-inter text-[11px] font-semibold tracking-[10%] uppercase text-brandGold">
            Quick Links
          </h3>

          <div className="flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <MotionElement
                key={link.label}
                axis="y"
                distance={15}
                delay={0.1 + index * 0.05}
                duration={0.4}
              >
                <a
                  href={link.href}
                  className="
                    capitalize
                    w-fit
                    font-inter
                    text-sm
                    text-white/65
                    hover:text-brandGold
                    transition-colors
                  "
                >
                  {link.label}
                </a>
              </MotionElement>
            ))}
          </div>
        </MotionElement>

        {/* Services */}
        <MotionElement
          axis="y"
          distance={40}
          delay={0.3}
          duration={0.7}
          className="flex flex-col gap-5"
        >
          <h3 className="font-inter text-[11px] font-semibold tracking-[10%] uppercase text-brandGold">
            SERVICES
          </h3>

          <div className="flex flex-col gap-4">
            {services.map((service, index) => (
              <MotionElement
                key={service.label}
                axis="y"
                distance={15}
                delay={0.1 + index * 0.05}
                duration={0.4}
              >
                <a
                  href={service.href}
                  className="
                    w-fit
                    font-inter
                    text-sm
                    text-white/65
                    hover:text-brandGold
                    transition-colors
                  "
                >
                  {service.label}
                </a>
              </MotionElement>
            ))}
          </div>
        </MotionElement>

        {/* Newsletter */}
        <MotionElement
          axis="y"
          distance={40}
          delay={0.4}
          duration={0.7}
          className="sm:col-span-2 lg:col-span-4 lg:absolute lg:right-30 lg:top-30 lg:w-60"
        >
          <div className="flex flex-col gap-5">
            <h3 className="font-inter text-[11px] font-semibold tracking-[10%] uppercase text-brandGold">
              STAY TUNED
            </h3>

            <p className="text-white/60 text-sm leading-6">
              Receive updates on projects, construction tips and company news.
            </p>

            <form className="flex w-full">
              <input
                type="email"
                placeholder="Your email"
                className="
                    min-w-0
                    flex-1
                    h-11
                    px-4
                    rounded-l-xl
                    border
                    border-white/15
                    bg-transparent
                    outline-none
                    text-sm
                    text-white
                    placeholder:text-white/50
                    focus:border-brandGold
                  "
              />

              <button
                type="submit"
                className="
                    h-11
                    px-6
                    rounded-r-xl
                    bg-brandGold
                    text-black
                    font-semibold
                    text-sm
                    hover:bg-brandGoldLight
                    transition-colors
                  "
              >
                Join
              </button>
            </form>
          </div>
        </MotionElement>
      </div>

      <MotionElement axis="y" distance={20} delay={0.5} duration={0.5}>
        <div className="border-t border-white/10" />
      </MotionElement>

      <MotionElement
        axis="y"
        distance={30}
        delay={0.6}
        duration={0.6}
        className="
            flex
            flex-col
            md:flex-row
            md:items-center
            md:justify-between
            gap-6
            pt-8
          "
      >
        {/* Copyright */}
        <div className="flex flex-col gap-2">
          <p className="text-white/45 text-xs sm:text-sm">
            © 2026 Snowmac Integrated Building Services.
          </p>

          <p className="text-white/45 text-xs sm:text-sm">
            All Rights Reserved.
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs sm:text-sm text-white/45">
          <a href="#" className="hover:text-brandGold transition-colors">
            Privacy Policy
          </a>

          <span className="text-brandGold">•</span>

          <a href="#" className="hover:text-brandGold transition-colors">
            Terms of Service
          </a>
        </div>
      </MotionElement>
    </footer>
  );
}

export default Footer;
