"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "5000+",
    label: "Students Mentored",
  },
  {
    number: "95%",
    label: "Success Rate",
  },
  {
    number: "12+",
    label: "Expert Faculty",
  },
  {
    number: "25+",
    label: "Years of Excellence",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function WhyChoose() {
  return (
    <section id="about" className="relative overflow-hidden bg-slate-950 py-16 md:py-28 px-4 sm:px-6">
     
      <div className="absolute -left-24 md:-left-40 top-10 h-64 w-64 md:h-96 md:w-96 rounded-full bg-orange-500/20 blur-[100px] md:blur-[140px]" />
      <div className="absolute -right-24 md:-right-40 bottom-10 h-64 w-64 md:h-96 md:w-96 rounded-full bg-blue-500/20 blur-[100px] md:blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
  
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] sm:tracking-[0.25em] text-orange-400"
          >
            Why Choose Space Academy
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="mt-6 md:mt-8 text-3xl sm:text-4xl md:text-6xl font-black leading-tight text-white"
          >
            Excellence That Builds
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Future Leaders
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="hidden md:block mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400"
          >
            Empowering students with expert mentorship, personalized
            guidance, concept-based learning, and a result-oriented
            approach that helps every learner unlock their highest
            potential.
          </motion.p>
        </motion.div>


        <motion.div
          className="mt-12 md:mt-20 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: 1.05,
                transition: {
                  duration: 0.3,
                },
              }}
              className="group rounded-2xl md:rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:p-6 md:p-8 text-center backdrop-blur-xl transition-all duration-300 hover:border-orange-500/40 hover:bg-white/[0.07] hover:shadow-[0_20px_60px_rgba(249,115,22,0.18)]"
            >
              <motion.h3
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15 + 0.3,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-3xl sm:text-4xl md:text-5xl font-black text-transparent"
              >
                {item.number}
              </motion.h3>

              <motion.div
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: 56, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15 + 0.45,
                  duration: 0.5,
                }}
                className="mx-auto my-3 md:my-5 h-px bg-gradient-to-r from-orange-500 to-red-500"
              />

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15 + 0.55,
                  duration: 0.45,
                }}
                className="text-sm sm:text-base font-medium text-slate-300"
              >
                {item.label}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}