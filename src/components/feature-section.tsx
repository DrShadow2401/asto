
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
  LifeBuoy,
  ChevronUp,
  ChevronDown
} from "lucide-react";

const projects = [
  {
    title: "Atomican",
    description: "A virtual chemistry lab to run experiments, explore reactions, and learn without limits.",
    href: "https://atomican.com",
    icon: FlaskConical,
  },
  {
    title: "Fionum",
    description: "A judgment-free app to express heavy feelings, find grounding, and regain clarity with gentle support.",
    href: "https://fionum.com",
    actualIcon: LifeBuoy,
  },
  {
    title: "Tether",
    description: "A connection tracker that logs your bonds and gives AI-powered nudges to keep relationships thriving.",
    href: "https://tether4646464.vercel.app/",
    icon: Link,
  },
  {
    title: "Drillzy",
    description: "Build one new skill at a time with daily, personalized micro-skill challenges.",
    href: "https://drillzy-etpo.vercel.app/",
    icon: Target,
  },
  {
    title: "Tranzoid",
    description: "Translate entire codebases between languages with AI—fast, accurate, and developer-ready.",
    href: "https://tranzoid.com",
    icon: Repeat,
  },
  {
    title: "Ashground",
    description: "Write it, burn it—your private digital space to vent, reflect, and release.",
    href: "https://ashground.com",
    icon: Flame,
  },
  {
    title: "Norskmind",
    description: "Journey through Norwegian intellectual history, from medieval scholasticism to modern philosophy.",
    href: "https://norskmind.com",
    icon: BrainCircuit,
  },
  {
    title: "Italymind",
    description: "Discover the rich history of Italian philosophy, from ancient Rome and the Renaissance to contemporary thought.",
    href: "https://italymind.com",
    icon: Library,
  },
];

const FeatureSection = ({ show }: { show: boolean }) => {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Rotation around X-axis for vertical movement
  const rotateX = useMemo(() => {
    const anglePerSide = 360 / projects.length;
    return index * anglePerSide; // North to South logic
  }, [index]);

  // Radius of the prism based on card height for vertical rotation
  const translateZ = useMemo(() => {
    // Height of card is roughly 400-500px
    const cardHeight = 450; 
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
          className="relative w-full h-[600px] flex items-center justify-center perspective-[3000px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Rotating Prism */}
          <motion.div
            animate={{ rotateX }}
            transition={{
              type: "spring",
              stiffness: 35,
              damping: 12,
              mass: 1
            }}
            style={{ transformStyle: "preserve-3d" }}
            className="relative w-full max-w-[800px] h-full flex items-center justify-center"
          >
            {projects.map((project, i) => {
              const angle = (360 / projects.length) * i;
              const isActive = i === currentIndex;
              const Icon = "actualIcon" in project ? (project.actualIcon as any) : project.icon;

              return (
                <div
                  key={i}
                  style={{
                    transform: `rotateX(${-angle}deg) translateZ(${translateZ}px)`,
                    backfaceVisibility: "hidden",
                    position: "absolute",
                  }}
                  className={cn(
                    "w-full max-w-[700px] aspect-[16/9] transition-opacity duration-500 px-4",
                    isActive ? "opacity-100 scale-100" : "opacity-10 scale-90"
                  )}
                >
                  <div className="group relative w-full h-full bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col items-center justify-center p-8 md:p-12 transition-all duration-500 hover:border-accent/30">
                    {/* Subtle Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10 flex flex-col items-center text-center max-w-lg">
                      <div className="mb-6 p-5 rounded-2xl bg-white/[0.03] border border-white/5 group-hover:scale-110 transition-transform duration-500">
                        {Icon && <Icon className="w-12 h-12 text-accent" />}
                      </div>
                      
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
                        {project.title}
                      </h3>
                      
                      <p className="text-white/50 text-base md:text-lg mb-8 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-2.5 rounded-full border border-white/10 bg-white/5 text-white/80 text-sm font-medium hover:bg-white hover:text-black hover:border-white transition-all duration-300"
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

        {/* Navigation Controls */}
        <div className="flex flex-col items-center gap-8 mt-12 z-20">
          <div className="flex flex-col items-center gap-3">
            <button
              onClick={() => paginate(-1)}
              className="px-8 py-2 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/40 hover:text-white hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 backdrop-blur-sm"
              aria-label="Previous project"
            >
              <ChevronUp size={20} className="mr-2" />
              <span className="text-sm font-medium">Prev</span>
            </button>
            
            <button
              onClick={() => paginate(1)}
              className="px-8 py-2 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/40 hover:text-white hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 backdrop-blur-sm"
              aria-label="Next project"
            >
              <span className="text-sm font-medium">Next</span>
              <ChevronDown size={20} className="ml-2" />
            </button>
          </div>

          {/* Progress Indicators */}
          <div className="flex gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  const diff = i - currentIndex;
                  paginate(diff);
                }}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-500",
                  currentIndex === i ? "w-8 bg-accent" : "w-2 bg-white/10 hover:bg-white/20"
                )}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
