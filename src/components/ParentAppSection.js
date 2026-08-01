"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  CalendarDays,
  BellRing,
  CreditCard,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: CalendarDays,
    title: "Live Attendance",
    desc: "Parents receive attendance updates instantly after every lecture.",
  },
  {
    icon: GraduationCap,
    title: "Exam Results",
    desc: "Check marks, report cards and performance analysis in real time.",
  },
  {
    icon: CreditCard,
    title: "Fee Management",
    desc: "Track pending fees, receipts and payment history with ease.",
  },
  {
    icon: BellRing,
    title: "Announcements",
    desc: "Homework, notices and important academy updates in one place.",
  },
];

export default function ParentAppSection() {
  return (
    <section
      id="app"
      className="relative overflow-hidden bg-zinc-100 py-24 lg:py-32"
    >
      <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-orange-300/20 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-orange-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
       <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="mx-auto mb-20 max-w-5xl text-center"
>
  <p className="font-semibold uppercase tracking-[4px] text-orange-500">
    Parent Mobile App
  </p>

  <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-6xl">
    Stay Connected. Stay Informed.
  </h2>

  <p className="hidden md:block mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
    Keep track of your child's academic journey with real-time attendance,
    exam results, fee management, homework, announcements, and important
    updates—all in one simple and beautifully designed mobile application.
  </p>
</motion.div>

        <div className="grid items-center gap-20 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-8">
              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex gap-5">
                    <div className="flex flex-col items-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 shadow-sm">
                        <Icon className="h-6 w-6 text-orange-500" />
                      </div>

                      {index !== features.length - 1 && (
                        <div className="mt-3 h-14 w-[2px] bg-orange-200" />
                      )}
                    </div>

                    <div className="pb-8">
                      <h3 className="text-xl font-bold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-2 leading-7 text-slate-600">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <a href="https://github.com/space01academy/Parents-App/releases/download/v1.0.0/SpaceAcademy.apk" className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 font-semibold text-white shadow-xl transition hover:-translate-y-1 hover:scale-105">
              Download Parent App
              <ArrowRight size={20} />
            </a>

            <p className="mt-4 text-sm text-slate-500">
              Available for Android devices.
            </p>
          </motion.div>

         
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center lg:justify-end"
          >
            <Image
              src="/first.png"
              alt="Parent App"
              width={750}
              height={750}
              className="w-full max-w-[650px] drop-shadow-[0_40px_70px_rgba(0,0,0,.22)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
