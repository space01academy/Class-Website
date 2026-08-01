"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Brain, Trophy } from "lucide-react";

const courses = [
  {
    icon: GraduationCap,
    title: "School Section",
    subtitle: "1st – 10th",
    desc: "Strong academic foundation with regular tests and concept clarity.",
    gradient: "from-orange-400 to-red-500",
    bg: "from-orange-100 to-red-100",
  },
  {
    icon: BookOpen,
    title: "Science",
    subtitle: "11th & 12th",
    desc: "Physics, Chemistry, Mathematics & Biology with expert guidance.",
    gradient: "from-pink-400 to-purple-500",
    bg: "from-pink-100 to-purple-100",
  },
  {
    icon: Brain,
    title: "Commerce",
    subtitle: "11th & 12th",
    desc: "Accounts, Economics, SP and OC with practical learning approach.",
    gradient: "from-blue-400 to-cyan-500",
    bg: "from-blue-100 to-cyan-100",
  },
  {
    icon: Trophy,
    title: "JEE / CET",
    subtitle: "Competitive Exams",
    desc: "Advanced preparation, mock tests and performance tracking.",
    gradient: "from-yellow-400 to-orange-500",
    bg: "from-yellow-100 to-orange-100",
  },
];

function Secondpage() {
  return (
    <section id="courses" className="relative py-24 px-5 md:px-10 bg-zinc-100 overflow-hidden">
      <div className="absolute top-0 left-0 h-72 w-72 bg-orange-300/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 bg-blue-300/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-orange-500 font-semibold tracking-[3px] uppercase text-sm">
            Our Courses
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            Courses Designed For
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              Every Student
            </span>
          </h2>

          <p className="hidden md:block mt-5 text-slate-600 max-w-2xl mx-auto text-lg">
            Personalized academic programs for school students, higher secondary
            education and competitive exam preparation.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-7">
          {courses.map((course, index) => {
            const Icon = course.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                }}
                className="group relative overflow-hidden rounded-[32px] border border-white/50 bg-white/70 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-7"
              >
                <div
                  className={`absolute top-0 left-0 h-40 w-40 bg-gradient-to-br ${course.bg} blur-3xl opacity-70`}
                ></div>

                <div className="relative z-20">
                  <div
                    className={`h-16 w-16 rounded-2xl bg-gradient-to-r ${course.gradient} flex items-center justify-center shadow-lg`}
                  >
                    <Icon className="text-white" size={30} />
                  </div>

                  <div className="mt-8">
                    <h3 className="text-2xl font-black text-slate-900">
                      {course.title}
                    </h3>

                    <p className="mt-1 text-orange-500 font-semibold">
                      {course.subtitle}
                    </p>

                    <p className="mt-5 text-slate-600 leading-relaxed">
                      {course.desc}
                    </p>
                  </div>

                  {/* <button
                    className={`mt-8 rounded-2xl bg-gradient-to-r ${course.gradient} px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 group-hover:scale-105`}
                  >
                    Explore Course
                  </button> */}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Secondpage;
