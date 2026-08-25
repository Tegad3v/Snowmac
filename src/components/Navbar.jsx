import { useState, useEffect } from "react";
import Logo from "./Logo";

function Navbar({ className }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on link click
  const handleLinkClick = () => setIsOpen(false);

  const navLinks = [
    { href: "#about", label: "about" },
    { href: "#services", label: "services" },
    { href: "#projects", label: "projects" },
    { href: "#contact", label: "contact" },
  ];

  return (
    <nav
      className={`${className} fixed top-0 z-50 w-full transition-colors duration-300  ${
        isScrolled
          ? "bg-black/60 backdrop-blur-md shadow-sm"
          : "md:bg-transparent bg-black/60 backdrop-blur-md md:backdrop-blur-none"
      } flex justify-between items-center p-5 md:px-30 lg:py-5 h-fit`}
    >
      <a href="#top" onClick={handleLinkClick}>
        <Logo className={"font-bold text-[18px]"} />
      </a>

      {/* Desktop nav links */}
      <ul
        className={`
          nav-links
          hidden
          md:flex
          gap-8
          uppercase
          font-inter
          font-semibold
          text-[12px]
        `}
      >
        {navLinks.map((link) => (
          <li className="nav-link" key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>

      {/* Mobile toggle button */}
      <button
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className="md:hidden relative z-50 flex flex-col justify-center items-center w-8 h-8 gap-1.25"
      >
        <span
          className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-1.75" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-1.75" : ""
          }`}
        />
      </button>

      {/* Mobile menu */}
      <div
        className={`
    md:hidden
    absolute top-full left-0
    w-full
    flex flex-col
    px-6 py-4
    gap-4
    uppercase
    font-inter
    font-semibold
    text-[14px]
    shadow-md
    transition-all duration-300 ease-in-out
    backdrop-blur-md!
    bg-black/60

    ${
      isOpen
        ? "opacity-100 visible translate-y-0"
        : "opacity-0 invisible -translate-y-2 pointer-events-none"
    }
  `}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={handleLinkClick}
            className="nav-link"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
