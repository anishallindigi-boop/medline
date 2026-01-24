'use client'
import React from 'react'

const MarqueeSection = () => {
  return (
    <>
      <section className="bg-[#cadff9] overflow-hidden py-[clamp(30px,5vw,65px)]">
        <div className="relative w-full overflow-hidden">
          {/* TRACK */}
          <div className="flex w-max animate-marquee">
            {[...Array(2)].map((_, i) => (
              <div
                key={i}
                className="flex items-center gap-[clamp(20px,5vw,40px)] pr-12 shrink-0"
              >
                {['GYNOCOLOGIST', 'CARDIOLOGIST', 'NEUROLOGIST'].map((text, idx) => (
                  <h2
                    key={idx}
                    className="flex items-center whitespace-nowrap font-bold text-[clamp(28px,6vw,64px)]"
                  >
                    {text}
                    <span className="ml-[clamp(12px,2vw,20px)]">
                      <img
                        src="/star.png"
                        alt=""
                        className="w-[clamp(22px,3vw,40px)] animate-spin-slow"
                      />
                    </span>
                  </h2>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAME FILE CSS */}
      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spinSlow 8s linear infinite;
        }

        @media (max-width: 640px) {
          .animate-marquee {
            animation-duration: 20s;
          }
        }
      `}</style>
    </>
  )
}

export default MarqueeSection
