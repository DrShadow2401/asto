"use client";

import FeatureSection from "@/components/feature-section";
import ConnectSection from "@/components/connect-section";
import { InteractiveNodes } from "@/components/interactive-nodes";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="w-full flex flex-col items-center justify-center overflow-x-hidden pb-20">
      <section className="relative w-full flex flex-col items-center justify-center py-20 px-4 min-h-[85vh]">
        {/* Background Visual */}
        <div className="absolute inset-0 z-0">
          <InteractiveNodes />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col items-start text-left w-full max-w-7xl pointer-events-none px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="text-6xl sm:text-7xl md:text-9xl font-bold text-foreground font-headline tracking-tighter drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              Questonin
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-foreground/60 font-light tracking-wide max-w-2xl">
              Hi I'm Suhani, I build ideas into reality.
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/20 to-transparent" />
          <span className="text-[10px] uppercase tracking-[0.4em]">Scroll</span>
        </motion.div>
      </section>
      
      <FeatureSection show={true} />
      <ConnectSection show={true} />
    </main>
  );
}
