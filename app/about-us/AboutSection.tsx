'use client';

import { ArrowRight, HeartPulse, Users, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

/* COUNTER COMPONENT */
const Counter = ({ value, suffix }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const stepTime = Math.max(Math.floor(duration / value), 20);

    const timer = setInterval(() => {
      start += Math.ceil(value / 60);
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="flex items-end justify-center gap-1">
      <h1 className="text-[45px] font-bold text-white">{count}</h1>
      {suffix && (
        <h1 className="text-[45px] font-bold text-white">{suffix}</h1>
      )}
    </div>
  );
};

export default function AboutSection() {
  return (
    <section className="relative py-[120px] z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT IMAGE + COUNTERS */}
          <div>
            <div className="overflow-hidden rounded-[30px] shadow-lg">
              <img
                src="/about3.jpg"
                alt="About"
                className="w-full object-cover"
              />

              <div className="flex justify-center gap-12 bg-primary px-6 py-7">
                <div className="text-center">
                  <Counter value={150} suffix="K+" />
                  <p className="uppercase text-sm text-white mt-1 tracking-wide">
                    Recovered Patients
                  </p>
                </div>

                <div className="text-center">
                  <Counter value={99} suffix="%" />
                  <p className="uppercase text-sm text-white mt-1 tracking-wide">
                    Satisfaction Rate
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary mb-3">
              About Medline Hospital
            </span>

            <h1 className="text-4xl font-bold leading-tight mb-4">
            We Have Successfully Treated Over  <br />
              150,000+ <span className="text-primary">Patients</span>
            </h1>

            <p className="text-gray-600 leading-relaxed mb-6">
              Continually evolve professional intellectual capital without
              enterprise users. Seamlessly matrix value-added e-commerce and
              enable innovative healthcare solutions.
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              {[
                {
                  icon: <HeartPulse />,
                  title: 'Psychodynamic Therapy',
                },
                {
                  icon: <Users />,
                  title: 'Couple Problem Therapy',
                },
                {
                  icon: <ShieldCheck />,
                  title: 'Free Consultants',
                },
                {
                  icon: <HeartPulse />,
                  title: 'Mental Satisfaction',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-xl  transition"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/60 text-secondary flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h4 className="font-medium text-primary">
                    {item.title}
                  </h4>
                </div>
              ))}
            </div>

            {/* CTA */}
            {/* <Link
              href="/about"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary text-white font-medium hover:border-secondary transition"
            >
              More About Us
              <ArrowRight className="-rotate-45" />
            </Link> */}
          </div>
        </div>

        {/* SHAPE IMAGE */}
        <div className="hidden lg:block absolute right-[10px] bottom-[154px] -z-10">
          <img src="/dctr.png" alt="Shape" width={200} height={300} />
        </div>
      </div>
    </section>
  );
}
