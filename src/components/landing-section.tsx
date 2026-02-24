
"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const languages = ["Hello", "Bonjour", "Hola", "Ciao", "Konnichiwa", "Namaste", "你好"];
const DISPLAY_DURATION = 800;
const FADE_DURATION = 200;

const LandingSection = ({ onComplete }: { onComplete: () => void }) => {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isDone, setIsDone] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isDone) return;

    timerRef.current = setTimeout(() => {
      if (index === languages.length - 1) {
        setIsDone(true);
        onComplete();
      } else {
        setIsVisible(false);
        setTimeout(() => {
          setIndex((prev) => prev + 1);
          setIsVisible(true);
        }, FADE_DURATION);
      }
    }, DISPLAY_DURATION);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [index, onComplete, isDone]);

  return (
    <section className="flex h-screen w-full flex-col items-center justify-center bg-black fixed inset-0 z-[100]">
      <div className="flex h-40 items-center justify-center">
        <h1
          className={cn(
            "text-5xl md:text-8xl font-bold text-white transition-all duration-300 transform",
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95 blur-sm"
          )}
        >
          {languages[index]}
        </h1>
      </div>
    </section>
  );
};

export default LandingSection;
