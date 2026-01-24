'use client'
import React from "react";
import Link from "next/link";

const SecSection = () => {
  return (
    <div className="relative py-[95px] pb-[60px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* BOX 1 */}
          <div className="group relative bg-white/30 border-2 border-white rounded-3xl p-10 pb-7 transition-all duration-500 hover:border-[#007eff] overflow-hidden block">
           <Link href='/doctors'>
            <div className="flex justify-between border-b-2 border-white pb-9">
              <h2 className="text-[25px] font-semibold transition group-hover:text-white">
                Our Professionals
              </h2>
              <span className="text-[#007eff] text-xl -rotate-45 transition group-hover:text-white">
                →
              </span>
            </div>

            <div className="text-center">
              <img
                src="/srvc-tm.png"
                alt=""
                className="mx-auto py-10 transition"
              />
              <h3 className="text-[30px] font-semibold transition group-hover:text-white">
                180 <span className="px-1 text-[#007eff]">+</span>
                <span className="text-lg">Overall Staff</span>
              </h3>
              <p className="text-[#65677a] pt-2 transition group-hover:text-white">
                Rapidiously reinvent long-term impact collaboration
              </p>
            </div>

            <div className="hover-strip bg-primary left-0 rounded-l-3xl" />
            <div className="hover-strip bg-primary left-[25%]" />
            <div className="hover-strip bg-primary left-[50%]" />
            <div className="hover-strip bg-primary left-[75%] rounded-r-3xl" />
            </Link>
          </div>

          {/* BOX 2 */}
          <div className="group relative bg-white/30 border-2 border-white rounded-3xl p-10 pb-6 transition-all duration-500 hover:border-[#007eff] overflow-hidden">
            <div className="flex justify-between border-b-2 border-white pb-9">
              <Link href="https://wa.me/917206011885" target="_blank" className="bg-primary text-white text-sm px-7 py-3 rounded-full transition group-hover:bg-white group-hover:text-primary">
                BOOKING
              </Link>
              <h2 className="text-[25px] font-semibold transition group-hover:text-white">
                Appointments
              </h2>
            </div>

            <div className="text-center">
              <Link href="https://wa.me/917206011885" target="_blank">
                <img
                  src="/call.png"
                  alt=""
                  className="mx-auto py-10"
                />
                <h4 className="text-[22px] font-semibold transition group-hover:text-white">
                  +91-72060-11885
                </h4>
                <p className="text-[#65677a] pt-3 transition group-hover:text-white">
                  Call Us for Booking appointments online 24 hrs available
                </p>
              </Link>
            </div>

            <div className="hover-strip bg-primary left-0 rounded-l-3xl" />
            <div className="hover-strip bg-primary left-[25%]" />
            <div className="hover-strip bg-primary left-[50%]" />
            <div className="hover-strip bg-primary left-[75%] rounded-r-3xl" />
          </div>

          {/* BOX 3 */}
          <div className="group relative bg-white/30 border-2 border-white rounded-3xl p-10 pb-11 transition-all duration-500 hover:border-primary overflow-hidden block">
           <Link href="https://maps.app.goo.gl/oGmKRNDekYaqEb566">
            <div className="flex justify-between border-b-2 border-white pb-9">
              <h2 className="text-[25px] font-semibold transition group-hover:text-white">
                Locations
              </h2>
              <span className="text-primary text-xl -rotate-45 transition group-hover:text-white">
                →
              </span>
            </div>

            <div className="text-center">
              <img
                src="/location.png"
                alt=""
                className="mx-auto py-8 transition"
              />
              <p className="text-[#65677a] pb-4 transition group-hover:text-white">
                Rapidiously reinvent long-term impact collaboration
              </p>
              <span className="inline-block bg-primary text-white text-sm px-7 py-3 rounded-full transition group-hover:bg-white group-hover:text-primary">
                Direction
              </span>
            </div>

            <div className="hover-strip bg-primary left-0 rounded-l-3xl" />
            <div className="hover-strip bg-primary left-[25%]" />
            <div className="hover-strip bg-primary left-[50%]" />
            <div className="hover-strip bg-primary left-[75%] rounded-r-3xl" />
</Link>
          </div>

        </div>
      </div>

      <style jsx>{`
        .hover-strip {
          position: absolute;
          top: 0;
          width: 25%;
          height: 100%;
          transform: scaleX(0);
          transform-origin: left;
          transition: all 0.5s ease;
          z-index: -1;
          opacity: 0;
        }

        .group:hover .hover-strip {
          transform: scaleX(1);
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default SecSection;
