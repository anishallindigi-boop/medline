'use client'
import React from 'react'
import {
  ArrowUpRight,
  CheckCircle,
  Facebook,
  Instagram,
  Youtube,
} from 'lucide-react'

const HeroSection = () => {
  return (
    <>
      <section className="hero-section relative flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="relative z-10 text-center pt-16 sm:pt-20 lg:pt-28">

            {/* HEADINGS */}
            <h1 className="text-white font-extrabold uppercase leading-none text-[clamp(42px,9vw,110px)]">
              Medline Hospital & Trauma Centre Pvt. Ltd
              {/* <span className="inline-block ml-3 wood-animation">
                <img
                  src="/heart.png"
                  alt=""
                  className="inline-block w-10 sm:w-12 md:w-16"
                />
              </span> */}
            </h1>

            <h2 className="flex flex-wrap justify-center items-center gap-4 text-white font-extrabold uppercase leading-none mt-3 text-[clamp(32px,8vw,100px)]">
              {/* <span className="team-mbr">
                <img src="/team-img.png" alt="" className="w-6 sm:w-8" />
                MEMBER
              </span> */}
            
            </h2>

            {/* FEATURE BOX */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-[clamp(40px,10vw,120px)] px-4">

              <div className="flex items-start gap-4 text-left max-w-sm">
                <CheckCircle className="text-white w-8 h-8 shrink-0" />
                <div>
                  <h4 className="text-white text-lg sm:text-xl font-semibold">
                    Best Medical
                  </h4>
                  <p className="text-white/80 text-sm sm:text-base mt-1">
                    Rapidiously reinvent long-term impact collaboration
                  </p>
                </div>
              </div>

            </div>

            {/* SOCIAL ICONS */}
            <div className="hero-social hidden lg:flex">
              <a href="https://www.facebook.com/Medline.Hospital.Karnal?mibextid=ZbWKwL">
                <Facebook size={18} />
              </a>
              <a href="https://www.youtube.com/@medlinehospital4824">
                <Youtube size={18} />
              </a>
              <a href="https://www.instagram.com/medline_hospital/">
                <Instagram size={18} />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* CSS */}
      <style jsx>{`
        .hero-section {
          background: url('/hero-bg.jpg') center/cover no-repeat;
          min-height: 100vh;
          padding-bottom: 60px;
        }

        .team-mbr {
          padding: 10px 22px;
          border-radius: 40px;
          background: rgba(255,255,255,0.2);
          backdrop-filter: blur(17.5px);
          font-size: 14px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }

        @media (min-width: 640px) {
          .team-mbr {
            padding: 12px 26px;
            font-size: 16px;
          }
        }

        @media (min-width: 1024px) {
          .team-mbr {
            padding: 15px 30px;
            font-size: 18px;
          }
        }

        /* Social Icons */
        .hero-social {
          position: absolute;
          right: -120px;
          bottom: 200px;
          flex-direction: column;
          gap: 20px;
        }

        .hero-social a {
          color: #fff;
          transition: 0.3s;
        }

        .hero-social a:hover {
          color: #007eff;
        }

        /* Animations */
        .wood-animation img {
          animation: wooo 3.5s infinite;
        }

        @keyframes wooo {
          0% { transform: rotateY(0); }
          50% { transform: rotateY(180deg); }
          100% { transform: rotateY(360deg); }
        }
      `}</style>
    </>
  )
}

export default HeroSection
