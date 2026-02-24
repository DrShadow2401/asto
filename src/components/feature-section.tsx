"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
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
  ChevronLeft,
  ChevronRight
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
    icon: LifeBuoy,
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
  const [[page, direction], setPage] = useState([0, 0]);
  const [isHovered, setIsHovered] = useState(false);

  const currentIndex = ((page % projects.length) + projects.length) % projects.length;

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    if (!isHovered && show) {
      const timer = setInterval(() => {
        paginate(1);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isHovered, show, page]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.96,
      rotateY: direction > 0 ? 15 : -15,
      z: -100,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      z: 0,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.96,
      rotateY: direction < 0 ? 15 : -15,
      z: -100,
    }),
  };

  const project = projects[currentIndex];

  return (
    <section
      className={cn(
        "w-full min-h-[80vh] bg-[#000000] flex flex-col items-center justify-center relative overflow-hidden transition-opacity duration-1000",
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="w-full max-w-4xl px-4 flex flex-col items-center">
        {/* Carousel Container */}
        <div 
          className="relative w-full aspect-[16/10] md:aspect-[21/10] flex items-center justify-center perspective-[1000px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
                scale: { duration: 0.5 },
                rotateY: { duration: 0.5 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = Math.abs(offset.x) > 50;
                if (swipe) {
                  paginate(offset.x > 0 ? -1 : 1);
                }
              }}
              className="absolute w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
            >
              <div className="group relative w-full h-full max-w-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center p-8 md:p-12 transition-all duration-500 hover:border-accent/40 hover:shadow-[0_0_40px_rgba(var(--accent-rgb),0.1)]">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="mb-8 p-6 rounded-2xl bg-white/[0.02] border border-white/5 group-hover:scale-110 transition-transform duration-500">
                    {project.icon && <project.icon className="w-16 h-16 text-accent" />}
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-white/60 text-lg max-w-lg mb-8 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 rounded-full border border-white/20 text-white/80 text-sm font-medium hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4 mt-12 z-20">
          <button
            onClick={() => paginate(-1)}
            className="w-12 h-8 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50 hover:text-white hover:border-accent hover:bg-accent/10 transition-all duration-300"
            aria-label="Previous project"
          >
            <ChevronLeft size={18} />
          </button>
          
          <div className="flex gap-1.5">
            {projects.map((_, i) => (
              <div
                key={i}
                className={cn(
                  "h-1 rounded-full transition-all duration-500",
                  currentIndex === i ? "w-6 bg-accent" : "w-1.5 bg-white/10"
                )}
              />
            ))}
          </div>

          <button
            onClick={() => paginate(1)}
            className="w-12 h-8 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50 hover:text-white hover:border-accent hover:bg-accent/10 transition-all duration-300"
            aria-label="Next project"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;