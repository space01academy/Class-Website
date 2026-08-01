"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getToppers } from "@/app/actions/getToppers";

export default function Thirdpage() {
  const [status, setStatus] = useState(false);
  const [toppers, setToppers] = useState([]);

  useEffect(() => {
    async function fetchToppers() {
      const result = await getToppers();

      if (result.success) {
        setToppers(result.data || []);
      }
    }

    fetchToppers();
  }, [status]);

  if (!toppers.length) return null;

  return (
    <section
      id="toppers"
      className="relative overflow-hidden bg-zinc-100 py-16 md:py-24"
    >
      
      <div className="absolute left-0 top-0 h-52 w-52 rounded-full bg-orange-300/20 blur-3xl md:h-80 md:w-80" />
      <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-blue-300/10 blur-3xl md:h-80 md:w-80" />

      <div className="mx-auto max-w-7xl px-4 sm:px-5">
      
        <div className="mb-10 text-center md:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[3px] text-orange-500 sm:text-sm">
            Our Toppers
          </p>

          <h2 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl md:text-5xl">
            Meet Our Proud Achievers
          </h2>

          <p className="mx-auto mt-5 hidden max-w-2xl text-slate-600 md:block">
            Students who made us proud with their outstanding academic
            achievements.
          </p>
        </div>

        <div className="relative overflow-hidden">
         
          <div className="absolute left-0 top-0 z-20 h-full w-10 bg-gradient-to-r from-zinc-100 to-transparent md:w-40" />
          <div className="absolute right-0 top-0 z-20 h-full w-10 bg-gradient-to-l from-zinc-100 to-transparent md:w-40" />

       
          <div className="space-y-4 md:hidden">
            
            <motion.div
              className="flex w-max gap-4"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 25,
              }}
            >
              {[...toppers, ...toppers].map((student, index) => (
                <Card
                  key={`top-${student.id}-${index}`}
                  student={student}
                  width="w-[280px]"
                  image="h-20 w-20"
                />
              ))}
            </motion.div>

         
            <motion.div
              className="flex w-max gap-4"
              animate={{ x: ["-50%", "0%"] }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 25,
              }}
            >
              {[...toppers, ...toppers].map((student, index) => (
                <Card
                  key={`bottom-${student.id}-${index}`}
                  student={student}
                  width="w-[280px]"
                  image="h-20 w-20"
                />
              ))}
            </motion.div>
          </div>

         
          <div className="hidden md:block ">
            <motion.div
              className="flex w-max gap-8"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 35,
              }}
            >
              {[...toppers, ...toppers].map((student, index) => (
                <Card
                  key={`desktop-${student.id}-${index}`}
                  student={student}
                  width="w-[420px]"
                  image="h-28 w-28"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({
  student,
  width,
  image,
}) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      transition={{ duration: 0.3 }}
      className={`relative ${width} flex-shrink-0 overflow-hidden rounded-[30px] border border-orange-100 bg-white `}
    >
     
      <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-orange-400 to-red-500" />

    
      <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-orange-200/30 blur-3xl" />

      <div className="relative flex items-center gap-6 p-6">
       
        <div className="relative flex-shrink-0">
          <div className="absolute inset-0 rounded-full bg-orange-300/40 blur-xl" />

          <Image
            src={student.image_url}
            alt={student.student_name}
            width={120}
            height={120}
            className={`relative ${image} rounded-full object-cover ring-4 ring-orange-100`}
          />
        </div>

       
        <div className="flex-1">
          <p className="text-xs font-bold uppercase tracking-[3px] text-orange-500">
            Std {student.standard}
          </p>

          <h3 className="mt-2 text-xl font-black text-slate-900 lg:text-2xl">
            {student.student_name}
          </h3>

          <div className="mt-5 inline-flex rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-5 py-2 text-lg font-bold text-white">
            {student.percentage}%
          </div>
        </div>
      </div>
    </motion.div>
  );
}