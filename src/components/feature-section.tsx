
"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { 
  Link, 
  Repeat, 
  Target, 
  Flame, 
  BrainCircuit, 
  Library, 
  FlaskConical, 
  LifeBuoy
} from "lucide-react";

const projects = [
  {
    title: "Atomican",
    description: "A virtual chemistry lab to run experiments without limits.",
    href: "https://atomican.com",
    icon: FlaskConical,
  },
  {
    title: "Fionum",
    description: "A judgment-free space to express heavy feelings.",
    href: "https://fionum.com",
    icon: LifeBuoy,
  },
  {
    title: "Tether",
    description: "A connection tracker with AI-powered nudges for relationships.",
    href: "https://tether4646464.vercel.app/",
    icon: Link,
  },
  {
    title: "Drillzy",
    description: "Build one new skill at a time with daily micro-challenges.",
    href: "https://drillzy-etpo.vercel.app/",
    icon: Target,
  },
  {
    title: "Tranzoid",
    description: "Translate entire codebases between languages with AI.",
    href: "https://tranzoid.com",
    icon: Repeat,
  },
  {
    title: "Ashground",
    description: "Write it, burn it—your private digital space to release.",
    href: "https://ashground.com",
    icon: Flame,
  },
  {
    title: "Norskmind",
    description: "Journey through Norwegian intellectual history.",
    href: "https://norskmind.com",
    icon: BrainCircuit,
  },
  {
    title: "Italymind",
    description: "Discover the rich history of Italian philosophy.",
    href: "https://italymind.com",
    icon: Library,
  },
];

const FeatureSection = ({ show }: { show: boolean }) => {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const rotateX = useMemo(() => {
    const anglePerSide = 360 / projects.length;
    return index * anglePerSide;
  }, [index]);

  const translateZ = useMemo(() => {
    const cardHeight = 400; 
    return Math.round((cardHeight / 2) / Math.tan(Math.PI / projects.length));
  }, []);

  const paginate = (newDirection: number) => {
    setIndex((prev) => prev + newDirection);
  };

  useEffect(() => {
    if (!isHovered && show) {
      const timer = setInterval(() => {
        paginate(1);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isHovered, show, index]);

  const currentIndex = ((index % projects.length) + projects.length) % projects.length;

  return (
    <section
      className={cn(
        "w-full min-h-screen bg-[#000000] flex flex-col items-center justify-center relative overflow-hidden transition-opacity duration-1000 py-20",
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="w-full max-w-6xl px-4 flex flex-col items-center">
        {/* 3D Scene Container */}
        <div 
          className="relative w-full h-[500px] flex items-center justify-center perspective-[1500px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Rotating Prism */}
          <motion.div
            animate={{ rotateX }}
            transition={{
              type: "spring",
              stiffness: 40,
              damping: 15,
              mass: 1
            }}
            style={{ transformStyle: "preserve-3d" }}
            className="relative w-full max-w-[600px] h-full flex items-center justify-center"
          >
            {projects.map((project, i) => {
              const angle = (360 / projects.length) * i;
              const isActive = i === currentIndex;
              const Icon = project.icon;

              return (
                <div
                  key={i}
                  style={{
                    transform: `rotateX(${-angle}deg) translateZ(${translateZ}px)`,
                    backfaceVisibility: "hidden",
                    position: "absolute",
                  }}
                  className={cn(
                    "w-full max-w-[500px] h-[350px] transition-all duration-700 px-4",
                    isActive ? "opacity-100 scale-100" : "opacity-20 scale-95"
                  )}
                >
                  <div className="group relative w-full h-full bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[20px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.8)] flex flex-col items-center justify-center p-8 transition-all duration-500 hover:border-accent/40">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none" />
                    
                    <div className="relative z-10 flex flex-col items-center text-center">
                      <div className="mb-6 p-4 rounded-full bg-white/[0.03] border border-white/5 group-hover:scale-110 transition-transform duration-500">
                        {Icon && <Icon className="w-10 h-10 text-accent" />}
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
                        {project.title}
                      </h3>
                      
                      <p className="text-white/40 text-sm md:text-base mb-6 leading-relaxed max-w-xs">
                        {project.description}
                      </p>
                      
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 rounded-full border border-white/10 bg-white/5 text-white/80 text-xs font-medium hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Navigation Controls (Side-by-side Pills) */}
        <div className="flex items-center justify-center gap-3 mt-16 z-20">
          <button
            onClick={() => paginate(-1)}
            className="px-6 py-1.5 rounded-full border border-white/20 bg-white/5 text-black hover:text-white dark:text-white/80 hover:bg-white/10 transition-all duration-300 text-sm font-medium"
            aria-label="Previous project"
          >
            Prev
          </button>
          
          <button
            onClick={() => paginate(1)}
            className="px-6 py-1.5 rounded-full border border-white/20 bg-white/5 text-black hover:text-white dark:text-white/80 hover:bg-white/10 transition-all duration-300 text-sm font-medium"
            aria-label="Next project"
          >
            Next
          </button>
        </div>

        {/* Minimal Progress Dots */}
        <div className="flex gap-2 mt-8">
          {projects.map((_, i) => (
            <div
              key={i}
              className={cn(
                "h-1 rounded-full transition-all duration-500",
                currentIndex === i ? "w-6 bg-accent" : "w-1 bg-white/10"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
