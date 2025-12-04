"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const languages = ["Hello", "Bonjour", "Hola", "Ciao", "Konnichiwa", "Namaste", "你好"];
const LANGUAGE_DISPLAY_DURATION = 1200;
const FADE_OUT_DURATION = 150;

const LandingSection = ({ onComplete }: { onComplete: () => void }) => {
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("animate-fade-in");

  useEffect(() => {
    if (currentLanguageIndex >= languages.length) {
      // Short delay before transitioning to give the last word some screen time
      const finalTimer = setTimeout(onComplete, 100); 
      return () => clearTimeout(finalTimer);
    }

    const timer = setTimeout(() => {
      setAnimationClass("animate-fade-out");
      setTimeout(() => {
        setCurrentLanguageIndex((prev) => prev + 1);
        setAnimationClass("animate-fade-in");
      }, FADE_OUT_DURATION); 
    }, LANGUAGE_DISPLAY_DURATION);

    return () => clearTimeout(timer);
  }, [currentLanguageIndex, onComplete]);

  return (
    <section className="flex h-screen w-full flex-col items-center justify-center">
      <div className="flex h-40 flex-col items-center justify-center text-center">
        {currentLanguageIndex < languages.length && (
           <h1
            key={currentLanguageIndex}
            className={cn(
              "text-5xl md:text-7xl font-bold text-white",
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
