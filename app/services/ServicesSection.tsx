'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView} from 'framer-motion';
import { useRef } from 'react';
import {
  Bone,
  Baby,
  Ear,
  Stethoscope,
  UserRound,
  Microscope,
  Brain,
  HeartPulse,
  Activity,

  Move3D,
  ArrowRight,
} from 'lucide-react';


const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');

const services = [
  { title: 'Orthopedics', icon: <Bone className="w-10 h-10" />, img: '/Orthopadic.jpg' },
  { title: 'Obstetrics & Gynecology', icon: <Baby className="w-10 h-10" />, img: '/OBS and Gynecologist.jpg' },
  { title: 'ENT', icon: <Ear className="w-10 h-10" />, img: '/ENT.jpg' },
  { title: 'Medicine', icon: <Stethoscope className="w-10 h-10" />, img: '/Medicine.webp' },
  { title: 'Plastic Surgery', icon: <UserRound className="w-10 h-10" />, img: '/plastic-surgery.jpg' },
  { title: 'General & Laparoscopic Surgery', icon: <Microscope className="w-10 h-10" />, img: '/laparoscopic-surgery.jpg' },
  { title: 'Neurosurgery', icon: <Brain className="w-10 h-10" />, img: '/neurosurgery.webp' },
  { title: 'Pediatrics', icon: <HeartPulse className="w-10 h-10" />, img: '/pediatric.jpg' },
  { title: 'Urology', icon: <Activity className="w-10 h-10" />, img: '/urology.jpg' },
  { title: 'Radiology', icon: <HeartPulse className="w-10 h-10" />, img: '/radiology.jpg' },
  { title: 'Physiotherapy', icon: <Move3D className="w-10 h-10" />, img: '/physiotherapy.jpg' },
].map(item => ({
  ...item,
  slug: slugify(item.title),
}));

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        {/* <Image
          src="https://img.freepik.com/free-vector/modern-blue-medical-background_1055-6880.jpg"
          alt="Medical abstract background"
          fill
          className="object-cover"
        /> */}
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-teal-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Specialized Services
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            World-class medical care across all major specialties, delivered with expertise, compassion, and cutting-edge technology.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              // variants={cardVariants}
              whileHover={{ y: -16, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="group relative bg-white rounded-3xl shadow-2xl overflow-hidden cursor-pointer"
            >
              <Link href={`/services/${service.slug}`}>
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Icon on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-primary/70">
                  <div className="text-white">{service.icon}</div>
                </div>
              </div>

              {/* Card Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl font-bold mb-4 drop-shadow-lg">
                  {service.title}
                </h3>
                <Link
                 href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-3 text-lg font-medium opacity-90 group-hover:opacity-100 transition"
                >
                  Explore Service
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Pulse */}
      <div className="hidden lg:block absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl opacity-10 animate-pulse">
        {/* s */}
      </div>
    </section>
  );
}