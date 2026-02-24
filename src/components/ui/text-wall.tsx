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
  "WyBZsbLX2L0PrlOcPJgn60b3I0snMU05mhQde4"
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
      className="font-code font-bold tracking-widest text-white/20"
    >
      {text}
    </motion.div>
  );
};

export const TextWallBackground = ({ children }: { children?: React.ReactNode }) => {
  const [fragments, setFragments] = useState<any[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const generated = Array.from({ length: 50 }).map((_, i) => {
      const isLargeBlock = i < 5; // First few are the long hashes
      const isWord = i >= 5 && i < 15; // Next few are the core words
      
      return {
        id: i,
        text: TECH_STRINGS[i % TECH_STRINGS.length],
        delay: Math.random() * 10,
        duration: 20 + Math.random() * 30,
        startX: isLargeBlock ? (60 + Math.random() * 30) : (Math.random() * 100),
        startY: isLargeBlock ? (70 + Math.random() * 20) : (Math.random() * 100),
        fontSize: isWord ? (18 + Math.random() * 12) : (10 + Math.random() * 8),
        opacity: isWord ? (0.15 + Math.random() * 0.1) : (0.05 + Math.random() * 0.05),
        blur: Math.random() * 2,
        targetXOffset: Math.random() * 4 - 2,
        targetYOffset: Math.random() * 6 - 3,
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
      <div className="pointer-events-none absolute inset-0 z-10 opacity-[0.05] mix-blend-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* Radial Vignette */}
      <div className="pointer-events-none absolute inset-0 z-20 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.9)_100%)]" />

      {/* Content Container */}
      <div className="relative z-30 w-full">
        {children}
      </div>
    </div>
  );
};