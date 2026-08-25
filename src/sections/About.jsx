import about from "../assets/Images/about.png";
import Badge from "../components/Badge";
import { LuDraftingCompass } from "react-icons/lu";
import { IoEyeOutline } from "react-icons/io5";
import MotionElement from "../components/MotionElement";

function About() {
  return (
    <section
      id="about"
      className="bg-white px-6 sm:px-8 md:px-10 lg:px-25 py-16 sm:py-20 md:py-24 lg:py-28"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 md:gap-16 lg:gap-20 items-center">
        {/* About Visual */}
        <MotionElement
          axis="x"
          distance={-60}
          delay={0.2}
          duration={0.8}
          className="hidden lg:block relative w-full lg:w-1/2"
        >
          <div className="w-full max-w-2xl mx-auto">
            <img
              className="w-full h-auto aspect-4/5 object-cover rounded-2xl"
              src={about}
              alt="Snowmac building project"
            />

            {/* Quote Card */}
            <div
              className="
              absolute
              -bottom-8
              left-1/2
              -translate-x-1/2
              w-[85%]
              sm:w-[70%]
              md:w-[55%]
              lg:w-[55%]
              bg-brandGold
              p-4 sm:p-5
              rounded-xl
            "
            >
              <p className="italic text-[18px] sm:text-[20px] leading-6 sm:leading-7 font-cormorant">
                Thoughtful design. Precision execution. Exceptional results.
              </p>

              <span className="text-black/70 font-inter italic text-[12px] sm:text-[14px] leading-6">
                — Snowmac Team
              </span>
            </div>
          </div>
        </MotionElement>

        {/* About Content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6 md:gap-7 lg:gap-8">
          <MotionElement axis="y" distance={30} delay={0.1} duration={0.6}>
            <Badge>ABOUT SNOWMAC</Badge>
          </MotionElement>

          <MotionElement axis="y" distance={40} delay={0.2} duration={0.7}>
            <h2
              className="
              font-cinzel font-bold
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-[42px]
              leading-tight
            "
            >
              Building Sustainable Spaces Through Innovation & Excellence
            </h2>
          </MotionElement>

          <MotionElement
            axis="y"
            distance={30}
            delay={0.3}
            duration={0.6}
            className="lg:hidden relative w-full max-w-2xl mx-auto md:mx-0 mb-6"
          >
            <img
              className="w-full h-auto aspect-4/5 object-cover rounded-2xl"
              src={about}
              alt="Snowmac building project"
            />

            {/* Quote Card */}
            <div
              className="
              absolute
              -bottom-8
              left-1/2
              -translate-x-1/2
              w-[85%]
              sm:w-[70%]
              md:w-[55%]
              lg:w-[55%]
              bg-brandGold
              p-4 sm:p-5
              rounded-xl
            "
            >
              <p className="italic text-[18px] sm:text-[20px] leading-6 sm:leading-7 font-cormorant">
                Thoughtful design. Precision execution. Exceptional results.
              </p>

              <span className="text-black/70 font-inter italic text-[12px] sm:text-[14px] leading-6">
                — Snowmac Team
              </span>
            </div>
          </MotionElement>

          <MotionElement axis="y" distance={30} delay={0.4} duration={0.6}>
            <p
              className="
              font-inter
              text-sm
              sm:text-[15px]
              md:text-base
              leading-6
              md:leading-7
              text-black/70
            "
            >
              Snowmac Integrated Building Services Ltd. is a multidisciplinary
              building solutions company specializing in Architectural Design,
              Construction and General Building Services. We provide end-to-end
              solutions that transform concepts into functional, durable and
              aesthetically pleasing built environments.
            </p>
          </MotionElement>

          {/* Mission / Vision */}
          <div
            className="
            grid
            grid-cols-1
            sm:grid-cols-2
            gap-4
            md:gap-5
            lg:gap-6
          "
          >
            {/* Mission */}
            <MotionElement
              axis="y"
              distance={40}
              delay={0.5}
              duration={0.7}
              className="border border-border rounded-2xl p-6 sm:p-7 md:p-8 flex flex-col gap-6"
            >
              <div className="flex flex-col gap-5">
                <LuDraftingCompass className="text-2xl md:text-[28px] text-brandGold" />

                <p className="text-[13px] sm:text-sm font-cinzel">
                  Our Mission
                </p>
              </div>

              <p
                className="
                text-sm
                sm:text-[15px]
                md:text-base
                leading-5
                md:leading-6
                text-black/60
                font-medium
              "
              >
                To provide building services that exceed client expectations by
                delivering quality, efficiency, innovation, and lasting value in
                every project we undertake.
              </p>
            </MotionElement>

            {/* Vision */}
            <MotionElement
              axis="y"
              distance={40}
              delay={0.6}
              duration={0.7}
              className="border border-border rounded-2xl p-6 sm:p-7 md:p-8 flex flex-col gap-6"
            >
              <div className="flex flex-col gap-5">
                <IoEyeOutline className="text-2xl md:text-[28px] text-brandGold" />

                <p className="text-[13px] sm:text-sm font-cinzel">Our Vision</p>
              </div>

              <p
                className="
                text-sm
                sm:text-[15px]
                md:text-base
                leading-5
                md:leading-6
                text-black/60
                font-medium
              "
              >
                To be a leading and trusted building solutions company,
                recognized for excellence in design, construction and
                exceptional building services that create lasting value for
                clients, communities and the built environment.
              </p>
            </MotionElement>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
