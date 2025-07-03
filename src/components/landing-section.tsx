"use client";

import { useState, useEffect } from "react";
import Starfield from "./starfield";
import { cn } from "@/lib/utils";

const languages = ["Hello", "Bonjour", "Hola", "Ciao", "Olá", "Guten Tag", "Namaste"];
const LANGUAGE_DISPLAY_DURATION = 150;

const LandingSection = ({ onComplete }: { onComplete: () => void }) => {
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("animate-fade-in");

  useEffect(() => {
    if (currentLanguageIndex >= languages.length) {
      onComplete();
      return;
    }

    const timer = setTimeout(() => {
      setAnimationClass("animate-fade-out");
      setTimeout(() => {
        setCurrentLanguageIndex((prev) => prev + 1);
        setAnimationClass("animate-fade-in");
      }, 200); 
    }, LANGUAGE_DISPLAY_DURATION);

    return () => clearTimeout(timer);
  }, [currentLanguageIndex, onComplete]);

  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden">
      <Starfield count={150} />
      <div className="relative z-10 flex h-40 flex-col items-center justify-center text-center">
        {currentLanguageIndex < languages.length && (
           <h1
            key={currentLanguageIndex}
            className={cn(
              "text-6xl md:text-7xl font-bold text-white",
              animationClass
            )}
          >
            {languages[currentLanguageIndex]}
          </h1>
        )}
      </div>
    </section>
  );
};

export default LandingSection;
