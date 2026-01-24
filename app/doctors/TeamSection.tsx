'use client';

import Image from 'next/image';
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import { motion, useInView, easeOut } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

const teamMembers = [
  {
    name: 'Dr. Vibhaw',
    role: 'M.s (Orthopedics) Trauma & Joint Replacement Surgeon',
    image: '/dr-vibhaw.png',
    slug: "dr-vibhaw",
  },
  {
    name: 'Dr. Ruchi Chaudhary',
    role: 'MBBS, DGO Obstetrician And Gynaecologist (Infertility Specialist)',
    image: '/dr-ruchi.png',
       slug: "dr-ruchi-chaudhary",
  },
  {
    name: 'Dr. Vineet Panchal',
    role:
      'Ent, Head & Neck Surgery PGIMS ROHTAK Specialist in all types of Ear, Nose, Throat & Cancer Surgeries',
    image: '/dr-vineet.png',
       slug: "dr-vineet-panchal",
  },
  {
    name: 'Dr. Devanshu Kalra',
    role:
      'M.Ch (Plastic Surgery), F.A.C.S (Cosmetic surgery), F.H.R.S (Hair Restoration Surgery)',
    image: '/dr-devanshu.png',
    slug: "dr-divanshu",
  },
  {
    name: 'Dr. Davinder Singh',
    role: 'M.D.(Medicine)',
    image: '/dr-devender.png',
    slug: "dr-davinder-singh",
  },
  {
    name: 'Dr. Anuj Chabbra',
    role: 'M.C.H (Nuero Surgery)',
    image: '/dr-anuj.jpg',
     slug: "dr-anuj",
  },
  {
    name: 'Dr. Vivek Gakhar',
    role: 'M.D.(Anesthesia)',
    image: '/dr-vivek.jpeg',
      slug: "dr-vivek",
  },
  {
    name: 'Dr. Mudit Gambhir',
    role:
      'MBBS, MS(Gen.Surg.), FGIE, FMAS, FALS (Hernia) GENERAL & LAPROSCOPIC SURGEON',
    image: '/dr-mudit.jpeg',
      slug: "dr-mudit",
  },
  {
    name: 'Dr. NEHA SINGH',
    role: 'MBBS, DCH (Paediatrician and Neonatologist)',
    image: '/dr-neha-singh.jpeg',
      slug: "dr-neha",
  },
  {
    name: 'Dr. Pankaj',
        slug: "dr-pankaj",
    role: 'M.C.H(Urology)',
    image: '/dr-pankaj.png',
  },
];

export default function TeamSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  /* ---------------- Variants ---------------- */

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut, // ✅ FIXED (TS-safe)
      },
    },
  };

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-teal-50">
      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        <Image
          src="/pngtree-abstract-blur-hospital.jpg"
          alt="medical background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Dedicated professionals committed to providing exceptional healthcare
            with compassion and expertise.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -12, scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-white/50"
            >
              <Link   href={`/doctors/${member.slug}`} >
              {/* Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={450}
                  className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Social Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end justify-center pb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex gap-4">
                    {[Facebook, Linkedin, Twitter].map((Icon, i) => (
                      <a
                        key={i}
                        href="#"
                        className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-primary hover:text-white transition"
                      >
                        <Icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="py-8 text-center bg-gradient-to-t from-blue-50/50 to-transparent">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600 mt-2 px-4 leading-relaxed">
                  {member.role}
                </p>
              </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
