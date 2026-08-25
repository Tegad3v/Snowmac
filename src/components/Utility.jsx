import { useEffect, useState } from "react";
import { LuArrowUp } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa6";

function Utility() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* WhatsApp */}
      <a
        href="https://wa.me/2349117289298"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="
          fixed
          bottom-6
          right-6
          w-12
          h-12
          rounded-full
          bg-green-500
          flex
          items-center
          justify-center
          text-white
          text-[22px]
          shadow-lg
          transition-transform
          duration-200
          hover:scale-105
          z-40
        "
      >
        <FaWhatsapp className="text-2xl" />
      </a>

      {/* Back to Top */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`
          fixed
          bottom-22
          right-6
          w-12
          h-12
          rounded-full
          bg-brandGold
          flex
          items-center
          justify-center
          text-black
          text-[20px]
          shadow-lg
          transition-all
          duration-300
          hover:scale-105
          z-40
          ${
            showTop
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible translate-y-3 pointer-events-none"
          }
        `}
      >
        <LuArrowUp />
      </button>
    </>
  );
}

export default Utility;
