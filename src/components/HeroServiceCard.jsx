import { GoArrowRight } from "react-icons/go";
import { BsDot } from "react-icons/bs";
import Badge from "./Badge";

function HeroServiceCard() {
  return (
    <div>
      <div className="hidden w-xl md:flex items-center justify-end">
        <div
          className="w-110 h-fit flex flex-col gap-5 border rounded-4xl p-7 backdrop-blur-[3px]"
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            borderColor: "rgba(198, 154, 26, 0.28)",
            boxShadow: "0px 18px 48px 0px rgba(0, 0, 0, 0.18)",
          }}
        >
          <Badge className={`text-brandGold`}>WHY CHOOSE SNOWMAC</Badge>

          <h3 className="text-[28px] leading-9.5 font-bold font-cinzel">
            BUILDING BETTER <br /> SPACES FOR TOMORROW
          </h3>

          <hr className="w-15 border-t-2 border-brandGold" />

          <ul className="capitalize py-2.5 flex flex-col gap-3 text-[16px] pt-[] font-light">
            <li className="flex items-center">
              <BsDot className="text-brandGold text-lg" /> Architectural Design
            </li>
            <li className="flex gap-1 items-center">
              <BsDot className="text-brandGold text-lg" /> Construction
            </li>
            <li className="flex gap-1 items-center">
              <BsDot className="text-brandGold text-lg" /> General Building
              Services
            </li>

            <a
              href="#services"
              className="group w-fit relative inline-flex items-center gap-2 pb-2 text-[16px] text-brandGold hover:text-brandGoldLight before:absolute before:left-0 before:bottom-0 before:h-px before:bg-brandGoldLight before:transition-all before:duration-300 before:w-0 hover:before:w-full"
            >
              Explore Our Services
              <span>
                <GoArrowRight />
              </span>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeroServiceCard;
