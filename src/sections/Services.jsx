import Badge from "../components/Badge";
import ServiceCard from "../components/ServiceCard";
import { serviceDetails } from "../Data/Data";
import MotionElement from "../components/MotionElement";

function Services() {
  return (
    <section id="services" className="bg-bg-light">
      <div className="max-w-7xl mx-auto flex flex-col gap-5 sm:gap-6 md:gap-7">
        {/* Header */}
        <MotionElement
          axis="y"
          distance={30}
          delay={0.1}
          duration={0.6}
          className="mx-auto"
        >
          <Badge className=" text-brandGold">OUR SERVICES</Badge>
        </MotionElement>

        <MotionElement axis="y" distance={40} delay={0.2} duration={0.7}>
          <h2
            className="
              section-header
              w-full
              max-w-3xl
              mx-auto
              text-center
            "
          >
            Integrated Building Solutions
          </h2>
        </MotionElement>

        <MotionElement axis="y" distance={30} delay={0.3} duration={0.6}>
          <p
            className="
              w-full
              max-w-4xl
              mx-auto
              text-center
              text-black/85
              font-medium
              text-sm
              sm:text-[15px]
              md:text-[16px]
              lg:text-[18px]
              leading-6
              sm:leading-7
              lg:leading-8
            "
          >
            From concept to completion, Snowmac delivers integrated
            architectural, construction, engineering, and building services
            tailored to residential and commercial projects.
          </p>
        </MotionElement>

        {/* Service Cards */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-5
            sm:gap-6
            lg:gap-8
            mt-6
            sm:mt-8
            lg:mt-10
          "
        >
          {serviceDetails.map((i, index) => (
            <MotionElement
              key={index}
              axis="y"
              distance={50}
              delay={0.2 + index * 0.15}
              duration={0.7}
            >
              <ServiceCard i={i} index={index} />
            </MotionElement>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
