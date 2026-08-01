"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Clock3,
  ArrowUpRight,
} from "lucide-react";

function Branches() {
  return (
    <section id="contact" className="relative py-24 bg-zinc-100 overflow-hidden px-5 md:px-10">

      <div className="absolute top-0 left-0 h-72 w-72 bg-orange-300/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 bg-blue-300/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-orange-500 font-semibold tracking-[3px] uppercase text-sm">
            Our Branches
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-black text-slate-900">
            Visit Our Campuses
          </h2>

          <p className="mt-5 text-slate-600 max-w-2xl mx-auto text-lg">
            Delivering quality education and guidance across
            multiple locations with modern classrooms and expert faculty.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden rounded-[36px] border border-white/50 bg-white/80 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-8"
          >

            <div className="absolute top-0 right-0 h-40 w-40 bg-gradient-to-br from-orange-200/40 to-red-200/40 blur-3xl rounded-full"></div>

            <div className="relative z-20">

              <div className="flex items-center gap-4">

                <div className="h-16 w-16 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center shadow-lg">
                  <MapPin className="text-white" size={28} />
                </div>

                <div>
                  <h3 className="text-3xl font-black text-slate-900">
                    Kisan Nagar
                  </h3>

                  <p className="text-slate-500 mt-1">
                    Main Academic Branch
                  </p>
                </div>

              </div>

              <div className="mt-10 space-y-6">

                <div className="flex gap-4">
                  <MapPin className="text-orange-500 mt-1" size={20} />

                  <p className="text-slate-600 leading-relaxed">
                    Near Kisan Nagar Bus Stop,
                    Thane West, Maharashtra
                  </p>
                </div>

                <div className="flex gap-4">
                  <Phone className="text-orange-500 mt-1" size={20} />

                  <p className="text-slate-600">
                    +91 86938 92209
                  </p>
                </div>

                <div className="flex gap-4">
                  <Clock3 className="text-orange-500 mt-1" size={20} />

                  <p className="text-slate-600">
                    Mon - Sun : 8:00 AM - 9:00 PM
                  </p>
                </div>

              </div>

              <button className="mt-10 flex items-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 px-6 py-4 text-white font-semibold shadow-xl transition-all duration-300 group-hover:scale-105">
                View Location
                <ArrowUpRight size={18} />
              </button>

            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden rounded-[36px] border border-white/50 bg-white/80 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-8"
          >

            <div className="absolute top-0 right-0 h-40 w-40 bg-gradient-to-br from-blue-200/40 to-cyan-200/40 blur-3xl rounded-full"></div>

            <div className="relative z-20">

              <div className="flex items-center gap-4">

                <div className="h-16 w-16 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                  <MapPin className="text-white" size={28} />
                </div>

                <div>
                  <h3 className="text-3xl font-black text-slate-900">
                    Shree Nagar
                  </h3>

                  <p className="text-slate-500 mt-1">
                    Secondary Branch
                  </p>
                </div>

              </div>

              <div className="mt-10 space-y-6">

                <div className="flex gap-4">
                  <MapPin className="text-blue-500 mt-1" size={20} />

                  <p className="text-slate-600 leading-relaxed">
                    Opposite Shree Nagar Market,
                    Thane East, Maharashtra
                  </p>
                </div>

                <div className="flex gap-4">
                  <Phone className="text-blue-500 mt-1" size={20} />

                  <p className="text-slate-600">
                    +91 86938 92209
                  </p>
                </div>

                <div className="flex gap-4">
                  <Clock3 className="text-blue-500 mt-1" size={20} />

                  <p className="text-slate-600">
                    Mon - Sun : 8:00 AM - 9:00 PM
                  </p>
                </div>

              </div>

              <button className="mt-10 flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-4 text-white font-semibold shadow-xl transition-all duration-300 group-hover:scale-105">
                View Location
                <ArrowUpRight size={18} />
              </button>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Branches;