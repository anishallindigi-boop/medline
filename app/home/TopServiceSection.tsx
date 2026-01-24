"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function TopServiceSection() {
  return (
    <section className="bg-primary pt-20 md:pt-[110px] pb-8">
      <div className="w-full px-4 sm:px-6 md:px-10 xl:px-[205px]">
        <div className="border-b border-white/15 pb-10">
          
          {/* GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">

            {/* Title */}
            <div
              className="text-white font-extrabold leading-tight text-center lg:text-left"
              data-aos="flip-left"
            >
              <h1 className="text-3xl sm:text-4xl xl:text-6xl">
                PROVIDES
              </h1>
              <h1 className="text-3xl sm:text-4xl xl:text-6xl">
                BEST SERVICE
              </h1>
            </div>

            {/* Description */}
            <div
              className="text-white/90 max-w-xl mx-auto lg:mx-0 text-center lg:text-left"
              data-aos="fade-up"
            >
              <p className="text-sm sm:text-base md:text-lg font-medium leading-relaxed">
                Enthusiastically orchestrate competitive e-services whereas superior.
                Conveniently disintermediate innovative solutions through impactful
                tailers without seamless markets network.
              </p>
            </div>

            {/* Button */}
            <div
              data-aos="fade-down"
              className="flex justify-center lg:justify-end"
            >
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 bg-white 
                py-4 px-8 rounded-full text-primary font-semibold uppercase 
                transition-all duration-300 hover:gap-3 hover:bg-white hover:text-[#002570]"
              >
                View All Services
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 
                  group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
