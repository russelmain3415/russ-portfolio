"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Scrollytelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  return (
    <section ref={containerRef} className="relative h-[150vh] w-full flex items-center justify-center overflow-hidden py-20">
      <motion.div 
        style={{ opacity, scale }}
        className="sticky top-0 h-screen w-full max-w-6xl px-6 md:px-10 flex flex-col justify-center z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-xs font-semibold tracking-[0.3em] text-indigo-400 uppercase"
            >
              The Philosophy
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.1]"
            >
              Code that speaks, <br />
              <span className="text-neutral-500">Design that breathes.</span>
            </motion.h2>
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-neutral-400 max-w-md leading-relaxed"
            >
              I believe in the intersection of logic and beauty. Every line of code should contribute to a meaningful user experience.
            </motion.p>
          </div>

          <div className="relative aspect-square w-full max-w-[500px] hidden lg:block">
             <motion.div 
              style={{ y: y1 }}
              className="absolute top-0 right-0 w-2/3 h-2/3 rounded-3xl overflow-hidden border border-neutral-800 z-10 translate-x-10 shadow-2xl shadow-indigo-500/10"
            >
              <Image
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2070"
                alt="Code detail"
                fill
                className="object-cover"
              />
            </motion.div>
            
            <motion.div 
              style={{ y: y2 }}
              className="absolute top-1/4 left-0 w-1/2 h-1/2 rounded-3xl overflow-hidden border border-neutral-800 z-20 -translate-x-10 shadow-2xl shadow-black"
            >
              <Image
                src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=2070"
                alt="Design detail"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div 
              style={{ y: y3 }}
              className="absolute bottom-0 left-1/4 w-2/3 h-1/2 rounded-3xl overflow-hidden border border-neutral-800 z-0 translate-y-20 shadow-2xl shadow-violet-500/10"
            >
              <Image
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=2069"
                alt="Work focus"
                fill
                className="object-cover"
              />
            </motion.div>

            <div className="absolute inset-0 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}