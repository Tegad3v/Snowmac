import { GoArrowRight } from "react-icons/go";

function Button({ className, link, children, type = "primary" }) {
  return (
    <a
      href={link}
      className={`${className} w-full md:w-fit flex justify-center btn group md:inline-flex items-center gap-1.5 md:gap-2.5 lg:gap-3 
        md:px-5 md:py-2.5 lg:px-6 lg:py-3 
        text-sm md:text-base lg:text-lg
        transition-all duration-300
        ${
          type === "secondary"
            ? "bg-transparent border border-light text-white hover:border-brandGold hover:text-brandGold hover:bg-gray-50/10"
            : "bg-brandGold text-white hover:bg-brandGoldDark"
        }`}
    >
      {children}

      <span className="transition-transform duration-300 group-hover:translate-x-0.5 md:group-hover:translate-x-1.5 lg:group-hover:translate-x-2">
        <GoArrowRight className="text-sm sm:text-base md:text-base lg:text-lg" />
      </span>
    </a>
  );
}

export default Button;
