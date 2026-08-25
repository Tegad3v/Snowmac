import Navbar from "../components/Navbar";
import heroImage from "../assets/Images/hero.jpg";
import tabHeroImage from "../assets/Images/hero-tab.jpeg";
import mobileHeroImage from "../assets/Images/hero-mobile.png";
import Badge from "../components/Badge";
import Button from "../components/Button";
import MotionElement from "../components/MotionElement";

function Hero() {
  return (
    <section className="relative min-h-screen scroll-mt-0 p-0 text-white bg-no-repeat bg-cover bg-center overflow-hidden flex flex-col">
      {/* Desktop Background */}
      <MotionElement
        axis="y"
        distance={0}
        duration={1.2}
        className="hidden lg:block absolute inset-0"
      >
        <div
          className="w-full h-full bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
      </MotionElement>

      {/* Tab Background */}
      <MotionElement
        axis="y"
        distance={0}
        duration={1.2}
        className="hidden md:block lg:hidden absolute inset-0"
      >
        <div
          className="w-full h-full bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${tabHeroImage})` }}
        />
      </MotionElement>

      {/* Mobile Background */}
      <MotionElement
        axis="y"
        distance={0}
        duration={1.2}
        className="md:hidden absolute inset-0"
      >
        <div
          className="w-full h-full bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${mobileHeroImage})` }}
        />
      </MotionElement>

      {/* Desktop gradient */}
      <div
        className="hidden md:block absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.58) 15%, rgba(0,0,0,0.15) 58%, rgba(0,0,0,0.05) 88%)",
        }}
      />

      <div
        className="hidden md:block absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 32%)",
        }}
      />

      {/* Mobile gradient */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          background:
            "linear-gradient(to bottom, rgba(11, 11, 11, 0.2) 0%, rgba(11, 11, 11, 0) 33%, rgba(255, 255, 255, 0.04) 66%, rgba(11, 11, 11, 0.32) 100%)",
        }}
      />

      {/* Navbar */}
      <Navbar />

      {/* Hero content */}
      <div className="relative z-10 w-full px-5 md:p-12 lg:p-30 flex justify-center items-center md:text-center">
        <div className="w-full flex flex-col gap-3 md:gap-5">
          {/* Mobile spacing */}
          <div className="h-15 md:hidden" />

          {/* Badge */}
          <MotionElement delay={0.1}>
            <Badge className="text-brandGold md:mx-auto">
              BUILDING WITH EXCELLENCE
            </Badge>
          </MotionElement>

          {/* Heading */}
          <MotionElement distance={50} delay={0.2} duration={0.9}>
            <h1 className="text-white text-[30px] md:text-[40px] lg:text-[60px] leading-9 md:leading-12.5 lg:leading-17 font-cinzel font-bold">
              INNOVATIVE <br />
              BUILDING SOLUTIONS, DELIVERED WITH EXCELLENCE
            </h1>
          </MotionElement>

          {/* Description */}
          <MotionElement distance={35} delay={0.35}>
            <p className="font-light leading-7.5">
              Snowmac Integrated Building Services Ltd. delivers innovative
              architectural design, quality construction,{" "}
              <br className="hidden lg:block" />
              and dependable building services for projects built to last.
            </p>
          </MotionElement>

          {/* Buttons */}
          <MotionElement distance={30} delay={0.5} className="md:mx-auto">
            <div className="flex flex-col md:flex-row gap-4 ">
              <Button link="#contact">Make An Inquiry</Button>

              <Button link="#projects" type="secondary">
                View Our Projects
              </Button>
            </div>
          </MotionElement>

          {/* Registration badges */}
          <MotionElement distance={25} delay={0.65} className="md:mx-auto">
            <div className="flex gap-3 mt-1.5 ">
              <Badge type="border" className="text-white">
                Licensed Engineers
              </Badge>

              <Badge type="border" className="text-white">
                COREN Registered
              </Badge>
            </div>
          </MotionElement>
        </div>
      </div>
    </section>
  );
}

export default Hero;
