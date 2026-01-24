'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination,Autoplay  } from 'swiper/modules'
import { Facebook, Linkedin, Dribbble } from 'lucide-react'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import Link from 'next/link'

const doctors = [
  {
    name: 'Dr. Vibhaw',
       slug: "dr-vibhaw",
    role: 'M.s (Orthopedics) Trauma & Joint Replacement Surgeon',
    image: '/dr-vibhaw.png',
  },
  {
    name: 'Dr. Ruchi Chaudhary',
       slug: "dr-ruchi-chaudhary",
    role: 'MBBS, DGO Obstetrician And Gynaecologist (Infertility Specialist)',
    image: '/dr-ruchi.png',
  },
  {
    name: 'Dr. Vineet Panchal',
       slug: "dr-vineet-panchal",
    role: 'Ent, Head & Neck Surgery PGIMS ROHTAK Specialist in all types of Ear, Nose, Throat & Cancer Surgeries',
    image: '/dr-vineet.png',
  },
  {
    name: 'Dr. Divanshu Kalra',
    slug: "dr-divanshu",
    role: 'M.Ch (Plastic Surgery), F.A.C.S (Cosmetic surgery), F.H.R.S (Hair Restoration Surgery)',
    image: '/dr-devanshu.png',
  },
  {
    name: 'Dr. Devender Singh',
     slug: "dr-davinder-singh",
    role: 'M.D.(Medicine)',
    image: '/dr-devender.png',
  },
  {
    name: 'Dr. Anuj Chabbra',
       slug: "dr-anuj",
    role: 'M.C.H (Nuero Surgery)',
    image: '/dr-anuj.jpg',
  },
    {
    name: 'Dr. Vivek Gakhar',
       slug: "dr-vivek",
    role: 'M.D.(Anesthesia)',
    image: '/dr-vivek.jpeg',
  },
    {
    name: 'Dr. Mudit Gambhir',
    slug: "dr-mudit",
    role: 'MBBS, MS(Gen.Surg.), FGIE, FMAS, FALS (Hernia) GENERAL & LAPROSCOPIC SURGEON',
    image: '/dr-mudit.jpeg',
  },
    {
    name: 'Dr. NEHA SINGH',
       slug: "dr-neha",
    role: 'MBBS, DCH (Paediatrician and Neonatologist)',
    image: '/dr-neha-singh.jpeg',
  },
    {
    name: 'Dr. Pankaj',
       slug: "dr-pankaj",
    role: 'M.C.H(Urology)',
    image: '/dr-pankaj.png',
  },
]

export default function DoctorsSlider() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#e8f6ff] to-white">
      <div className="container mx-auto px-4">

        {/* Section Heading */}
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-cyan-600 uppercase tracking-wider">
            Our Specialists
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-3">
            Meet Our Medical Experts
          </h2>
        </div>

        <Swiper
          modules={[EffectCoverflow, Pagination, Autoplay]}
          effect="coverflow"
          grabCursor
          centeredSlides
           spaceBetween={20}
          slidesPerView="auto"
          loop
          autoplay={{ delay: 3500 }}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 120,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          className="pb-16"
        >
          {doctors.map((doc, index) => (
            <SwiperSlide
              key={index}
              className="max-w-[380px]"
            >
              <Link href={`/doctors/${doc.slug}`}>
              <div className="group relative bg-white rounded-3xl overflow-hidden
                              shadow-lg hover:shadow-2xl transition duration-500">

                {/* Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={doc.image}
                    alt={doc.name}
                    width={380}
                    height={460}
                    className="w-full h-[420px] object-cover
                               group-hover:scale-110 transition duration-700"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t
                                  from-primary/90 via-primary/60 to-transparent
                                  opacity-0 group-hover:opacity-100
                                  transition duration-500">

                    <div className="absolute bottom-6 w-full flex justify-center gap-4">
                      <SocialIcon><Facebook size={18} /></SocialIcon>
                      <SocialIcon><Linkedin size={18} /></SocialIcon>
                      <SocialIcon><Dribbble size={18} /></SocialIcon>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center py-7">
                  <p className="text-sm uppercase tracking-wide text-cyan-600 font-semibold">
                    {doc.role}
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mt-1">
                    {doc.name}
                  </h3>
                </div>

              </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

/* Reusable Social Icon */
const SocialIcon = ({ children }: { children: React.ReactNode }) => (
  <div className="w-10 h-10 rounded-full bg-white/90 text-cyan-600
                  flex items-center justify-center
                  hover:bg-cyan-600 hover:text-white
                  transition cursor-pointer">
    {children}
  </div>
);