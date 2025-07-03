"use client";

import React, { useState, useEffect } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

const Starfield = ({ count = 150 }: { count?: number }) => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = [];
      const width = window.innerWidth;
      const height = window.innerHeight;
      for (let i = 0; i < count; i++) {
        newStars.push({
          id: i,
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 1.5 + 0.5,
          delay: Math.random() * 5,
          duration: Math.random() * 5 + 3,
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
          className="absolute rounded-full bg-white/80 animate-star-twinkle"
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
