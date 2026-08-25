import Badge from "../components/Badge";
import { testimonials } from "../Data/Data";
import MotionElement from "../components/MotionElement";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import TestimonialCard from "../components/TestimonialCard";

function Testimonial() {
  return (
    <section className="text-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-5 sm:gap-6 md:gap-7">
        <MotionElement
          axis="y"
          distance={30}
          delay={0.1}
          duration={0.6}
          className="mx-auto"
        >
          <Badge className=" text-brandGold">CLIENT STORIES</Badge>
        </MotionElement>

        <MotionElement axis="y" distance={40} delay={0.2} duration={0.7}>
          <h2 className="section-header w-full max-w-5xl text-center mx-auto">
            Built on Trust. <br /> Proven by Experience.
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
              md:text-[16px]
              lg:text-[18px]
              leading-7
              lg:leading-8
            "
          >
            Our work is measured not only by the structures we deliver, but by
            the confidence our clients place in us.
          </p>
        </MotionElement>

        {/* Carousel */}
        <MotionElement axis="y" distance={50} delay={0.4} duration={0.8}>
          <div className="relative w-full mt-6 lg:mt-10">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={1}
              spaceBetween={20}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
              }}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                el: ".testimonial-pagination",
              }}
              className="w-full pb-14!"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index} className="h-auto!">
                  <TestimonialCard testimonial={testimonial} />
                </SwiperSlide>
              ))}

              {/* Pagination */}
              <div className="testimonial-pagination mt-8 flex justify-center"></div>
            </Swiper>
          </div>
        </MotionElement>
      </div>
    </section>
  );
}

export default Testimonial;
