"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const TECH_STRINGS = [
  "SYSTEM_INIT", "0x7F2A9C", "ALGORITHM_v4", "NEURAL_SYNC", "PROTOCOL_SECURE",
  "LATENCY_0.02ms", "ENCRYPT_AES_256", "NODE_ACTIVE", "DATA_STREAM", "SYNAPSE_LINK",
  "MODULAR_CORE", "SCALABLE_UI", "DECENTRALIZED", "00101101", "UPTIME_99.9%",
  "AUTH_TOKEN", "CLUSTER_READY", "INTERFACE_v2", "QUANTUM_STABLE", "HASH_SHA256"
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
      className="font-code font-bold tracking-widest text-primary/40"
    >
      {text}
    </motion.div>
  );
};

export const TextWallBackground = ({ children }: { children?: React.ReactNode }) => {
  const [fragments, setFragments] = useState<any[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const generated = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      text: TECH_STRINGS[i % TECH_STRINGS.length],
      delay: Math.random() * 10,
      duration: 15 + Math.random() * 25,
      startX: Math.random() * 100,
      startY: Math.random() * 100,
      fontSize: 12 + Math.random() * 24,
      opacity: 0.05 + Math.random() * 0.08,
      blur: Math.random() * 3,
      targetXOffset: Math.random() * 10 - 5,
      targetYOffset: Math.random() * 15 - 7.5,
    }));
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

      {/* Radial Vignette */}
      <div className="pointer-events-none absolute inset-0 z-20 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />

      {/* Content Container */}
      <div className="relative z-30 w-full">
        {children}
      </div>
    </div>
  );
};
