"use client";

import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  color: string;
}

const Starfield = ({ count = 150 }: { count?: number }) => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = [];
      const width = window.innerWidth;
      const height = window.innerHeight;
      const colors = ["bg-white/80", "bg-primary/50", "bg-accent/50"];

      for (let i = 0; i < count; i++) {
        newStars.push({
          id: i,
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 2 + 0.5,
          delay: Math.random() * 5,
          duration: Math.random() * 10 + 5,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
      setStars(newStars);
    };

    generateStars();
    window.addEventListener('resize', generateStars);
    return () => window.removeEventListener('resize', generateStars);
  }, [count]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-background">
      {stars.map((star) => (
        <div
          key={star.id}
          className={cn("absolute rounded-full animate-star-twinkle", star.color)}
          style={{
            left: `${star.x}px`,
            top: `${star.y}px`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Starfield;
