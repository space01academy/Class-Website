"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import Firstpage from "@/components/Firstpage";
import Secondpage from "@/components/Secondpage";
import Thirdpage from "@/components/Thirdpage";
import Branches from "@/components/Branches";
import Footer from "@/components/Footer";
import WhyChoose from "@/components/WhyChoose";
import Lenis from "lenis";
import ParentAppSection from "@/components/ParentAppSection";
import StudentExamSection from "@/components/StudentExamSection";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const mql = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);


  const pageAnimation = {
    initial: {
      opacity: 0,
      y: isMobile ? 40 : 120,
      scale: isMobile ? 1 : 0.96,
    },
    whileInView: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
    transition: {
      duration: isMobile ? 0.45 : 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
    viewport: {
      once: true,
      amount: isMobile ? 0.1 : 0.25,
    },
  };


  const staggerDelay = isMobile ? 0 : 0.1;

  useEffect(() => {
    const timer = setTimeout(
      () => {
        setLoading(false);
      },
      isMobile ? 2500 : 2500
    );

    return () => clearTimeout(timer);
  }, [isMobile]);

  useEffect(() => {
  
    if (isMobile) return;

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, [isMobile]);

  return (
    <div className="bg-zinc-100 overflow-hidden min-h-screen no-scrollbar">
      {loading && (
        <LoadingScreen/>
      )}

      {!loading && (
        <>
          <Navbar />

          <motion.section
            initial={pageAnimation.initial}
            whileInView={pageAnimation.whileInView}
            transition={pageAnimation.transition}
            viewport={pageAnimation.viewport}
          >
            <Firstpage />
          </motion.section>

          <motion.section
            initial={pageAnimation.initial}
            whileInView={pageAnimation.whileInView}
            transition={{
              ...pageAnimation.transition,
              delay: staggerDelay,
            }}
            viewport={pageAnimation.viewport}
          >
            <WhyChoose />
          </motion.section>

          <motion.section
            initial={pageAnimation.initial}
            whileInView={pageAnimation.whileInView}
            transition={{
              ...pageAnimation.transition,
              delay: staggerDelay,
            }}
            viewport={pageAnimation.viewport}
          >
            <Secondpage />
          </motion.section>

          <motion.section
            initial={pageAnimation.initial}
            whileInView={pageAnimation.whileInView}
            transition={{
              ...pageAnimation.transition,
              delay: staggerDelay,
            }}
            viewport={pageAnimation.viewport}
          >
            <Thirdpage />
          </motion.section>

          <motion.section
            initial={pageAnimation.initial}
            whileInView={pageAnimation.whileInView}
            transition={{
              ...pageAnimation.transition,
              delay: staggerDelay,
            }}
            viewport={pageAnimation.viewport}
          >
            <ParentAppSection />
          </motion.section>

          <motion.section
            initial={pageAnimation.initial}
            whileInView={pageAnimation.whileInView}
            transition={{
              ...pageAnimation.transition,
              delay: staggerDelay,
            }}
            viewport={pageAnimation.viewport}
          >
            <StudentExamSection />
          </motion.section>

          <motion.section
            initial={pageAnimation.initial}
            whileInView={pageAnimation.whileInView}
            transition={{
              ...pageAnimation.transition,
              delay: staggerDelay,
            }}
            viewport={pageAnimation.viewport}
          >
            <Branches />
          </motion.section>

          <motion.footer
            initial={{ opacity: 0, y: isMobile ? 30 : 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: isMobile ? 0.4 : 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
          >
            <Footer />
          </motion.footer>
        </>
      )}
    </div>
  );
}