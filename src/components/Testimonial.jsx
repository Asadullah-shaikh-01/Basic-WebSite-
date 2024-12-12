import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonial = () => {
  return (
    <div>
      <section className="">
        <div className="main text-center py-8">
          <div className="head-p text-xl md:text-2xl lg:text-3xl font-semibold">
            <span className="pr-1">GET AN</span>
            <span className="text-black text-center">CLIENTS</span>
          </div>
          <div className="text-black text-center text-2xl md:text-3xl lg:text-4xl font-bold mt-2">
            TESTIMONIALS
          </div>

          <Swiper
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="mySwiper"
            effect={"coverflow"}
            coverflowEffect={{
              rotate: 10,
              stretch: 50,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 150,
              },
            }}
          >
            {/* Slides */}
            <SwiperSlide className="swiper-slide  w-[200px] bg-transparent rounded-lg bg-cover text-center font-mono text-red-600">
              <div
                style={{
                  paddingRight: 20,
                  paddingLeft: 20,
                }}
              >
                <div className="testimonials-profile-circle flex justify-center items-center pt-5">
                  <img
                    src="/assets/Testimonial_img/r11.png"
                    alt="testimonial-avatar"
                    className="w-24 h-24 border-4 border-[#1D8BA0] rounded-full"
                  />
                </div>
                <p className="text-black text-center font-mono mt-4">
                  The revenue cycle automation tools provided by this company
                  have streamlined our operations and saved us countless hours
                  of manual work. Their analytics dashboard is intuitive and
                  offers valuable insights that have helped us optimize our
                  processes. It's been a game-changer for our practice.
                </p>
                <h6 className="text-[#000000] text-lg font-serif font-bold mt-2">
                  -Mike L..
                </h6>
              </div>
            </SwiperSlide>
            {/* Slides */}
            <SwiperSlide className="swiper-slide  w-[200px] bg-transparent rounded-lg bg-cover text-center font-mono text-red-600">
              <div
                style={{
                  paddingRight: 20,
                  paddingLeft: 20,
                }}
              >
                <div className="testimonials-profile-circle flex justify-center items-center pt-5">
                  <img
                    src="/assets/Testimonial_img/r2.png"
                    alt="testimonial-avatar"
                    className="w-24 h-24 border-4 border-[#1D8BA0] rounded-full"
                  />
                </div>
                <p className="text-black text-center font-mono mt-4">
                  We've seen a significant improvement in our claim approval
                  rates since partnering with this RCM firm. Their expertise in
                  coding and billing has reduced our denials and increased our
                  revenue flow. The team is responsive and always willing to
                  provide support when needed. Highly recommend their services!
                </p>
                <h6 className="text-[#000000] text-lg font-serif font-bold mt-2">
                  -Sarah K..
                </h6>
              </div>
            </SwiperSlide>
            {/* Slides */}
            <SwiperSlide className="swiper-slide  w-[200px] bg-transparent rounded-lg bg-cover text-center font-mono text-red-600">
              <div
                style={{
                  paddingRight: 20,
                  paddingLeft: 20,
                }}
              >
                <div className="testimonials-profile-circle flex justify-center items-center pt-5">
                  <img
                    src="/assets/Testimonial_img/r3.png"
                    alt="testimonial-avatar"
                    className="w-24 h-24 border-4 border-[#1D8BA0] rounded-full"
                  />
                </div>
                <p className="text-black text-center font-mono mt-4">
                  ACN's Patient Access Services have been a game-changer for our
                  practice. Their expertise and efficiency have significantly
                  reduced our denial rates and improved our revenue cycle
                </p>
                <h6 className="text-[#000000] text-lg font-serif font-bold mt-2">
                  -Emily R..
                </h6>
              </div>
            </SwiperSlide>
            {/* Slides */}
            <SwiperSlide className="swiper-slide  w-[200px] bg-transparent rounded-lg bg-cover text-center font-mono text-red-600">
              <div
                style={{
                  paddingRight: 20,
                  paddingLeft: 20,
                }}
              >
                <div className="testimonials-profile-circle flex justify-center items-center pt-5">
                  <img
                    src="/assets/Testimonial_img/r4.png"
                    alt="testimonial-avatar"
                    className="w-24 h-24 border-4 border-[#1D8BA0] rounded-full"
                  />
                </div>
                <p className="text-black text-center font-mono mt-4">
                  The team at ACN is always responsive and helpful. They've
                  streamlined our patient access process, making it easier for
                  us to focus on providing quality care.
                </p>
                <h6 className="text-[#000000] text-lg font-mono mt-2">
                  -Dr. John D.
                </h6>
              </div>
            </SwiperSlide>
            {/* Slides */}
            <SwiperSlide className="swiper-slide  w-[200px] bg-transparent rounded-lg bg-cover text-center font-mono text-red-600">
              <div
                style={{
                  paddingRight: 20,
                  paddingLeft: 20,
                }}
              >
                <div className="testimonials-profile-circle flex justify-center items-center pt-5">
                  <img
                    src="/assets/Testimonial_img/r5.png"
                    alt="testimonial-avatar"
                    className="w-24 h-24 border-4 border-[#1D8BA0] rounded-full"
                  />
                </div>
                <p className="text-black text-center font-mono mt-4">
                  We experienced some initial challenges with ACN's
                  implementation process, but their support team worked
                  diligently to resolve the issues
                </p>
                <h6 className="text-[#000000] text-lg font-mono mt-2">
                  - Mark H.
                </h6>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
