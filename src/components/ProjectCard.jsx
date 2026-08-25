function ProjectCard({
  className = "",
  image,
  category,
  title,
  location,
  description,
}) {
  return (
    <div
      className={`
        ${className}
        group
        relative
        w-full
        h-full
        overflow-hidden
        rounded-[20px]
        border
        border-brandGold
        lg:border-transparent
        lg:hover:border-brandGold
      `}
    >
      {/* Moving Content */}
      <div
        className="
          lg:absolute
          lg:left-0
          lg:top-0
          w-full
          lg:transition-transform
          lg:duration-500
          lg:ease-in-out
          lg:group-hover:translate-y-[-40%]
        "
      >
        {/* Image */}
        <div
          className="
            relative
            w-full
            h-87.5
            sm:h-100
            lg:h-125
          "
        >
          <img
            src={image}
            alt={title}
            className="block w-full h-full object-cover object-center"
          />

          {/* LG Gradient */}
          <div
            className="
              hidden
              lg:block
              absolute
              inset-0
              bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0.06)_25%,rgba(0,0,0,0.24)_50%,rgba(0,0,0,0.76)_75%,rgba(0,0,0,0.9)_100%)]
            "
          />

          {/* LG Bottom Text */}
          <div
            className="
              hidden
              lg:flex
              absolute
              bottom-0
              left-0
              w-full
              p-8
              flex-col
              gap-2
              text-white
              transition-opacity
              duration-300
              group-hover:opacity-0
            "
          >
            <p className="text-brandGold text-[11px] font-semibold tracking-[12%]">
              {category}
            </p>

            <h4 className="font-cinzel font-bold text-[24px] leading-7.5">
              {title}
            </h4>

            <p className="text-sm text-white/70">{location}</p>
          </div>
        </div>

        {/* Details */}
        <div
          className="
            bg-white
            text-black
            p-5
            sm:p-6
            flex
            flex-col
            justify-center
            gap-2
          "
        >
          <p className="text-brandGold text-[11px] font-semibold tracking-[12%]">
            {category}
          </p>

          <h4 className="font-cinzel font-bold text-xl sm:text-2xl">{title}</h4>

          <p className="text-sm text-black/60">{location}</p>

          <p className="text-sm text-black/60 leading-5">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
