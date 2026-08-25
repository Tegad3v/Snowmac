import Badge from "../components/Badge";
import ContactForm from "../components/ContactForm";
import { contactDetails } from "../Data/Data";
import MotionElement from "../components/MotionElement";

function Contact() {
  return (
    <section id="contact" className="bg-white text-black overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Contact Information */}
        <div className="flex flex-col gap-5">
          <MotionElement axis="y" distance={30} delay={0.1} duration={0.6}>
            <Badge className="text-brandGold">GET IN TOUCH</Badge>
          </MotionElement>

          <MotionElement axis="y" distance={40} delay={0.2} duration={0.7}>
            <h2 className="section-header max-w-xl">
              <span className="text-brandGold">YOUR VISION,</span>
              <br />
              OUR EXPERTISE
            </h2>
          </MotionElement>

          <MotionElement axis="y" distance={30} delay={0.3} duration={0.6}>
            <p className="max-w-lg text-black/60 font-light">
              Whether You're Planning A Residential, Commercial Or Engineering
              Project, Our Team Is Ready To Help Bring Your Vision To Life.
            </p>
          </MotionElement>

          <MotionElement axis="y" distance={40} delay={0.4} duration={0.7}>
            <div className="flex flex-col mt-2">
              <div className="flex flex-col">
                {contactDetails.map((i, index) => (
                  <MotionElement
                    key={index}
                    axis="x"
                    distance={20}
                    delay={0.1 + index * 0.1}
                    duration={0.5}
                  >
                    <div className="flex gap-4 items-center py-4 border-b border-border">
                      <div className="w-11 h-11 shrink-0 rounded-full bg-brandGold/10 flex items-center justify-center">
                        <i.Icon className="text-brandGold text-[16px]" />
                      </div>

                      <div className="flex flex-col gap-0.5">
                        <p className="text-[10px] tracking-[12%] font-semibold text-brandGold">
                          {i.label}
                        </p>

                        {i.href ? (
                          <a
                            href={i.href}
                            className="text-[13px] text-black/80 hover:text-brandGold transition-colors"
                          >
                            {i.value}
                          </a>
                        ) : (
                          <p className="text-[13px] text-black/80">{i.value}</p>
                        )}
                      </div>
                    </div>
                  </MotionElement>
                ))}
              </div>
            </div>
          </MotionElement>

          {/* Map */}
          <MotionElement axis="y" distance={30} delay={0.6} duration={0.6}>
            <div className="w-full h-64 bg-border rounded-2xl flex items-center justify-center">
              <span className="text-black/40 font-inter text-sm">Map</span>
            </div>
          </MotionElement>
        </div>

        {/* Contact Form */}
        <MotionElement
          axis="x"
          distance={60}
          delay={0.3}
          duration={0.8}
          className="bg-bg-light rounded-[18px] p-5 sm:p-6 lg:p-7"
        >
          <ContactForm />
        </MotionElement>
      </div>
    </section>
  );
}

export default Contact;
