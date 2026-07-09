"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Send,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-primary text-white pt-20">
      <div className="container mx-auto px-6">

        {/* TOP GRID */}
        <div className="grid max-w-7xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">

          {/* COMPANY INFO */}
          <div className="lg:col-span-5">
            <Link href="/">
             
                <Image
                  src="/logo.png"
                  alt="logo"
                  width={260}
                  height={50}
                  className="object-contain"
                />
            
            </Link>

            <p className="mt-4 text-white/80 max-w-md">
              Medline hospital gives you the feeling of being at home and is
              committed to bridging the gaps between contemporary healthcare
              facilities and the common man.
            </p>

            {/* SUBSCRIBE */}
            {/* <form className="mt-6 space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter Your E-Mail"
                  className="w-full h-[52px] rounded-full px-6 pr-14
                             text-[#002570] outline-none bg-white"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2
                             w-10 h-10 rounded-full bg-[#007eff]
                             flex items-center justify-center"
                >
                  <Send size={18} />
                </button>
              </div>

              <label className="flex items-center gap-2 text-sm text-white/80">
                <input type="checkbox" className="accent-[#007eff]" />
                Agree Terms and Condition
              </label>
            </form> */}
          </div>

          {/* COMPANY LINKS */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-white/80">
              {[ "About-Us","Doctors", "Services", "Blog", "Contact-Us"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="hover:text-[#007eff] transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* USEFUL LINKS */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold mb-4">Departments</h4>
            <ul className="space-y-2 text-white/80">
              {["Orthopedics", "ENT", "Plastic-Surgery", "Neurosurgery", "Pediatrics"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={`/services/${item.toLowerCase()}`}
                      className="hover:text-[#007eff] transition"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* CONTACT */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-semibold mb-4">Contacts</h4>
            <div className="space-y-4 text-white/80">
              <p>
                505, Main Market Rd,
                <br />
                Opp. SBI BANK, Model Town,
                <br />
                Karnal, Haryana 132001
              </p>

              <div>
                <h5 className="font-medium text-white">Email</h5>
                <Link href="mailto:support.medlinehospital@gmail.com" className="hover:text-[#007eff]">
                support.medlinehospital@gmail.com
                </Link>
              </div>

              <div>
                <h5 className="font-medium text-white">Call / WhatsApp</h5>
                <Link
                  href="https://wa.me/9118404042485"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#007eff]"
                >
                  +91-184-404-2485
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER SHAPES */}
        <div className="absolute left-0 bottom-28 hidden lg:block">
          <Image src="/footer-img-1.png" alt="" width={200} height={200} />
        </div>
        <div className="absolute right-0 bottom-28 hidden lg:block">
          <Image src="/footer-img-2.png" alt="" width={200} height={200} />
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 pt-6 border-t border-white/20
                        flex flex-col md:flex-row
                        justify-between items-center gap-4">

          {/* SOCIAL ICONS */}
          <div className="flex gap-4">
            <Link href="https://www.facebook.com/Medline.Hospital.Karnal" className="w-10 h-10 rounded-full border border-white/30
                            flex items-center justify-center
                            hover:bg-[#007eff] hover:border-[#007eff] transition" target="_blank" rel="noopener noreferrer">
             
                <Facebook size={18} />
          
            </Link>

            <Link href="https://www.instagram.com/medline_hospital/" className="w-10 h-10 rounded-full border border-white/30
                            flex items-center justify-center
                            hover:bg-[#007eff] hover:border-[#007eff] transition" target="_blank" rel="noopener noreferrer">
            
                <Instagram size={18} />
         
            </Link>

         

            <Link href="https://www.youtube.com/channel/UC1suRD6cO96KzqQlDqUw5tA" className="w-10 h-10 rounded-full border border-white/30
                            flex items-center justify-center
                            hover:bg-[#007eff] hover:border-[#007eff] transition" target="_blank" rel="noopener noreferrer">
            
                <Youtube size={18} />
             
            </Link>
          </div>

          {/* COPYRIGHT */}
          <p className="text-white/70 text-sm text-center md:text-right">
          Copyright © 2026 Medline Hospital | Designed by All-In-Digi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
