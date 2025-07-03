"use client";

import { useState, useEffect } from "react";
import Starfield from "./starfield";
import { cn } from "@/lib/utils";

const languages = ["Hello", "Bonjour", "Hola", "Ciao", "Olá", "Guten Tag", "Namaste"];
const LANGUAGE_DISPLAY_DURATION = 1000;

const LandingSection = ({ onComplete }: { onComplete: () => void }) => {
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("animate-fade-in");
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    if (currentLanguageIndex >= languages.length) {
      setAnimationClass("animate-fade-out");
      setTimeout(() => {
        setShowName(true);
        onComplete();
      }, 1000);
      return;
    }

    const timer = setTimeout(() => {
      setAnimationClass("animate-fade-out");
      setTimeout(() => {
        setCurrentLanguageIndex((prev) => prev + 1);
        setAnimationClass("animate-fade-in");
      }, 500); 
    }, LANGUAGE_DISPLAY_DURATION);

    return () => clearTimeout(timer);
  }, [currentLanguageIndex, onComplete]);

  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden">
      <Starfield count={150} />
      <div className="relative z-10 flex h-40 flex-col items-center justify-center text-center">
        {!showName ? (
          <h1
            key={currentLanguageIndex}
            className={cn(
              "text-6xl md:text-7xl font-bold text-white",
              animationClass
            )}
          >
            {languages[currentLanguageIndex]}
          </h1>
        ) : (
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold text-primary animate-text-glow font-headline">
              Asto Eterna
            </h1>
          </div>
        )}
      </div>
    </section>
  );
};

export default LandingSection;
