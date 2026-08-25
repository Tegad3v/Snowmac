import { keyMetrics } from "../Data/Data";
import MotionElement from "../components/MotionElement";

const mdColumnPlacement = [
  "md:col-start-1",
  "md:col-start-3",
  "md:col-start-5",
  "md:col-start-2",
  "md:col-start-4",
];

function KeyMetrics() {
  const isLast = (index) => index === keyMetrics.length - 1;

  return (
    <section className="px-0 bg-black">
      <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-5 text-light text-center font-inter justify-center">
        {keyMetrics.map((i, index) => (
          <MotionElement
            key={index}
            axis="y"
            distance={40}
            delay={0.1 + index * 0.1}
            duration={0.6}
            className={`
              relative
              flex flex-col items-center justify-center
              gap-2 sm:gap-3 md:gap-4 lg:gap-5
              py-8 sm:py-10 md:py-12 lg:py-14
              md:col-span-2 lg:col-span-1
              ${mdColumnPlacement[index] || ""}
              lg:col-start-auto

              ${isLast(index) ? "col-span-2 w-1/2 mx-auto md:w-auto" : ""}

              ${
                index < keyMetrics.length - 1
                  ? "before:absolute before:right-0 before:top-1/2 before:-translate-y-1/2 before:w-px before:h-16 before:bg-white/10"
                  : ""
              }

              ${
                index < keyMetrics.length - 1
                  ? "after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-full after:h-px after:bg-white/10"
                  : ""
              }

              ${index == 2 ? "md:before:opacity-0 lg:before:opacity-100" : ""}

              md:after:hidden
            `}
          >
            <div className="metrics-value">
              <p className="text-[36px] sm:text-[42px] md:text-[48px] lg:text-[54px] leading-none">
                {i.metric}
              </p>
            </div>

            <p className="text-[10px] sm:text-[11px] md:text-[12px] lg:text-[12px] leading-4 tracking-[10%] font-semibold">
              {i.title}
            </p>
          </MotionElement>
        ))}
      </div>
    </section>
  );
}

export default KeyMetrics;
