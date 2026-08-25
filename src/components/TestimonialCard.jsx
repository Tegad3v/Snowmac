import { FaStar } from "react-icons/fa";

function TestimonialCard({ testimonial }) {
  return (
    <div
      className="
        min-h-full
        bg-[#242424]
        text-white
        rounded-[20px]
        p-9
        flex
        flex-col
        justify-between
        gap-8
      "
    >
      <div className="flex flex-col gap-5.5 p-2.5">
        {/* Stars */}
        <div className="flex gap-1 text-brandGold">
          {Array.from({ length: testimonial.rating }).map((_, index) => (
            <FaStar key={index} className="text-sm" />
          ))}
        </div>

        {/* Quote */}
        <div className="flex flex-col gap-4">
          <p className="font-cormorant italic text-lg sm:text-xl lg:text-[22px] leading-7 text-white/75">
            “{testimonial.quote}”
          </p>
        </div>
      </div>

      {/* Client */}
      <div className="flex gap-2.5">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-[#353535] flex items-center justify-center">
          {testimonial.image ? (
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <p className="font-cinzel font-bold text-white text-lg">
              {testimonial.initial}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <h4 className="font-cinzel font-bold text-sm sm:text-base">
            {testimonial.name}
          </h4>

          <p className="font-inter text-xs text-brandGold">
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
