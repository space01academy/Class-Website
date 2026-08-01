"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 z-[99999] h-1 w-full origin-left bg-gradient-to-r from-orange-500 to-red-500"
      style={{ scaleX: scrollYProgress }}
    />
  );
}