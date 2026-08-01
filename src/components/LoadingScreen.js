"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-[#fafaf8]">

     
      <div className="absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full bg-orange-300/25 blur-[120px]" />
      <div className="absolute -bottom-40 -right-40 h-[420px] w-[420px] rounded-full bg-orange-200/25 blur-[120px]" />

    
      <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:42px_42px]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative flex w-[360px] flex-col items-center rounded-[34px] border border-orange-100 bg-white/80 px-10 py-14 shadow-[0_30px_80px_rgba(249,115,22,0.15)] backdrop-blur-3xl"
      >
      
        <div className="absolute top-14 h-32 w-32 rounded-full bg-orange-300/30 blur-3xl" />

      
        <motion.div
          animate={{
            y: [0, -10, 0],
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="relative z-10"
        >
          <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-orange-50 to-orange-100 ring-1 ring-orange-200 shadow-xl">

          
            <Image
              src="/logo.png"
              alt="SPACE Academy"
              width={82}
              height={82}
              priority
            />

          </div>
        </motion.div>

      
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 text-center text-4xl font-black tracking-wide text-zinc-900"
        >
          SPACE ACADEMY
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="mt-3 text-center text-[15px] text-zinc-500"
        >
          Empowering Minds • Building Futures
        </motion.p>

       
        <div className="mt-10 h-2 w-56 overflow-hidden rounded-full bg-orange-100">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              repeat: Infinity,
              duration: 1.4,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Loading Text */}
        <motion.p
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          className="mt-6 text-xs font-semibold uppercase tracking-[0.4em] text-orange-500"
        >
          Loading
        </motion.p>
      </motion.div>
    </div>
  );
}