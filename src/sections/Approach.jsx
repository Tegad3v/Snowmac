import Badge from "../components/Badge";
import { approachDetails } from "../Data/Data";
import MotionElement from "../components/MotionElement";

function Approach() {
  return (
    <section className="bg-black text-white overflow-hidden" id="approach ">
      <div className="max-w-7xl mx-auto flex flex-col gap-5 sm:gap-6 md:gap-7">
        {/* Header */}
        <MotionElement
          axis="y"
          distance={30}
          delay={0.1}
          duration={0.6}
          className="mx-auto"
        >
          <Badge className=" text-brandGold">OUR APPROACH</Badge>
        </MotionElement>

        <MotionElement axis="y" distance={40} delay={0.2} duration={0.7}>
          <h2 className="section-header w-full max-w-5xl text-center mx-auto">
            Building <span className="text-brandGold">Every</span> Project With
            Precision
          </h2>
        </MotionElement>

        <MotionElement axis="y" distance={30} delay={0.3} duration={0.6}>
          <p
            className="
            w-full
            max-w-2xl
            mx-auto
            text-center
            font-light
            text-sm
            sm:text-[15px]
            md:text-[16px]
            lg:text-[18px]
            leading-6
            sm:leading-7
            lg:leading-8
          "
          >
            Every project follows a structured process that ensures quality,
            transparency, and timely delivery from concept to completion.
          </p>
        </MotionElement>

        {/* Approach */}
        <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16">
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            {/* Numbers / Timeline */}
            <MotionElement axis="y" distance={30} delay={0.2} duration={0.6}>
              <div className="relative flex justify-between items-start px-10 xl:px-16">
                {/* Horizontal line */}
                <div
                  className="
                  absolute
                  top-0.75
                  left-10
                  right-10
                  xl:left-16
                  xl:right-16
                  h-px
                  bg-[#D9D9D92E]
                "
                />

                {approachDetails.map((_, index) => (
                  <div
                    key={index}
                    className="
                      relative
                      z-10
                      flex
                      flex-col
                      items-center
                      font-cinzel
                      text-[22px]
                      leading-5
                      text-brandGold
                      tracking-[1px]
                    "
                  >
                    {/* Dot */}
                    <span
                      className="
                      w-2
                      h-2
                      rounded-xs
                      bg-brandGold
                      mb-4"
                    />

                    {/* Number */}
                    <span>0{index + 1}</span>

                    {/* Vertical connector */}
                    <span
                      className="
                      mt-4
                      h-10
                      w-px
                      bg-[#D9D9D92E]
                    "
                    />
                  </div>
                ))}
              </div>
            </MotionElement>

            {/* Cards */}
            <div
              className="
              grid
              grid-cols-5
              gap-5
              mt-8
            "
            >
              {approachDetails.map((i, index) => (
                <MotionElement
                  key={index}
                  axis="y"
                  distance={50}
                  delay={0.2 + index * 0.15}
                  duration={0.7}
                >
                  <div
                    className="
                      py-6
                      px-5
                      flex
                      flex-col
                      gap-5
                      bg-white
                      rounded-[20px]
                      text-black
                      h-full
                    "
                  >
                    <h4
                      className="
                      min-h-10
                      font-cinzel
                      font-bold
                      text-[18px]
                      xl:text-[20px]
                      leading-5
                      tracking-[1%]
                    "
                    >
                      {i.title}
                    </h4>

                    <hr className="w-full border-t-2 border-brandGold" />

                    <p
                      className="
                      text-sm
                      xl:text-[16px]
                      leading-6
                      text-[#666666]
                    "
                    >
                      {i.details}
                    </p>
                  </div>
                </MotionElement>
              ))}
            </div>
          </div>

          {/* Mobile / Tablet Timeline */}
          <div className="lg:hidden relative">
            {/* Vertical timeline */}
            <div
              className="
              absolute
              left-4.5  
              top-0
              bottom-0
              w-px
              bg-[#D9D9D92E]
            "
            />

            <div className="flex flex-col gap-8 sm:gap-10">
              {approachDetails.map((i, index) => (
                <MotionElement
                  key={index}
                  axis="x"
                  distance={30}
                  delay={0.2 + index * 0.15}
                  duration={0.7}
                >
                  <div className="relative flex gap-5 sm:gap-7">
                    {/* Number */}
                    <div
                      className="
                      relative
                      z-10
                      shrink-0
                      w-9
                      h-9
                      flex
                      items-center
                      justify-center
                      bg-black
                      border
                      border-brandGold
                      rounded-full
                      font-cinzel
                      text-xs
                      sm:text-sm
                      text-brandGold
                    "
                    >
                      0{index + 1}
                    </div>

                    {/* Card */}
                    <div
                      className="
                      flex-1
                      py-5
                      px-5
                      sm:p-6
                      bg-white
                      rounded-[20px]
                      text-black
                    "
                    >
                      <h4
                        className="
                        font-cinzel
                        font-bold
                        text-[18px]
                        sm:text-[20px]
                        leading-6
                      "
                      >
                        {i.title}
                      </h4>

                      <hr className="my-4 border-t-2 border-brandGold" />

                      <p
                        className="
                        text-sm
                        sm:text-[15px]
                        leading-6
                        text-[#666666]
                      "
                      >
                        {i.details}
                      </p>
                    </div>
                  </div>
                </MotionElement>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Approach;
