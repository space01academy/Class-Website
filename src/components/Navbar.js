"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About Us", id: "about" },
    { label: "Courses", id: "courses" },
    { label: "Toppers", id: "toppers" },
    { label: "Contact Us", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{
        y: visible ? 0 : -120,
        opacity: visible ? 1 : 0,
      }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full z-50 px-4 md:px-10 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between rounded-2xl border border-zinc-200/60 bg-white/70 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] px-5 md:px-8 py-4">
          <motion.a
            href="#home"
            whileHover={{ scale: 1.04 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="">
              <Image
                src="/logo.png"
                alt="Space Academy Logo"
                width={45}
                height={45}
                className="object-contain"
              />
            </div>

            <div>
              <h1 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900">
                Space Academy
              </h1>

              <p className="text-xs text-slate-500">Vishe Sir's</p>
            </div>
          </motion.a>

          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                whileHover={{ y: -2 }}
                className="relative text-[15px] font-medium text-slate-700 hover:text-orange-500 transition-colors duration-300 group"
              >
                {item.label}

                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#app"
              className="hidden lg:block"
            >
              <button className="rounded-xl bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 text-white font-semibold shadow-lg flex items-center gap-2 hover:scale-105 transition">
                <Download size={18} />
                Get Apps
              </button>
            </a>

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden h-11 w-11 rounded-xl border border-zinc-200 bg-white flex items-center justify-center text-slate-700"
            >
              {open ? <X size={22} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-3 rounded-3xl border border-zinc-200/60 bg-white/90 backdrop-blur-xl shadow-2xl overflow-hidden"
            >
              <div className="flex flex-col p-5">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className="py-4 border-b border-zinc-100 last:border-none text-slate-700 font-medium hover:text-orange-500 transition-all duration-300"
                  >
                    {item.label}
                  </a>
                ))}

                <a
              href="#app"
              className="hidden lg:block"
            >
              <button className="rounded-xl bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 text-white font-semibold shadow-lg flex items-center gap-2 hover:scale-105 transition">
                <Download size={18} />
                Get Apps
              </button>
            </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

export default Navbar;
