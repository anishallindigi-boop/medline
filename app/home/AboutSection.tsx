'use client'
import React from "react";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";

const AboutSection = () => {
  return (
    <>
      <section className="relative pb-[120px] z-[1]">
        <div className="max-w-7xl mx-auto px-4">

          {/* TOP SECTION */}
          <div className="flex flex-col lg:flex-row justify-between items-center border-b border-[rgba(28,32,73,0.1)] pb-7 mb-16">
            <h2 className="text-[60px] font-bold leading-[66px] flex items-center gap-2">
              About Medline Hospital
              <img src="/star.png" alt="" className="animate-spin-slow" />
            </h2>

            <div className="flex items-center">
              <h1 className="text-[60px] font-bold text-primary">11+</h1>
              <p className="ml-6 text-lg font-medium text-primary w-1/2">
                YEARS OF EXPERIENCE
              </p>
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div className="grid lg:grid-cols-12 gap-10 items-center relative">

            {/* LEFT IMAGE */}
            <div className="lg:col-span-7 relative">
              <img src="/about.png" alt="" className="relative z-10" />

              {/* FLOATING BOX */}
              {/* FLOATING BOX – NO SVG */}

            <div className="absolute top-[-31px] right-0 w-[150px] h-[161px] bg-primary rounded-[30px] flex items-center justify-center z-20 sm:top-0 sm:right-[90px] sm:w-[200px] sm:h-[200px]">


                {/* Center Heart */}
                <div className="w-[70px] h-[70px] bg-white rounded-full flex items-center justify-center z-20">
                  <img src="/heart.png" alt="" className="w-10 h-10" />
                </div>

                {/* Circular Text */}
                <div className="circle-text">
                  {"*Medline * Your Hospital * That * Cares "
                    .split("")
                    .map((char, i) => (
                      <span
                        key={i}
                        style={{
                          transform: `rotate(${i * 9}deg) translate(0, -78px)`
                        }}
                      >
                        {char}
                      </span>
                    ))}
                </div>

              </div>

            </div>

            {/* RIGHT CONTENT */}
            <div className="lg:col-span-5">
              <h4 className="text-primary font-medium text-sm mb-2">
                ABOUT Medline Hospital
              </h4>
              <h3 className="text-[32px] font-bold mb-6">
               We Have Successfully Treated Over 150,000 Patients
              </h3>

              {/* LIST */}
              <h4 className="text-[22px] font-semibold py-6">
                We’re Putting your Comfort List
              </h4>

              <ul className="text-[#00306c] font-['DM Sans']">
                {[
                  ["Completely to syndicate", "24 Hrs Ambulance Service"],
                  ["Medical Surgical Services", "100% Satisfaction Rate"],
                  ["Instant Operations System", "Professional Doctors"],
                ].map((item, i) => (
                  <li
                    key={i}
                    className={`border-t border-dashed border-[#00306c] py-4 ${i === 2 ? "border-b" : ""
                      }`}
                  >
                    <CheckCircle className="inline text-primary mr-2" />
                    {item[0]}
                    <span className="pl-14">
                      <CheckCircle className="inline text-primary mr-2" />
                      {item[1]}
                    </span>
                  </li>
                ))}
              </ul>

              {/* BUTTON */}
              <a
                href="/about-us"
                data-text="More About"
                className="mediic-btn mt-12 inline-block"
              >
                More About <ArrowRight className="inline -rotate-45 ml-2" />
              </a>
            </div>

            {/* SHAPE */}
            <img
              src="/dctr.png"
              alt=""
              className="absolute right-0 bottom-5 -z-10"
            />
          </div>
        </div>
      </section>

      {/* SAME PAGE CSS */}
      <style jsx>{`
        .text-circle {
          position: absolute;
          inset: 0;
          margin: auto;
          animation: rotateme 9s linear infinite;
        }

        .text-circle svg {
          width: 131px;
        }

        .text-circle text {
          fill: #fff;
          font-size: 30px;
        }
.circle-text {
  position: absolute;
  width: 160px;
  height: 160px;
  animation: rotateme 9s linear infinite;
}

.circle-text span {
  position: absolute;
  left: 50%;
  top: 50%;
  transform-origin: 0 0;
  font-size: 13px;
  font-weight: 500;
  color: white;
  white-space: pre;
}
@keyframes rotateme {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}

        @keyframes rotateme {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }

        .mediic-btn {
          padding: 16px 35px;
          font-size: 18px;
          border-radius: 32px;
          border: 1px solid #007eff;
          background: #fff;
          position: relative;
          overflow: hidden;
          font-weight: 500;
          transition: 0.5s;
        }

        .mediic-btn::after {
          content: attr(data-text);
          position: absolute;
          inset: 0;
          background: #007eff;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          mask: url(/assets/images/resource/mask-btn2.png);
          -webkit-mask: url(/mask-btn2.png);
          mask-size: 2300% 100%;
          animation: maskOut 0.7s steps(22) forwards;
          z-index: -1;
        }

        .mediic-btn:hover::after {
          animation: maskIn 0.7s steps(22) forwards;
        }

        @keyframes maskIn {
          from {
            mask-position: 0 0;
          }
          to {
            mask-position: 100% 0;
          }
        }

        @keyframes maskOut {
          from {
            mask-position: 100% 0;
          }
          to {
            mask-position: 0 0;
          }
        }
      `}</style>
    </>
  );
};

export default AboutSection;
