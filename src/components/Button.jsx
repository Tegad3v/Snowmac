import { GoArrowRight } from "react-icons/go";
import { LuLoaderCircle } from "react-icons/lu";

function Button({
  className,
  link,
  children,
  type = "primary",
  htmlType,
  disabled,
  isSending = false,
}) {
  const baseClasses = `${className} w-full md:w-fit flex justify-center btn group md:inline-flex items-center gap-1.5 md:gap-2.5 lg:gap-3 
    md:px-5 md:py-2.5 lg:px-6 lg:py-3 
    text-sm md:text-base lg:text-lg
    transition-all duration-300
    ${
      type === "secondary"
        ? "bg-transparent border border-light text-white hover:border-brandGold hover:text-brandGold hover:bg-gray-50/10"
        : "bg-brandGold text-white hover:bg-brandGoldDark"
    }
    ${disabled ? "opacity-60 cursor-not-allowed pointer-events-none" : ""}`;

  const content = (
    <>
      {children}

      <span className="transition-transform duration-300 group-hover:translate-x-0.5 md:group-hover:translate-x-1.5 lg:group-hover:translate-x-2">
        {isSending ? (
          <LuLoaderCircle className="animate-spin text-sm sm:text-base md:text-base lg:text-lg" />
        ) : (
          <GoArrowRight className="text-sm sm:text-base md:text-base lg:text-lg" />
        )}
      </span>
    </>
  );

  // Render a real <button> when used inside a form
  if (htmlType === "submit" || htmlType === "button" || htmlType === "reset") {
    return (
      <button type={htmlType} disabled={disabled} className={baseClasses}>
        {content}
      </button>
    );
  }

  // Default: link-style button
  return (
    <a href={link} className={baseClasses}>
      {content}
    </a>
  );
}

export default Button;
