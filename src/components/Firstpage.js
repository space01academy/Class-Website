"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";

function Firstpage() {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] bg-zinc-100 overflow-hidden pt-28 lg:pt-36 px-5 md:px-10"
    >
      <div className="absolute top-20 left-10 h-72 w-72 bg-orange-400/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 h-72 w-72 bg-blue-400/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-600 mb-6">
            <Star size={15} fill="currentColor" />
            Trusted By 5000+ Students
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-slate-900">
            Where
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              Passion
            </span>
            Meets Performance
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
            Expert mentorship, concept clarity, weekly tests and personalized
            guidance to help students achieve top results in academics and
            competitive exams.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://wa.me/918693892209"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 15px 35px rgba(249,115,22,0.35)",
                }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 px-6 sm:px-7 py-3 sm:py-4 text-white font-semibold shadow-xl"
              >
                Join now
                <ArrowRight size={18} />
              </motion.button>
            </a>

            <Link
              href="/Gallery"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="rounded-2xl border border-zinc-300 bg-white px-6 sm:px-7 py-3 sm:py-4 font-semibold text-slate-700 shadow-sm"
              >
                Our Journey
              </motion.button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="relative flex items-end justify-center mt-10 lg:mt-0"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-[320px] w-[320px] sm:h-[420px] sm:w-[420px] lg:h-[500px] lg:w-[500px] rounded-full bg-gradient-to-br from-orange-400/20 to-red-500/20 blur-3xl"></div>
          </div>

          <motion.div className="relative z-20 w-full flex justify-center">
            <div className="relative w-full max-w-[520px] min-h-[420px] sm:min-h-[520px] lg:min-h-[620px] flex items-end justify-center">
              <div className="relative z-20 flex items-end justify-center w-full">
                <Image
                  src="/banner.png"
                  alt="banner"
                  width={520}
                  height={620}
                  priority
                  className="
                    w-full
                    max-w-[300px]
                    sm:max-w-[420px]
                    lg:max-w-[520px]
                    h-auto
                    object-contain
                    drop-shadow-2xl
                  "
                />
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-16 left-0 sm:top-20 sm:-left-4 lg:top-24 lg:-left-10 z-30"
              >
                <div className="rounded-2xl sm:rounded-3xl border border-white/50 bg-white/80 backdrop-blur-xl shadow-2xl px-4 sm:px-6 py-4 sm:py-5">
                  <h2 className="text-2xl sm:text-4xl font-black text-orange-500">
                    95%
                  </h2>

                  <p className="mt-1 text-xs sm:text-sm font-medium text-slate-600">
                    Success Rate
                  </p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-20 right-0 sm:bottom-24 sm:-right-2 lg:-right-6 z-30"
              >
                <div className="rounded-2xl sm:rounded-3xl border border-white/50 bg-white/80 backdrop-blur-xl shadow-2xl px-4 sm:px-6 py-4 sm:py-5">
                  <h3 className="text-lg sm:text-2xl font-black text-slate-900">
                    25+
                  </h3>

                  <p className="mt-1 text-xs sm:text-sm font-medium text-slate-600">
                    years of Excellence
                  </p>
                </div>
              </motion.div>

              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-6 right-10 sm:right-16 z-30"
              >
                <div className="rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 sm:px-5 py-3 sm:py-4 shadow-2xl">
                  <p className="text-xs sm:text-sm font-medium">
                    5000+ Students
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Firstpage;
