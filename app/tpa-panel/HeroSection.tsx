'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section
      style={{ backgroundImage: "url('/breatcome.png')" }}
      className="
        relative
        min-h-[260px]
        sm:min-h-[320px]
        md:min-h-[420px]
        lg:min-h-[500px]
        flex items-center
        bg-cover
        bg-center
        bg-no-repeat
        px-4
      "
    >
      {/* Optional overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-7xl mx-auto w-full">
        <div className="text-center text-white">

          {/* Title */}
          <h1 className="
            text-2xl
            sm:text-3xl
            md:text-5xl
            lg:text-[55px]
            font-bold
            uppercase
            mb-3
          ">
            Empanelled TPA & Insurance
          </h1>

          {/* Breadcrumb */}
          <ul className="
            flex flex-wrap justify-center items-center
            gap-2 sm:gap-4
            uppercase
            text-xs sm:text-sm md:text-base
          ">
            <li className="relative pr-4 sm:pr-6">
              <Link
                href="/"
                className="hover:text-[var(--secondary-color)] transition-colors"
              >
                Medline Hospital
              </Link>
              <span className="absolute right-1 sm:right-2">/</span>
            </li>
            <li>Empanelled TPA & Insurance</li>
          </ul>

        </div>
      </div>
    </section>
  );
}
