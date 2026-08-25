import ctaImage from "../assets/Images/cta.jpg";
import tabCtaImage from "../assets/Images/cta-tab.jpeg";
import mobileCtaImage from "../assets/Images/cta-mobile.png";
import Badge from "../components/Badge";
import Button from "../components/Button";
import MotionElement from "../components/MotionElement";

function CallToAction() {
  return (
    <section className="relative text-white bg-no-repeat bg-cover bg-center">
      {/* Desktop Background */}
      <div
        className="hidden lg:block absolute inset-0 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${ctaImage})` }}
      />

      {/* Tab Background */}
      <div
        className="hidden md:block lg:hidden absolute inset-0 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${tabCtaImage})` }}
      />

      {/* Mobile Background */}
      <div
        className="md:hidden absolute inset-0 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${mobileCtaImage})` }}
      />

      {/* Desktop gradient */}
      {/* Overlay 1 */}
      <div
        className="hidden md:block md:absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(17,17,17,1) 0%, rgba(17,17,17,0.2) 33%, rgba(17,17,17,0.2) 66%, rgba(17,17,17,1) 100%)",
        }}
      />

      {/* Overlay 2 */}
      <div
        className="hidden md:block absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(17,17,17,1) 0%, rgba(17,17,17,0) 50%, rgba(17,17,17,1) 100%)",
        }}
      />

      {/* Mobile gradient */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          background:
            "linear-gradient(to bottom, rgba(17,17,17,1) 0%, rgba(17,17,17,0.96) 25%, rgba(17,17,17,0.45) 50%, rgba(17,17,17,0.2) 75%, rgba(17,17,17,0.8) 100%)",
        }}
      />

      {/* CTA content */}
      <div className="relative z-10 w-full h-fit flex flex-col gap-5 justify-center items-start md:items-center text-left md:text-center">
        <MotionElement axis="y" distance={30} delay={0.1} duration={0.6}>
          <Badge className="text-brandGold">FROM VISION TO REALITY</Badge>
        </MotionElement>

        <MotionElement axis="y" distance={40} delay={0.2} duration={0.7}>
          <h2 className="section-header text-[48px] md:text-[52px] lg:text-[64px] leading-13 md:leading-15 lg:leading-16.5 tracking-[-2%] w-full max-w-5xl text-left md:text-center">
            Let's Build Your <br />
            <span className="text-[40px] sm:text-[48px] md:text-[52px] lg:text-[64px] leading-11 sm:leading-13 md:leading-15 lg:leading-16.5 tracking-[-2%] font-cormorant text-brandGold italic">
              Dream Project
            </span>
          </h2>
        </MotionElement>

        <MotionElement axis="y" distance={30} delay={0.3} duration={0.6}>
          <p
            className="
              w-full
              max-w-lg
              text-left
              md:text-center
              font-light
              md:text-[16px]
              lg:text-[18px]
              leading-7
              lg:leading-8
            "
          >
            Every successful project begins with a conversation. Whether you're
            planning a residential, commercial, or engineering project, our team
            is ready to bring your vision to life.
          </p>
        </MotionElement>

        <MotionElement axis="y" distance={40} delay={0.4} duration={0.7}>
          <div className="flex flex-col w-full md:w-fit md:flex-row gap-4 md:mx-auto">
            <Button link={`#contact`}>Make An Inquiry</Button>

            <Button
              link={`#contact`}
              type="secondary"
              className={"text-brandGold!"}
            >
              Schedule a Consultation
            </Button>
          </div>
        </MotionElement>

        <MotionElement axis="y" distance={20} delay={0.5} duration={0.5}>
          <p className="max-w-xs md:max-w-fit text-[13px] md:text-{15px} leading-5 text-center mt-5 text-white/35">
            Trusted by homeowners, businesses and developers across Nigeria.
          </p>
        </MotionElement>
      </div>
    </section>
  );
}

export default CallToAction;
