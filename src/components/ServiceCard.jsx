import { BsDot } from "react-icons/bs";

function ServiceCard({ i, index }) {
  return (
    <div className="w-full flex flex-col overflow-hidden border border-border bg-white rounded-[20px]">
      {/* Image */}
      <div className="w-full aspect-[1.43] overflow-hidden">
        <img
          className="w-full h-full object-cover object-center"
          src={i.imageUrl}
          alt={i.title}
        />
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 md:p-7 flex flex-col gap-4 sm:gap-5">
        {/* Number */}
        <h3
          className="
            relative
            pb-3
            font-cinzel
            font-bold
            text-[26px]
            sm:text-[28px]
            md:text-[30px]
            lg:text-[32px]
            leading-none
            text-brandGold
            before:absolute
            before:bottom-0
            before:left-0
            before:h-0.5
            before:w-10
            before:bg-brandGold
          "
        >
          <span className="hidden md:block">0{index + 1}</span>
          <i.Icon className="md:hidden text-[40px]" />
        </h3>

        {/* Title */}
        <h3
          className="
            relative
            h-20
            pb-4
            font-cinzel
            font-bold
            text-[22px]
            sm:text-[24px]
            md:text-[26px]
            lg:text-[28px]
            leading-tight
            capitalize
            before:absolute
            before:bottom-0
            before:left-0
            before:h-0.5
            before:w-12
            before:bg-brandGold
          "
        >
          {i.title}
        </h3>

        {/* Details */}
        <ul className="flex flex-col gap-4 p-1 sm:p-2">
          {i.details.map((detail, index) => (
            <li
              key={index}
              className="
                flex
                items-start
                gap-1
                text-[14px]
                sm:text-[15px]
                md:text-[16px]
                leading-5
              "
            >
              <BsDot className="shrink-0 text-brandGold text-lg mt-0.5" />

              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ServiceCard;
