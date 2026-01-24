'use client'

import React from 'react'
import { MoveUpRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Scrollbar, Autoplay } from 'swiper/modules'
import Link from 'next/link'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'

const services = [
  { img: '/Orthopadic.jpg', title: 'Orthopadic', slug: 'orthopedics' },
  { img: '/OBS and Gynecologist.jpg', title: 'OBS and Gynecologist', slug: 'obstetrics-gynecology' },
  { img: '/ENT.jpg', title: 'ENT', slug: 'ent' },
  { img: '/Medicine.webp', title: 'Medicine', slug: 'medicine' },
  { img: '/plastic-surgery.jpg', title: 'Plastic Surgery', slug: 'plastic-surgery' },
  { img: '/laparoscopic-surgery.jpg', title: 'General & Laparoscopic Surgery', slug: 'general-and-laparoscopic-surgery' },
  { img: '/neurosurgery.webp', title: 'Neurosurgery', slug: 'neurosurgery' },
  { img: '/pediatric.jpg', title: 'Pediatric', slug: 'pediatrics' },
  { img: '/urology.jpg', title: 'Urology', slug: 'urology' },
  { img: '/radiology.jpg', title: 'Radiology', slug: 'radiology' },
  { img: '/physiotherapy.jpg', title: 'Physiotherapy', slug: 'physiotherapy' },
]

const ServiceSection = () => {
  return (
    <section className="bg-primary py-16 sm:py-20 px-4 sm:px-6 lg:px-12">
      <Swiper
        modules={[Navigation, Scrollbar, Autoplay]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        navigation
        // scrollbar={{ draggable: true }}
        spaceBetween={20}
        slidesPerView={1.1}
        breakpoints={{
          480: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="w-full"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <Link href={`/services/${service.slug}`} className="block">
              <div className="group relative overflow-hidden rounded-2xl cursor-pointer">

                {/* Image */}
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-[320px] sm:h-[360px] lg:h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#00256f]/90 via-[#00256f]/50 to-transparent opacity-80" />

                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon */}
                <div className="absolute top-5 right-5 z-10 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shadow-lg">
                  <MoveUpRight size={20} />
                </div>

                {/* Content */}
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <h2 className="text-xl sm:text-2xl font-semibold text-white leading-tight">
                    {service.title}
                  </h2>
                </div>

              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default ServiceSection
