"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Grid, Menu, X, ChevronDown } from "lucide-react";

const menuItems = [
  {
    label: "Home",
   href: "/"
  },
  { label: "About", href: "/about-us" },
    {
    label: "Doctors",
    href: "/doctors"
    
  },
  {
    label: "Departments",
    href: "/services"
    
  },
  {
    label: "Blog",
    href: "/blog"
  },
  { label: "Contact", href: "/contact-us" },
];

export default function Header() {
  const [sticky, setSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          sticky
            ? "bg-white/95 backdrop-blur shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-[90px]">

            {/* Logo */}
            <Link href="/" className="flex items-center">
              <img src="/logo.png" alt="logo" width={200} height={60} />
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-8">
              {menuItems.map((item, i) => (
                <div key={i} className="relative group">
                 
                    <Link
                      href={item.href!}
                      className="font-medium text-gray-800 hover:text-blue-600 transition"
                    >
                      {item.label}
                    </Link>
               
                </div>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
             

              <Link
                href="/contact-us"
                className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full
                bg-gradient-to-r from-primary to-cyan-500 text-white text-sm font-medium
                hover:shadow-lg transition"
              >
                Get Appointment
                <img src="/arrow.png" alt="arrow" width={14} height={14} />
              </Link>

           

              {/* Mobile Toggle */}
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden w-10 h-10 rounded-full border flex items-center justify-center"
              >
                <Menu />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className={`fixed right-0 top-0 h-full w-[85%] bg-white p-6 transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center mb-6">
            <Image src="/logo.png" alt="logo" width={160} height={50} />
            <button onClick={() => setMobileOpen(false)}>
              <X />
            </button>
          </div>

          <nav className="space-y-4">
            {menuItems.map((item, idx) => (
              <div key={idx}>
                
                    <Link
                      href={item.href!}
                      className="font-medium text-gray-800 hover:text-blue-600 transition"
                    >
             {item.label}
                </Link>
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-[90px]" />
    </>
  );
}
