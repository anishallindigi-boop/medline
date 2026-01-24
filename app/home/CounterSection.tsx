"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const useCounter = (end: number, duration = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          let start = 0;
          const increment = end / (duration / 16);

          const animate = () => {
            start += increment;
            if (start < end) {
              setCount(Math.floor(start));
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          animate();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [end, duration]);

  return { count, ref };
};

const CounterSection = () => {
  const patients = useCounter(150000, 2500);
  const satisfaction = useCounter(99, 1800);

  return (
    <section
      className="relative bg-no-repeat bg-center bg-cover rounded-2xl 
                 pt-12 sm:pt-16 pb-14 sm:pb-16 -mt-6 z-10"
      style={{ backgroundImage: `url('/counter-bg.png')` }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div
          className="flex flex-col lg:flex-row 
                     items-center lg:items-center
                     justify-between gap-12"
        >
          {/* LEFT SIDE */}
          <div className="flex flex-col sm:flex-row items-center text-center sm:text-left">
            <Image
              src="/counter-img.png"
              alt="Counter"
              width={140}
              height={140}
              className="mb-4 sm:mb-0"
            />

            <div className="sm:pl-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                Medical Achievement
              </h2>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                Health Protection
              </h2>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div
            className="flex flex-col sm:flex-row 
                       items-center gap-10 sm:gap-16"
          >
            {/* COUNTER 1 */}
            <div ref={patients.ref} className="text-center">
              <div className="flex justify-center items-end border-b border-white/40 pb-2">
                <h1 className="text-4xl sm:text-5xl font-bold text-white">
                  {patients.count.toLocaleString()}
                </h1>
                <span className="text-4xl sm:text-5xl font-bold text-white ml-1">
                  +
                </span>
              </div>
              <p className="text-lg sm:text-xl text-white font-medium pt-3">
                Satisfied Patients
              </p>
            </div>

            {/* COUNTER 2 */}
            <div ref={satisfaction.ref} className="text-center">
              <div className="flex justify-center items-end border-b border-white/40 pb-2">
                <h1 className="text-4xl sm:text-5xl font-bold text-white">
                  {satisfaction.count}
                </h1>
                <span className="text-4xl sm:text-5xl font-bold text-white ml-1">
                  %
                </span>
              </div>
              <p className="text-lg sm:text-xl text-white font-medium pt-3">
                Satisfaction Rates
              </p>
            </div>
          </div>
        </div>

        {/* DECORATIVE SHAPE */}
        <div className="absolute -bottom-8 right-4 sm:right-10 hidden md:block">
          <Image
            src="/crcle-bg.png"
            alt="shape"
            width={180}
            height={180}
          />
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
