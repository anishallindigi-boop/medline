'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export default function TestimonialPage() {
  const testimonials = [
    {
      name: 'Mededi Hassan MH',
      role: 'Satisfied Client',
      image: '/people.png',
      text:
        'Commerce end interfaces with collaborative growth strategies wireless recaptiualize one-to-one potentialities through client-focused mediic of web-readiness. Appropriately enhance seamless alignments after team solutions forward growth for corporate web-readiness.',
    },
    {
      name: 'Mededi Hassan MH',
      role: 'Satisfied Client',
      image: '/people.png',
      text:
        'Commerce end interfaces with collaborative growth strategies wireless recaptiualize one-to-one potentialities through client-focused mediic of web-readiness. Appropriately enhance seamless alignments after team solutions forward growth for corporate web-readiness.',
    },
    {
      name: 'Mededi Hassan MH',
      role: 'Satisfied Client',
      image: '/people.png',
      text:
        'Commerce end interfaces with collaborative growth strategies wireless recaptiualize one-to-one potentialities through client-focused mediic of web-readiness. Appropriately enhance seamless alignments after team solutions forward growth for corporate web-readiness.',
    },
  ];

  return (
    <section className="pb-[120px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase text-primary">
              Our Testimonials
            </h4>

            <h2 className="text-4xl font-bold text-black mt-3">
              Our Happy Patients
            </h2>

            <p className="text-[#65677a] mt-6 max-w-lg">
              Professional without enterprise e-commerce. Uniquely happy clients
              innovative technologies via team member.
            </p>

            {/* SLIDER */}
            <div className="mt-10">
              <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000 }}
                spaceBetween={30}
                className="testimonial-swiper"
              >
                {testimonials.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative p-10 pb-5 bg-white/30 border-2 border-white">

                      {/* USER INFO */}
                      <div className="flex items-center gap-4 relative">
                        <div className="w-14 h-14 rounded-full overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={56}
                            height={56}
                          />
                        </div>

                        <div>
                          <h4 className="text-[22px] font-bold text-primary">
                            {item.name}
                          </h4>
                          <h6 className="text-sm uppercase text-[#65677a]">
                            {item.role}
                          </h6>
                        </div>

                        {/* QUOTE ICON */}
                        <div className="absolute right-0 top-0">
                          <Image
                            src="/quote2.png"
                            alt="quote"
                            width={28}
                            height={28}
                          />
                        </div>
                      </div>

                      {/* DESCRIPTION */}
                      <p className="text-[#65677a] italic text-[16px] leading-6 mt-10">
                        {item.text}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <Image
              src="/testi2.jpg"
              alt="testimonial"
              width={520}
              height={620}
              className="rounded-lg"
            />
          </div>

        </div>
      </div>

      {/* DOT STYLING – SAME PAGE */}
      <style jsx global>{`
        .testimonial-swiper .swiper-pagination-bullet {
          width: 20px;
          height: 20px;
          background: rgba(255, 255, 255, 0.3);
          border: 2px solid #ffffff;
          opacity: 1;
        }

        .testimonial-swiper .swiper-pagination-bullet-active {
          position: relative;
        }

        .testimonial-swiper .swiper-pagination-bullet-active::after {
          content: '';
          position: absolute;
          width: 8px;
          height: 8px;
          background: var(--secondary-color);
          border-radius: 999px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      `}</style>
    </section>
  );
}
