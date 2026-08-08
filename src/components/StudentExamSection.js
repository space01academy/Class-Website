"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, PenSquare, Clock3, Trophy, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: <PenSquare className="h-6 w-6 text-orange-500" />,
    title: "Attempt Online Exams",
    desc: "Take chapter-wise, unit and full-length tests anytime.",
  },
  {
    icon: <Clock3 className="h-6 w-6 text-orange-500" />,
    title: "Real-Time Timer",
    desc: "Experience a real exam environment with countdown timer.",
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-orange-500" />,
    title: "Instant Results",
    desc: "View marks, accuracy and detailed performance instantly.",
  },
  {
    icon: <Trophy className="h-6 w-6 text-orange-500" />,
    title: "Track Your Progress",
    desc: "Analyze your growth and improve with every attempt.",
  },
];

export default function StudentExamSection() {
  return (
    <section className="relative overflow-hidden bg-zinc-100 py-28">
      <div className="absolute left-0 bottom-0 h-80 w-80 rounded-full bg-orange-200/20 blur-3xl" />
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-orange-300/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center">
          <p className="font-semibold uppercase tracking-[4px] text-orange-500">
            Student Exam App
          </p>

          <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-6xl">
            Practice. Analyze. Succeed.
          </h2>

          <p className="hidden md:block mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            A smart examination platform that helps students practice, improve
            and perform better through online tests and instant performance
            analysis.
          </p>
        </div>

        <div className="grid items-center gap-20 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center lg:justify-start"
          >
            <Image
              src="/second.png"
              alt="Parent App"
              width={550}
              height={550}
              className="w-full max-w-[650px] drop-shadow-[0_40px_70px_rgba(0,0,0,.22)]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={step.title} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 shadow-sm">
                      {step.icon}
                    </div>

                    {index !== steps.length - 1 && (
                      <div className="mt-3 h-14 w-[2px] bg-orange-200" />
                    )}
                  </div>

                  <div className="pb-8">
                    <h3 className="text-xl font-bold text-slate-900">
                      {step.title}
                    </h3>

                    <p className="mt-2 leading-7 text-slate-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://github.com/space01academy/Student-Exam-App/releases/download/v1.0.0/Exam.SpaceAcademy.2.apk"
              className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 font-semibold text-white shadow-xl transition hover:-translate-y-1 hover:scale-105"
            >
              Explore Exam App
              <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
