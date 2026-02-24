"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const TECH_STRINGS = [
  "For", "Resources", "Lessons", "Blogs", "Original", "Remix",
  "Vz7InBoEilsUv9NmPLMyOsVU1NPz192HFQ2vjN3HRi5udeXHA5sRtK1reZqFximvKNQBYH",
  "8cKWcodBQwzAdFHkkxILY24MCXKTTeRpOI9ZvmcfdVnz6pBOq4SRfFdbCSf1hd2vMbGX50Ul",
  "aoV9hSkmrWum5biYojqNsQsRA2xlQX0CoUvsam1PAG9ZHfLRLD01kwUnu8XFX7nAtm0q9iF",
  "lk4RtnEhRtE451Gnyf7yjIwCLZifJyHhmE74bHyy1fsNg8UEycKJYqZpPxrScMgvOmXsKJ",
  "gJXcPvZR3jBAtwgrcuQvCvAp5QaJcECfmSuQrx8a3n7QS24fmT8YBpRrCRWnr9weY0IvfcHI",
  "K", "e", "0", "0", "9", "zx", "GY98L", "VTZd7Km6Ib", "eRzBVyJH3Kn2epec5uf",
  "WyBZsbLX2L0PrlOcPJgn60b3I0snMU05mhQde4", "PROTOCOL", "CORE", "SYNC", "NODE", "INTERFACE",
  "0x1", "0x0", "v4.0.2", "STABLE", "INIT", "DECRYPT", "VOID", "NULL", "FLOAT"
];

interface TextFragmentProps {
  text: string;
  delay: number;
  duration: number;
  startX: number;
  startY: number;
  fontSize: number;
  opacity: number;
  blur: number;
  targetXOffset: number;
  targetYOffset: number;
}

const TextFragment = ({ 
  text, 
  delay, 
  duration, 
  startX, 
  startY, 
  fontSize, 
  opacity, 
  blur,
  targetXOffset,
  targetYOffset
}: TextFragmentProps) => {
  return (
    <motion.div
      initial={{ x: `${startX}%`, y: `${startY}%`, opacity: 0 }}
      animate={{ 
        x: [`${startX}%`, `${startX + targetXOffset}%`],
        y: [`${startY}%`, `${startY + targetYOffset}%`],
        opacity: [0, opacity, opacity, 0]
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        delay: delay,
        ease: "linear",
      }}
      style={{
        position: "absolute",
        fontSize: `${fontSize}px`,
        filter: `blur(${blur}px)`,
        pointerEvents: "none",
        userSelect: "none",
        whiteSpace: "nowrap",
      }}
      className="font-code font-bold tracking-[0.2em] text-white"
    >
      {text}
    </motion.div>
  );
};

export const TextWallBackground = ({ children }: { children?: React.ReactNode }) => {
  const [fragments, setFragments] = useState<any[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const generated = Array.from({ length: 80 }).map((_, i) => {
      const isLargeBlock = i < 10; 
      const isWord = i >= 10 && i < 30;
      
      return {
        id: i,
        text: TECH_STRINGS[i % TECH_STRINGS.length],
        delay: Math.random() * -20, // Negative delay to start immediately mid-cycle
        duration: 30 + Math.random() * 40,
        startX: Math.random() * 100,
        startY: Math.random() * 100,
        fontSize: isWord ? (14 + Math.random() * 8) : (8 + Math.random() * 6),
        opacity: isWord ? (0.06 + Math.random() * 0.06) : (0.03 + Math.random() * 0.04),
        blur: Math.random() * 3,
        targetXOffset: Math.random() * 10 - 5,
        targetYOffset: Math.random() * 14 - 7,
      };
    });
    setFragments(generated);
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#000000]">
      {/* Background Text Wall Layer */}
      <div className="absolute inset-0 z-0">
        {mounted && fragments.map((f) => (
          <TextFragment key={f.id} {...f} />
        ))}
      </div>

      {/* Subtle Noise/Grain Overlay */}
      <div className="pointer-events-none absolute inset-0 z-10 opacity-[0.03] mix-blend-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* Deep Radial Vignette */}
      <div className="pointer-events-none absolute inset-0 z-20 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.95)_100%)]" />

      {/* Content Container */}
      <div className="relative z-30 w-full">
        {children}
      </div>
    </div>
  );
};
